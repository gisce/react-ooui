import { test, expect } from "@playwright/test";
import { STORYBOOK_CONFIG, getStoryUrl } from "./config";

test.describe("Infinite TreeActionView Component", () => {
  test("should render all columns with correct titles and handle horizontal scrolling", async ({
    page,
  }) => {
    await page.goto(
      getStoryUrl(STORYBOOK_CONFIG.STORIES.TREE_ACTION_VIEW.INFINITE),
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
});
