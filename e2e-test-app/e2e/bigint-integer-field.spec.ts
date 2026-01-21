import { test, expect } from "@playwright/test";
import { E2E_TEST_APP_CONFIG, getStoryUrl } from "./config";

/**
 * BigInt Integer Field Tests
 *
 * These tests verify that integer fields can correctly handle BigInt values
 * (values greater than Number.MAX_SAFE_INTEGER = 9007199254740991).
 *
 * KNOWN BUG:
 * The useLocalizedInput.ts formatter function uses:
 * 1. parseFloat() - loses precision with large numbers
 * 2. Math.trunc() - throws error with BigInt type
 * 3. toLocaleString() - doesn't handle BigInt
 *
 * EXPECTED BUG BEHAVIOR:
 * - Form crashes or shows incorrect value
 * - JavaScript error: "Cannot convert a BigInt value to a number"
 * - Or precision loss: 4614634274427387912 → 4614634274427388000
 *
 * AFTER FIX:
 * - BigInt values should display correctly as strings
 * - No precision loss should occur
 * - No JavaScript errors
 */

// The BigInt ID used in the test
const BIGINT_ID = "4614634274427387912";

// What parseFloat returns (precision loss!)
const BIGINT_ID_WITH_PRECISION_LOSS = "4614634274427388000";

test.describe("BigInt Integer Field", () => {
  test("should display BigInt value correctly in integer field without JS errors", async ({
    page,
  }) => {
    // Collect JavaScript errors
    const jsErrors: string[] = [];
    page.on("pageerror", (error) => {
      jsErrors.push(error.message);
    });

    // Also capture console errors
    const consoleErrors: string[] = [];
    page.on("console", (msg) => {
      if (msg.type() === "error") {
        consoleErrors.push(msg.text());
      }
    });

    await page.goto(
      getStoryUrl(E2E_TEST_APP_CONFIG.STORIES.BIGINT_FORM.DEFAULT),
    );

    // Wait for the form to load (uses custom Form wrapper, not ant-form)
    await page.waitForSelector(".ant-input-number-input", { state: "visible", timeout: 10000 });
    await page.waitForTimeout(1500);

    // Check for BigInt-related JavaScript errors
    const bigintErrors = jsErrors.filter(
      (err) =>
        err.includes("BigInt") ||
        err.includes("can't be serialized") ||
        err.includes("Cannot convert a BigInt value"),
    );

    // This test should FAIL initially - demonstrating the bug
    // After fix, there should be no BigInt-related errors
    expect(bigintErrors).toEqual([]);

    // Also check console errors
    const bigintConsoleErrors = consoleErrors.filter(
      (err) =>
        err.includes("BigInt") ||
        err.includes("serialized") ||
        err.includes("Cannot convert"),
    );
    expect(bigintConsoleErrors).toEqual([]);
  });

  test("should display BigInt ID with full precision (no precision loss)", async ({
    page,
  }) => {
    const jsErrors: string[] = [];
    page.on("pageerror", (error) => {
      jsErrors.push(error.message);
    });

    await page.goto(
      getStoryUrl(E2E_TEST_APP_CONFIG.STORIES.BIGINT_FORM.DEFAULT),
    );

    // Wait for form inputs to load
    await page.waitForSelector(".ant-input-number-input", { state: "visible", timeout: 10000 });
    await page.waitForTimeout(1500);

    // Skip if there are BigInt errors (form may have crashed)
    const hasBigIntErrors = jsErrors.some(
      (err) => err.includes("BigInt") || err.includes("Cannot convert"),
    );
    if (hasBigIntErrors) {
      test.skip(true, "Form crashed due to BigInt handling issue");
    }

    // Find the ID field input (first integer field, should be readonly)
    const integerInputs = page.locator(".ant-input-number-input");
    const inputCount = await integerInputs.count();

    // Collect all input values
    const allValues: string[] = [];
    for (let i = 0; i < inputCount; i++) {
      const value = await integerInputs.nth(i).inputValue();
      allValues.push(value);
    }

    // The BigInt ID should be displayed with full precision
    // BUG: Shows "4614634274427388000" (precision lost by parseFloat)
    // FIXED: Shows "4614634274427387912" (correct)
    const hasBigIntIdWithPrecision = allValues.some(
      (val) => val === BIGINT_ID,
    );

    // Check if we have precision loss (bug behavior)
    const hasPrecisionLoss = allValues.some(
      (val) => val === BIGINT_ID_WITH_PRECISION_LOSS,
    );

    // This assertion will FAIL initially, showing the precision loss bug
    expect(hasBigIntIdWithPrecision).toBe(true);
    expect(hasPrecisionLoss).toBe(false);
  });

  test("should handle BigInt in big_number field", async ({ page }) => {
    const jsErrors: string[] = [];
    page.on("pageerror", (error) => {
      jsErrors.push(error.message);
    });

    await page.goto(
      getStoryUrl(E2E_TEST_APP_CONFIG.STORIES.BIGINT_FORM.DEFAULT),
    );

    // Wait for form inputs to load
    await page.waitForSelector(".ant-input-number-input", { state: "visible", timeout: 10000 });
    await page.waitForTimeout(1500);

    // Skip if there are BigInt errors
    const hasBigIntErrors = jsErrors.some(
      (err) => err.includes("BigInt") || err.includes("Cannot convert"),
    );
    if (hasBigIntErrors) {
      test.skip(true, "Form crashed due to BigInt handling issue");
    }

    // The big_number field should show: 9223372036854775807 (max int64)
    const integerInputs = page.locator(".ant-input-number-input");
    const inputCount = await integerInputs.count();

    const allValues: string[] = [];
    for (let i = 0; i < inputCount; i++) {
      const value = await integerInputs.nth(i).inputValue();
      allValues.push(value);
    }

    // Max int64 value should be displayed correctly
    const maxInt64 = "9223372036854775807";
    const hasMaxInt64 = allValues.some((val) => val === maxInt64);

    // This will likely FAIL due to precision loss
    expect(hasMaxInt64).toBe(true);
  });

  test("should not crash when rendering form with BigInt values", async ({
    page,
  }) => {
    await page.goto(
      getStoryUrl(E2E_TEST_APP_CONFIG.STORIES.BIGINT_FORM.DEFAULT),
    );

    // Wait a reasonable time for the form to either load or crash
    await page.waitForTimeout(3000);

    // Check that the form is rendered (not crashed) - look for input fields
    const inputsExist = await page.locator(".ant-input-number-input").count();
    expect(inputsExist).toBeGreaterThan(0);

    // Check the page title or form title is visible
    const pageContent = await page.content();
    expect(pageContent).toContain("BigInt");
  });
});

test.describe("BigInt Integer Field - Spanish Locale", () => {
  test("should handle BigInt with Spanish locale formatting", async ({
    page,
  }) => {
    const jsErrors: string[] = [];
    page.on("pageerror", (error) => {
      jsErrors.push(error.message);
    });

    await page.goto(
      getStoryUrl(E2E_TEST_APP_CONFIG.STORIES.BIGINT_FORM.SPANISH),
    );

    // Wait for form inputs to load
    await page.waitForSelector(".ant-input-number-input", { state: "visible", timeout: 10000 });
    await page.waitForTimeout(1500);

    // Check for BigInt-related errors
    const bigintErrors = jsErrors.filter(
      (err) =>
        err.includes("BigInt") ||
        err.includes("can't be serialized") ||
        err.includes("Cannot convert a BigInt value"),
    );

    // Should have no errors in Spanish locale too
    expect(bigintErrors).toEqual([]);
  });
});
