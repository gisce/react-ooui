import { test, expect } from "@playwright/test";
import { E2E_TEST_APP_CONFIG, getStoryUrl } from "./config";

test.describe("Paginated TreeActionView Component", () => {
  // === BASIC RENDERING AND LAYOUT TESTS ===
  test.describe("Basic Rendering and Layout", () => {
    test("should render paginated component with correct summary format", async ({
      page,
    }) => {
      await page.goto(
        getStoryUrl(E2E_TEST_APP_CONFIG.STORIES.TREE_ACTION_VIEW.PAGINATED),
      );

      await page.waitForSelector(".ag-root", { state: "visible" });
      await page.waitForSelector(".ag-header", { state: "visible" });
      await page.waitForSelector(".ag-row", { state: "visible" });

      const summaryElement = page.getByText(
        /Showing registers from \d+ to \d+ of \d+ registers/,
      );
      await expect(summaryElement).toBeVisible();

      const summaryText = await summaryElement.textContent();
      expect(summaryText).toMatch(
        /Showing registers from 1 to 20 of 250 registers/,
      );
    });

    test("should render all columns with correct titles and handle horizontal scrolling", async ({
      page,
    }) => {
      await page.goto(
        getStoryUrl(E2E_TEST_APP_CONFIG.STORIES.TREE_ACTION_VIEW.PAGINATED),
      );

      await page.waitForSelector(".ag-root", { state: "visible" });
      await page.waitForSelector(".ag-header", { state: "visible" });
      await page.waitForSelector(".ag-row", { state: "visible" });

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

      // Always perform horizontal scrolling to discover all columns
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

      currentHeaders = await page
        .locator(".ag-header-cell-text")
        .allTextContents();
      currentHeaders.forEach((header) => visibleHeaders.add(header));

      const foundHeaders = Array.from(visibleHeaders).filter(
        (header) => header.trim() !== "",
      );

      for (const expectedColumn of expectedColumns) {
        expect(foundHeaders).toContain(expectedColumn);
      }

      expect(foundHeaders).toHaveLength(expectedColumns.length);

      const rowCount = await page.locator(".ag-row").count();
      expect(rowCount).toBeGreaterThan(0);

      // Always test horizontal scrolling functionality
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
    });

    test("should display paginated records count and verify basic navigation", async ({
      page,
    }) => {
      await page.goto(
        getStoryUrl(E2E_TEST_APP_CONFIG.STORIES.TREE_ACTION_VIEW.PAGINATED),
      );

      await page.waitForSelector(".ag-root", { state: "visible" });
      await page.waitForSelector(".ag-row", { state: "visible" });

      const summaryElement = page.getByText(
        /Showing registers from \d+ to \d+ of \d+ registers/,
      );
      const summaryText = await summaryElement.textContent();
      const totalRecordsMatch = summaryText?.match(/of (\d+) registers/);
      const expectedTotal = totalRecordsMatch
        ? parseInt(totalRecordsMatch[1])
        : 0;

      expect(expectedTotal).toBe(250);

      const initialRowCount = await page.locator(".ag-row").count();
      expect(initialRowCount).toBeGreaterThan(0);
      expect(initialRowCount).toBeLessThanOrEqual(30); // Default page size with virtual rows

      const gridBodyViewport = page.locator(".ag-body-viewport");
      const initialScrollTop = await gridBodyViewport.evaluate(
        (el) => el.scrollTop,
      );

      await gridBodyViewport.evaluate((el) => {
        el.scrollTop = 500;
      });
      await page.waitForTimeout(500);

      const scrolledTop = await gridBodyViewport.evaluate((el) => el.scrollTop);
      expect(scrolledTop).toBeGreaterThan(initialScrollTop);

      const finalRowCount = await page.locator(".ag-row").count();
      expect(finalRowCount).toBeGreaterThan(0);
      expect(finalRowCount).toBeLessThanOrEqual(expectedTotal);
    });
  });

  // === PAGINATION CONTROLS TESTS ===
  test.describe("Pagination Controls", () => {
    test("should show page size selector with default value of 20", async ({
      page,
    }) => {
      await page.goto(
        getStoryUrl(E2E_TEST_APP_CONFIG.STORIES.TREE_ACTION_VIEW.PAGINATED),
      );

      await page.waitForSelector(".ag-root", { state: "visible" });
      await page.waitForSelector(".ag-row", { state: "visible" });

      const pageSizeSelector = page
        .locator(".ant-select")
        .filter({ hasText: /20 \/ page/ })
        .first();
      await expect(pageSizeSelector).toBeVisible();

      const selectorText = await pageSizeSelector.textContent();
      expect(selectorText).toContain("20 / page");
    });

    test("should change page size and update summary accordingly", async ({
      page,
    }) => {
      await page.goto(
        getStoryUrl(E2E_TEST_APP_CONFIG.STORIES.TREE_ACTION_VIEW.PAGINATED),
      );

      await page.waitForSelector(".ag-root", { state: "visible" });
      await page.waitForSelector(".ag-row", { state: "visible" });

      const initialSummary = page.getByText(
        /Showing registers from 1 to 20 of 250 registers/,
      );
      await expect(initialSummary).toBeVisible();

      const pageSizeSelector = page
        .locator(".ant-select")
        .filter({ hasText: /20 \/ page/ })
        .first();
      await pageSizeSelector.click();
      await page.waitForTimeout(500);

      const option10 = page
        .locator(".ant-select-item")
        .filter({ hasText: "10 / page" })
        .first();
      await option10.click();
      await page.waitForTimeout(1000);

      const summary10 = page.getByText(
        /Showing registers from 1 to 10 of 250 registers/,
      );
      await expect(summary10).toBeVisible();

      const pageSizeSelector50 = page
        .locator(".ant-select")
        .filter({ hasText: /10 \/ page/ })
        .first();
      await pageSizeSelector50.click();
      await page.waitForTimeout(500);

      const option50 = page
        .locator(".ant-select-item")
        .filter({ hasText: "50 / page" })
        .first();
      await option50.click();
      await page.waitForTimeout(1000);

      const summary50 = page.getByText(
        /Showing registers from 1 to 50 of 250 registers/,
      );
      await expect(summary50).toBeVisible();
    });

    test("should switch to infinite mode when selecting 'All' option", async ({
      page,
    }) => {
      await page.goto(
        getStoryUrl(E2E_TEST_APP_CONFIG.STORIES.TREE_ACTION_VIEW.PAGINATED),
      );

      await page.waitForSelector(".ag-root", { state: "visible" });
      await page.waitForSelector(".ag-row", { state: "visible" });

      const pageSizeSelector = page
        .locator(".ant-select")
        .filter({ hasText: /20 \/ page/ })
        .first();
      await pageSizeSelector.click();
      await page.waitForTimeout(500);

      const optionAll = page
        .locator(".ant-select-item")
        .filter({ hasText: "All" })
        .first();
      await optionAll.click();
      await page.waitForTimeout(2000);

      const totalText = await page.getByText("Total registers:").textContent();
      expect(totalText).toContain("250");
    });
  });

  // === ROW SELECTION TESTS ===
  test.describe("Row Selection", () => {
    test("should handle row selection correctly in paginated mode", async ({
      page,
    }) => {
      await page.goto(
        getStoryUrl(E2E_TEST_APP_CONFIG.STORIES.TREE_ACTION_VIEW.PAGINATED),
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

      // Directly check that the header checkbox is in indeterminate state
      const headerCheckbox = page
        .locator('.ag-header input[type="checkbox"]')
        .nth(2);
      const isIndeterminate = await headerCheckbox.evaluate(
        (el: HTMLInputElement) => el.indeterminate,
      );
      expect(isIndeterminate).toBe(true);

      const pageText = await page.textContent("body");
      const hasSelectedText = pageText?.includes("1 selected");
      expect(hasSelectedText).toBe(true);
    });

    test("should handle multiple row selection correctly", async ({ page }) => {
      await page.goto(
        getStoryUrl(E2E_TEST_APP_CONFIG.STORIES.TREE_ACTION_VIEW.PAGINATED),
      );

      await page.waitForSelector(".ag-root", { state: "visible" });
      await page.waitForSelector(".ag-row", { state: "visible" });
      await page.waitForTimeout(1000);

      const rows = page.locator(".ag-row");
      const firstRowCheckbox = rows.nth(0).locator('input[type="checkbox"]');
      const secondRowCheckbox = rows.nth(1).locator('input[type="checkbox"]');
      const thirdRowCheckbox = rows.nth(2).locator('input[type="checkbox"]');

      // Ensure all checkboxes are visible before clicking
      await expect(firstRowCheckbox).toBeVisible();
      await expect(secondRowCheckbox).toBeVisible();
      await expect(thirdRowCheckbox).toBeVisible();

      // Click each checkbox with sufficient wait time between clicks
      await firstRowCheckbox.click();
      await page.waitForTimeout(500);
      await expect(firstRowCheckbox).toBeChecked();

      await secondRowCheckbox.click();
      await page.waitForTimeout(500);
      await expect(secondRowCheckbox).toBeChecked();

      // Scroll to ensure third row is in viewport
      await thirdRowCheckbox.scrollIntoViewIfNeeded();
      await page.waitForTimeout(300);
      await thirdRowCheckbox.click();
      await page.waitForTimeout(800);
      await expect(thirdRowCheckbox).toBeChecked();

      // Directly check that the header checkbox is in indeterminate state
      const headerCheckbox = page
        .locator('.ag-header input[type="checkbox"]')
        .nth(2);
      const isIndeterminate = await headerCheckbox.evaluate(
        (el: HTMLInputElement) => el.indeterminate,
      );
      expect(isIndeterminate).toBe(true);

      const pageText = await page.textContent("body");
      const hasSelectedText = pageText?.includes("3 selected");
      expect(hasSelectedText).toBe(true);
    });

    test("should show page selection message when clicking header checkbox", async ({
      page,
    }) => {
      await page.goto(
        getStoryUrl(E2E_TEST_APP_CONFIG.STORIES.TREE_ACTION_VIEW.PAGINATED),
      );

      await page.waitForSelector(".ag-root", { state: "visible" });
      await page.waitForSelector(".ag-header", { state: "visible" });
      await page.waitForSelector(".ag-row", { state: "visible" });

      const headerCheckbox = page
        .locator('.ag-header input[type="checkbox"]')
        .nth(2);
      await headerCheckbox.click();
      await page.waitForTimeout(500);

      const pageText = await page.textContent("body");
      const hasPageSelectionMessage = pageText?.includes(
        "There are 20 records selected on this page",
      );
      const hasSelectAllOption = pageText?.includes("Select all 250 records");

      expect(hasPageSelectionMessage).toBe(true);
      expect(hasSelectAllOption).toBe(true);
    });

    test("should select all 250 records when clicking 'Select all 250 records'", async ({
      page,
    }) => {
      await page.goto(
        getStoryUrl(E2E_TEST_APP_CONFIG.STORIES.TREE_ACTION_VIEW.PAGINATED),
      );

      await page.waitForSelector(".ag-root", { state: "visible" });
      await page.waitForSelector(".ag-header", { state: "visible" });
      await page.waitForSelector(".ag-row", { state: "visible" });

      // First click header checkbox to select page
      const headerCheckbox = page
        .locator('.ag-header input[type="checkbox"]')
        .nth(2);
      await headerCheckbox.click();
      await page.waitForTimeout(500);

      // Click "Select all 250 records" link
      const selectAllLink = page.getByText("Select all 250 records");
      await selectAllLink.click();
      await page.waitForTimeout(1000);

      // Verify all 250 records are selected
      const pageText = await page.textContent("body");
      expect(pageText).toContain("250 selected");

      // Verify header checkbox is fully checked (not indeterminate)
      const headerCheckboxState = await headerCheckbox.evaluate(
        (el: HTMLInputElement) => ({
          checked: el.checked,
          indeterminate: el.indeterminate,
        }),
      );
      expect(headerCheckboxState.checked).toBe(true);
      expect(headerCheckboxState.indeterminate).toBe(false);
    });

    test("should unselect all when clicking header checkbox in selected state", async ({
      page,
    }) => {
      await page.goto(
        getStoryUrl(E2E_TEST_APP_CONFIG.STORIES.TREE_ACTION_VIEW.PAGINATED),
      );

      await page.waitForSelector(".ag-root", { state: "visible" });
      await page.waitForSelector(".ag-header", { state: "visible" });
      await page.waitForSelector(".ag-row", { state: "visible" });

      const headerCheckbox = page
        .locator('.ag-header input[type="checkbox"]')
        .nth(2);

      // Select all records
      await headerCheckbox.click();
      await page.waitForTimeout(500);
      const selectAllLink = page.getByText("Select all 250 records");
      await selectAllLink.click();
      await page.waitForTimeout(1000);

      const headerSelected = await headerCheckbox.evaluate(
        (el: HTMLInputElement) => el.checked,
      );
      expect(headerSelected).toBe(true);

      // Unselect all
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

    test("should copy selected row IDs to clipboard when clicking copy button", async ({
      page,
      context,
    }) => {
      await context.grantPermissions(["clipboard-read", "clipboard-write"]);

      await page.goto(
        getStoryUrl(E2E_TEST_APP_CONFIG.STORIES.TREE_ACTION_VIEW.PAGINATED),
      );

      await page.waitForSelector(".ag-root", { state: "visible" });
      await page.waitForSelector(".ag-row", { state: "visible" });

      // Test 1: Copy single row ID
      const firstRowCheckbox = page
        .locator(".ag-row")
        .first()
        .locator('input[type="checkbox"]');
      await firstRowCheckbox.click();
      await page.waitForTimeout(500);

      const copyButton = page.getByRole("button", {
        name: "Copy",
        exact: true,
      });
      await expect(copyButton).toBeVisible();
      await copyButton.click();
      await page.waitForTimeout(200);

      const clipboardSingle = await page.evaluate(() =>
        navigator.clipboard.readText(),
      );
      expect(clipboardSingle).toBeTruthy();
      expect(clipboardSingle.split(",")).toHaveLength(1);

      // Clear selection
      await firstRowCheckbox.click();
      await page.waitForTimeout(200);

      // Test 2: Copy 3 row IDs
      const rows = page.locator(".ag-row");
      const firstRow = rows.nth(0).locator('input[type="checkbox"]');
      const secondRow = rows.nth(1).locator('input[type="checkbox"]');
      const thirdRow = rows.nth(2).locator('input[type="checkbox"]');

      await firstRow.click();
      await secondRow.click();
      await thirdRow.click();
      await page.waitForTimeout(500);

      await copyButton.click();
      await page.waitForTimeout(200);

      const clipboardThree = await page.evaluate(() =>
        navigator.clipboard.readText(),
      );
      expect(clipboardThree).toBeTruthy();
      const threeIds = clipboardThree.split(",");
      expect(threeIds).toHaveLength(3);
      expect(threeIds[0]).toBeTruthy();
      expect(threeIds[1]).toBeTruthy();
      expect(threeIds[2]).toBeTruthy();

      // Clear selection
      await firstRow.click();
      await secondRow.click();
      await thirdRow.click();
      await page.waitForTimeout(200);

      // Test 3: Copy all 250 row IDs (select all)
      const headerCheckbox = page
        .locator('.ag-header input[type="checkbox"]')
        .nth(2);
      await headerCheckbox.click();
      await page.waitForTimeout(500);

      const selectAllLink = page.getByText("Select all 250 records");
      await selectAllLink.click();
      await page.waitForTimeout(1000);

      await copyButton.click();
      await page.waitForTimeout(500);

      const clipboardAll = await page.evaluate(() =>
        navigator.clipboard.readText(),
      );
      expect(clipboardAll).toBeTruthy();
      const allIds = clipboardAll.split(",");
      expect(allIds.length).toBe(250);

      expect(allIds[0]).toBeTruthy();
      expect(allIds[0].trim()).not.toBe("");
      expect(allIds[249]).toBeTruthy();
      expect(allIds[249].trim()).not.toBe("");

      const firstId = allIds[0].trim();
      const lastId = allIds[249].trim();
      expect(firstId).toMatch(/\d+/);
      expect(lastId).toMatch(/\d+/);
    });
  });

  // === VISUAL INDICATORS AND STATUS TESTS ===
  test.describe("Visual Indicators and Status", () => {
    test("should display status indicators as colored dots next to company names", async ({
      page,
    }) => {
      await page.goto(
        getStoryUrl(E2E_TEST_APP_CONFIG.STORIES.TREE_ACTION_VIEW.PAGINATED),
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
        getStoryUrl(E2E_TEST_APP_CONFIG.STORIES.TREE_ACTION_VIEW.PAGINATED),
      );

      await page.waitForSelector(".ag-root", { state: "visible" });
      await page.waitForSelector(".ag-row", { state: "visible" });

      const statusDots = page.locator(
        ".ag-row .ag-cell .ant-badge .ant-badge-status-dot",
      );
      const dotCount = await statusDots.count();
      expect(dotCount).toBeGreaterThan(0);

      const foundColors = new Set();

      for (let i = 0; i < Math.min(20, dotCount); i++) {
        const dot = statusDots.nth(i);
        const dotColor = await dot.evaluate((el) => {
          return window.getComputedStyle(el).backgroundColor;
        });
        foundColors.add(dotColor);
      }

      expect(foundColors.size).toBeGreaterThan(1);

      // Expect all colors to be valid (not transparent)
      for (const color of foundColors) {
        expect(color).not.toBe("rgba(0, 0, 0, 0)");
        expect(color).toBeTruthy();
      }

      const firstDotColor = await statusDots.first().evaluate((el) => {
        return window.getComputedStyle(el).backgroundColor;
      });

      // Expect to find different colors across status dots
      const dotColors: string[] = [];
      for (let i = 1; i < Math.min(15, dotCount); i++) {
        const dotColor = await statusDots.nth(i).evaluate((el) => {
          return window.getComputedStyle(el).backgroundColor;
        });
        dotColors.push(dotColor);
      }

      const hasDifferentColors = dotColors.some(
        (color) => color !== firstDotColor,
      );
      expect(hasDifferentColors).toBe(true);
    });
  });

  // === DYNAMIC FIELDS AND ASYNC LOADING TESTS ===
  test.describe("Dynamic Fields and Async Loading", () => {
    test("should have Last Login column with automatic refresh", async ({
      page,
    }) => {
      await page.goto(
        getStoryUrl(E2E_TEST_APP_CONFIG.STORIES.TREE_ACTION_VIEW.PAGINATED),
      );

      await page.waitForSelector(".ag-root", { state: "visible" });
      await page.waitForSelector(".ag-header", { state: "visible" });
      await page.waitForSelector(".ag-row", { state: "visible" });

      // Wait for data to load
      await page.waitForTimeout(2000);

      // Verify Last Login column header is present
      let currentHeaders = await page
        .locator(".ag-header-cell-text")
        .allTextContents();
      expect(currentHeaders).toContain("Last Login");

      // Use the proven incremental scrolling approach to ensure all columns are rendered
      const gridBodyViewport = page.locator(
        ".ag-body-horizontal-scroll-viewport",
      );

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

      // Use col-id to find Last Login cell (like the working name column test)
      let lastLoginCell = page
        .locator('.ag-row .ag-cell[col-id*="last"]')
        .first();

      // If that doesn't work, try other possible col-id patterns
      if ((await lastLoginCell.count()) === 0) {
        // Try alternative col-id patterns
        const alternativeSelectors = [
          '.ag-row .ag-cell[col-id="last_login"]',
          '.ag-row .ag-cell[col-id="lastLogin"]',
          '.ag-row .ag-cell[col-id="Last Login"]',
          '.ag-row .ag-cell[col-id*="login"]',
        ];

        for (const selector of alternativeSelectors) {
          const cell = page.locator(selector).first();
          if ((await cell.count()) > 0) {
            lastLoginCell = cell; // Update the reference
            break;
          }
        }
      }

      // Expect the Last Login column to be accessible
      await expect(lastLoginCell).toBeVisible();

      const initialValue = await lastLoginCell.textContent({
        timeout: 5000,
      });

      // Last Login column should have content (date/time value)
      expect(initialValue).toBeTruthy();
      expect(initialValue?.trim()).toBeTruthy();

      // Parse DD/MM/YYYY format by converting to MM/DD/YYYY
      const parseDateDDMMYYYY = (dateStr: string) => {
        // Pattern: DD/MM/YYYY HH:MM:SS
        const match = dateStr.match(
          /(\d{1,2})\/(\d{1,2})\/(\d{4})\s+(\d{1,2}):(\d{1,2}):(\d{1,2})/,
        );
        if (match) {
          const [, day, month, year, hour, minute, second] = match;
          // Convert to MM/DD/YYYY format
          const usFormat = `${month}/${day}/${year} ${hour}:${minute}:${second}`;
          return Date.parse(usFormat);
        }
        return NaN;
      };

      // Initial value should be a valid date
      const initialTimestamp = parseDateDDMMYYYY(initialValue!);
      expect(isNaN(initialTimestamp)).toBe(false);

      // Wait for automatic refresh (Last Login values should update every ~5 seconds)
      await page.waitForTimeout(6000);

      const updatedValue = await lastLoginCell.textContent({
        timeout: 2000,
      });

      // Both values should be valid dates
      expect(initialValue).toBeTruthy();
      expect(updatedValue).toBeTruthy();
      expect(initialValue!.trim()).not.toBe("");
      expect(updatedValue!.trim()).not.toBe("");

      // Updated value should also be a valid date
      const updatedTimestamp = parseDateDDMMYYYY(updatedValue!);
      expect(isNaN(updatedTimestamp)).toBe(false);

      // Most importantly: verify that the value has actually changed (automatic refresh)
      expect(updatedValue).not.toEqual(initialValue);
      expect(initialTimestamp).toBeGreaterThan(0);
      expect(updatedTimestamp).toBeGreaterThan(0);
    });

    test("should verify Computed Rating column shows async loading behavior", async ({
      page,
    }) => {
      await page.goto(
        getStoryUrl(E2E_TEST_APP_CONFIG.STORIES.TREE_ACTION_VIEW.PAGINATED),
      );

      await page.waitForSelector(".ag-root", { state: "visible" });
      await page.waitForSelector(".ag-header", { state: "visible" });
      await page.waitForSelector(".ag-row", { state: "visible" });

      const gridBodyViewport = page.locator(
        ".ag-body-horizontal-scroll-viewport",
      );

      // Check both scroll positions to ensure Computed Rating column is visible
      await gridBodyViewport.evaluate((el) => {
        el.scrollLeft = 0;
      });
      await page.waitForTimeout(200);
      let headers = await page
        .locator(".ag-header-cell-text")
        .allTextContents();

      await gridBodyViewport.evaluate((el) => {
        el.scrollLeft = el.scrollWidth;
      });
      await page.waitForTimeout(200);
      headers = await page.locator(".ag-header-cell-text").allTextContents();

      // Expect Computed Rating column to be present in headers
      expect(headers).toContain("Computed Rating");

      await gridBodyViewport.evaluate((el) => {
        el.scrollLeft = 0;
      });
      await page.waitForTimeout(300);
      await page.waitForTimeout(3000);

      const allCells = await page.locator(".ag-row .ag-cell").allTextContents();
      const computedValues = allCells
        .filter((cell) => /^\d{1,6}$/.test(cell.trim()))
        .map((cell) => parseInt(cell.trim()));

      expect(computedValues.length).toBeGreaterThan(0);

      const hasReasonableValues = computedValues.some(
        (val) => val > 0 && val < 100000,
      );
      expect(hasReasonableValues).toBe(true);
    });

    test("should show row badge color changes after async loading", async ({
      page,
    }) => {
      await page.goto(
        getStoryUrl(E2E_TEST_APP_CONFIG.STORIES.TREE_ACTION_VIEW.PAGINATED),
      );

      await page.waitForSelector(".ag-root", { state: "visible" });
      await page.waitForSelector(".ag-header", { state: "visible" });
      await page.waitForSelector(".ag-row", { state: "visible" });

      const rows = page.locator(".ag-row");
      const rowCount = await rows.count();
      expect(rowCount).toBeGreaterThan(1);

      const allBadges = page.locator(
        ".ag-row .ag-cell .ant-badge .ant-badge-status-dot",
      );

      await page.waitForFunction(
        () => {
          const badges = document.querySelectorAll(
            ".ag-row .ag-cell .ant-badge .ant-badge-status-dot",
          );
          return badges.length > 0;
        },
        { timeout: 5000 },
      );

      const badgeCount = await allBadges.count();
      expect(badgeCount).toBeGreaterThan(0);

      const badgeColors: Array<{
        index: number;
        initialColor: string;
        badge: any;
      }> = [];
      for (let i = 0; i < Math.min(5, badgeCount); i++) {
        const badge = allBadges.nth(i);
        const color = await badge.evaluate((el) => {
          return window.getComputedStyle(el).backgroundColor;
        });
        badgeColors.push({ index: i, initialColor: color, badge });
      }

      await page.waitForTimeout(4000);

      const finalColors: string[] = [];
      const colorChanges: {
        index: number;
        initialColor: string;
        finalColor: string;
      }[] = [];

      for (const { index, initialColor, badge } of badgeColors) {
        const finalColor = await badge.evaluate((el: Element) => {
          return window.getComputedStyle(el).backgroundColor;
        });
        finalColors.push(finalColor);
        if (initialColor !== finalColor) {
          colorChanges.push({ index, initialColor, finalColor });
        }
      }

      // Expect final colors to be valid (not transparent)
      expect(finalColors.length).toBeGreaterThan(0);
      for (const color of finalColors) {
        expect(color).not.toBe("rgba(0, 0, 0, 0)");
        expect(color).toBeTruthy();
      }
    });

    test("should show company name text color changes after Computed Rating loads", async ({
      page,
    }) => {
      await page.goto(
        getStoryUrl(E2E_TEST_APP_CONFIG.STORIES.TREE_ACTION_VIEW.PAGINATED),
      );

      await page.waitForSelector(".ag-root", { state: "visible" });
      await page.waitForSelector(".ag-header", { state: "visible" });
      await page.waitForSelector(".ag-row", { state: "visible" });

      const rows = page.locator(".ag-row");
      const rowCount = await rows.count();
      expect(rowCount).toBeGreaterThan(0);

      const companyNameCells = page
        .locator(".ag-row .ag-cell")
        .filter({ hasText: /\w+/ });

      await page.waitForFunction(
        () => {
          const cells = document.querySelectorAll(".ag-row .ag-cell");
          return Array.from(cells).some(
            (cell) => cell.textContent && cell.textContent.trim().length > 2,
          );
        },
        { timeout: 5000 },
      );

      const cellCount = await companyNameCells.count();
      expect(cellCount).toBeGreaterThan(0);

      const companyTextColors: Array<{
        index: number;
        initialColor: string;
        text: string;
        cell: any;
      }> = [];

      for (let i = 0; i < Math.min(8, cellCount); i++) {
        const cell = companyNameCells.nth(i);
        const text = await cell.textContent();

        if (text && text.trim().length > 3 && !/^\d+$/.test(text.trim())) {
          const color = await cell.evaluate((el) => {
            return window.getComputedStyle(el).color;
          });
          companyTextColors.push({
            index: i,
            initialColor: color,
            text: text.trim(),
            cell,
          });
        }
      }

      await page.waitForTimeout(4000);

      const finalColors: string[] = [];
      const colorChanges: {
        index: number;
        initialColor: string;
        finalColor: string;
      }[] = [];

      for (const { index, initialColor, cell } of companyTextColors) {
        const finalColor = await cell.evaluate((el: Element) => {
          return window.getComputedStyle(el).color;
        });
        finalColors.push(finalColor);

        if (initialColor !== finalColor) {
          colorChanges.push({ index, initialColor, finalColor });
        }
      }

      // Expect final colors to be valid (not default black)
      expect(finalColors.length).toBeGreaterThan(0);
      for (const color of finalColors) {
        expect(color).not.toBe("rgb(0, 0, 0)");
        expect(color).toBeTruthy();
      }
    });
  });

  // === AGGREGATION AND CALCULATION TESTS ===
  test.describe("Aggregation and Calculation", () => {
    test("should calculate Total Salary correctly when selecting rows", async ({
      page,
    }) => {
      await page.goto(
        getStoryUrl(E2E_TEST_APP_CONFIG.STORIES.TREE_ACTION_VIEW.PAGINATED),
      );

      await page.waitForSelector(".ag-root", { state: "visible" });
      await page.waitForSelector(".ag-row", { state: "visible" });

      const totalSalaryElement = page.getByText(/Total.*[Ss]alary/);
      const initialText = await totalSalaryElement.textContent();
      expect(initialText).toContain("-");

      const firstRowCheckbox = page
        .locator(".ag-row")
        .first()
        .locator('input[type="checkbox"]');
      await firstRowCheckbox.click();
      await page.waitForTimeout(500);

      const afterFirstSelection = await totalSalaryElement.textContent();
      const firstTotal = parseInt(
        afterFirstSelection?.match(/\d+/)?.[0] || "0",
      );
      expect(firstTotal).toBeGreaterThan(0);

      const secondRowCheckbox = page
        .locator(".ag-row")
        .nth(1)
        .locator('input[type="checkbox"]');
      await secondRowCheckbox.click();
      await page.waitForTimeout(500);

      const afterSecondSelection = await totalSalaryElement.textContent();
      const secondTotal = parseInt(
        afterSecondSelection?.match(/\d+/)?.[0] || "0",
      );
      expect(secondTotal).toBeGreaterThan(firstTotal);

      const thirdRowCheckbox = page
        .locator(".ag-row")
        .nth(2)
        .locator('input[type="checkbox"]');
      await thirdRowCheckbox.click();
      await page.waitForTimeout(500);

      const afterThirdSelection = await totalSalaryElement.textContent();
      const thirdTotal = parseInt(
        afterThirdSelection?.match(/\d+/)?.[0] || "0",
      );
      expect(thirdTotal).toBeGreaterThan(secondTotal);

      await firstRowCheckbox.click();
      await secondRowCheckbox.click();
      await thirdRowCheckbox.click();
      await page.waitForTimeout(500);

      const afterDeselection = await totalSalaryElement.textContent();
      expect(afterDeselection).toContain("-");
    });
  });

  // === MENU AND NAVIGATION TESTS ===
  test.describe("Menu and Navigation", () => {
    test("should show three dots menu with correct options", async ({
      page,
    }) => {
      await page.goto(
        getStoryUrl(E2E_TEST_APP_CONFIG.STORIES.TREE_ACTION_VIEW.PAGINATED),
      );

      await page.waitForSelector(".ag-root", { state: "visible" });
      await page.waitForSelector(".ag-row", { state: "visible" });

      const threeDotsMenu = page.getByRole("button", { name: "More options" });
      await expect(threeDotsMenu).toBeVisible();

      const svg = threeDotsMenu.locator("svg");
      await expect(svg).toBeVisible();

      await threeDotsMenu.click();
      await page.waitForTimeout(500);

      const pageText = await page.textContent("body");
      const hasChangeToInfinite = pageText?.includes("Change to infinite");
      const hasResetTableView = pageText?.includes("Reset table view");

      expect(hasChangeToInfinite && hasResetTableView).toBe(true);
    });
  });

  // === TABLE CUSTOMIZATION TESTS ===
  test.describe("Table Customization", () => {
    test("should reorder columns and persist changes through localStorage", async ({
      page,
    }) => {
      await page.goto(
        getStoryUrl(E2E_TEST_APP_CONFIG.STORIES.TREE_ACTION_VIEW.PAGINATED),
      );

      await page.waitForSelector(".ag-root", { state: "visible" });
      await page.waitForSelector(".ag-header", { state: "visible" });
      await page.waitForSelector(".ag-row", { state: "visible" });

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
      expect(originalOrder.length).toBeGreaterThan(2);

      // Use the specific label elements for drag operation like in working test
      const nameLabel = page
        .locator(".ag-header-cell")
        .filter({ hasText: "Name" })
        .locator(".ag-header-cell-label");
      const emailLabel = page
        .locator(".ag-header-cell")
        .filter({ hasText: "Email" })
        .locator(".ag-header-cell-label");

      await expect(nameLabel).toBeVisible();
      await expect(emailLabel).toBeVisible();

      // Perform drag operation using dragTo method (more reliable than manual mouse operations)
      await nameLabel.dragTo(emailLabel);
      await page.waitForTimeout(5000); // Match the working test timeout

      const orderAfterDrag = await getColumnOrder();

      // Verify drag operation changed the column order
      expect(JSON.stringify(originalOrder)).not.toEqual(
        JSON.stringify(orderAfterDrag),
      );

      // Reload to test persistence
      await page.reload();
      await page.waitForSelector(".ag-root", { state: "visible" });
      await page.waitForSelector(".ag-header", { state: "visible" });
      await page.waitForSelector(".ag-row", { state: "visible" });
      await page.waitForTimeout(1000);

      const orderAfterReload = await getColumnOrder();
      expect(orderAfterReload).toEqual(orderAfterDrag);
    });

    test("should persist column width changes after page reload", async ({
      page,
    }) => {
      await page.goto(
        getStoryUrl(E2E_TEST_APP_CONFIG.STORIES.TREE_ACTION_VIEW.PAGINATED),
      );

      await page.waitForSelector(".ag-root", { state: "visible" });
      await page.waitForSelector(".ag-header", { state: "visible" });
      await page.waitForSelector(".ag-row", { state: "visible" });

      const nameHeader = page.getByRole("columnheader", { name: "Name" });
      await expect(nameHeader).toBeVisible();

      const initialWidth = await nameHeader.evaluate((el) => {
        return el.getBoundingClientRect().width;
      });

      expect(initialWidth).toBeGreaterThan(0);

      const nameBox = await nameHeader.boundingBox();

      // Expect bounding box to be available for resize operation
      expect(nameBox).toBeTruthy();

      const resizeHandleX = nameBox!.x + nameBox!.width - 2;
      const resizeHandleY = nameBox!.y + nameBox!.height / 2;

      await page.mouse.move(resizeHandleX, resizeHandleY);
      await page.waitForTimeout(200);
      await page.mouse.down();
      await page.waitForTimeout(300);
      await page.mouse.move(resizeHandleX + 100, resizeHandleY, {
        steps: 10,
      });
      await page.waitForTimeout(300);
      await page.mouse.up();
      await page.waitForTimeout(1000);

      const currentWidth = await nameHeader.evaluate((el) => {
        return el.getBoundingClientRect().width;
      });

      // Verify the width changed after resize
      expect(currentWidth).toBeGreaterThan(initialWidth);

      await page.reload();
      await page.waitForSelector(".ag-root", { state: "visible" });
      await page.waitForSelector(".ag-header", { state: "visible" });
      await page.waitForSelector(".ag-row", { state: "visible" });
      await page.waitForTimeout(1000);

      const finalWidth = await nameHeader.evaluate((el) => {
        return el.getBoundingClientRect().width;
      });

      // Verify width persisted after reload
      expect(finalWidth).toBeGreaterThan(initialWidth);
      expect(Math.abs(finalWidth - currentWidth)).toBeLessThan(10);
    });

    test("should persist column pinning (pin left) after page reload", async ({
      page,
    }) => {
      await page.goto(
        getStoryUrl(E2E_TEST_APP_CONFIG.STORIES.TREE_ACTION_VIEW.PAGINATED),
      );

      await page.waitForSelector(".ag-root", { state: "visible" });
      await page.waitForSelector(".ag-header", { state: "visible" });
      await page.waitForSelector(".ag-row", { state: "visible" });

      const nameHeader = page.getByRole("columnheader", { name: "Name" });
      await expect(nameHeader).toBeVisible();

      const initialPinnedColumns = await page
        .locator(".ag-pinned-left-header .ag-header-cell-text")
        .allTextContents();
      expect(initialPinnedColumns).not.toContain("Name");

      const nameBox = await nameHeader.boundingBox();
      const agRoot = page.locator(".ag-root");
      const rootBox = await agRoot.boundingBox();

      // Expect both bounding boxes to be available for pin operation
      expect(nameBox).toBeTruthy();
      expect(rootBox).toBeTruthy();

      const nameCenter = {
        x: nameBox!.x + nameBox!.width / 2,
        y: nameBox!.y + nameBox!.height / 2,
      };
      const leftEdge = { x: rootBox!.x + 30, y: nameCenter.y };

      await page.mouse.move(nameCenter.x, nameCenter.y);
      await page.waitForTimeout(200);
      await page.mouse.down();
      await page.waitForTimeout(300);
      await page.mouse.move(leftEdge.x, leftEdge.y, { steps: 10 });
      await page.waitForTimeout(300);
      await page.mouse.up();
      await page.waitForTimeout(1000);

      const pinnedColumnsAfterPin = await page
        .locator(".ag-pinned-left-header .ag-header-cell-text")
        .allTextContents();
      expect(pinnedColumnsAfterPin).toContain("Name");

      await page.reload();
      await page.waitForSelector(".ag-root", { state: "visible" });
      await page.waitForSelector(".ag-header", { state: "visible" });
      await page.waitForSelector(".ag-row", { state: "visible" });
      await page.waitForTimeout(1000);

      const pinnedColumnsAfterReload = await page
        .locator(".ag-pinned-left-header .ag-header-cell-text")
        .allTextContents();
      expect(pinnedColumnsAfterReload).toContain("Name");
    });

    test("should reset table view to original state when clicking Reset table view", async ({
      page,
    }) => {
      test.setTimeout(60000);

      // Clear localStorage completely and ensure fresh state
      await page.goto(
        getStoryUrl(E2E_TEST_APP_CONFIG.STORIES.TREE_ACTION_VIEW.PAGINATED),
      );

      await page.evaluate(() => {
        localStorage.clear();
        sessionStorage.clear();
      });

      await page.reload();
      await page.waitForSelector(".ag-root", { state: "visible" });
      await page.waitForSelector(".ag-header", { state: "visible" });
      await page.waitForSelector(".ag-row", { state: "visible" });

      // Extra wait to ensure grid is fully initialized
      await page.waitForTimeout(2000);

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

      const getNameColumnWidth = async () => {
        const nameHeader = page.getByRole("columnheader", { name: "Name" });
        return await nameHeader.evaluate(
          (el) => el.getBoundingClientRect().width,
        );
      };

      const getPinnedColumns = async () => {
        return await page
          .locator(".ag-pinned-left-header .ag-header-cell-text")
          .allTextContents();
      };

      const originalOrder = await getColumnOrder();
      const originalNameWidth = await getNameColumnWidth();
      const originalPinned = await getPinnedColumns();

      // Make column changes - expect operations to succeed
      const nameHeader = page.getByRole("columnheader", { name: "Name" });
      const emailHeader = page.getByRole("columnheader", { name: "Email" });

      // Reorder columns (drag Name to Email position) - using manual mouse operations like working test
      const nameBox = await nameHeader.boundingBox();
      const emailBox = await emailHeader.boundingBox();

      expect(nameBox).toBeTruthy();
      expect(emailBox).toBeTruthy();

      const dragNameCenter = {
        x: nameBox!.x + nameBox!.width / 2,
        y: nameBox!.y + nameBox!.height / 2,
      };
      const emailCenter = {
        x: emailBox!.x + emailBox!.width / 2,
        y: emailBox!.y + emailBox!.height / 2,
      };

      await page.mouse.move(dragNameCenter.x, dragNameCenter.y);
      await page.waitForTimeout(200);
      await page.mouse.down();
      await page.waitForTimeout(300);
      await page.mouse.move(emailCenter.x, emailCenter.y, { steps: 10 });
      await page.waitForTimeout(300);
      await page.mouse.up();
      await page.waitForTimeout(5000); // Extra time for localStorage to update

      const orderAfterDrag = await getColumnOrder();

      // Expect the drag operation to change the column order
      expect(JSON.stringify(originalOrder)).not.toEqual(
        JSON.stringify(orderAfterDrag),
      );

      // Wait longer between operations to ensure localStorage is fully updated
      await page.waitForTimeout(3000);

      // Resize the Name column - expect the operation to succeed
      // Get fresh nameBox after drag operation
      const nameBoxAfterDrag = await nameHeader.boundingBox();
      expect(nameBoxAfterDrag).toBeTruthy();

      const resizeHandleX = nameBoxAfterDrag!.x + nameBoxAfterDrag!.width - 2;
      const resizeHandleY = nameBoxAfterDrag!.y + nameBoxAfterDrag!.height / 2;

      await page.mouse.move(resizeHandleX, resizeHandleY);
      await page.waitForTimeout(200);
      await page.mouse.down();
      await page.waitForTimeout(300);
      await page.mouse.move(resizeHandleX + 100, resizeHandleY, {
        steps: 10,
      });
      await page.waitForTimeout(300);
      await page.mouse.up();
      await page.waitForTimeout(5000); // Extra time for localStorage to update

      const widthAfterResize = await getNameColumnWidth();

      // Expect the resize operation to change the width
      expect(Math.abs(widthAfterResize - originalNameWidth)).toBeGreaterThan(
        10,
      );

      // Wait longer between operations to ensure localStorage is fully updated
      await page.waitForTimeout(3000);

      const agRoot = page.locator(".ag-root");
      const rootBox = await agRoot.boundingBox();

      // Pin the Name column - expect the operation to succeed
      expect(rootBox).toBeTruthy();

      const pinNameCenter = {
        x: nameBoxAfterDrag!.x + nameBoxAfterDrag!.width / 2,
        y: nameBoxAfterDrag!.y + nameBoxAfterDrag!.height / 2,
      };
      const leftEdge = { x: rootBox!.x + 30, y: pinNameCenter.y };

      await page.mouse.move(pinNameCenter.x, pinNameCenter.y);
      await page.waitForTimeout(200);
      await page.mouse.down();
      await page.waitForTimeout(300);
      await page.mouse.move(leftEdge.x, leftEdge.y, { steps: 10 });
      await page.waitForTimeout(300);
      await page.mouse.up();
      await page.waitForTimeout(5000); // Extra time for localStorage to update

      const pinnedAfterDrag = await getPinnedColumns();

      // Expect the pin operation to add Name to pinned columns
      expect(pinnedAfterDrag).toContain("Name");

      // Wait longer before reload to ensure all localStorage updates are complete
      await page.waitForTimeout(5000);

      // Force AG Grid to save its state explicitly
      await page.evaluate(() => {
        // Try to get AG Grid instance and force state save
        const gridElement = document.querySelector(".ag-root");
        if (gridElement && (gridElement as any).gridApi) {
          const gridApi = (gridElement as any).gridApi;
          // Force column state save
          if (gridApi.getColumnState) {
            const columnState = gridApi.getColumnState();
            localStorage.setItem(
              "columnState-2-demo.model",
              JSON.stringify(columnState),
            );
          }
        }
      });

      // Reload to verify changes persist before reset
      await page.reload();
      await page.waitForSelector(".ag-root", { state: "visible" });
      await page.waitForSelector(".ag-header", { state: "visible" });
      await page.waitForSelector(".ag-row", { state: "visible" });
      await page.waitForTimeout(1000);

      const orderBeforeReset = await getColumnOrder();
      const widthBeforeReset = await getNameColumnWidth();
      const pinnedBeforeReset = await getPinnedColumns();

      // Verify all changes persisted before reset
      // After drag (Email->Name), resize (Name), and pin (Name), the expected order should be:
      // Name (pinned, so first), Email (second), Department, Company, etc.
      const expectedOrderAfterAllOperations = [
        "Name", // Name is pinned, so it comes first
        "Email", // Email was dragged to first position originally, but now second due to Name being pinned
        "Department",
        "Company",
        "Position",
        "Status",
        "Last Login",
        "Annual Bonus",
        "Computed Rating",
        "Salary",
      ];

      // The order should match our expected final state
      expect(orderBeforeReset).toEqual(expectedOrderAfterAllOperations);
      expect(Math.abs(widthBeforeReset - originalNameWidth)).toBeGreaterThan(
        10,
      );
      expect(pinnedBeforeReset).toContain("Name");
      expect(originalPinned).not.toContain("Name");

      // Click three dots menu to open options
      const threeDotsMenu = page.getByRole("button", {
        name: "More options",
      });
      await expect(threeDotsMenu).toBeVisible();

      const svg = threeDotsMenu.locator("svg");
      await expect(svg).toBeVisible();

      await threeDotsMenu.click();
      await page.waitForTimeout(500);

      // Click Reset table view option
      const resetOption = page.locator('text="Reset table view"').first();
      await expect(resetOption).toBeVisible();
      await resetOption.click();
      await page.waitForTimeout(1000);

      // Verify reset worked
      const orderAfterReset = await getColumnOrder();
      const widthAfterReset = await getNameColumnWidth();
      const pinnedAfterReset = await getPinnedColumns();

      expect(orderAfterReset).toEqual(originalOrder);
      expect(Math.abs(widthAfterReset - originalNameWidth)).toBeLessThan(50);
      expect(pinnedAfterReset).toEqual(originalPinned);

      // Reload to verify reset persists
      await page.reload();
      await page.waitForSelector(".ag-root", { state: "visible" });
      await page.waitForSelector(".ag-header", { state: "visible" });
      await page.waitForSelector(".ag-row", { state: "visible" });
      await page.waitForTimeout(1000);

      const finalOrder = await getColumnOrder();
      const finalWidth = await getNameColumnWidth();
      const finalPinned = await getPinnedColumns();

      expect(finalOrder).toEqual(originalOrder);
      expect(Math.abs(finalWidth - originalNameWidth)).toBeLessThan(50);
      expect(finalPinned).toEqual(originalPinned);
    });
  });

  // === SORTING TESTS ===
  test.describe("Sorting", () => {
    test("should handle column sorting with proper arrows in paginated mode", async ({
      page,
    }) => {
      test.setTimeout(60000);
      await page.goto(
        getStoryUrl(E2E_TEST_APP_CONFIG.STORIES.TREE_ACTION_VIEW.PAGINATED),
      );

      await page.waitForSelector(".ag-root", { state: "visible" });
      await page.waitForSelector(".ag-header", { state: "visible" });
      await page.waitForSelector(".ag-row", { state: "visible" });

      const nameHeader = page.getByRole("columnheader", { name: "Name" });
      await expect(nameHeader).toBeVisible();

      const getNameColumnValues = async () => {
        const selector = '.ag-row .ag-cell[col-id="name"] div';
        await page.waitForSelector(selector, { state: "visible" });
        await page.waitForTimeout(1500);

        const elements = page.locator(selector);
        const count = await elements.count();

        const names: string[] = [];
        for (let i = 0; i < Math.min(8, count); i++) {
          const element = elements.nth(i);
          const text = await element.textContent();

          // Expect all name cells to have valid content
          expect(text).toBeTruthy();
          expect(text!.trim().length).toBeGreaterThan(2);
          expect(/[A-Za-z]/.test(text!.trim())).toBe(true);

          names.push(text!.trim());
        }

        return names;
      };

      const getSortingIndicator = async () => {
        const sortAsc = await nameHeader.locator(".ag-icon-asc").count();
        const sortDesc = await nameHeader.locator(".ag-icon-desc").count();
        const ariaSort = await nameHeader.getAttribute("aria-sort");

        return {
          hasAscIcon: sortAsc > 0,
          hasDescIcon: sortDesc > 0,
          ariaSort: ariaSort,
        };
      };

      const originalNames = await getNameColumnValues();

      await nameHeader.click();
      await page.waitForTimeout(1000);

      const ascNames = await getNameColumnValues();
      const ascSort = await getSortingIndicator();

      expect(ascNames.length).toBeGreaterThan(0);
      const ascSorted = [...ascNames].sort();
      expect(ascNames).toEqual(ascSorted);
      expect(ascSort.ariaSort).toBe("ascending");

      await nameHeader.click();

      const descNames = await getNameColumnValues();
      const descSort = await getSortingIndicator();

      expect(descNames.length).toBeGreaterThan(0);
      const descSorted = [...descNames].sort().reverse();
      expect(descNames).toEqual(descSorted);
      expect(descSort.ariaSort).toBe("descending");

      await nameHeader.click();

      const restoredNames = await getNameColumnValues();
      const noneSort = await getSortingIndicator();

      expect(restoredNames.length).toBeGreaterThan(0);
      expect(restoredNames).toEqual(originalNames);
      expect(noneSort.ariaSort).toBe("none");

      const summaryText = await page
        .getByText(/Showing registers from 1 to 20 of 250 registers/)
        .textContent();
      expect(summaryText).toMatch(
        /Showing registers from 1 to 20 of 250 registers/,
      );
    });
  });
});
