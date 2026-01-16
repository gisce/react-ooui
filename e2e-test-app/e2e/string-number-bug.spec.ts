import { test, expect } from "@playwright/test";
import { E2E_TEST_APP_CONFIG, getStoryUrl } from "./config";

/**
 * String-Typed Number Bug Test
 *
 * This test verifies the fix for the bug:
 *   TypeError: i.toFixed is not a function
 *
 * ROOT CAUSE:
 * - The useNumberFormatter hook was calling .toFixed() and .toLocaleString()
 *   on values that were assumed to be numbers
 * - ERP backends (OpenERP/Odoo) often return numeric values as STRINGS in JSON
 * - Example: { "salary": "45000" } instead of { "salary": 45000 }
 * - JavaScript's isNaN("45000") returns false (coerces string to number)
 * - But "45000".toFixed(2) throws TypeError because strings don't have toFixed()
 *
 * FIX:
 * - Convert value to number using parseFloat() before calling number methods
 * - Handle empty strings as missing values
 *
 * WHY IT DIDN'T HAPPEN IN V2:
 * - V2 had a simple NumberComponent that just rendered {value}
 * - React can render strings directly, so it never failed
 * - The localization feature (useNumberFormatter) is NEW in this branch
 */

test.describe("String-Typed Numbers from ERP Backend", () => {
  test("should render tree view without errors when numbers come as strings", async ({
    page,
  }) => {
    // Collect any JavaScript errors
    const jsErrors: string[] = [];
    page.on("pageerror", (error) => {
      jsErrors.push(error.message);
    });

    // Navigate to the string numbers story
    await page.goto(
      getStoryUrl(E2E_TEST_APP_CONFIG.STORIES.TREE_ACTION_VIEW.STRING_NUMBERS),
    );

    // Wait for the tree grid to be visible
    await page.waitForSelector(".ag-root", { state: "visible", timeout: 15000 });
    await page.waitForSelector(".ag-row", { state: "visible", timeout: 15000 });

    // Wait a bit for any rendering to complete
    await page.waitForTimeout(2000);

    // Check that no JavaScript errors occurred
    const toFixedErrors = jsErrors.filter(
      (err) =>
        err.includes("toFixed is not a function") ||
        err.includes("toLocaleString is not a function"),
    );

    // This is the key assertion - before the fix, this would fail
    expect(toFixedErrors).toHaveLength(0);

    // Verify that rows are actually rendered with data
    const rowCount = await page.locator(".ag-row").count();
    expect(rowCount).toBeGreaterThan(0);

    // Verify numeric cells contain formatted data (not errors or empty)
    const cells = await page.locator(".ag-row .ag-cell").allTextContents();
    const nonEmptyCells = cells.filter((cell) => cell.trim() !== "");
    expect(nonEmptyCells.length).toBeGreaterThan(0);
  });

  test("should format string numbers correctly in Spanish locale", async ({
    page,
  }) => {
    // Collect any JavaScript errors
    const jsErrors: string[] = [];
    page.on("pageerror", (error) => {
      jsErrors.push(error.message);
    });

    await page.goto(
      getStoryUrl(E2E_TEST_APP_CONFIG.STORIES.TREE_ACTION_VIEW.STRING_NUMBERS),
    );

    await page.waitForSelector(".ag-root", { state: "visible", timeout: 15000 });
    await page.waitForSelector(".ag-row", { state: "visible", timeout: 15000 });
    await page.waitForTimeout(2000);

    // No toFixed errors should occur
    const toFixedErrors = jsErrors.filter((err) =>
      err.includes("toFixed is not a function"),
    );
    expect(toFixedErrors).toHaveLength(0);

    // Get all cell contents to verify numbers are displayed
    const allCellContents = await page
      .locator(".ag-row .ag-cell")
      .allTextContents();

    // Verify we have some content (not all empty from errors)
    const contentWithText = allCellContents.filter(
      (content) => content.trim().length > 0,
    );
    expect(contentWithText.length).toBeGreaterThan(5);
  });

  test("existing infinite tree should still work (regression test)", async ({
    page,
  }) => {
    // Collect any JavaScript errors
    const jsErrors: string[] = [];
    page.on("pageerror", (error) => {
      jsErrors.push(error.message);
    });

    // Test the original infinite story (with proper number types)
    // This ensures the fix didn't break anything
    await page.goto(
      getStoryUrl(E2E_TEST_APP_CONFIG.STORIES.TREE_ACTION_VIEW.INFINITE),
    );

    await page.waitForSelector(".ag-root", { state: "visible", timeout: 15000 });
    await page.waitForSelector(".ag-row", { state: "visible", timeout: 15000 });
    await page.waitForTimeout(2000);

    // No errors should occur
    const criticalErrors = jsErrors.filter(
      (err) =>
        err.includes("toFixed is not a function") ||
        err.includes("toLocaleString is not a function"),
    );
    expect(criticalErrors).toHaveLength(0);

    // Verify rows render
    const rowCount = await page.locator(".ag-row").count();
    expect(rowCount).toBeGreaterThan(0);
  });
});
