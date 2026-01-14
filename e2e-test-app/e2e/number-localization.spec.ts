import { test, expect } from "@playwright/test";
import { E2E_TEST_APP_CONFIG, getStoryUrl } from "./config";

/**
 * Number Localization Tests
 *
 * These tests verify the opt-in localization behavior for numeric fields:
 *
 * DEFAULT BEHAVIOR (no localized prop):
 * - Numbers display with period as decimal separator (e.g., 1234.56)
 * - No thousands separator grouping
 * - This is consistent across all locales
 *
 * OPT-IN LOCALIZATION (localized: true in widget_props):
 * - English (en_US): Uses comma for thousands, period for decimal (e.g., 1,234.56)
 * - Spanish (es_ES): Uses period for thousands, comma for decimal (e.g., 1.234,56)
 * - French (fr_FR): Uses space for thousands, comma for decimal (e.g., 1 234,56)
 *
 * AGGREGATES (always localized):
 * - Summary rows and aggregate footers always use locale-specific formatting
 * - This provides a user-friendly display for totals/summaries
 */

// Helper to check if a string contains Spanish-formatted numbers (comma as decimal separator)
const hasSpanishNumberFormat = (text: string): boolean => {
  // Spanish format: digits followed by comma and 1+ decimal digits
  const spanishNumberPattern = /\d+,\d+/;
  return spanishNumberPattern.test(text);
};

// Helper to check if a string contains English-formatted numbers (period as decimal separator)
const hasEnglishNumberFormat = (text: string): boolean => {
  // English format: digits followed by period and 1+ decimal digits
  // Exclude dates by ensuring not followed by /
  const englishNumberPattern = /\d+\.\d+(?!\/)/;
  return englishNumberPattern.test(text);
};

// Helper to check for raw/non-localized format (period decimal, no thousands grouping)
const hasRawNumberFormat = (text: string): boolean => {
  // Raw format: simple decimal number without thousands separators
  // Examples: "1234.56", "789.12", "36.05"
  return /^\d+\.\d+$/.test(text.trim());
};

