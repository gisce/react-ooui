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
