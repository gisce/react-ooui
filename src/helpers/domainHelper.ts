import { parseDomainFields } from "@gisce/ooui";

// Tokens that parseDomainFields returns but aren't actual field references
const PYTHON_LITERALS = new Set(["True", "False", "None"]);

type Domain = string | boolean | unknown[] | undefined;

/**
 * Checks if a domain has field references that can't be resolved in search context.
 * Returns the domain if safe, [] if it has unresolvable field references.
 * Never throws - returns [] on error.
 */
export const getSafeSearchDomain = (domain: Domain): Domain => {
  try {
    if (!domain) return domain;
    if (typeof domain !== "string") return domain;

    const tokens = parseDomainFields(domain);
    const hasFieldRefs = tokens.some(
      (t) => t && !PYTHON_LITERALS.has(t) && !/^-?\d+(\.\d+)?$/.test(t),
    );

    return hasFieldRefs ? [] : domain;
  } catch {
    return [];
  }
};
