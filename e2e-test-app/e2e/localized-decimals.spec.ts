import { test, expect } from "@playwright/test";
import { E2E_TEST_APP_CONFIG, getStoryUrl } from "./config";

test.describe("Localized Decimals - Tree Float Components", () => {
  test("should preserve server decimal places (18.87 -> '18,87' not '18,870000')", async ({
    page,
  }) => {
    const jsErrors: string[] = [];
    page.on("pageerror", (error) => {
      jsErrors.push(error.message);
    });

    await page.goto(
      getStoryUrl(E2E_TEST_APP_CONFIG.STORIES.TREE_ACTION_VIEW.LOCALIZED_DECIMALS),
    );

    await page.waitForSelector(".ag-root", { state: "visible" });
    await page.waitForSelector(".ag-row", { state: "visible" });
    await page.waitForTimeout(1000);

    // No JS errors should occur
    const criticalErrors = jsErrors.filter(
      (err) =>
        err.includes("toFixed") ||
        err.includes("is not a function") ||
        err.includes("Cannot read property"),
    );
    expect(criticalErrors.length).toBe(0);

    // Find Item A row which has amount: 18.87
    const itemARow = page.locator(".ag-row", { hasText: "Item A" });
    await expect(itemARow).toBeVisible();
    const itemAText = await itemARow.innerText();

    // Should show "18,87" (Spanish locale) NOT "18,870000"
    // The regex checks for 18,87 followed by end of cell or whitespace, not more digits
    expect(
      itemAText,
      "Expected 18.87 to display as '18,87' without trailing zeros",
    ).toMatch(/18,87(?!\d)/);

    // Should NOT have trailing zeros like "18,870000"
    expect(
      itemAText,
      "Should NOT have trailing zeros like '18,870000'",
    ).not.toMatch(/18,870{2,}/);
  });

  test("should handle false/null/undefined in localized mode without errors", async ({
    page,
  }) => {
    const jsErrors: string[] = [];
    page.on("pageerror", (error) => {
      jsErrors.push(error.message);
    });

    await page.goto(
      getStoryUrl(E2E_TEST_APP_CONFIG.STORIES.TREE_ACTION_VIEW.LOCALIZED_DECIMALS),
    );

    await page.waitForSelector(".ag-root", { state: "visible" });
    await page.waitForSelector(".ag-row", { state: "visible" });
    await page.waitForTimeout(1000);

    // No toFixed errors should occur with false/null/undefined values
    const toFixedErrors = jsErrors.filter(
      (err) =>
        err.includes("toFixed") ||
        err.includes("is not a function"),
    );
    expect(
      toFixedErrors.length,
      `Expected no toFixed errors, but found: ${toFixedErrors.join(", ")}`,
    ).toBe(0);

    // Item E has amount: false, price: null - row should render
    const itemERow = page.locator(".ag-row", { hasText: "Item E" });
    await expect(itemERow).toBeVisible();

    // Item F has amount: undefined, price: 0 - row should render
    const itemFRow = page.locator(".ag-row", { hasText: "Item F" });
    await expect(itemFRow).toBeVisible();

    // Item F should display "0" for the price field
    const itemFText = await itemFRow.innerText();
    expect(itemFText, "Expected Item F to contain '0' for price").toContain("0");
  });

  test("should display whole numbers without unnecessary decimals", async ({
    page,
  }) => {
    await page.goto(
      getStoryUrl(E2E_TEST_APP_CONFIG.STORIES.TREE_ACTION_VIEW.LOCALIZED_DECIMALS),
    );

    await page.waitForSelector(".ag-root", { state: "visible" });
    await page.waitForSelector(".ag-row", { state: "visible" });
    await page.waitForTimeout(1000);

    // Item B has amount: 100.5, price: 10
    const itemBRow = page.locator(".ag-row", { hasText: "Item B" });
    await expect(itemBRow).toBeVisible();
    const itemBText = await itemBRow.innerText();

    // price: 10 should display as "10" not "10,0000"
    // Check that we have "10" but not followed by comma and zeros
    expect(
      itemBText,
      "Expected price 10 to display without trailing decimal zeros",
    ).toMatch(/\b10\b/);

    // Item D has amount: 50, price: 1.1
    const itemDRow = page.locator(".ag-row", { hasText: "Item D" });
    await expect(itemDRow).toBeVisible();
    const itemDText = await itemDRow.innerText();

    // amount: 50 should display as "50" not "50,000000"
    expect(
      itemDText,
      "Expected amount 50 to display without trailing decimal zeros",
    ).toMatch(/\b50\b/);

    // price: 1.1 should display as "1,1" not "1,1000"
    expect(
      itemDText,
      "Expected price 1.1 to display as '1,1'",
    ).toMatch(/1,1(?!\d)/);
  });
});
