/**
 * ID Utilities for safe handling of BigInt and non-numeric IDs
 *
 * This module provides utilities for safely parsing and comparing IDs that may:
 * - Exceed JavaScript's MAX_SAFE_INTEGER (BigInt IDs from PostgreSQL timeseries)
 * - Be non-numeric (UUIDs, alphanumeric identifiers, etc.)
 * - Be negative (temporary/new record IDs)
 */

/**
 * Maximum safe integer in JavaScript
 * IDs larger than this will lose precision if converted to Number
 */
const MAX_SAFE_INTEGER_STR = "9007199254740991";

/**
 * Safely parse an ID value.
 *
 * - If the value is already a number, return it as-is
 * - If the value is a string representing a number within MAX_SAFE_INTEGER, return as number
 * - If the value is a string representing a number LARGER than MAX_SAFE_INTEGER, return as string
 * - If the value is a non-numeric string (UUID, alphanumeric, etc.), return as string
 * - If the value is null/undefined, return null
 *
 * This preserves backward compatibility for normal IDs while preventing
 * precision loss for BigInt IDs and supporting non-numeric ID formats.
 */
export function safeParseId(value: unknown): number | string | null {
  if (value === null || value === undefined) {
    return null;
  }

  // Already a number - return as-is
  if (typeof value === "number") {
    return Number.isFinite(value) ? value : null;
  }

  // String handling
  if (typeof value === "string") {
    const trimmed = value.trim();

    if (trimmed === "") {
      return null;
    }

    // Check if it's a valid integer string (positive or negative)
    if (!/^-?\d+$/.test(trimmed)) {
      // Not a numeric string - could be UUID, alphanumeric, etc.
      // Return as string (preserve non-numeric IDs)
      return trimmed;
    }

    // For negative numbers (temp IDs), always safe to convert
    if (trimmed.startsWith("-")) {
      return parseInt(trimmed, 10);
    }

    // Check if it exceeds MAX_SAFE_INTEGER
    // We compare string lengths first (quick check), then actual values
    if (trimmed.length > MAX_SAFE_INTEGER_STR.length) {
      // Definitely bigger than MAX_SAFE_INTEGER - keep as string
      return trimmed;
    }

    if (
      trimmed.length === MAX_SAFE_INTEGER_STR.length &&
      trimmed > MAX_SAFE_INTEGER_STR
    ) {
      // Same length but numerically larger - keep as string
      return trimmed;
    }

    // Safe to convert to number
    return parseInt(trimmed, 10);
  }

  return null;
}

/**
 * Check if an ID is a BigInt (exceeds MAX_SAFE_INTEGER)
 */
export function isBigIntId(value: unknown): boolean {
  if (typeof value === "string") {
    const trimmed = value.trim();
    if (!/^\d+$/.test(trimmed)) return false;
    return (
      trimmed.length > MAX_SAFE_INTEGER_STR.length ||
      (trimmed.length === MAX_SAFE_INTEGER_STR.length &&
        trimmed > MAX_SAFE_INTEGER_STR)
    );
  }
  return false;
}

/**
 * Check if an ID represents a temporary/new record (negative number)
 * Note: Only numeric negative IDs are considered temporary.
 * Non-numeric strings (UUIDs, etc.) are NOT temp IDs.
 */
export function isTempId(value: unknown): boolean {
  if (typeof value === "number") return value < 0;
  if (typeof value === "string") {
    const trimmed = value.trim();
    // Only negative numeric strings are temp IDs
    return /^-\d+$/.test(trimmed);
  }
  return false;
}

/**
 * Check if an ID represents an existing record
 * - Positive numbers: existing
 * - BigInt strings: existing (server returns them)
 * - Non-numeric strings (UUIDs, etc.): existing (server returns them)
 * - Negative numbers: NOT existing (temp/new record)
 * - null/undefined: NOT existing
 */
export function isExistingId(value: unknown): boolean {
  const parsed = safeParseId(value);
  if (parsed === null) return false;
  if (typeof parsed === "number") return parsed > 0;
  // String IDs (BigInt or non-numeric like UUIDs) are existing records
  // because the server returns them - we never generate non-numeric IDs client-side
  return true;
}

/**
 * Compare two IDs for equality (handles mixed number/string)
 */
export function idsEqual(a: unknown, b: unknown): boolean {
  const parsedA = safeParseId(a);
  const parsedB = safeParseId(b);

  if (parsedA === null || parsedB === null) return false;

  // Both numbers or both strings of same value
  return String(parsedA) === String(parsedB);
}

/**
 * Check if a string is purely numeric (for sorting logic)
 */
function isNumericId(value: string): boolean {
  return /^-?\d+$/.test(value);
}

/**
 * Compare two IDs for sorting (descending by default)
 * Works correctly for:
 * - Normal numeric IDs
 * - BigInt IDs (string)
 * - Non-numeric IDs like UUIDs (lexicographic sort)
 */
export function compareIds(a: unknown, b: unknown, descending = true): number {
  const parsedA = safeParseId(a);
  const parsedB = safeParseId(b);

  // Handle nulls
  if (parsedA === null && parsedB === null) return 0;
  if (parsedA === null) return 1;
  if (parsedB === null) return -1;

  const strA = String(parsedA);
  const strB = String(parsedB);

  const aIsNumeric = isNumericId(strA);
  const bIsNumeric = isNumericId(strB);

  // If one is numeric and one isn't, numeric comes first
  if (aIsNumeric !== bIsNumeric) {
    return aIsNumeric ? -1 : 1;
  }

  // Both non-numeric: simple lexicographic
  if (!aIsNumeric) {
    const comparison = strA.localeCompare(strB);
    return descending ? -comparison : comparison;
  }

  // Both numeric: handle negative (temp) IDs
  const aNeg = strA.startsWith("-");
  const bNeg = strB.startsWith("-");

  if (aNeg !== bNeg) {
    // Negative IDs should sort after positive ones
    return aNeg ? 1 : -1;
  }

  // For same sign numeric, compare by length then lexicographically
  const comparison =
    strA.length !== strB.length
      ? strA.length - strB.length
      : strA.localeCompare(strB);

  return descending ? -comparison : comparison;
}
