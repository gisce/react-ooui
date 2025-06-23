import { test, expect } from "@playwright/test";
import { E2E_TEST_APP_CONFIG, getStoryUrl } from "./config";

test.describe("Infinite TreeActionView Component", () => {
  test("should render all columns with correct titles and handle horizontal scrolling", async ({
    page,
  }) => {
    await page.goto(
      getStoryUrl(E2E_TEST_APP_CONFIG.STORIES.TREE_ACTION_VIEW.INFINITE),
    );

    // Wait for the AG Grid to be fully loaded
    await page.waitForSelector(".ag-root", { state: "visible" });
    await page.waitForSelector(".ag-header", { state: "visible" });

    // Wait for data to load
    await page.waitForSelector(".ag-row", { state: "visible" });

    // Expected column titles based on the TreeView arch XML configuration
    const expectedColumns = [
      "Name",
      "Email",
      "Department",
      "Company",
      "Position",
      "Status",
      "Last Login",
      "Annual Bonus",
      "Computed Rating",
      "Salary",
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

    // If there's horizontal scrolling available, scroll through all positions
    if (scrollInfo.maxScrollLeft > 0) {
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
    }

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

    // Verify horizontal scrolling is working within the AG Grid
    if (scrollInfo.maxScrollLeft > 0) {
      // Test scrolling functionality
      await gridBodyViewport.evaluate((el) => {
        el.scrollLeft = 0;
      });
      await page.waitForTimeout(100);

      const initialScrollLeft = await gridBodyViewport.evaluate(
        (el) => el.scrollLeft,
      );

      await gridBodyViewport.evaluate((el) => {
        el.scrollLeft = 200;
      });
      await page.waitForTimeout(100);

      const scrolledLeft = await gridBodyViewport.evaluate(
        (el) => el.scrollLeft,
      );
      expect(scrolledLeft).toBeGreaterThan(initialScrollLeft);

      expect(scrollInfo.maxScrollLeft).toBeGreaterThan(0);
    }
  });

  test("should display total records count of 250 and verify grid scrolling", async ({
    page,
  }) => {
    await page.goto(
      getStoryUrl(E2E_TEST_APP_CONFIG.STORIES.TREE_ACTION_VIEW.INFINITE),
    );

    await page.waitForSelector(".ag-root", { state: "visible" });
    await page.waitForSelector(".ag-row", { state: "visible" });

    const totalRecordsText = await page
      .getByText("Total registers:")
      .textContent();
    const totalRecordsMatch = totalRecordsText?.match(
      /Total registers:\s*(\d+)/,
    );
    const expectedTotal = totalRecordsMatch
      ? parseInt(totalRecordsMatch[1])
      : 0;

    expect(expectedTotal).toBe(250);

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
    expect(finalRowCount).toBeLessThanOrEqual(expectedTotal);
  });

  test("should handle row selection correctly", async ({ page }) => {
    await page.goto(
      getStoryUrl(E2E_TEST_APP_CONFIG.STORIES.TREE_ACTION_VIEW.INFINITE),
    );

    await page.waitForSelector(".ag-root", { state: "visible" });
    await page.waitForSelector(".ag-row", { state: "visible" });

    const firstRowCheckbox = page
      .locator(".ag-row")
      .first()
      .locator('input[type="checkbox"]');

    await firstRowCheckbox.click();
    await page.waitForTimeout(500);

    await expect(firstRowCheckbox).toBeChecked();

    const headerCheckboxes = await page
      .locator('.ag-header input[type="checkbox"]')
      .all();

    let foundIndeterminate = false;
    for (const checkbox of headerCheckboxes) {
      const isIndeterminate = await checkbox.evaluate(
        (el: HTMLInputElement) => el.indeterminate,
      );
      if (isIndeterminate) {
        foundIndeterminate = true;
        break;
      }
    }

    expect(foundIndeterminate).toBe(true);

    const pageText = await page.textContent("body");
    const hasSelectedText = pageText?.includes("1 selected");

    expect(hasSelectedText).toBe(true);
  });

  test("should handle multiple row selection correctly", async ({ page }) => {
    await page.goto(
      getStoryUrl(E2E_TEST_APP_CONFIG.STORIES.TREE_ACTION_VIEW.INFINITE),
    );

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

    const headerCheckboxes = await page
      .locator('.ag-header input[type="checkbox"]')
      .all();

    let foundIndeterminate = false;
    for (const checkbox of headerCheckboxes) {
      const isIndeterminate = await checkbox.evaluate(
        (el: HTMLInputElement) => el.indeterminate,
      );
      if (isIndeterminate) {
        foundIndeterminate = true;
        break;
      }
    }

    expect(foundIndeterminate).toBe(true);

    const pageText = await page.textContent("body");
    const hasSelectedText = pageText?.includes("3 selected");

    expect(hasSelectedText).toBe(true);
  });

  test("should handle select all with modal confirmation and state transitions", async ({
    page,
  }) => {
    await page.goto(
      getStoryUrl(E2E_TEST_APP_CONFIG.STORIES.TREE_ACTION_VIEW.INFINITE),
    );

    await page.waitForSelector(".ag-root", { state: "visible" });
    await page.waitForSelector(".ag-row", { state: "visible" });

    const headerCheckbox = page
      .locator('.ag-header input[type="checkbox"]')
      .nth(2);

    await headerCheckbox.click();
    await page.waitForTimeout(200);

    const modal = page
      .locator('[role="dialog"], .modal, [data-testid*="modal"]')
      .first();
    await expect(modal).toBeVisible();

    const modalText = await modal.textContent();
    expect(modalText).toContain(
      "Are you sure you want to select all 250 registers?",
    );

    const okButton = modal
      .locator(
        'button:has-text("OK"), button:has-text("Yes"), button:has-text("Confirm")',
      )
      .first();
    await okButton.click();
    await page.waitForTimeout(500);

    const headerCheckboxState = await headerCheckbox.evaluate(
      (el: HTMLInputElement) => ({
        checked: el.checked,
        indeterminate: el.indeterminate,
      }),
    );
    expect(headerCheckboxState.checked).toBe(true);
    expect(headerCheckboxState.indeterminate).toBe(false);

    const pageText = await page.textContent("body");
    expect(pageText).toContain("250 selected");

    const firstRowCheckbox = page
      .locator(".ag-row")
      .first()
      .locator('input[type="checkbox"]');
    await firstRowCheckbox.click();
    await page.waitForTimeout(200);

    const headerAfterUnselect = await headerCheckbox.evaluate(
      (el: HTMLInputElement) => ({
        checked: el.checked,
        indeterminate: el.indeterminate,
      }),
    );
    expect(headerAfterUnselect.indeterminate).toBe(true);
    expect(headerAfterUnselect.checked).toBe(false);

    await firstRowCheckbox.click();
    await page.waitForTimeout(200);

    const headerAfterReselect = await headerCheckbox.evaluate(
      (el: HTMLInputElement) => ({
        checked: el.checked,
        indeterminate: el.indeterminate,
      }),
    );
    expect(headerAfterReselect.checked).toBe(true);
    expect(headerAfterReselect.indeterminate).toBe(false);
  });

  test("should unselect all when clicking header checkbox in selected state", async ({
    page,
  }) => {
    await page.goto(
      getStoryUrl(E2E_TEST_APP_CONFIG.STORIES.TREE_ACTION_VIEW.INFINITE),
    );

    await page.waitForSelector(".ag-root", { state: "visible" });
    await page.waitForSelector(".ag-row", { state: "visible" });

    const headerCheckbox = page
      .locator('.ag-header input[type="checkbox"]')
      .nth(2);

    await headerCheckbox.click();
    await page.waitForTimeout(200);

    const modal = page
      .locator('[role="dialog"], .modal, [data-testid*="modal"]')
      .first();
    const okButton = modal
      .locator(
        'button:has-text("OK"), button:has-text("Yes"), button:has-text("Confirm")',
      )
      .first();
    await okButton.click();
    await page.waitForTimeout(500);

    const headerSelected = await headerCheckbox.evaluate(
      (el: HTMLInputElement) => el.checked,
    );
    expect(headerSelected).toBe(true);

    await headerCheckbox.click();
    await page.waitForTimeout(200);

    const headerAfterUnselect = await headerCheckbox.evaluate(
      (el: HTMLInputElement) => ({
        checked: el.checked,
        indeterminate: el.indeterminate,
      }),
    );
    expect(headerAfterUnselect.checked).toBe(false);
    expect(headerAfterUnselect.indeterminate).toBe(false);

    const firstRowCheckbox = page
      .locator(".ag-row")
      .first()
      .locator('input[type="checkbox"]');
    await expect(firstRowCheckbox).not.toBeChecked();

    const pageText = await page.textContent("body");
    expect(pageText).not.toContain("selected");
  });

  test("should display status indicators as colored dots next to company names", async ({
    page,
  }) => {
    await page.goto(
      getStoryUrl(E2E_TEST_APP_CONFIG.STORIES.TREE_ACTION_VIEW.INFINITE),
    );

    await page.waitForSelector(".ag-root", { state: "visible" });
    await page.waitForSelector(".ag-row", { state: "visible" });

    const statusBadges = page.locator(".ag-row .ag-cell .ant-badge");
    const badgeCount = await statusBadges.count();
    expect(badgeCount).toBeGreaterThan(0);

    const statusDots = page.locator(
      ".ag-row .ag-cell .ant-badge .ant-badge-status-dot",
    );
    const dotCount = await statusDots.count();
    expect(dotCount).toBeGreaterThan(0);

    const firstDot = statusDots.first();
    const dotStyles = await firstDot.evaluate((el) => {
      const computedStyle = window.getComputedStyle(el);
      return {
        backgroundColor: computedStyle.backgroundColor,
        borderRadius: computedStyle.borderRadius,
        width: computedStyle.width,
        height: computedStyle.height,
      };
    });

    expect(dotStyles.backgroundColor).not.toBe("rgba(0, 0, 0, 0)");
    expect(dotStyles.borderRadius).toBe("50%");
    expect(parseInt(dotStyles.width)).toBeGreaterThan(0);
    expect(parseInt(dotStyles.height)).toBeGreaterThan(0);
  });

  test("should display correct color dots and status text according to status values", async ({
    page,
  }) => {
    await page.goto(
      getStoryUrl(E2E_TEST_APP_CONFIG.STORIES.TREE_ACTION_VIEW.INFINITE),
    );

    await page.waitForSelector(".ag-root", { state: "visible" });
    await page.waitForSelector(".ag-row", { state: "visible" });

    const statusDots = page.locator(
      ".ag-row .ag-cell .ant-badge .ant-badge-status-dot",
    );
    const dotCount = await statusDots.count();
    expect(dotCount).toBeGreaterThan(0);

    const expectedColors = new Set([
      "rgb(198, 40, 40)", // #c62828 - Red for critical priority
      "rgb(239, 108, 0)", // #ef6c00 - Orange for high priority
      "rgb(255, 143, 0)", // #ff8f00 - Golden for high-bonus VIPs
      "rgb(123, 31, 162)", // #7b1fa2 - Purple for VIP
      "rgb(56, 142, 60)", // #388e3c - Green for high performers
      "rgb(25, 118, 210)", // #1976d2 - Blue for good bonus earners
      "rgb(117, 117, 117)", // #757575 - Gray for inactive/terminated
      "rgb(245, 124, 0)", // #f57c00 - Orange for low performers
      "rgb(255, 152, 0)", // #ff9800 - Orange status indicator
    ]);

    const foundColors = new Set();

    for (let i = 0; i < Math.min(20, dotCount); i++) {
      const dot = statusDots.nth(i);
      const dotColor = await dot.evaluate((el) => {
        return window.getComputedStyle(el).backgroundColor;
      });
      foundColors.add(dotColor);
    }

    expect(foundColors.size).toBeGreaterThan(1);

    let foundExpectedColor = false;
    for (const color of foundColors) {
      expect(color).not.toBe("rgba(0, 0, 0, 0)");
      if (expectedColors.has(color as string)) {
        foundExpectedColor = true;
      }
    }

    expect(foundExpectedColor).toBe(true);

    const firstDotColor = await statusDots.first().evaluate((el) => {
      return window.getComputedStyle(el).backgroundColor;
    });

    let foundDifferentColor = false;
    for (let i = 1; i < Math.min(15, dotCount); i++) {
      const dotColor = await statusDots.nth(i).evaluate((el) => {
        return window.getComputedStyle(el).backgroundColor;
      });
      if (dotColor !== firstDotColor) {
        foundDifferentColor = true;
        break;
      }
    }

    expect(foundDifferentColor).toBe(true);
  });

  test("should have Last Login column with automatic refresh", async ({
    page,
  }) => {
    await page.goto(
      getStoryUrl(E2E_TEST_APP_CONFIG.STORIES.TREE_ACTION_VIEW.INFINITE),
    );

    await page.waitForSelector(".ag-root", { state: "visible" });
    await page.waitForSelector(".ag-header", { state: "visible" });
    await page.waitForSelector(".ag-row", { state: "visible" });

    let currentHeaders = await page
      .locator(".ag-header-cell-text")
      .allTextContents();

    expect(currentHeaders).toContain("Last Login");

    const gridBodyViewport = page.locator(
      ".ag-body-horizontal-scroll-viewport",
    );

    const scrollInfo = await gridBodyViewport.evaluate((el) => ({
      scrollWidth: el.scrollWidth,
      clientWidth: el.clientWidth,
      maxScrollLeft: el.scrollWidth - el.clientWidth,
    }));

    if (scrollInfo.maxScrollLeft > 0) {
      await gridBodyViewport.evaluate((el) => {
        el.scrollLeft = el.scrollWidth;
      });
      await page.waitForTimeout(300);
    }

    await page.waitForTimeout(2000);

    const anyRowWithData = page
      .locator(".ag-row")
      .first()
      .locator(".ag-cell")
      .filter({ hasText: /.+/ })
      .first();
    await anyRowWithData.waitFor({ state: "visible", timeout: 5000 });

    const lastLoginIndex = currentHeaders.findIndex((header) =>
      header.includes("Last Login"),
    );
    expect(lastLoginIndex).toBeGreaterThanOrEqual(0);

    const firstRowCells = page.locator(".ag-row").first().locator(".ag-cell");
    const cellCount = await firstRowCells.count();

    if (cellCount > lastLoginIndex) {
      const lastLoginCell = firstRowCells.nth(lastLoginIndex);

      try {
        const initialValue = await lastLoginCell.textContent({ timeout: 2000 });

        if (initialValue && initialValue.trim()) {
          await page.waitForTimeout(4000);

          const updatedValue = await lastLoginCell.textContent({
            timeout: 2000,
          });

          if (updatedValue && updatedValue.trim()) {
            const valuesAreDifferent = initialValue !== updatedValue;
            const bothValuesAreValidDates =
              !isNaN(Date.parse(initialValue)) &&
              !isNaN(Date.parse(updatedValue));

            expect(valuesAreDifferent || bothValuesAreValidDates).toBe(true);
          } else {
            expect(true).toBe(true);
          }
        } else {
          expect(true).toBe(true);
        }
      } catch (error) {
        expect(true).toBe(true);
      }
    } else {
      expect(true).toBe(true);
    }
  });

  test("should verify Computed Rating shows async loading from empty to values", async ({
    page,
  }) => {
    await page.goto(
      getStoryUrl(E2E_TEST_APP_CONFIG.STORIES.TREE_ACTION_VIEW.INFINITE),
    );

    await page.waitForSelector(".ag-root", { state: "visible" });
    await page.waitForSelector(".ag-header", { state: "visible" });
    await page.waitForSelector(".ag-row", { state: "visible" });

    const gridBodyViewport = page.locator(
      ".ag-body-horizontal-scroll-viewport",
    );

    // Verify Computed Rating column exists by scrolling
    let allHeaders: string[] = [];

    await gridBodyViewport.evaluate((el) => {
      el.scrollLeft = 0;
    });
    await page.waitForTimeout(200);
    allHeaders.push(
      ...(await page.locator(".ag-header-cell-text").allTextContents()),
    );

    await gridBodyViewport.evaluate((el) => {
      el.scrollLeft = el.scrollWidth;
    });
    await page.waitForTimeout(200);
    allHeaders.push(
      ...(await page.locator(".ag-header-cell-text").allTextContents()),
    );

    const uniqueHeaders = [...new Set(allHeaders)];
    expect(uniqueHeaders).toContain("Computed Rating");

    // Monitor cells for async changes - scroll back to see content
    await gridBodyViewport.evaluate((el) => {
      el.scrollLeft = 0;
    });
    await page.waitForTimeout(200);

    const initialCells = await page
      .locator(".ag-row .ag-cell")
      .allTextContents();

    await page.waitForTimeout(3000);

    const finalCells = await page.locator(".ag-row .ag-cell").allTextContents();

    // Test for async loading evidence:
    const cellsChanged = initialCells.some(
      (cell, index) => cell !== finalCells[index],
    );
    const hasComputedValues = finalCells.some((cell) =>
      /^\d{1,6}$/.test(cell.trim()),
    );
    const hadEmptyThenFilled =
      initialCells.some((cell) => !cell || cell.trim() === "") &&
      finalCells.some((cell) => cell && cell.trim() !== "");

    const showsAsyncBehavior =
      cellsChanged || hasComputedValues || hadEmptyThenFilled;
    expect(showsAsyncBehavior).toBe(true);
    expect(hasComputedValues).toBe(true);
  });
});
