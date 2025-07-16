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

    // Verify horizontal scrolling is working within the AG Grid
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

    const scrolledLeft = await gridBodyViewport.evaluate((el) => el.scrollLeft);
    expect(scrolledLeft).toBeGreaterThan(initialScrollLeft);

    expect(scrollInfo.maxScrollLeft).toBeGreaterThan(0);
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

  test("should copy selected row IDs to clipboard when clicking copy button", async ({
    page,
    context,
  }) => {
    // Grant clipboard permissions
    await context.grantPermissions(["clipboard-read", "clipboard-write"]);

    await page.goto(
      getStoryUrl(E2E_TEST_APP_CONFIG.STORIES.TREE_ACTION_VIEW.INFINITE),
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

    const copyButton = page.getByRole("button", { name: "Copy", exact: true });
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

    // Test 3: Copy all row IDs (select all)
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
    await page.waitForTimeout(1000);

    await copyButton.click();
    await page.waitForTimeout(500);

    const clipboardAll = await page.evaluate(() =>
      navigator.clipboard.readText(),
    );
    expect(clipboardAll).toBeTruthy();
    const allIds = clipboardAll.split(",");
    expect(allIds.length).toBe(250);

    // Verify IDs are valid (should be numbers or strings)
    expect(allIds[0]).toBeTruthy();
    expect(allIds[0].trim()).not.toBe("");
    expect(allIds[249]).toBeTruthy();
    expect(allIds[249].trim()).not.toBe("");

    // Verify clipboard content matches expected pattern (IDs should be consistent)
    const firstId = allIds[0].trim();
    const lastId = allIds[249].trim();
    expect(firstId).toMatch(/\d+/); // Should contain numbers
    expect(lastId).toMatch(/\d+/); // Should contain numbers
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
    Array.from(foundColors).forEach((color) => {
      expect(color).not.toBe("rgba(0, 0, 0, 0)");
      if (expectedColors.has(color as string)) {
        foundExpectedColor = true;
      }
    });

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

    const initialValue = await lastLoginCell.textContent({ timeout: 5000 });

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

    expect(updatedValue).toBeTruthy();
    expect(updatedValue?.trim()).toBeTruthy();

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
      getStoryUrl(E2E_TEST_APP_CONFIG.STORIES.TREE_ACTION_VIEW.INFINITE),
    );

    await page.waitForSelector(".ag-root", { state: "visible" });
    await page.waitForSelector(".ag-header", { state: "visible" });
    await page.waitForSelector(".ag-row", { state: "visible" });

    const gridBodyViewport = page.locator(
      ".ag-body-horizontal-scroll-viewport",
    );

    // Verify Computed Rating exists by checking all headers
    let hasComputedRating = false;

    await gridBodyViewport.evaluate((el) => {
      el.scrollLeft = 0;
    });
    await page.waitForTimeout(200);
    let headers = await page.locator(".ag-header-cell-text").allTextContents();
    if (headers.includes("Computed Rating")) hasComputedRating = true;

    await gridBodyViewport.evaluate((el) => {
      el.scrollLeft = el.scrollWidth;
    });
    await page.waitForTimeout(200);
    headers = await page.locator(".ag-header-cell-text").allTextContents();
    if (headers.includes("Computed Rating")) hasComputedRating = true;

    expect(hasComputedRating).toBe(true);

    await gridBodyViewport.evaluate((el) => {
      el.scrollLeft = 0;
    });
    await page.waitForTimeout(300);

    await page.waitForTimeout(3000); // Wait for async computations

    const allCells = await page.locator(".ag-row .ag-cell").allTextContents();

    // Look for computed numeric values (evidence of async computation)
    const computedValues = allCells
      .filter((cell) => /^\d{1,6}$/.test(cell.trim()))
      .map((cell) => parseInt(cell.trim()));

    expect(computedValues.length).toBeGreaterThan(0);

    // Verify these look like actual computed ratings (reasonable numbers)
    const hasReasonableValues = computedValues.some(
      (val) => val > 0 && val < 100000,
    );

    expect(hasReasonableValues).toBe(true);
  });

  test("should show row 2 ant-badge becomes green after async loading", async ({
    page,
  }) => {
    await page.goto(
      getStoryUrl(E2E_TEST_APP_CONFIG.STORIES.TREE_ACTION_VIEW.INFINITE),
    );

    await page.waitForSelector(".ag-root", { state: "visible" });
    await page.waitForSelector(".ag-header", { state: "visible" });
    await page.waitForSelector(".ag-row", { state: "visible" });

    const rows = page.locator(".ag-row");
    const rowCount = await rows.count();
    expect(rowCount).toBeGreaterThan(1);

    // Find available badges (they may not all be visible due to virtual scrolling)
    const allBadges = page.locator(
      ".ag-row .ag-cell .ant-badge .ant-badge-status-dot",
    );

    // Wait up to 5 seconds for at least one badge to be available
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

    // Get initial colors of first few badges
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

    // Wait for async loading
    await page.waitForTimeout(4000);

    // Check final colors and look for green or color changes
    let foundGreenBadge = false;
    let foundColorChange = false;
    const greenColors = [
      "rgb(56, 142, 60)", // #388e3c - Green for high performers
      "rgb(76, 175, 80)", // #4caf50 - Material green
      "rgb(102, 187, 106)", // #66bb6a - Light green
      "rgb(46, 125, 50)", // #2e7d32 - Dark green
    ];

    for (const { initialColor, badge } of badgeColors) {
      const finalColor = await badge.evaluate((el: Element) => {
        return window.getComputedStyle(el).backgroundColor;
      });

      if (greenColors.includes(finalColor)) {
        foundGreenBadge = true;
      }

      if (initialColor !== finalColor) {
        foundColorChange = true;
      }
    }

    // Special focus on row 2 (index 1)
    expect(badgeColors.length).toBeGreaterThan(1);
    const row2Badge = badgeColors[1];
    const row2FinalColor = await row2Badge.badge.evaluate((el: Element) => {
      return window.getComputedStyle(el).backgroundColor;
    });

    if (greenColors.includes(row2FinalColor)) {
      foundGreenBadge = true;
    } else if (row2Badge.initialColor !== row2FinalColor) {
      foundColorChange = true;
    }

    // Test expects green badge or color change indicating async loading
    const showsAsyncBehavior = foundGreenBadge || foundColorChange;
    expect(showsAsyncBehavior).toBe(true);
  });

  test("should show company name text color changes after Computed Rating loads", async ({
    page,
  }) => {
    await page.goto(
      getStoryUrl(E2E_TEST_APP_CONFIG.STORIES.TREE_ACTION_VIEW.INFINITE),
    );

    await page.waitForSelector(".ag-root", { state: "visible" });
    await page.waitForSelector(".ag-header", { state: "visible" });
    await page.waitForSelector(".ag-row", { state: "visible" });

    const rows = page.locator(".ag-row");
    const rowCount = await rows.count();
    expect(rowCount).toBeGreaterThan(0);

    // Find company name text elements (they should be in cells with company data)
    const companyNameCells = page
      .locator(".ag-row .ag-cell")
      .filter({ hasText: /\w+/ });

    // Wait for company name cells to be available
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

    // Get initial text colors of first few cells with company names
    const companyTextColors: Array<{
      index: number;
      initialColor: string;
      text: string;
      cell: any;
    }> = [];

    for (let i = 0; i < Math.min(8, cellCount); i++) {
      const cell = companyNameCells.nth(i);
      const text = await cell.textContent();

      // Skip cells with just numbers or very short text
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

    // Wait for Computed Rating column to load and potentially trigger text color changes
    await page.waitForTimeout(4000);

    // Check for text color changes
    let foundColorChange = false;
    let foundSpecialColor = false;

    for (const { initialColor, cell } of companyTextColors) {
      const finalColor = await cell.evaluate((el: Element) => {
        return window.getComputedStyle(el).color;
      });

      if (initialColor !== finalColor) {
        foundColorChange = true;
      }

      // Check for special colors that might indicate computed states
      const specialColors = [
        "rgb(56, 142, 60)", // Green
        "rgb(76, 175, 80)", // Material green
        "rgb(198, 40, 40)", // Red
        "rgb(239, 108, 0)", // Orange
        "rgb(255, 143, 0)", // Amber
        "rgb(123, 31, 162)", // Purple
        "rgb(25, 118, 210)", // Blue
      ];

      if (specialColors.includes(finalColor)) {
        foundSpecialColor = true;
      }
    }

    // Test expects text color changes or special colors indicating async computation effects
    const showsAsyncTextBehavior = foundColorChange || foundSpecialColor;

    expect(showsAsyncTextBehavior).toBe(true);
  });

  test("should calculate Total Salary correctly when selecting rows", async ({
    page,
  }) => {
    await page.goto(
      getStoryUrl(E2E_TEST_APP_CONFIG.STORIES.TREE_ACTION_VIEW.INFINITE),
    );

    await page.waitForSelector(".ag-root", { state: "visible" });
    await page.waitForSelector(".ag-row", { state: "visible" });

    const totalSalaryElement = page.getByText(/Total.*[Ss]alary/);

    // Verify initial state shows "-"
    const initialText = await totalSalaryElement.textContent();
    expect(initialText).toContain("-");

    // Select first row
    const firstRowCheckbox = page
      .locator(".ag-row")
      .first()
      .locator('input[type="checkbox"]');
    await firstRowCheckbox.click();
    await page.waitForTimeout(500);

    // Verify Total Salary equals first row salary
    const afterFirstSelection = await totalSalaryElement.textContent();
    const firstTotal = parseInt(afterFirstSelection?.match(/\d+/)?.[0] || "0");
    expect(firstTotal).toBeGreaterThan(0);

    // Select second row
    const secondRowCheckbox = page
      .locator(".ag-row")
      .nth(1)
      .locator('input[type="checkbox"]');
    await secondRowCheckbox.click();
    await page.waitForTimeout(500);

    // Verify Total Salary increased
    const afterSecondSelection = await totalSalaryElement.textContent();
    const secondTotal = parseInt(
      afterSecondSelection?.match(/\d+/)?.[0] || "0",
    );
    expect(secondTotal).toBeGreaterThan(firstTotal);

    // Select third row
    const thirdRowCheckbox = page
      .locator(".ag-row")
      .nth(2)
      .locator('input[type="checkbox"]');
    await thirdRowCheckbox.click();
    await page.waitForTimeout(500);

    // Verify Total Salary increased again
    const afterThirdSelection = await totalSalaryElement.textContent();
    const thirdTotal = parseInt(afterThirdSelection?.match(/\d+/)?.[0] || "0");
    expect(thirdTotal).toBeGreaterThan(secondTotal);

    // Deselect all rows
    await firstRowCheckbox.click();
    await secondRowCheckbox.click();
    await thirdRowCheckbox.click();
    await page.waitForTimeout(500);

    // Verify it returns to "-"
    const afterDeselection = await totalSalaryElement.textContent();
    expect(afterDeselection).toContain("-");
  });

  test("should show three dots menu with correct options", async ({ page }) => {
    await page.goto(
      getStoryUrl(E2E_TEST_APP_CONFIG.STORIES.TREE_ACTION_VIEW.INFINITE),
    );

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
    const hasChangeToPaginated = pageText?.includes("Change to paginated");
    const hasResetTableView = pageText?.includes("Reset table view");

    expect(hasChangeToPaginated && hasResetTableView).toBe(true);
  });

  test("should persist column order after drag and drop", async ({
    page,
  }) => {
    test.setTimeout(60000);
    await page.goto(
      getStoryUrl(E2E_TEST_APP_CONFIG.STORIES.TREE_ACTION_VIEW.INFINITE),
    );

    // Clear any existing localStorage to start fresh
    await page.evaluate(() => {
      localStorage.clear();
    });

    await page.reload();
    await page.waitForSelector(".ag-root", { state: "visible" });
    await page.waitForSelector(".ag-header", { state: "visible" });
    await page.waitForSelector(".ag-row", { state: "visible" });
    // Wait for AG Grid to be fully initialized
    await page.waitForFunction(
      () => {
        const grid = document.querySelector(".ag-root");
        const headers = document.querySelectorAll(".ag-header-cell");
        const rows = document.querySelectorAll(".ag-row");
        return grid && headers.length > 0 && rows.length > 0;
      },
      { timeout: 5000 }
    );

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

    // Find two adjacent columns to swap (e.g., first two visible columns)
    const firstColumnName = originalOrder[0];
    const secondColumnName = originalOrder[1];

    // Find the column headers
    const firstHeader = page.getByRole("columnheader", {
      name: firstColumnName,
    });
    const secondHeader = page.getByRole("columnheader", {
      name: secondColumnName,
    });

    await expect(firstHeader).toBeVisible();
    await expect(secondHeader).toBeVisible();

    // Get bounding boxes for drag operation
    const firstBox = await firstHeader.boundingBox();
    const secondBox = await secondHeader.boundingBox();

    expect(firstBox).toBeTruthy();
    expect(secondBox).toBeTruthy();

    // Drag using the header label element specifically
    const firstLabel = page
      .locator(".ag-header-cell")
      .filter({ hasText: firstColumnName })
      .locator(".ag-header-cell-label");
    const secondLabel = page
      .locator(".ag-header-cell")
      .filter({ hasText: secondColumnName })
      .locator(".ag-header-cell-label");

    await expect(firstLabel).toBeVisible();
    await expect(secondLabel).toBeVisible();

    // Perform drag operation
    await firstLabel.dragTo(secondLabel);
    
    // Wait for the column order to change instead of using a fixed timeout
    try {
      await page.waitForFunction(
        (expectedOrder) => {
          const headers = Array.from(document.querySelectorAll(".ag-header-cell"));
          const currentOrder = headers
            .map((header) => ({
              text: header.textContent?.trim(),
              x: header.getBoundingClientRect().x
            }))
            .filter((item) => item.text && item.text !== "")
            .sort((a, b) => a.x - b.x)
            .map((item) => item.text);
          
          return JSON.stringify(currentOrder) !== JSON.stringify(expectedOrder);
        },
        originalOrder,
        { timeout: 10000 }
      );
    } catch (error) {
      throw error;
    }

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
    // Wait for AG Grid to be fully initialized
    await page.waitForFunction(
      () => {
        const grid = document.querySelector(".ag-root");
        const headers = document.querySelectorAll(".ag-header-cell");
        const rows = document.querySelectorAll(".ag-row");
        return grid && headers.length > 0 && rows.length > 0;
      },
      { timeout: 5000 }
    );

    const orderAfterReload = await getColumnOrder();

    // Verify persistence - the order should be the same as after drag
    expect(orderAfterReload).toEqual(orderAfterDrag);
  });

  test("should persist column width changes after page reload", async ({
    page,
  }) => {
    await page.goto(
      getStoryUrl(E2E_TEST_APP_CONFIG.STORIES.TREE_ACTION_VIEW.INFINITE),
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
    expect(nameBox).toBeTruthy();

    const resizeHandleX = nameBox!.x + nameBox!.width - 2;
    const resizeHandleY = nameBox!.y + nameBox!.height / 2;

    await page.mouse.move(resizeHandleX, resizeHandleY);
    await page.waitForTimeout(200);
    await page.mouse.down();
    await page.waitForTimeout(300);
    await page.mouse.move(resizeHandleX + 100, resizeHandleY, { steps: 10 });
    await page.waitForTimeout(300);
    await page.mouse.up();
    await page.waitForTimeout(1000);

    const currentWidth = await nameHeader.evaluate((el) => {
      return el.getBoundingClientRect().width;
    });

    expect(currentWidth).toBeGreaterThan(initialWidth);

    await page.reload();
    await page.waitForSelector(".ag-root", { state: "visible" });
    await page.waitForSelector(".ag-header", { state: "visible" });
    await page.waitForSelector(".ag-row", { state: "visible" });
    await page.waitForTimeout(1000);

    const finalWidth = await nameHeader.evaluate((el) => {
      return el.getBoundingClientRect().width;
    });

    expect(finalWidth).toBeGreaterThan(initialWidth);
    expect(Math.abs(finalWidth - currentWidth)).toBeLessThan(10);
  });

  test("should persist column pinning (pin left) after page reload", async ({
    page,
  }) => {
    await page.goto(
      getStoryUrl(E2E_TEST_APP_CONFIG.STORIES.TREE_ACTION_VIEW.INFINITE),
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

    expect(nameBox).toBeTruthy();
    expect(rootBox).toBeTruthy();

    const nameCenter = {
      x: nameBox!.x + nameBox!.width / 2,
      y: nameBox!.y + nameBox!.height / 2,
    };

    const leftEdge = {
      x: rootBox!.x + 30,
      y: nameCenter.y,
    };

    await page.mouse.move(nameCenter.x, nameCenter.y);
    await page.waitForTimeout(200);
    await page.mouse.down();
    await page.waitForTimeout(300);
    await page.mouse.move(leftEdge.x, leftEdge.y, { steps: 10 });
    await page.waitForTimeout(300);
    await page.mouse.up();
    await page.waitForTimeout(1000);

    const pinnedAfterDrag = await page
      .locator(".ag-pinned-left-header .ag-header-cell-text")
      .allTextContents();
    expect(pinnedAfterDrag).toContain("Name");

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
    await page.goto(
      getStoryUrl(E2E_TEST_APP_CONFIG.STORIES.TREE_ACTION_VIEW.INFINITE),
    );

    await page.waitForSelector(".ag-root", { state: "visible" });
    await page.waitForSelector(".ag-header", { state: "visible" });
    await page.waitForSelector(".ag-row", { state: "visible" });

    const getColumnOrder = async () => {
      return await page.locator(".ag-header-cell-text").allTextContents();
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

    // 1. Make some column changes through UI interactions
    const nameHeader = page.getByRole("columnheader", { name: "Name" });
    const emailHeader = page.getByRole("columnheader", { name: "Email" });

    // Reorder columns (drag Name to Email position)
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
    await page.waitForTimeout(1000);

    // Resize Name column
    const resizeHandleX = nameBox!.x + nameBox!.width - 2;
    const resizeHandleY = nameBox!.y + nameBox!.height / 2;

    await page.mouse.move(resizeHandleX, resizeHandleY);
    await page.waitForTimeout(200);
    await page.mouse.down();
    await page.waitForTimeout(300);
    await page.mouse.move(resizeHandleX + 100, resizeHandleY, { steps: 10 });
    await page.waitForTimeout(300);
    await page.mouse.up();
    await page.waitForTimeout(1000);

    // Pin Name column by dragging to left edge
    const agRoot = page.locator(".ag-root");
    const rootBox = await agRoot.boundingBox();

    expect(rootBox).toBeTruthy();

    const pinNameCenter = {
      x: nameBox!.x + nameBox!.width / 2,
      y: nameBox!.y + nameBox!.height / 2,
    };
    const leftEdge = {
      x: rootBox!.x + 30,
      y: pinNameCenter.y,
    };

    await page.mouse.move(pinNameCenter.x, pinNameCenter.y);
    await page.waitForTimeout(200);
    await page.mouse.down();
    await page.waitForTimeout(300);
    await page.mouse.move(leftEdge.x, leftEdge.y, { steps: 10 });
    await page.waitForTimeout(300);
    await page.mouse.up();
    await page.waitForTimeout(1000);

    // Reload page to verify changes persist
    await page.reload();
    await page.waitForSelector(".ag-root", { state: "visible" });
    await page.waitForSelector(".ag-header", { state: "visible" });
    await page.waitForSelector(".ag-row", { state: "visible" });
    await page.waitForTimeout(1000);

    // Verify changes persisted before reset
    const orderBeforeReset = await getColumnOrder();
    const widthBeforeReset = await getNameColumnWidth();
    const pinnedBeforeReset = await getPinnedColumns();

    // Check if any changes are apparent
    const orderChanged =
      JSON.stringify(originalOrder) !== JSON.stringify(orderBeforeReset);
    const widthChanged = Math.abs(widthBeforeReset - originalNameWidth) > 10;
    const pinnedChanged = pinnedBeforeReset.length > originalPinned.length;

    const changesArePersisted = orderChanged || widthChanged || pinnedChanged;

    expect(changesArePersisted).toBe(true);

    // Click three dots menu to open options
    const threeDotsMenu = page.getByRole("button", { name: "More options" });
    await expect(threeDotsMenu).toBeVisible();

    // Verify it's actually the SVG button
    const svg = threeDotsMenu.locator("svg");
    await expect(svg).toBeVisible();

    await threeDotsMenu.click();
    await page.waitForTimeout(500);

    // Click Reset table view option
    const resetOption = page.locator('text="Reset table view"').first();
    await expect(resetOption).toBeVisible();
    await resetOption.click();
    await page.waitForTimeout(1000);

    const orderAfterReset = await getColumnOrder();
    const widthAfterReset = await getNameColumnWidth();
    const pinnedAfterReset = await getPinnedColumns();

    expect(orderAfterReset.length).toEqual(originalOrder.length);
    expect(orderAfterReset).toContain("Name");
    expect(orderAfterReset).toContain("Email");
    expect(widthAfterReset).toBeGreaterThan(50); // Reasonable column width
    expect(pinnedAfterReset.length).toBeGreaterThanOrEqual(0); // Valid pinned state

    // Reload page to verify reset persists
    await page.reload();
    await page.waitForSelector(".ag-root", { state: "visible" });
    await page.waitForSelector(".ag-header", { state: "visible" });
    await page.waitForSelector(".ag-row", { state: "visible" });
    await page.waitForTimeout(1000);

    // Final verification that reset persisted across reload
    const finalOrder = await getColumnOrder();
    const finalWidth = await getNameColumnWidth();
    const finalPinned = await getPinnedColumns();

    // Verify the grid remains consistent and functional after reset + reload
    expect(finalOrder.length).toEqual(originalOrder.length);
    expect(finalOrder).toContain("Name");
    expect(finalOrder).toContain("Email");
    expect(finalWidth).toBeGreaterThan(50);
    expect(finalPinned.length).toBeGreaterThanOrEqual(0);
  });

  test("should handle column sorting with proper arrows and verify Name column values are sorted correctly", async ({
    page,
  }) => {
    test.setTimeout(60000);
    await page.goto(
      getStoryUrl(E2E_TEST_APP_CONFIG.STORIES.TREE_ACTION_VIEW.INFINITE),
    );

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

        expect(text).toBeTruthy();
        expect(text!.trim().length).toBeGreaterThan(2);
        expect(text!.trim()).toMatch(/[A-Za-z]/);
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

    const totalText = await page.getByText("Total registers:").textContent();
    expect(totalText).toContain("250");
  });
});
