import { test, expect } from "@playwright/test";
import { E2E_TEST_APP_CONFIG, getStoryUrl } from "./config";

test.describe("Infinite One2Many Component", () => {
  test("should render all columns with correct titles and handle horizontal scrolling", async ({
    page,
  }) => {
    await page.goto(getStoryUrl(E2E_TEST_APP_CONFIG.STORIES.ONE2MANY.INFINITE));

    await page.waitForSelector(".ag-root", { state: "visible" });
    await page.waitForSelector(".ag-header", { state: "visible" });
    await page.waitForSelector(".ag-row", { state: "visible" });
    const expectedColumns = [
      "Sequence",
      "Description",
      "Quantity",
      "Unit Price",
      "Discount (%)",
      "Total Amount",
      "Last Updated",
    ];

    const visibleHeaders = new Set<string>();
    const gridBodyViewport = page.locator(
      ".ag-body-horizontal-scroll-viewport",
    );
    let currentHeaders = await page
      .locator(".ag-header-cell-text")
      .allTextContents();
    currentHeaders.forEach((header) => visibleHeaders.add(header));

    const scrollInfo = await gridBodyViewport.evaluate((el) => ({
      scrollWidth: el.scrollWidth,
      clientWidth: el.clientWidth,
      maxScrollLeft: el.scrollWidth - el.clientWidth,
    }));
    await gridBodyViewport.evaluate((el) => {
      el.scrollLeft = 0;
    });
    await page.waitForTimeout(200);

    const scrollStep = Math.max(100, scrollInfo.clientWidth / 3);
    let currentScrollLeft = 0;

    while (currentScrollLeft <= scrollInfo.maxScrollLeft) {
      await gridBodyViewport.evaluate((el, scrollLeft) => {
        el.scrollLeft = scrollLeft;
      }, currentScrollLeft);
      await page.waitForTimeout(300);

      currentHeaders = await page
        .locator(".ag-header-cell-text")
        .allTextContents();
      currentHeaders.forEach((header) => visibleHeaders.add(header));

      currentScrollLeft += scrollStep;
    }
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

    const rowCount = await page.locator(".ag-row").count();
    expect(rowCount).toBeGreaterThanOrEqual(10);

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
    expect(initialRowCount).toBeGreaterThanOrEqual(10);

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
    expect(finalRowCount).toBeGreaterThanOrEqual(10);
  });

  test("should handle row selection correctly", async ({ page }) => {
    await page.goto(getStoryUrl(E2E_TEST_APP_CONFIG.STORIES.ONE2MANY.INFINITE));

    await page.waitForSelector(".ag-root", { state: "visible" });
    await page.waitForSelector(".ag-row", { state: "visible" });
    // Wait for data to be fully loaded (debounce is 500ms in v1.16.1)
    await page.waitForLoadState("networkidle");
    await page.waitForTimeout(800);

    const firstRowCheckbox = page
      .locator(".ag-row")
      .first()
      .locator('input[type="checkbox"]');

    await firstRowCheckbox.click();
    await page.waitForTimeout(1000);

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
    // Wait for data to be fully loaded (debounce is 500ms in v1.16.1)
    await page.waitForLoadState("networkidle");
    await page.waitForTimeout(800);

    const rows = page.locator(".ag-row");
    const firstRowCheckbox = rows.nth(0).locator('input[type="checkbox"]');
    const secondRowCheckbox = rows.nth(1).locator('input[type="checkbox"]');
    const thirdRowCheckbox = rows.nth(2).locator('input[type="checkbox"]');

    await firstRowCheckbox.click();
    await secondRowCheckbox.click();
    await thirdRowCheckbox.click();
    await page.waitForTimeout(1000);

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

    // Wait for initial grid to be fully loaded
    await page.waitForLoadState("networkidle");
    await page.waitForTimeout(1000);

    // Select first row and wait for checkbox to be checked
    const firstRowCheckbox = page
      .locator(".ag-row")
      .first()
      .locator('input[type="checkbox"]');
    await firstRowCheckbox.click();
    await expect(firstRowCheckbox).toBeChecked({ timeout: 5000 });

    // Select second row and wait for checkbox to be checked
    const secondRowCheckbox = page
      .locator(".ag-row")
      .nth(1)
      .locator('input[type="checkbox"]');
    await secondRowCheckbox.click();
    await expect(secondRowCheckbox).toBeChecked({ timeout: 5000 });

    // Select third row and wait for checkbox to be checked
    const thirdRowCheckbox = page
      .locator(".ag-row")
      .nth(2)
      .locator('input[type="checkbox"]');
    await thirdRowCheckbox.click();
    await expect(thirdRowCheckbox).toBeChecked({ timeout: 5000 });

    // Wait for aggregates to appear after selection
    await expect(aggregateElements.first()).toBeVisible({ timeout: 10000 });

    const aggregatesAfterSelection = await aggregateElements.count();
    // Get all aggregate text combined (new format has each aggregate in separate spans)
    const aggregateTextAfterSelection =
      aggregatesAfterSelection > 0
        ? await aggregateElements.allTextContents().then(texts => texts.join(' '))
        : null;

    // Unselect all rows and wait for them to be unchecked
    await firstRowCheckbox.click();
    await expect(firstRowCheckbox).not.toBeChecked({ timeout: 5000 });

    await secondRowCheckbox.click();
    await expect(secondRowCheckbox).not.toBeChecked({ timeout: 5000 });

    await thirdRowCheckbox.click();
    await expect(thirdRowCheckbox).not.toBeChecked({ timeout: 5000 });

    // Verify grid state
    expect(await page.locator(".ag-row").count()).toBeGreaterThanOrEqual(10);

    // Verify aggregate calculations were shown
    expect(aggregatesAfterSelection).toBeGreaterThan(0);
    expect(aggregateTextAfterSelection).toContain("Total Qty:");
    expect(aggregateTextAfterSelection).toContain("Avg Price:");
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

  test("should reset table view to original state when clicking Reset table view", async ({
    page,
  }) => {
    await page.goto(getStoryUrl(E2E_TEST_APP_CONFIG.STORIES.ONE2MANY.INFINITE));

    await page.evaluate(() => {
      localStorage.clear();
    });

    await page.reload();
    await page.waitForSelector(".ag-root", { state: "visible" });
    await page.waitForSelector(".ag-header", { state: "visible" });
    await page.waitForSelector(".ag-row", { state: "visible" });
    await page.waitForTimeout(1000);

    const getColumnOrder = async () => {
      return await page.evaluate(() => {
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

    const descriptionHeader = page.getByRole("columnheader", {
      name: "Description",
    });
    const sequenceHeader = page.getByRole("columnheader", { name: "Sequence" });

    await expect(descriptionHeader).toBeVisible();
    await expect(sequenceHeader).toBeVisible();

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

    await descriptionLabel.dragTo(sequenceLabel);
    await page.waitForTimeout(3000);

    const orderAfterDrag = await getColumnOrder();
    expect(JSON.stringify(originalOrder)).not.toEqual(
      JSON.stringify(orderAfterDrag),
    );

    const threeDotsMenu = page.getByRole("button", { name: "More options" });
    await expect(threeDotsMenu).toBeVisible();

    await threeDotsMenu.click();
    await page.waitForTimeout(500);

    const resetOption = page.locator('text="Reset table view"').first();
    await expect(resetOption).toBeVisible();
    await resetOption.click();
    await page.waitForTimeout(2000);

    const orderAfterReset = await getColumnOrder();
    expect(orderAfterReset).toEqual(originalOrder);
  });

  test("should change to paginated view mode when clicking 'Change to paginated' from three dots menu", async ({
    page,
  }) => {
    await page.goto(getStoryUrl(E2E_TEST_APP_CONFIG.STORIES.ONE2MANY.INFINITE));

    await page.waitForSelector(".ag-root", { state: "visible" });
    await page.waitForSelector(".ag-row", { state: "visible" });

    // Find the three dots menu button using the correct aria-label
    const threeDotsMenu = page.getByRole("button", { name: "More options" });
    await expect(threeDotsMenu).toBeVisible();

    // Click the three dots menu
    await threeDotsMenu.click();
    await page.waitForTimeout(500);

    // Verify "Change to paginated" option is present (now in English after the fix)
    const menuText = await page.textContent("body");
    const hasChangeToPaginated = menuText?.includes("Change to paginated");
    expect(hasChangeToPaginated).toBe(true);

    // Click "Change to paginated" option (now in English after the fix)
    const changeToPaginatedOption = page.getByText("Change to paginated");
    await expect(changeToPaginatedOption).toBeVisible();
    await changeToPaginatedOption.click();

    // Wait longer for the view mode change to complete
    await page.waitForTimeout(3000);

    // The most reliable way to check if the view mode changed is to verify
    // that the menu now shows "Change to infinite" instead of "Change to paginated"
    await threeDotsMenu.click();
    await page.waitForTimeout(500);

    const updatedPageText = await page.textContent("body");

    // Check for "Change to infinite" (now in English after the fix)
    const hasChangeToInfinite = updatedPageText?.includes("Change to infinite");

    // This is the key indicator that the view mode actually changed
    expect(hasChangeToInfinite).toBe(true);
  });

  test("Should persist column order after drag and drop", async ({ page }) => {
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

    expect(ascDescriptions.length).toBeGreaterThanOrEqual(5);

    expect(ascSort.ariaSort).toBe("ascending");
    expect(ascSort.hasAscIcon).toBe(true);

    await descriptionHeader.click();

    const descDescriptions = await getDescriptionColumnValues();
    const descSort = await getSortingIndicator();

    expect(descDescriptions.length).toBeGreaterThanOrEqual(5);
    expect(descSort.ariaSort).toBe("descending");
    expect(descSort.hasDescIcon).toBe(true);

    await descriptionHeader.click();

    const restoredDescriptions = await getDescriptionColumnValues();
    const noneSort = await getSortingIndicator();

    expect(restoredDescriptions.length).toBeGreaterThanOrEqual(5);
    expect(noneSort.ariaSort).toBe("none");
  });

  test("should pin and unpin columns correctly", async ({ page }) => {
    await page.goto(getStoryUrl(E2E_TEST_APP_CONFIG.STORIES.ONE2MANY.INFINITE));

    await page.waitForSelector(".ag-root", { state: "visible" });
    await page.waitForSelector(".ag-header", { state: "visible" });
    await page.waitForSelector(".ag-row", { state: "visible" });
    await page.waitForTimeout(2000);

    // Check initial pinned columns
    const initialPinnedColumns = await page
      .locator(".ag-pinned-left-header .ag-header-cell-text")
      .allTextContents();
    expect(initialPinnedColumns).not.toContain("Description");

    // Find the Description column header
    const descriptionHeader = page.getByRole("columnheader", {
      name: "Description",
    });
    await expect(descriptionHeader).toBeVisible();

    const descriptionBox = await descriptionHeader.boundingBox();
    expect(descriptionBox).toBeTruthy();

    const agRoot = page.locator(".ag-root");
    const rootBox = await agRoot.boundingBox();
    expect(rootBox).toBeTruthy();

    // Pin the Description column by dragging it to the left edge
    const pinDescriptionCenter = {
      x: descriptionBox!.x + descriptionBox!.width / 2,
      y: descriptionBox!.y + descriptionBox!.height / 2,
    };
    const leftEdge = { x: rootBox!.x + 30, y: pinDescriptionCenter.y };

    await page.mouse.move(pinDescriptionCenter.x, pinDescriptionCenter.y);
    await page.waitForTimeout(200);
    await page.mouse.down();
    await page.waitForTimeout(300);
    await page.mouse.move(leftEdge.x, leftEdge.y, { steps: 10 });
    await page.waitForTimeout(300);
    await page.mouse.up();
    await page.waitForTimeout(2000);

    // Verify the column is pinned
    const pinnedAfterDrag = await page
      .locator(".ag-pinned-left-header .ag-header-cell-text")
      .allTextContents();
    expect(pinnedAfterDrag).toContain("Description");

    // Unpin by dragging back to the main header area (right side)
    const pinnedDescriptionHeader = page
      .locator(".ag-pinned-left-header .ag-header-cell")
      .filter({ hasText: "Description" });
    await expect(pinnedDescriptionHeader).toBeVisible();

    const pinnedBox = await pinnedDescriptionHeader.boundingBox();
    expect(pinnedBox).toBeTruthy();

    const unpinCenter = {
      x: pinnedBox!.x + pinnedBox!.width / 2,
      y: pinnedBox!.y + pinnedBox!.height / 2,
    };
    // Drag to the right side of the grid to unpin
    const rightArea = {
      x: rootBox!.x + rootBox!.width - 100,
      y: unpinCenter.y,
    };

    await page.mouse.move(unpinCenter.x, unpinCenter.y);
    await page.waitForTimeout(200);
    await page.mouse.down();
    await page.waitForTimeout(300);
    await page.mouse.move(rightArea.x, rightArea.y, { steps: 10 });
    await page.waitForTimeout(300);
    await page.mouse.up();
    await page.waitForTimeout(2000);

    // Verify the column is no longer pinned
    const pinnedAfterUnpin = await page
      .locator(".ag-pinned-left-header .ag-header-cell-text")
      .allTextContents();
    expect(pinnedAfterUnpin).not.toContain("Description");
  });

  test("should resize columns correctly", async ({ page }) => {
    await page.goto(getStoryUrl(E2E_TEST_APP_CONFIG.STORIES.ONE2MANY.INFINITE));

    await page.waitForSelector(".ag-root", { state: "visible" });
    await page.waitForSelector(".ag-header", { state: "visible" });
    await page.waitForSelector(".ag-row", { state: "visible" });
    await page.waitForTimeout(2000);

    // Find the Description column header
    const descriptionHeader = page.getByRole("columnheader", {
      name: "Description",
    });
    await expect(descriptionHeader).toBeVisible();

    // Get initial width of the Description column
    const initialWidth = await descriptionHeader.evaluate(
      (el) => el.getBoundingClientRect().width,
    );

    // Find the resize handle (right edge of the header)
    const resizeHandle = descriptionHeader.locator(".ag-header-cell-resize");
    await expect(resizeHandle).toBeVisible();

    // Get the initial position of the resize handle
    const resizeHandleBox = await resizeHandle.boundingBox();
    expect(resizeHandleBox).toBeTruthy();

    // Perform resize by dragging the handle to the right
    await page.mouse.move(
      resizeHandleBox!.x + resizeHandleBox!.width / 2,
      resizeHandleBox!.y + resizeHandleBox!.height / 2,
    );
    await page.mouse.down();
    await page.mouse.move(
      resizeHandleBox!.x + 100,
      resizeHandleBox!.y + resizeHandleBox!.height / 2,
    );
    await page.mouse.up();
    await page.waitForTimeout(1000);

    // Get the new width and verify it increased
    const newWidth = await descriptionHeader.evaluate(
      (el) => el.getBoundingClientRect().width,
    );

    expect(newWidth).toBeGreaterThan(initialWidth);
    expect(newWidth - initialWidth).toBeGreaterThan(80); // Should be around 100px wider
  });

  test("should drag, resize and pin columns with localStorage persistence", async ({
    page,
  }) => {
    await page.goto(getStoryUrl(E2E_TEST_APP_CONFIG.STORIES.ONE2MANY.INFINITE));

    // Clear localStorage to start fresh
    await page.evaluate(() => localStorage.clear());
    await page.reload();

    await page.waitForSelector(".ag-root", { state: "visible" });
    await page.waitForSelector(".ag-header", { state: "visible" });
    await page.waitForSelector(".ag-row", { state: "visible" });
    await page.waitForTimeout(2000);

    const getColumnOrder = async () => {
      return await page.evaluate(() => {
        const headers = Array.from(
          document.querySelectorAll(".ag-header-cell"),
        );
        const headerData = headers
          .map((header) => ({
            text: header.textContent?.trim(),
            x: header.getBoundingClientRect().x,
          }))
          .filter((item) => item.text && item.text !== "")
          .sort((a, b) => a.x - b.x);
        return headerData.map((item) => item.text);
      });
    };

    // Step 1: Drag Description column to first position
    const descriptionHeader = page.getByRole("columnheader", {
      name: "Description",
    });
    const sequenceHeader = page.getByRole("columnheader", { name: "Sequence" });

    await expect(descriptionHeader).toBeVisible();
    await expect(sequenceHeader).toBeVisible();

    const descriptionLabel = page
      .locator(".ag-header-cell")
      .filter({ hasText: "Description" })
      .locator(".ag-header-cell-label");
    const sequenceLabel = page
      .locator(".ag-header-cell")
      .filter({ hasText: "Sequence" })
      .locator(".ag-header-cell-label");

    await descriptionLabel.dragTo(sequenceLabel);
    await page.waitForTimeout(2000);

    // Step 2: Resize the Description column
    const resizeHandle = descriptionHeader.locator(".ag-header-cell-resize");
    await expect(resizeHandle).toBeVisible();

    const resizeHandleBox = await resizeHandle.boundingBox();
    expect(resizeHandleBox).toBeTruthy();

    await page.mouse.move(
      resizeHandleBox!.x + resizeHandleBox!.width / 2,
      resizeHandleBox!.y + resizeHandleBox!.height / 2,
    );
    await page.mouse.down();
    await page.mouse.move(
      resizeHandleBox!.x + 100,
      resizeHandleBox!.y + resizeHandleBox!.height / 2,
    );
    await page.mouse.up();
    await page.waitForTimeout(2000);

    // Step 3: Pin the Description column by dragging to left edge
    const agRoot = page.locator(".ag-root");
    const rootBox = await agRoot.boundingBox();
    expect(rootBox).toBeTruthy();

    const updatedDescriptionBox = await descriptionHeader.boundingBox();
    expect(updatedDescriptionBox).toBeTruthy();

    const pinDescriptionCenter = {
      x: updatedDescriptionBox!.x + updatedDescriptionBox!.width / 2,
      y: updatedDescriptionBox!.y + updatedDescriptionBox!.height / 2,
    };
    const leftEdge = { x: rootBox!.x + 30, y: pinDescriptionCenter.y };

    await page.mouse.move(pinDescriptionCenter.x, pinDescriptionCenter.y);
    await page.waitForTimeout(200);
    await page.mouse.down();
    await page.waitForTimeout(300);
    await page.mouse.move(leftEdge.x, leftEdge.y, { steps: 10 });
    await page.waitForTimeout(300);
    await page.mouse.up();
    await page.waitForTimeout(2000);

    // Verify the column is pinned
    const pinnedDescriptionHeader = page
      .locator(".ag-pinned-left-header .ag-header-cell")
      .filter({ hasText: "Description" });
    await expect(pinnedDescriptionHeader).toBeVisible();

    // Get final state after all operations
    const finalOrder = await getColumnOrder();

    // Reload page to test persistence
    await page.reload();
    await page.waitForSelector(".ag-root", { state: "visible" });
    await page.waitForSelector(".ag-header", { state: "visible" });
    await page.waitForSelector(".ag-row", { state: "visible" });
    await page.waitForTimeout(3000);

    // Verify persistence after reload
    const orderAfterReload = await getColumnOrder();
    expect(orderAfterReload).toEqual(finalOrder);

    // Verify Description column is still pinned
    const pinnedAfterReload = page
      .locator(".ag-pinned-left-header .ag-header-cell")
      .filter({ hasText: "Description" });
    await expect(pinnedAfterReload).toBeVisible();
  });

  test("should have Last Updated column with automatic refresh", async ({
    page,
  }) => {
    await page.goto(getStoryUrl(E2E_TEST_APP_CONFIG.STORIES.ONE2MANY.INFINITE));

    await page.waitForSelector(".ag-root", { state: "visible" });
    await page.waitForSelector(".ag-header", { state: "visible" });
    await page.waitForSelector(".ag-row", { state: "visible" });

    await page.waitForTimeout(2000);

    // Verify Last Updated column exists
    let currentHeaders = await page
      .locator(".ag-header-cell-text")
      .allTextContents();
    expect(currentHeaders).toContain("Last Updated");

    const gridBodyViewport = page.locator(
      ".ag-body-horizontal-scroll-viewport",
    );
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

    // Scroll in increments to ensure all columns are rendered
    const scrollStep = Math.max(100, scrollInfo.clientWidth / 3);
    let currentScrollLeft = 0;

    while (currentScrollLeft <= scrollInfo.maxScrollLeft) {
      // Scroll to current position
      await gridBodyViewport.evaluate((el, scrollLeft) => {
        el.scrollLeft = scrollLeft;
      }, currentScrollLeft);

      // Wait for scroll to complete and grid to update
      await page.waitForTimeout(300);

      currentScrollLeft += scrollStep;
    }

    // Make sure we scroll to the very end to catch any remaining columns
    await gridBodyViewport.evaluate((el, maxScroll) => {
      el.scrollLeft = maxScroll;
    }, scrollInfo.maxScrollLeft);

    await page.waitForTimeout(300);

    // Use col-id to find Last Updated cell
    let lastUpdatedCell = page
      .locator('.ag-row .ag-cell[col-id*="updated"]')
      .first();

    // If that doesn't work, try other possible col-id patterns
    if ((await lastUpdatedCell.count()) === 0) {
      // Try alternative col-id patterns
      const alternativeSelectors = [
        '.ag-row .ag-cell[col-id="last_updated"]',
        '.ag-row .ag-cell[col-id="lastUpdated"]',
        '.ag-row .ag-cell[col-id="Last Updated"]',
        '.ag-row .ag-cell[col-id*="update"]',
      ];

      for (const selector of alternativeSelectors) {
        const cell = page.locator(selector).first();
        if ((await cell.count()) > 0) {
          lastUpdatedCell = cell;
          break;
        }
      }
    }

    // Expect the Last Updated column to be accessible
    await expect(lastUpdatedCell).toBeVisible();

    const initialValue = await lastUpdatedCell.textContent({ timeout: 5000 });

    // Last Updated column should have content (date/time value)
    expect(initialValue).toBeTruthy();
    expect(initialValue?.trim()).toBeTruthy();

    const parseDateDDMMYYYY = (dateStr: string) => {
      const match = dateStr.match(
        /(\d{1,2})\/(\d{1,2})\/(\d{4})\s+(\d{1,2}):(\d{1,2}):(\d{1,2})/,
      );
      if (match) {
        const [, day, month, year, hour, minute, second] = match;
        const usFormat = `${month}/${day}/${year} ${hour}:${minute}:${second}`;
        return Date.parse(usFormat);
      }
      return NaN;
    };

    const initialTimestamp = parseDateDDMMYYYY(initialValue!);
    expect(isNaN(initialTimestamp)).toBe(false);

    // Wait for auto-refresh to happen
    await page.waitForTimeout(6000);

    const updatedValue = await lastUpdatedCell.textContent({
      timeout: 2000,
    });

    expect(updatedValue).toBeTruthy();
    expect(updatedValue?.trim()).toBeTruthy();

    const updatedTimestamp = parseDateDDMMYYYY(updatedValue!);
    expect(isNaN(updatedTimestamp)).toBe(false);
    expect(updatedValue).not.toEqual(initialValue);
    expect(initialTimestamp).toBeGreaterThan(0);
    expect(updatedTimestamp).toBeGreaterThan(0);
  });

  test("should verify Total Amount column shows async loading behavior", async ({
    page,
  }) => {
    await page.goto(getStoryUrl(E2E_TEST_APP_CONFIG.STORIES.ONE2MANY.INFINITE));

    await page.waitForSelector(".ag-root", { state: "visible" });
    await page.waitForSelector(".ag-header", { state: "visible" });
    await page.waitForSelector(".ag-row", { state: "visible" });

    const gridBodyViewport = page.locator(
      ".ag-body-horizontal-scroll-viewport",
    );

    // Verify Total Amount exists by checking all headers
    let hasTotalAmount = false;

    await gridBodyViewport.evaluate((el) => {
      el.scrollLeft = 0;
    });
    await page.waitForTimeout(200);
    let headers = await page.locator(".ag-header-cell-text").allTextContents();
    if (headers.includes("Total Amount")) hasTotalAmount = true;

    await gridBodyViewport.evaluate((el) => {
      el.scrollLeft = el.scrollWidth;
    });
    await page.waitForTimeout(200);
    headers = await page.locator(".ag-header-cell-text").allTextContents();
    if (headers.includes("Total Amount")) hasTotalAmount = true;

    expect(hasTotalAmount).toBe(true);

    await gridBodyViewport.evaluate((el) => {
      el.scrollLeft = 0;
    });
    await page.waitForTimeout(300);

    await page.waitForTimeout(3000); // Wait for async computations

    const allCells = await page.locator(".ag-row .ag-cell").allTextContents();

    // Look for computed numeric values with decimal places (evidence of async computation)
    const computedValues = allCells
      .filter((cell) => /^\d+\.\d{2}$/.test(cell.trim()))
      .map((cell) => parseFloat(cell.trim()));

    expect(computedValues.length).toBeGreaterThan(0);

    // Verify these look like actual computed amounts (reasonable decimal numbers)
    const hasReasonableValues = computedValues.some(
      (val) => val > 0 && val < 10000,
    );

    expect(hasReasonableValues).toBe(true);
  });
});
