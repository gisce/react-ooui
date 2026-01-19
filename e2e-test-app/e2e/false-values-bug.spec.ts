import { test, expect } from "@playwright/test";
import { E2E_TEST_APP_CONFIG, getStoryUrl } from "./config";

/**
 * False Values Bug Test
 *
 * Tests that the tree view correctly handles `false`, `null`, and `undefined`
 * values in float and integer fields.
 *
 * BUG: ERP backend returns `false` (not null/undefined) for empty float values.
 * The FloatComponent/IntegerComponent calls `value.toFixed()` which throws:
 *   TypeError: a.toFixed is not a function
 *
 * Expected behavior:
 * - false/null/undefined values should render as empty cells (no error)
 * - Zero values (0) should display as "0"
 * - Numeric values should display normally
 */

test.describe("False Values Bug - Tree Float/Integer Components", () => {
  test("should render tree without JS errors when fields contain false values", async ({
    page,
  }) => {
    // Collect any JS errors
    const jsErrors: string[] = [];
    page.on("pageerror", (error) => {
      jsErrors.push(error.message);
    });

    // Also collect console errors
    const consoleErrors: string[] = [];
    page.on("console", (msg) => {
      if (msg.type() === "error") {
        consoleErrors.push(msg.text());
      }
    });

    await page.goto(
      getStoryUrl(E2E_TEST_APP_CONFIG.STORIES.TREE_ACTION_VIEW.FALSE_VALUES),
    );

    // Wait for the tree to render
    await page.waitForSelector(".ag-root", { state: "visible" });
    await page.waitForSelector(".ag-row", { state: "visible" });
    await page.waitForTimeout(1000);

    // Verify no "toFixed is not a function" errors
    const toFixedErrors = jsErrors.filter(
      (err) =>
        err.includes("toFixed") ||
        err.includes("is not a function") ||
        err.includes("Cannot read property"),
    );

    expect(
      toFixedErrors.length,
      `Expected no toFixed errors, but found: ${toFixedErrors.join(", ")}`,
    ).toBe(0);

    // Also check console errors for the same issue
    const consoleToFixedErrors = consoleErrors.filter(
      (err) =>
        err.includes("toFixed") ||
        err.includes("is not a function") ||
        err.includes("Cannot read property"),
    );

    expect(
      consoleToFixedErrors.length,
      `Expected no console errors about toFixed, but found: ${consoleToFixedErrors.join(", ")}`,
    ).toBe(0);
  });

  test("should display rows with mixed false/null/undefined/zero/number values", async ({
    page,
  }) => {
    await page.goto(
      getStoryUrl(E2E_TEST_APP_CONFIG.STORIES.TREE_ACTION_VIEW.FALSE_VALUES),
    );

    await page.waitForSelector(".ag-root", { state: "visible" });
    await page.waitForSelector(".ag-row", { state: "visible" });
    await page.waitForTimeout(1000);

    // Count visible rows - we should have 8 rows in our test data
    const rows = page.locator(".ag-row");
    const rowCount = await rows.count();

    expect(rowCount, "Expected at least 8 rows to be visible").toBeGreaterThanOrEqual(8);

    // Get all visible text from the grid
    const gridBody = page.locator(".ag-body-viewport");
    const gridText = await gridBody.innerText();

    // Verify that numeric values are displayed correctly
    // Product A has amount: 100.5
    expect(gridText, "Expected to find Product A").toContain("Product A");
    expect(gridText, "Expected to find 100.5 or 100,5").toMatch(/100[.,]5/);

    // Product F has all zeros - should display "0"
    expect(gridText, "Expected to find Product F").toContain("Product F");

    // Product G has normal values: 500.25
    expect(gridText, "Expected to find Product G").toContain("Product G");
    expect(gridText, "Expected to find 500.25 or 500,25").toMatch(/500[.,]25/);
  });

  test("should handle zero values correctly (display 0, not empty)", async ({
    page,
  }) => {
    await page.goto(
      getStoryUrl(E2E_TEST_APP_CONFIG.STORIES.TREE_ACTION_VIEW.FALSE_VALUES),
    );

    await page.waitForSelector(".ag-root", { state: "visible" });
    await page.waitForSelector(".ag-row", { state: "visible" });
    await page.waitForTimeout(1000);

    // Find the row with Product F (has all zeros)
    const productFRow = page.locator(".ag-row", { hasText: "Product F" });
    await expect(productFRow).toBeVisible();

    const rowText = await productFRow.innerText();

    // Zero values should be displayed, not empty
    // The row should contain "0" somewhere (for amount, quantity, or price)
    expect(rowText, "Expected Product F row to contain '0' for zero values").toContain("0");
  });
});
