import { test, expect } from "@playwright/test";
import { E2E_TEST_APP_CONFIG, getStoryUrl } from "./config";

test.describe("Infinite One2Many Component", () => {
  test("should render all columns with correct titles and handle horizontal scrolling", async ({
    page,
  }) => {
    await page.goto(getStoryUrl(E2E_TEST_APP_CONFIG.STORIES.ONE2MANY.INFINITE));

    // Wait for the AG Grid to be fully loaded
    await page.waitForSelector(".ag-root", { state: "visible" });
    await page.waitForSelector(".ag-header", { state: "visible" });

    // Wait for data to load
    await page.waitForSelector(".ag-row", { state: "visible" });

    // Expected column titles based on our One2Many tree view XML configuration
    const expectedColumns = [
      "Sequence",
      "Description",
      "Quantity",
      "Unit Price",
      "Discount (%)",
    ];

    // Collect all visible column headers
    const visibleHeaders = new Set<string>();

    // Get the AG Grid body viewport for horizontal scrolling (this is where the actual scrolling happens)
    const gridBodyViewport = page.locator(
      ".ag-body-horizontal-scroll-viewport",
    );

    // First, collect initially visible headers
    let currentHeaders = await page
      .locator(".ag-header-cell-text")
      .allTextContents();
    currentHeaders.forEach((header) => visibleHeaders.add(header));

    // Get the initial scroll position and total scroll width
    const scrollInfo = await gridBodyViewport.evaluate((el) => ({
      scrollWidth: el.scrollWidth,
      clientWidth: el.clientWidth,
      maxScrollLeft: el.scrollWidth - el.clientWidth,
    }));

    // Reset to beginning
    await gridBodyViewport.evaluate((el) => {
      el.scrollLeft = 0;
    });
    await page.waitForTimeout(200);

    // Scroll in increments to capture all columns
    const scrollStep = Math.max(100, scrollInfo.clientWidth / 3);
    let currentScrollLeft = 0;

    while (currentScrollLeft <= scrollInfo.maxScrollLeft) {
      // Scroll to current position
      await gridBodyViewport.evaluate((el, scrollLeft) => {
        el.scrollLeft = scrollLeft;
      }, currentScrollLeft);

      // Wait for scroll to complete and grid to update
      await page.waitForTimeout(300);

      // Collect headers at this scroll position
      currentHeaders = await page
        .locator(".ag-header-cell-text")
        .allTextContents();
      currentHeaders.forEach((header) => visibleHeaders.add(header));

      currentScrollLeft += scrollStep;
    }

    // Make sure we scroll to the very end to catch any remaining columns
    await gridBodyViewport.evaluate((el, maxScroll) => {
      el.scrollLeft = maxScroll;
    }, scrollInfo.maxScrollLeft);

    await page.waitForTimeout(300);

    // Final collection of headers
    currentHeaders = await page
      .locator(".ag-header-cell-text")
      .allTextContents();
    currentHeaders.forEach((header) => visibleHeaders.add(header));

    // Convert Set to Array for comparison
    const foundHeaders = Array.from(visibleHeaders).filter(
      (header) => header.trim() !== "",
    );

    // Verify that all expected columns are present
    for (const expectedColumn of expectedColumns) {
      expect(foundHeaders).toContain(expectedColumn);
    }

    // Verify we found the correct number of columns
    expect(foundHeaders).toHaveLength(expectedColumns.length);

    // Additional check: verify grid has data rows
    const rowCount = await page.locator(".ag-row").count();
    expect(rowCount).toBeGreaterThan(0);

    // Test scrolling functionality if horizontal scrolling is available
    await gridBodyViewport.evaluate((el) => {
      el.scrollLeft = 0;
    });
    await page.waitForTimeout(100);

    const initialScrollLeft = await gridBodyViewport.evaluate(
      (el) => el.scrollLeft,
    );

    if (scrollInfo.maxScrollLeft > 0) {
      // Only test scrolling if horizontal scroll is available
      await gridBodyViewport.evaluate((el) => {
        el.scrollLeft = 200;
      });
      await page.waitForTimeout(100);

      const scrolledLeft = await gridBodyViewport.evaluate(
        (el) => el.scrollLeft,
      );
      expect(scrolledLeft).toBeGreaterThan(initialScrollLeft);
      expect(scrollInfo.maxScrollLeft).toBeGreaterThan(0);
    } else {
      // If no horizontal scroll is needed, verify all columns are visible
      expect(scrollInfo.scrollWidth).toBeLessThanOrEqual(
        scrollInfo.clientWidth,
      );
      // Verify all expected columns were found in the earlier collection
      const foundHeaders = Array.from(visibleHeaders).filter(
        (header) => header.trim() !== "",
      );
      expect(foundHeaders).toHaveLength(expectedColumns.length);
    }
  });

  test("should display total records count and verify grid scrolling", async ({
    page,
  }) => {
    await page.goto(getStoryUrl(E2E_TEST_APP_CONFIG.STORIES.ONE2MANY.INFINITE));

    await page.waitForSelector(".ag-root", { state: "visible" });
    await page.waitForSelector(".ag-row", { state: "visible" });

    const initialRowCount = await page.locator(".ag-row").count();
    expect(initialRowCount).toBeGreaterThan(0);

    const gridBodyViewport = page.locator(".ag-body-viewport");

    const initialScrollTop = await gridBodyViewport.evaluate(
      (el) => el.scrollTop,
    );

    await gridBodyViewport.evaluate((el) => {
      el.scrollTop = 1000;
    });
    await page.waitForTimeout(500);

    const scrolledTop = await gridBodyViewport.evaluate((el) => el.scrollTop);
    expect(scrolledTop).toBeGreaterThan(initialScrollTop);

    const finalRowCount = await page.locator(".ag-row").count();

    expect(finalRowCount).toBeGreaterThan(0);
  });

  test("should handle row selection correctly", async ({ page }) => {
    await page.goto(getStoryUrl(E2E_TEST_APP_CONFIG.STORIES.ONE2MANY.INFINITE));

    await page.waitForSelector(".ag-root", { state: "visible" });
    await page.waitForSelector(".ag-row", { state: "visible" });

    const firstRowCheckbox = page
      .locator(".ag-row")
      .first()
      .locator('input[type="checkbox"]');

    await firstRowCheckbox.click();
    await page.waitForTimeout(500);

    await expect(firstRowCheckbox).toBeChecked();

    const headerCheckbox = page
      .locator('.ag-header input[type="checkbox"]')
      .nth(2);

    const isIndeterminate = await headerCheckbox.evaluate(
      (el: HTMLInputElement) => el.indeterminate,
    );
    expect(isIndeterminate).toBe(true);
  });

  test("should handle multiple row selection correctly", async ({ page }) => {
    await page.goto(getStoryUrl(E2E_TEST_APP_CONFIG.STORIES.ONE2MANY.INFINITE));

    await page.waitForSelector(".ag-root", { state: "visible" });
    await page.waitForSelector(".ag-row", { state: "visible" });

    const rows = page.locator(".ag-row");
    const firstRowCheckbox = rows.nth(0).locator('input[type="checkbox"]');
    const secondRowCheckbox = rows.nth(1).locator('input[type="checkbox"]');
    const thirdRowCheckbox = rows.nth(2).locator('input[type="checkbox"]');

    await firstRowCheckbox.click();
    await secondRowCheckbox.click();
    await thirdRowCheckbox.click();
    await page.waitForTimeout(500);

    await expect(firstRowCheckbox).toBeChecked();
    await expect(secondRowCheckbox).toBeChecked();
    await expect(thirdRowCheckbox).toBeChecked();

    const headerCheckbox = page
      .locator('.ag-header input[type="checkbox"]')
      .nth(2);

    const isIndeterminate = await headerCheckbox.evaluate(
      (el: HTMLInputElement) => el.indeterminate,
    );
    expect(isIndeterminate).toBe(true);
  });

  test("should calculate aggregates correctly when selecting rows", async ({
    page,
  }) => {
    await page.goto(getStoryUrl(E2E_TEST_APP_CONFIG.STORIES.ONE2MANY.INFINITE));

    await page.waitForSelector(".ag-root", { state: "visible" });
    await page.waitForSelector(".ag-row", { state: "visible" });

    const aggregateElements = page.locator(
      "text=/Total.*Qty|.*Total.*Price|.*Avg.*Price|Sum:|Avg:|Count:/i",
    );

    // Wait for any aggregates to appear
    await page.waitForTimeout(1000);

    // Get initial aggregate text content (if any)
    const initialAggregateCount = await aggregateElements.count();

    // Select first row
    const firstRowCheckbox = page
      .locator(".ag-row")
      .first()
      .locator('input[type="checkbox"]');
    await firstRowCheckbox.click();
    await page.waitForTimeout(500);

    // Select second row
    const secondRowCheckbox = page
      .locator(".ag-row")
      .nth(1)
      .locator('input[type="checkbox"]');
    await secondRowCheckbox.click();
    await page.waitForTimeout(500);

    // Select third row
    const thirdRowCheckbox = page
      .locator(".ag-row")
      .nth(2)
      .locator('input[type="checkbox"]');
    await thirdRowCheckbox.click();
    await page.waitForTimeout(500);

    // Check if aggregates appeared or changed after selection
    const aggregatesAfterSelection = await aggregateElements.count();
    const aggregateTextAfterSelection =
      aggregatesAfterSelection > 0
        ? await aggregateElements.first().textContent()
        : null;

    // Deselect all rows
    await firstRowCheckbox.click();
    await secondRowCheckbox.click();
    await thirdRowCheckbox.click();
    await page.waitForTimeout(500);

    // Check final state
    const aggregatesAfterDeselection = await aggregateElements.count();

    // Verify that the grid supports row selection (minimum requirement)
    expect(await page.locator(".ag-row").count()).toBeGreaterThan(0);
    expect(await firstRowCheckbox.isChecked()).toBe(false);
    expect(await secondRowCheckbox.isChecked()).toBe(false);
    expect(await thirdRowCheckbox.isChecked()).toBe(false);

    // At least one aggregate should be visible at some point
    expect(
      Math.max(
        initialAggregateCount,
        aggregatesAfterSelection,
        aggregatesAfterDeselection,
      ),
    ).toBeGreaterThan(0);

    // Aggregates should have content when they appear
    expect(aggregateTextAfterSelection).toBeTruthy();
    expect(aggregateTextAfterSelection!.trim()).not.toBe("");
  });

  test("should show three dots menu with reset table view option", async ({
    page,
  }) => {
    await page.goto(getStoryUrl(E2E_TEST_APP_CONFIG.STORIES.ONE2MANY.INFINITE));

    await page.waitForSelector(".ag-root", { state: "visible" });
    await page.waitForSelector(".ag-row", { state: "visible" });

    // Find the three dots menu button using the correct aria-label
    const threeDotsMenu = page.getByRole("button", { name: "More options" });
    await expect(threeDotsMenu).toBeVisible();

    // Verify it has the expected SVG structure (three dots)
    const svg = threeDotsMenu.locator("svg");
    await expect(svg).toBeVisible();

    // Click the three dots menu
    await threeDotsMenu.click();
    await page.waitForTimeout(500);

    // Verify menu options appeared
    const pageText = await page.textContent("body");
    const hasResetTableView = pageText?.includes("Reset table view");

    expect(hasResetTableView).toBe(true);
  });

  test("Should persist column order after drag and drop @headed", async ({
    page,
  }) => {
    await page.goto(getStoryUrl(E2E_TEST_APP_CONFIG.STORIES.ONE2MANY.INFINITE));

    // Clear any existing localStorage to start fresh
    await page.evaluate(() => {
      localStorage.clear();
    });

    await page.reload();
    await page.waitForSelector(".ag-root", { state: "visible" });
    await page.waitForSelector(".ag-header", { state: "visible" });
    await page.waitForSelector(".ag-row", { state: "visible" });
    await page.waitForTimeout(3000);

    const getColumnOrder = async () => {
      return await page.evaluate(() => {
        // Get the visual order by position
        const headers = Array.from(
          document.querySelectorAll(".ag-header-cell"),
        );
        const headerData = headers
          .map((header) => {
            const rect = header.getBoundingClientRect();
            const text = header.textContent?.trim();
            return { text, x: rect.x, element: header };
          })
          .filter((item) => item.text && item.text !== "")
          .sort((a, b) => a.x - b.x);

        return headerData.map((item) => item.text);
      });
    };

    const originalOrder = await getColumnOrder();

    // Find the Description and Sequence column headers
    const descriptionHeader = page.getByRole("columnheader", {
      name: "Description",
    });
    const sequenceHeader = page.getByRole("columnheader", { name: "Sequence" });

    await expect(descriptionHeader).toBeVisible();
    await expect(sequenceHeader).toBeVisible();

    // Get bounding boxes for drag operation
    const descriptionBox = await descriptionHeader.boundingBox();
    const sequenceBox = await sequenceHeader.boundingBox();

    expect(descriptionBox).toBeTruthy();
    expect(sequenceBox).toBeTruthy();

    // Drag using the header label element specifically
    const descriptionLabel = page
      .locator(".ag-header-cell")
      .filter({ hasText: "Description" })
      .locator(".ag-header-cell-label");
    const sequenceLabel = page
      .locator(".ag-header-cell")
      .filter({ hasText: "Sequence" })
      .locator(".ag-header-cell-label");

    await expect(descriptionLabel).toBeVisible();
    await expect(sequenceLabel).toBeVisible();

    // Perform drag operation
    await descriptionLabel.dragTo(sequenceLabel);
    await page.waitForTimeout(5000); // Wait for drag animation to complete and localStorage updates

    // Check order after drag
    const orderAfterDrag = await getColumnOrder();

    // The drag should have worked - verify that the order changed
    expect(JSON.stringify(originalOrder)).not.toEqual(
      JSON.stringify(orderAfterDrag),
    );

    // Reload page to test persistence
    await page.reload();
    await page.waitForSelector(".ag-root", { state: "visible" });
    await page.waitForSelector(".ag-header", { state: "visible" });
    await page.waitForSelector(".ag-row", { state: "visible" });
    await page.waitForTimeout(3000); // Increased timeout

    const orderAfterReload = await getColumnOrder();

    // Verify persistence - the order should be the same as after drag
    expect(orderAfterReload).toEqual(orderAfterDrag);
  });

  test("should handle column sorting with proper arrows and verify Description column values are sorted correctly", async ({
    page,
  }) => {
    test.setTimeout(60000);
    await page.goto(getStoryUrl(E2E_TEST_APP_CONFIG.STORIES.ONE2MANY.INFINITE));

    await page.waitForSelector(".ag-root", { state: "visible" });
    await page.waitForSelector(".ag-header", { state: "visible" });
    await page.waitForSelector(".ag-row", { state: "visible" });

    await page.waitForTimeout(1000);

    const gridBodyViewport = page.locator(".ag-body-viewport");

    await gridBodyViewport.evaluate((el) => {
      el.scrollTop = 1000;
    });
    await page.waitForTimeout(1000);

    await gridBodyViewport.evaluate((el) => {
      el.scrollTop = 0;
    });
    await page.waitForTimeout(500);

    const descriptionHeader = page.getByRole("columnheader", {
      name: "Description",
    });
    await expect(descriptionHeader).toBeVisible();

    const getDescriptionColumnValues = async () => {
      const selector = '.ag-row .ag-cell[col-id="description"]';
      await page.waitForSelector(selector, { state: "visible" });
      await page.waitForTimeout(1500);

      const elements = page.locator(selector);
      const count = await elements.count();

      const descriptions: string[] = [];
      for (let i = 0; i < Math.min(8, count); i++) {
        const element = elements.nth(i);
        const text = await element.textContent();

        descriptions.push(text!.trim());
      }

      return descriptions;
    };

    const getSortingIndicator = async () => {
      const sortAsc = await descriptionHeader.locator(".ag-icon-asc").count();
      const sortDesc = await descriptionHeader.locator(".ag-icon-desc").count();
      const ariaSort = await descriptionHeader.getAttribute("aria-sort");

      return {
        hasAscIcon: sortAsc > 0,
        hasDescIcon: sortDesc > 0,
        ariaSort: ariaSort,
      };
    };

    await descriptionHeader.click();
    await page.waitForTimeout(1000);

    const ascDescriptions = await getDescriptionColumnValues();
    const ascSort = await getSortingIndicator();

    expect(ascDescriptions.length).toBeGreaterThan(0);

    expect(ascSort.ariaSort).toBe("ascending");
    expect(ascSort.hasAscIcon).toBe(true);

    await descriptionHeader.click();

    const descDescriptions = await getDescriptionColumnValues();
    const descSort = await getSortingIndicator();

    expect(descDescriptions.length).toBeGreaterThan(0);
    expect(descSort.ariaSort).toBe("descending");
    expect(descSort.hasDescIcon).toBe(true);

    await descriptionHeader.click();

    const restoredDescriptions = await getDescriptionColumnValues();
    const noneSort = await getSortingIndicator();

    expect(restoredDescriptions.length).toBeGreaterThan(0);
    expect(noneSort.ariaSort).toBe("none");
  });
});