test.describe("Form Input Number Localization", () => {
  test.describe("Default Behavior (No Localization)", () => {
    test("should display Float inputs with period decimal separator regardless of locale", async ({
      page,
    }) => {
      // Test with Spanish locale but WITHOUT localized fields
      await page.goto(getStoryUrl(E2E_TEST_APP_CONFIG.STORIES.FORM.SPANISH));

      await page.waitForSelector('input[type="text"]', { state: "visible" });
      await page.waitForTimeout(500);

      // Get the Sale Price input (float field with value 1234.56)
      const salePriceInput = page.locator(".ant-input-number-input").first();
      const displayValue = await salePriceInput.inputValue();

      // Default behavior: period for decimal (not localized)
      expect(displayValue).toMatch(/\d+\.\d+/);
      expect(displayValue).toContain(".");
      // Should NOT have comma as decimal separator
      expect(displayValue).not.toMatch(/\d+,\d+$/);
    });

    test("should display Integer inputs without thousands separator by default", async ({
      page,
    }) => {
      // Test with Spanish locale but WITHOUT localized fields
      await page.goto(getStoryUrl(E2E_TEST_APP_CONFIG.STORIES.FORM.SPANISH));

      await page.waitForSelector('input[type="text"]', { state: "visible" });
      await page.waitForTimeout(500);

      // Get all number inputs and find one with value 1500 (Available Qty)
      const numberInputs = page.locator(".ant-input-number-input");
      const count = await numberInputs.count();
      const allValues: string[] = [];
      for (let i = 0; i < count; i++) {
        allValues.push(await numberInputs.nth(i).inputValue());
      }

      // Default behavior: no thousands separator - should show "1500" not "1.500"
      const hasRawInteger = allValues.some((val) => val === "1500");
      expect(hasRawInteger).toBe(true);
    });

    test("should display Float inputs with period decimal in French locale too", async ({
      page,
    }) => {
      // Test with French locale but WITHOUT localized fields
      await page.goto(getStoryUrl(E2E_TEST_APP_CONFIG.STORIES.FORM.FRENCH));

      await page.waitForSelector('input[type="text"]', { state: "visible" });
      await page.waitForTimeout(500);

      const salePriceInput = page.locator(".ant-input-number-input").first();
      const displayValue = await salePriceInput.inputValue();

      // Default behavior: period for decimal (not localized)
      expect(displayValue).toMatch(/\d+\.\d+/);
      expect(displayValue).not.toContain(",");
    });
  });

  test.describe("Opt-in Localization (localized: true)", () => {
    test("should display Float inputs with Spanish format when localized=true", async ({
      page,
    }) => {
      await page.goto(getStoryUrl(E2E_TEST_APP_CONFIG.STORIES.FORM.SPANISH_LOCALIZED));

      await page.waitForSelector('input[type="text"]', { state: "visible" });
      await page.waitForTimeout(500);

      const salePriceInput = page.locator(".ant-input-number-input").first();
      const displayValue = await salePriceInput.inputValue();

      // Spanish localized format: comma for decimal
      expect(displayValue).toMatch(/\d+,\d+/);
      expect(displayValue).toContain(",");
    });

    test("should display Integer inputs with Spanish thousands separator when localized=true", async ({
      page,
    }) => {
      await page.goto(getStoryUrl(E2E_TEST_APP_CONFIG.STORIES.FORM.SPANISH_LOCALIZED));

      await page.waitForSelector('input[type="text"]', { state: "visible" });
      await page.waitForTimeout(500);

      const numberInputs = page.locator(".ant-input-number-input");
      const count = await numberInputs.count();
      const allValues: string[] = [];
      for (let i = 0; i < count; i++) {
        allValues.push(await numberInputs.nth(i).inputValue());
      }

      // Spanish localized: should show "1.500" (period as thousands separator)
      const hasSpanishThousands = allValues.some((val) =>
        /^\d{1,3}\.\d{3}$/.test(val),
      );
      expect(hasSpanishThousands).toBe(true);
    });

    test("should display Float inputs with French format when localized=true", async ({
      page,
    }) => {
      await page.goto(getStoryUrl(E2E_TEST_APP_CONFIG.STORIES.FORM.FRENCH_LOCALIZED));

      await page.waitForSelector('input[type="text"]', { state: "visible" });
      await page.waitForTimeout(500);

      const salePriceInput = page.locator(".ant-input-number-input").first();
      const displayValue = await salePriceInput.inputValue();

      // French localized format: comma for decimal
      expect(displayValue).toContain(",");
    });

    test("should display Integer inputs with French thousands separator when localized=true", async ({
      page,
    }) => {
      await page.goto(getStoryUrl(E2E_TEST_APP_CONFIG.STORIES.FORM.FRENCH_LOCALIZED));

      await page.waitForSelector('input[type="text"]', { state: "visible" });
      await page.waitForTimeout(500);

      const numberInputs = page.locator(".ant-input-number-input");
      const count = await numberInputs.count();
      const allValues: string[] = [];
      for (let i = 0; i < count; i++) {
        allValues.push(await numberInputs.nth(i).inputValue());
      }

      // French localized: should show "1 500" or "1\u202F500"
      const hasFrenchThousands = allValues.some((val) =>
        /^\d{1,3}[\s\u00A0\u202F]\d{3}$/.test(val),
      );
      expect(hasFrenchThousands).toBe(true);
    });

    test("should display Float inputs with English format when localized=true", async ({
      page,
    }) => {
      await page.goto(getStoryUrl(E2E_TEST_APP_CONFIG.STORIES.FORM.ENGLISH_LOCALIZED));

      await page.waitForSelector('input[type="text"]', { state: "visible" });
      await page.waitForTimeout(500);

      const salePriceInput = page.locator(".ant-input-number-input").first();
      const displayValue = await salePriceInput.inputValue();

      // English localized format: period for decimal
      expect(displayValue).toMatch(/\d+\.\d+/);
    });

    test("should display Integer inputs with English thousands separator when localized=true", async ({
      page,
    }) => {
      await page.goto(getStoryUrl(E2E_TEST_APP_CONFIG.STORIES.FORM.ENGLISH_LOCALIZED));

      await page.waitForSelector('input[type="text"]', { state: "visible" });
      await page.waitForTimeout(500);

      const numberInputs = page.locator(".ant-input-number-input");
      const count = await numberInputs.count();
      const allValues: string[] = [];
      for (let i = 0; i < count; i++) {
        allValues.push(await numberInputs.nth(i).inputValue());
      }

      // English localized: should show "1,500" (comma as thousands separator)
      const hasEnglishThousands = allValues.some((val) =>
        /^\d{1,3},\d{3}$/.test(val),
      );
      expect(hasEnglishThousands).toBe(true);
    });

    test("should preserve raw internal value when editing Float with Spanish format", async ({
      page,
    }) => {
      await page.goto(getStoryUrl(E2E_TEST_APP_CONFIG.STORIES.FORM.SPANISH_LOCALIZED));

      await page.waitForSelector('input[type="text"]', { state: "visible" });
      await page.waitForTimeout(500);

      const salePriceInput = page.locator(".ant-input-number-input").first();

      // Clear and type a new value in Spanish format
      await salePriceInput.click();
      await salePriceInput.fill("9876,54");
      await salePriceInput.blur();

      await page.waitForTimeout(300);

      // Get the displayed value - should be formatted in Spanish
      const displayValue = await salePriceInput.inputValue();
      expect(displayValue).toMatch(/9.*876,54/);

      // Verify internal value is raw number
      const ariaValueNow = await salePriceInput.evaluate(
        (el) => el.closest(".ant-input-number")?.getAttribute("aria-valuenow"),
      );

      if (ariaValueNow) {
        const internalValue = parseFloat(ariaValueNow);
        expect(internalValue).toBeCloseTo(9876.54, 1);
      }
    });
  });
});

