import { test, expect } from "@playwright/test";

test.describe("TreeActionView Components", () => {
  test("should display infinite tree view story", async ({ page }) => {
    // Navigate to the infinite tree view story
    await page.goto("/iframe.html?id=views-treeactionview--infinite");

    // Wait for the component to load
    await page.waitForSelector(
      '[data-testid="tree-container"], .tree-action-view-container',
      {
        timeout: 10000,
      },
    );

    // Check that the page title contains the expected content
    await expect(page.locator("text=Employee Management")).toBeVisible();

    // Verify that there are employee records displayed
    await expect(page.locator("text=/.*@.*\\.com/")).toBeVisible(); // Email pattern

    // Check for the presence of table elements
    await expect(page.locator(".ant-table-wrapper")).toBeVisible();

    // Take a screenshot for visual comparison
    await page.screenshot({ path: "e2e/screenshots/infinite-tree-view.png" });
  });

  test("should display paginated tree view story", async ({ page }) => {
    // Navigate to the paginated tree view story
    await page.goto("/iframe.html?id=views-treeactionview--paginated");

    // Wait for the component to load
    await page.waitForSelector(
      '[data-testid="tree-container"], .tree-action-view-container',
      {
        timeout: 10000,
      },
    );

    // Check that the page title contains the expected content
    await expect(page.locator("text=Employee Management")).toBeVisible();

    // Check for pagination controls
    await expect(page.locator(".ant-pagination")).toBeVisible();

    // Verify that there are employee records displayed
    await expect(page.locator("text=/.*@.*\\.com/")).toBeVisible(); // Email pattern

    // Test pagination interaction
    const nextPageButton = page.locator(".ant-pagination-next");
    if (await nextPageButton.isEnabled()) {
      await nextPageButton.click();
      // Wait for page to update
      await page.waitForTimeout(1000);
    }

    // Take a screenshot for visual comparison
    await page.screenshot({ path: "e2e/screenshots/paginated-tree-view.png" });
  });

  test("should have responsive layout", async ({ page }) => {
    // Test on different viewport sizes
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto("/iframe.html?id=views-treeactionview--infinite");

    await page.waitForSelector(".tree-action-view-container", {
      timeout: 10000,
    });

    // Verify the component is visible and properly sized
    const container = page.locator(".tree-action-view-container");
    await expect(container).toBeVisible();

    // Test mobile viewport
    await page.setViewportSize({ width: 375, height: 667 });
    await page.waitForTimeout(500); // Allow time for responsive changes

    // Component should still be visible (though layout may change)
    await expect(container).toBeVisible();

    // Take screenshots for different viewport sizes
    await page.screenshot({ path: "e2e/screenshots/mobile-tree-view.png" });
  });

  test("should handle basic interactions", async ({ page }) => {
    await page.goto("/iframe.html?id=views-treeactionview--paginated");

    // Wait for the component to load
    await page.waitForSelector(".tree-action-view-container", {
      timeout: 10000,
    });

    // Test table row interaction (if clickable)
    const firstRow = page.locator(".ant-table-tbody tr").first();
    if (await firstRow.isVisible()) {
      await firstRow.hover();
      // Add assertions based on expected hover behavior
    }

    // Test search functionality if present
    const searchInput = page.locator(
      'input[placeholder*="Search"], input[type="search"]',
    );
    if (await searchInput.isVisible()) {
      await searchInput.fill("John");
      await page.waitForTimeout(1000); // Wait for search results
      // Add assertions for search results
    }

    // Verify the component handles interactions without errors
    await expect(page.locator(".tree-action-view-container")).toBeVisible();
  });
});
