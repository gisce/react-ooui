import { test, expect } from "@playwright/test";
import { E2E_TEST_APP_CONFIG, getStoryUrl } from "./config";

/**
 * Number Precision Tests
 *
 * Verifies that localized numbers preserve their decimal precision.
 * BUG: FloatComponent was not passing decimalDigits to useNumberFormatter,
 * causing Intl.NumberFormat to round values to 3 decimals max.
 *
 * Test data: price_unit field has digits: [16, 4], first row value is 123.4567
 * Without fix: displays "123,457" (rounded to 3 decimals)
 * With fix: displays "123,4567" (all 4 decimals preserved)
 */

test.describe("Number Precision - Tree FloatComponent", () => {
  test("should preserve 4 decimal places in tree grid when field has digits defined", async ({
    page,
  }) => {
    await page.goto(
      getStoryUrl(E2E_TEST_APP_CONFIG.STORIES.ONE2MANY.INFINITE_SPANISH),
    );

    await page.waitForSelector(".ag-root", { state: "visible" });
    await page.waitForSelector(".ag-row", { state: "visible" });
    await page.waitForTimeout(1000);

    // First row price_unit is 123.4567, should display as "123,4567" in Spanish locale
    // BUG: Without fix, FloatComponent doesn't pass decimalDigits, so it shows "123,457"
    // Get all visible text from the grid body
    const gridBody = page.locator(".ag-body-viewport");
    const gridText = await gridBody.innerText();

    // Check for the full 4-decimal value "123,4567"
    const hasFourDecimals = gridText.includes("123,4567");
    // Check if it shows the buggy 3-decimal version
    const hasThreeDecimals = gridText.includes("123,457");

    expect(
      hasFourDecimals,
      `Expected "123,4567" (4 decimals). ${hasThreeDecimals ? "BUG CONFIRMED: Found '123,457' (rounded to 3 decimals)" : `Grid contains: ${gridText.substring(0, 500)}`}`,
    ).toBe(true);
  });
});

test.describe("Number Precision - Form Input Float", () => {
  test("should preserve float values with 4 decimal places when localized", async ({
    page,
  }) => {
    // Form Float.tsx already correctly passes decimalDigits
    // This test verifies that behavior
    await page.goto(
      getStoryUrl(E2E_TEST_APP_CONFIG.STORIES.FORM.SPANISH_LOCALIZED),
    );

    await page.waitForSelector('input[type="text"]', { state: "visible" });
    await page.waitForTimeout(500);

    const numberInputs = page.locator(".ant-input-number-input");
    const count = await numberInputs.count();
    const allValues: string[] = [];
    for (let i = 0; i < count; i++) {
      allValues.push(await numberInputs.nth(i).inputValue());
    }

    // Volume field (0.0156) should show all 4 decimals: "0,0156"
    const hasFullPrecision = allValues.some(
      (val) => val === "0,0156" || val.includes("0156"),
    );

    expect(
      hasFullPrecision,
      `Expected to find value with 4 decimal places (0,0156), got: ${allValues.join(", ")}`,
    ).toBe(true);
  });
});

test.describe("Number Precision - TreeSummary Aggregates", () => {
  test("should display aggregates with numeric values", async ({ page }) => {
    await page.goto(
      getStoryUrl(E2E_TEST_APP_CONFIG.STORIES.ONE2MANY.INFINITE_SPANISH),
    );

    await page.waitForSelector(".ag-root", { state: "visible" });
    await page.waitForSelector(".ag-row", { state: "visible" });
    await page.waitForLoadState("networkidle");
    await page.waitForTimeout(1000);

    // Select rows to trigger aggregate calculation
    const firstRowCheckbox = page
      .locator(".ag-row")
      .first()
      .locator('input[type="checkbox"]');
    await firstRowCheckbox.click();
    await expect(firstRowCheckbox).toBeChecked({ timeout: 5000 });

    const secondRowCheckbox = page
      .locator(".ag-row")
      .nth(1)
      .locator('input[type="checkbox"]');
    await secondRowCheckbox.click();
    await expect(secondRowCheckbox).toBeChecked({ timeout: 5000 });

    // Wait for aggregates
    const aggregateElements = page.locator(
      "text=/Total.*Qty|.*Total.*Price|.*Avg.*Price|Sum:|Avg:|Count:/i",
    );
    await expect(aggregateElements.first()).toBeVisible({ timeout: 10000 });

    const aggregateTexts = await aggregateElements.allTextContents();
    const combinedText = aggregateTexts.join(" ");

    // Aggregates should contain numeric values
    const hasNumericValue = /\d+/.test(combinedText);
    expect(hasNumericValue).toBe(true);
  });
});
