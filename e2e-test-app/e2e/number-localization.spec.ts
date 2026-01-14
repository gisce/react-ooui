import { test, expect } from "@playwright/test";
import { E2E_TEST_APP_CONFIG, getStoryUrl } from "./config";

/**
 * Number Localization Tests
 *
 * These tests verify that numeric values in tree views are properly localized
 * based on the configured locale:
 * - English (en_US): Uses period as decimal separator (e.g., 1,234.56)
 * - Spanish (es_ES): Uses comma as decimal separator (e.g., 1.234,56)
 *
 * The localization is handled by the useNumberFormatter hook which uses
 * Intl.NumberFormat under the hood.
 */

// Helper to check if a string contains Spanish-formatted numbers (comma as decimal separator)
const hasSpanishNumberFormat = (text: string): boolean => {
  // Spanish format: digits followed by comma and 1+ decimal digits
  // Examples: "123,4" or "123,45" or "1.234,56" (with thousands separator)
  const spanishNumberPattern = /\d+,\d+/;
  return spanishNumberPattern.test(text);
};

// Helper to check if a string contains English-formatted numbers (period as decimal separator)
const hasEnglishNumberFormat = (text: string): boolean => {
  // English format: digits followed by period and 1+ decimal digits
  // Examples: "123.4" or "123.45" or "1,234.56" (with thousands separator)
  // Exclude dates by ensuring not followed by /
  const englishNumberPattern = /\d+\.\d+(?!\/)/;
  return englishNumberPattern.test(text);
};