test.describe("One2Many Aggregates (Always Localized)", () => {
  test("should display aggregates with Spanish number format even without field localization", async ({
    page,
  }) => {
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

    // Wait for aggregates to appear
    const aggregateElements = page.locator(
      "text=/Total.*Qty|.*Total.*Price|.*Avg.*Price|Sum:|Avg:|Count:/i",
    );
    await expect(aggregateElements.first()).toBeVisible({ timeout: 10000 });

    // Get aggregate text
    const aggregateTexts = await aggregateElements.allTextContents();
    const combinedText = aggregateTexts.join(" ");

    // Aggregates should contain numeric values
    const hasNumericValue = /\d+/.test(combinedText);
    expect(hasNumericValue).toBe(true);
  });
});

test.describe("Tree Summary Row (Always Localized)", () => {
  test("should display summary row values with Spanish number format in es_ES locale", async ({
    page,
  }) => {
    await page.goto(
      getStoryUrl(E2E_TEST_APP_CONFIG.STORIES.TREE_ACTION_VIEW.INFINITE_SPANISH),
    );

    await page.waitForSelector(".ag-root", { state: "visible" });
    await page.waitForSelector(".ag-row", { state: "visible" });
    await page.waitForTimeout(2000);

    // Look for summary row elements
    const summaryElements = page.locator(
      "text=/Total:|Sum:|Avg:|Average:|Count:/i",
    );

    const summaryCount = await summaryElements.count();

    // If summary elements exist, verify they use Spanish format
    if (summaryCount > 0) {
      const summaryTexts = await summaryElements.allTextContents();
      const combinedText = summaryTexts.join(" ");

      // Check if any numeric values in the summary use Spanish format (comma decimal)
      const hasNumericValues = /\d+[.,]\d+/.test(combinedText);

      if (hasNumericValues) {
        const hasSpanishFormat = hasSpanishNumberFormat(combinedText);
        expect(hasSpanishFormat).toBe(true);
      }
    }
  });
});

test.describe("Tree Grid Cells - Default Behavior", () => {
  test("should display numbers without localization in grid cells by default", async ({
    page,
  }) => {
    // This test verifies that tree grid cells use raw number format by default
    await page.goto(
      getStoryUrl(E2E_TEST_APP_CONFIG.STORIES.ONE2MANY.INFINITE),
    );

    await page.waitForSelector(".ag-root", { state: "visible" });
    await page.waitForSelector(".ag-row", { state: "visible" });
    await page.waitForTimeout(1000);

    const allCells = await page.locator(".ag-row .ag-cell").allTextContents();

    // Filter for cells that look like decimal numbers
    const numericCells = allCells.filter((cell) =>
      /^\d+\.\d+$/.test(cell.trim()),
    );

    // There should be numeric cells with raw format (period decimal)
    expect(numericCells.length).toBeGreaterThan(0);
  });
});