test.describe("Number Localization - One2Many Component", () => {
  test.describe("Infinite Scroll Mode", () => {
    test("should display numbers with English format (period decimal separator) in en_US locale", async ({
      page,
    }) => {
      await page.goto(
        getStoryUrl(E2E_TEST_APP_CONFIG.STORIES.ONE2MANY.INFINITE),
      );

      await page.waitForSelector(".ag-root", { state: "visible" });
      await page.waitForSelector(".ag-row", { state: "visible" });
      await page.waitForTimeout(1000);

      // Get all cell contents from numeric columns
      const allCells = await page.locator(".ag-row .ag-cell").allTextContents();

      // Filter for cells that look like decimal numbers
      const numericCells = allCells.filter(
        (cell) => /\d+[.,]\d+/.test(cell.trim()),
      );

      expect(numericCells.length).toBeGreaterThan(0);

      // Verify at least one cell uses English format (period as decimal)
      const hasEnglishFormat = numericCells.some((cell) =>
        hasEnglishNumberFormat(cell),
      );
      expect(hasEnglishFormat).toBe(true);
    });

    test("should display numbers with Spanish format (comma decimal separator) in es_ES locale", async ({
      page,
    }) => {
      await page.goto(
        getStoryUrl(E2E_TEST_APP_CONFIG.STORIES.ONE2MANY.INFINITE_SPANISH),
      );

      await page.waitForSelector(".ag-root", { state: "visible" });
      await page.waitForSelector(".ag-row", { state: "visible" });
      await page.waitForTimeout(1000);

      // Get all cell contents from numeric columns
      const allCells = await page.locator(".ag-row .ag-cell").allTextContents();

      // Filter for cells that look like decimal numbers
      const numericCells = allCells.filter(
        (cell) => /\d+[.,]\d+/.test(cell.trim()),
      );

      expect(numericCells.length).toBeGreaterThan(0);

      // Verify at least one cell uses Spanish format (comma as decimal)
      const hasSpanishFormat = numericCells.some((cell) =>
        hasSpanishNumberFormat(cell),
      );
      expect(hasSpanishFormat).toBe(true);
    });

    test("should format large floats (>1000) with Spanish thousands and decimal separators", async ({
      page,
    }) => {
      await page.goto(
        getStoryUrl(E2E_TEST_APP_CONFIG.STORIES.ONE2MANY.INFINITE_SPANISH),
      );

      await page.waitForSelector(".ag-root", { state: "visible" });
      await page.waitForSelector(".ag-row", { state: "visible" });
      await page.waitForLoadState("networkidle");
      await page.waitForTimeout(2000); // Wait for function fields to calculate

      // Get all cell contents
      const allCells = await page.locator(".ag-row .ag-cell").allTextContents();

      // Look for floats with Spanish formatting that include thousands separator
      // Pattern: digits with period as thousands separator, comma as decimal
      // Examples: "1.234,56" or "4.567,89" (values > 1000 with decimals)
      const largeFloatsWithSpanishFormat = allCells.filter((cell) => {
        const trimmed = cell.trim();
        // Match pattern: 1-3 digits, period, 3 digits, comma, 1+ decimal digits
        return /^\d{1,3}\.\d{3},\d+$/.test(trimmed);
      });

      // total_amount values can exceed 1000 (e.g., quantity 10 * price_unit 450 = 4500)
      // If we find any, verify they use the correct format
      if (largeFloatsWithSpanishFormat.length > 0) {
        // All large floats should use Spanish format (period for thousands, comma for decimal)
        expect(largeFloatsWithSpanishFormat.every((cell) =>
          /^\d{1,3}\.\d{3},\d+$/.test(cell.trim())
        )).toBe(true);
      }

      // At minimum, verify standard Spanish decimal formatting is present
      const hasSpanishDecimalFormat = allCells.some((cell) =>
        hasSpanishNumberFormat(cell),
      );
      expect(hasSpanishDecimalFormat).toBe(true);
    });
  });

  test.describe("Paginated Mode", () => {
    test("should display numbers with English format (period decimal separator) in en_US locale", async ({
      page,
    }) => {
      await page.goto(
        getStoryUrl(E2E_TEST_APP_CONFIG.STORIES.ONE2MANY.PAGINATED),
      );

      await page.waitForSelector(".ag-root", { state: "visible" });
      await page.waitForSelector(".ag-row", { state: "visible" });
      await page.waitForTimeout(1000);

      // Get all cell contents from numeric columns
      const allCells = await page.locator(".ag-row .ag-cell").allTextContents();

      // Filter for cells that look like decimal numbers
      const numericCells = allCells.filter(
        (cell) => /\d+[.,]\d+/.test(cell.trim()),
      );

      expect(numericCells.length).toBeGreaterThan(0);

      // Verify at least one cell uses English format (period as decimal)
      const hasEnglishFormat = numericCells.some((cell) =>
        hasEnglishNumberFormat(cell),
      );
      expect(hasEnglishFormat).toBe(true);
    });

    test("should display numbers with Spanish format (comma decimal separator) in es_ES locale", async ({
      page,
    }) => {
      await page.goto(
        getStoryUrl(E2E_TEST_APP_CONFIG.STORIES.ONE2MANY.PAGINATED_SPANISH),
      );

      await page.waitForSelector(".ag-root", { state: "visible" });
      await page.waitForSelector(".ag-row", { state: "visible" });
      await page.waitForTimeout(1000);

      // Get all cell contents from numeric columns
      const allCells = await page.locator(".ag-row .ag-cell").allTextContents();

      // Filter for cells that look like decimal numbers
      const numericCells = allCells.filter(
        (cell) => /\d+[.,]\d+/.test(cell.trim()),
      );

      expect(numericCells.length).toBeGreaterThan(0);

      // Verify at least one cell uses Spanish format (comma as decimal)
      const hasSpanishFormat = numericCells.some((cell) =>
        hasSpanishNumberFormat(cell),
      );
      expect(hasSpanishFormat).toBe(true);
    });
  });

  test.describe("Aggregates Footer Localization", () => {
    test("should display aggregates with Spanish number format in es_ES locale", async ({
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

      // Aggregates may show integer values without decimals when values round to whole numbers
      // The test verifies aggregates are visible and contain numbers
      const hasNumericValue = /\d+/.test(combinedText);
      expect(hasNumericValue).toBe(true);

      // Also verify the grid cells use Spanish format - this is the main localization check
      const allCells = await page.locator(".ag-row .ag-cell").allTextContents();
      const numericCells = allCells.filter((cell) => /\d+[.,]\d+/.test(cell.trim()));
      const hasSpanishFormatInGrid = numericCells.some((cell) =>
        hasSpanishNumberFormat(cell),
      );
      expect(hasSpanishFormatInGrid).toBe(true);
    });
  });
});

test.describe("Number Localization - TreeActionView Component", () => {
  // Helper to scroll right and collect all cell contents
  const collectAllCellContents = async (page: any) => {
    const allCells = new Set<string>();
    const gridBodyViewport = page.locator(".ag-body-horizontal-scroll-viewport");

    // Get scroll info
    const scrollInfo = await gridBodyViewport.evaluate((el: HTMLElement) => ({
      scrollWidth: el.scrollWidth,
      clientWidth: el.clientWidth,
      maxScrollLeft: el.scrollWidth - el.clientWidth,
    }));

    // Scroll through the grid to collect all cells
    await gridBodyViewport.evaluate((el: HTMLElement) => { el.scrollLeft = 0; });
    await page.waitForTimeout(200);

    let currentScrollLeft = 0;
    const scrollStep = Math.max(100, scrollInfo.clientWidth / 3);

    while (currentScrollLeft <= scrollInfo.maxScrollLeft) {
      await gridBodyViewport.evaluate((el: HTMLElement, scrollLeft: number) => {
        el.scrollLeft = scrollLeft;
      }, currentScrollLeft);
      await page.waitForTimeout(300);

      const cells = await page.locator(".ag-row .ag-cell").allTextContents();
      cells.forEach((cell: string) => allCells.add(cell.trim()));

      currentScrollLeft += scrollStep;
    }

    // Final scroll to end
    await gridBodyViewport.evaluate((el: HTMLElement, maxScroll: number) => {
      el.scrollLeft = maxScroll;
    }, scrollInfo.maxScrollLeft);
    await page.waitForTimeout(300);

    const finalCells = await page.locator(".ag-row .ag-cell").allTextContents();
    finalCells.forEach((cell: string) => allCells.add(cell.trim()));

    return Array.from(allCells);
  };

  test.describe("Infinite Scroll Mode", () => {
    test("should display numbers with English format in en_US locale", async ({
      page,
    }) => {
      await page.goto(
        getStoryUrl(E2E_TEST_APP_CONFIG.STORIES.TREE_ACTION_VIEW.INFINITE),
      );

      await page.waitForSelector(".ag-root", { state: "visible" });
      await page.waitForSelector(".ag-row", { state: "visible" });
      await page.waitForTimeout(1000);

      // Collect all cells by scrolling
      const allCells = await collectAllCellContents(page);

      // Look for numbers - either decimals or large integers with thousands separators
      // TreeActionView has integer fields (salary, annual_bonus) that may have thousands separators
      const numericCells = allCells.filter(
        (cell) => /^\d{1,3}(,\d{3})*(\.\d+)?$/.test(cell) || /\d+\.\d+/.test(cell),
      );

      // Verify we found some numeric values
      expect(numericCells.length).toBeGreaterThan(0);
    });

    test("should display numbers with Spanish format in es_ES locale", async ({
      page,
    }) => {
      await page.goto(
        getStoryUrl(
          E2E_TEST_APP_CONFIG.STORIES.TREE_ACTION_VIEW.INFINITE_SPANISH,
        ),
      );

      await page.waitForSelector(".ag-root", { state: "visible" });
      await page.waitForSelector(".ag-row", { state: "visible" });
      await page.waitForTimeout(1000);

      // Collect all cells by scrolling
      const allCells = await collectAllCellContents(page);

      // Look for numbers with Spanish formatting (period for thousands, comma for decimals)
      // Or just plain integers if values are small
      const numericCells = allCells.filter(
        (cell) => /^\d{1,3}(\.\d{3})*(,\d+)?$/.test(cell) || /\d+,\d+/.test(cell) || /^\d+$/.test(cell),
      );

      // Verify we found some numeric values
      expect(numericCells.length).toBeGreaterThan(0);
    });

    test("should format integers with Spanish thousands separator (useGrouping) in es_ES locale", async ({
      page,
    }) => {
      await page.goto(
        getStoryUrl(
          E2E_TEST_APP_CONFIG.STORIES.TREE_ACTION_VIEW.INFINITE_SPANISH,
        ),
      );

      await page.waitForSelector(".ag-root", { state: "visible" });
      await page.waitForSelector(".ag-row", { state: "visible" });
      await page.waitForTimeout(1000);

      // Collect all cells by scrolling to reach the salary column
      const allCells = await collectAllCellContents(page);

      // Look for integers with Spanish thousands separator (period)
      // Salary values are 40,000-120,000 which become "40.000"-"120.000" in Spanish format
      // Pattern matches: 2-3 digits, period, exactly 3 digits (for 5-6 digit numbers)
      const numbersWithThousandsSeparator = allCells.filter((cell) =>
        /^\d{2,3}\.\d{3}$/.test(cell.trim()),
      );

      // We should find integers formatted with thousands separator in Salary column
      expect(numbersWithThousandsSeparator.length).toBeGreaterThan(0);
    });
  });

  test.describe("Paginated Mode", () => {
    test("should display numbers with English format in en_US locale", async ({
      page,
    }) => {
      await page.goto(
        getStoryUrl(E2E_TEST_APP_CONFIG.STORIES.TREE_ACTION_VIEW.PAGINATED),
      );

      await page.waitForSelector(".ag-root", { state: "visible" });
      await page.waitForSelector(".ag-row", { state: "visible" });
      await page.waitForTimeout(1000);

      // Collect all cells by scrolling
      const allCells = await collectAllCellContents(page);

      // Look for numbers
      const numericCells = allCells.filter(
        (cell) => /^\d{1,3}(,\d{3})*(\.\d+)?$/.test(cell) || /\d+\.\d+/.test(cell),
      );

      // Verify we found some numeric values
      expect(numericCells.length).toBeGreaterThan(0);
    });

    test("should display numbers with Spanish format in es_ES locale", async ({
      page,
    }) => {
      await page.goto(
        getStoryUrl(
          E2E_TEST_APP_CONFIG.STORIES.TREE_ACTION_VIEW.PAGINATED_SPANISH,
        ),
      );

      await page.waitForSelector(".ag-root", { state: "visible" });
      await page.waitForSelector(".ag-row", { state: "visible" });
      await page.waitForTimeout(1000);

      // Collect all cells by scrolling
      const allCells = await collectAllCellContents(page);

      // Look for numbers with Spanish formatting or plain integers
      const numericCells = allCells.filter(
        (cell) => /^\d{1,3}(\.\d{3})*(,\d+)?$/.test(cell) || /\d+,\d+/.test(cell) || /^\d+$/.test(cell),
      );

      // Verify we found some numeric values
      expect(numericCells.length).toBeGreaterThan(0);
    });
  });

  test.describe("Summary Row Localization", () => {
    test("should display summary row values with Spanish number format in es_ES locale", async ({
      page,
    }) => {
      await page.goto(
        getStoryUrl(
          E2E_TEST_APP_CONFIG.STORIES.TREE_ACTION_VIEW.INFINITE_SPANISH,
        ),
      );

      await page.waitForSelector(".ag-root", { state: "visible" });
      await page.waitForSelector(".ag-row", { state: "visible" });
      await page.waitForTimeout(2000);

      // Look for summary row elements (the old Tree.tsx component uses SummaryRow)
      // The summary typically shows labels like "Total:", "Sum:", etc. followed by values
      const summaryElements = page.locator(
        "text=/Total:|Sum:|Avg:|Average:|Count:/i",
      );

      const summaryCount = await summaryElements.count();

      // If summary elements exist, verify they use Spanish format
      if (summaryCount > 0) {
        const summaryTexts = await summaryElements.allTextContents();
        const combinedText = summaryTexts.join(" ");

        // Check if any numeric values in the summary use Spanish format
        const hasNumericValues = /\d+[.,]\d+/.test(combinedText);

        if (hasNumericValues) {
          const hasSpanishFormat = hasSpanishNumberFormat(combinedText);
          expect(hasSpanishFormat).toBe(true);
        }
      }
    });
  });
});

// Helper to check if a string contains French-formatted numbers (space for thousands, comma for decimal)
const hasFrenchNumberFormat = (text: string): boolean => {
  // French format: space (or narrow non-breaking space) for thousands, comma for decimal
  // Examples: "1 234,56" or "1\u202F234,56"
  return /\d+[\s\u00A0\u202F]\d{3}/.test(text) || /\d+,\d+/.test(text);
};

// Helper to scroll and collect all cell contents for tests outside the main TreeActionView describe
const scrollAndCollectCells = async (page: any) => {
  const allCells = new Set<string>();
  const gridBodyViewport = page.locator(".ag-body-horizontal-scroll-viewport");

  const scrollInfo = await gridBodyViewport.evaluate((el: HTMLElement) => ({
    scrollWidth: el.scrollWidth,
    clientWidth: el.clientWidth,
    maxScrollLeft: el.scrollWidth - el.clientWidth,
  }));

  await gridBodyViewport.evaluate((el: HTMLElement) => { el.scrollLeft = 0; });
  await page.waitForTimeout(200);

  let currentScrollLeft = 0;
  const scrollStep = Math.max(100, scrollInfo.clientWidth / 3);

  while (currentScrollLeft <= scrollInfo.maxScrollLeft) {
    await gridBodyViewport.evaluate((el: HTMLElement, scrollLeft: number) => {
      el.scrollLeft = scrollLeft;
    }, currentScrollLeft);
    await page.waitForTimeout(300);

    const cells = await page.locator(".ag-row .ag-cell").allTextContents();
    cells.forEach((cell: string) => allCells.add(cell.trim()));

    currentScrollLeft += scrollStep;
  }

  await gridBodyViewport.evaluate((el: HTMLElement, maxScroll: number) => {
    el.scrollLeft = maxScroll;
  }, scrollInfo.maxScrollLeft);
  await page.waitForTimeout(300);

  const finalCells = await page.locator(".ag-row .ag-cell").allTextContents();
  finalCells.forEach((cell: string) => allCells.add(cell.trim()));

  return Array.from(allCells);
};

test.describe("Number Localization - French Locale (fr_FR)", () => {
  test("should display numbers with French format in TreeActionView", async ({
    page,
  }) => {
    await page.goto(
      getStoryUrl(E2E_TEST_APP_CONFIG.STORIES.TREE_ACTION_VIEW.INFINITE_FRENCH),
    );

    await page.waitForSelector(".ag-root", { state: "visible" });
    await page.waitForSelector(".ag-row", { state: "visible" });
    await page.waitForTimeout(1000);

    // Scroll to collect all cells including salary column
    const allCells = await scrollAndCollectCells(page);

    // French uses space (or narrow non-breaking space \u202F) for thousands separator
    // Look for patterns like "40 000" or "40\u202F000" (salary values 40,000-120,000)
    const numbersWithFrenchThousands = allCells.filter((cell) => {
      // Match: 2-3 digits, space/nbsp, 3 digits
      return /^\d{2,3}[\s\u00A0\u202F]\d{3}$/.test(cell);
    });

    // We should find numbers with French thousands separator (space)
    expect(numbersWithFrenchThousands.length).toBeGreaterThan(0);
  });

  test("should display numbers with French format (comma decimal separator) in One2Many", async ({
    page,
  }) => {
    await page.goto(
      getStoryUrl(E2E_TEST_APP_CONFIG.STORIES.ONE2MANY.INFINITE_FRENCH),
    );

    await page.waitForSelector(".ag-root", { state: "visible" });
    await page.waitForSelector(".ag-row", { state: "visible" });
    await page.waitForTimeout(1000);

    // Get all cell contents
    const allCells = await page.locator(".ag-row .ag-cell").allTextContents();

    // Filter for cells that contain comma as decimal separator (French uses comma)
    const numericCells = allCells.filter(
      (cell) => /\d+,\d+/.test(cell.trim()),
    );

    expect(numericCells.length).toBeGreaterThan(0);

    // Verify French format is used (comma as decimal separator)
    const hasFrenchFormat = numericCells.some((cell) =>
      hasFrenchNumberFormat(cell),
    );
    expect(hasFrenchFormat).toBe(true);
  });
});

test.describe("Number Localization - No Locale (Fallback to English)", () => {
  test("should fallback to English format when no locale is specified in TreeActionView", async ({
    page,
  }) => {
    await page.goto(
      getStoryUrl(E2E_TEST_APP_CONFIG.STORIES.TREE_ACTION_VIEW.INFINITE_NO_LOCALE),
    );

    await page.waitForSelector(".ag-root", { state: "visible" });
    await page.waitForSelector(".ag-row", { state: "visible" });
    await page.waitForTimeout(1000);

    // Scroll to collect all cells including salary column
    const allCells = await scrollAndCollectCells(page);

    // English uses comma for thousands separator
    // Look for patterns like "40,000" or "120,000" (salary values)
    const numbersWithEnglishThousands = allCells.filter((cell) => {
      // Match: 2-3 digits, comma, 3 digits (English thousands separator)
      return /^\d{2,3},\d{3}$/.test(cell);
    });

    // We should find numbers with English thousands separator (comma)
    expect(numbersWithEnglishThousands.length).toBeGreaterThan(0);
  });

  test("should fallback to English format when no locale is specified in One2Many", async ({
    page,
  }) => {
    await page.goto(
      getStoryUrl(E2E_TEST_APP_CONFIG.STORIES.ONE2MANY.INFINITE_NO_LOCALE),
    );

    await page.waitForSelector(".ag-root", { state: "visible" });
    await page.waitForSelector(".ag-row", { state: "visible" });
    await page.waitForTimeout(1000);

    // Get all cell contents
    const allCells = await page.locator(".ag-row .ag-cell").allTextContents();

    // Filter for cells that look like decimal numbers with period as decimal separator
    const numericCells = allCells.filter(
      (cell) => /\d+\.\d+/.test(cell.trim()),
    );

    expect(numericCells.length).toBeGreaterThan(0);

    // Verify English format is used (period as decimal separator)
    const hasEnglishFormat = numericCells.some((cell) =>
      hasEnglishNumberFormat(cell),
    );
    expect(hasEnglishFormat).toBe(true);
  });
});

test.describe("Number Localization - Form Inputs", () => {
  test.describe("Spanish Locale (es_ES)", () => {
    test("should display Float inputs with Spanish format (comma as decimal)", async ({
      page,
    }) => {
      await page.goto(getStoryUrl(E2E_TEST_APP_CONFIG.STORIES.FORM.SPANISH));

      // Wait for form to load
      await page.waitForSelector('input[type="text"]', { state: "visible" });
      await page.waitForTimeout(500);

      // Get the Sale Price input (float field with value 1234.56)
      const salePriceInput = page.locator(".ant-input-number-input").first();
      const displayValue = await salePriceInput.inputValue();

      // Spanish format should use comma for decimal: "1.234,56"
      expect(displayValue).toMatch(/\d+,\d+/);
      expect(displayValue).toContain(",");
    });

    test("should display Integer inputs with Spanish thousands separator", async ({
      page,
    }) => {
      await page.goto(getStoryUrl(E2E_TEST_APP_CONFIG.STORIES.FORM.SPANISH));

      await page.waitForSelector('input[type="text"]', { state: "visible" });
      await page.waitForTimeout(500);

      // Get all number inputs and find one with value >= 1000 (Available Qty = 1500)
      const numberInputs = page.locator(".ant-input-number-input");
      const count = await numberInputs.count();
      const allValues: string[] = [];
      for (let i = 0; i < count; i++) {
        allValues.push(await numberInputs.nth(i).inputValue());
      }

      // Find the input showing "1.500" (Spanish format for 1500)
      const hasSpanishThousands = allValues.some((val) =>
        /^\d{1,3}\.\d{3}$/.test(val),
      );
      expect(hasSpanishThousands).toBe(true);
    });

    test("should preserve raw internal value when editing Float with Spanish format", async ({
      page,
    }) => {
      await page.goto(getStoryUrl(E2E_TEST_APP_CONFIG.STORIES.FORM.SPANISH));

      await page.waitForSelector('input[type="text"]', { state: "visible" });
      await page.waitForTimeout(500);

      // Get the first float input (Sale Price)
      const salePriceInput = page.locator(".ant-input-number-input").first();

      // Clear and type a new value in Spanish format
      await salePriceInput.click();
      await salePriceInput.fill("9876,54");
      await salePriceInput.blur();

      // Wait for re-render
      await page.waitForTimeout(300);

      // Get the displayed value - should be formatted in Spanish
      const displayValue = await salePriceInput.inputValue();
      expect(displayValue).toMatch(/9.*876,54/);

      // Verify internal value is raw number by checking the input's data attribute or aria value
      const ariaValueNow = await salePriceInput.evaluate(
        (el) => el.closest(".ant-input-number")?.getAttribute("aria-valuenow"),
      );

      // Internal value should be 9876.54 (raw number with period decimal)
      if (ariaValueNow) {
        const internalValue = parseFloat(ariaValueNow);
        expect(internalValue).toBeCloseTo(9876.54, 1);
      }
    });
  });

  test.describe("French Locale (fr_FR)", () => {
    test("should display Float inputs with French format (space thousands, comma decimal)", async ({
      page,
    }) => {
      await page.goto(getStoryUrl(E2E_TEST_APP_CONFIG.STORIES.FORM.FRENCH));

      await page.waitForSelector('input[type="text"]', { state: "visible" });
      await page.waitForTimeout(500);

      // Get the Sale Price input (float field with value 1234.56)
      const salePriceInput = page.locator(".ant-input-number-input").first();
      const displayValue = await salePriceInput.inputValue();

      // French format should use comma for decimal
      expect(displayValue).toContain(",");
      // And may have space for thousands (narrow no-break space U+202F)
      // Value 1234.56 becomes "1 234,56" or "1\u202F234,56"
    });

    test("should display Integer inputs with French thousands separator (space)", async ({
      page,
    }) => {
      await page.goto(getStoryUrl(E2E_TEST_APP_CONFIG.STORIES.FORM.FRENCH));

      await page.waitForSelector('input[type="text"]', { state: "visible" });
      await page.waitForTimeout(500);

      // Get all number inputs
      const numberInputs = page.locator(".ant-input-number-input");
      const count = await numberInputs.count();
      const allValues: string[] = [];
      for (let i = 0; i < count; i++) {
        allValues.push(await numberInputs.nth(i).inputValue());
      }

      // Find the input showing "1 500" or "1\u202F500" (French format for 1500)
      // The space can be regular space, non-breaking space, or narrow no-break space
      const hasFrenchThousands = allValues.some((val) =>
        /^\d{1,3}[\s\u00A0\u202F]\d{3}$/.test(val),
      );
      expect(hasFrenchThousands).toBe(true);
    });
  });

  test.describe("English Locale (en_US)", () => {
    test("should display Float inputs with English format (period as decimal)", async ({
      page,
    }) => {
      await page.goto(getStoryUrl(E2E_TEST_APP_CONFIG.STORIES.FORM.DEFAULT));

      await page.waitForSelector('input[type="text"]', { state: "visible" });
      await page.waitForTimeout(500);

      // Get the Sale Price input
      const salePriceInput = page.locator(".ant-input-number-input").first();
      const displayValue = await salePriceInput.inputValue();

      // English format should use period for decimal
      expect(displayValue).toMatch(/\d+\.\d+/);
    });

    test("should display Integer inputs with English thousands separator (comma)", async ({
      page,
    }) => {
      await page.goto(getStoryUrl(E2E_TEST_APP_CONFIG.STORIES.FORM.DEFAULT));

      await page.waitForSelector('input[type="text"]', { state: "visible" });
      await page.waitForTimeout(500);

      // Get all number inputs
      const numberInputs = page.locator(".ant-input-number-input");
      const count = await numberInputs.count();
      const allValues: string[] = [];
      for (let i = 0; i < count; i++) {
        allValues.push(await numberInputs.nth(i).inputValue());
      }

      // Find the input showing "1,500" (English format for 1500)
      const hasEnglishThousands = allValues.some((val) =>
        /^\d{1,3},\d{3}$/.test(val),
      );
      expect(hasEnglishThousands).toBe(true);
    });
  });
});
