import { test, expect } from "@playwright/test";

test("unauthenticated user gets redirected to signin", async ({ page }) => {
  await page.goto("http://localhost:3000/dashboard");
  await expect(page).toHaveURL(/.*auth\/signin/);
});

test("signin page shows login button", async ({ page }) => {
  await page.goto("http://localhost:3000/auth/signin");
  await expect(page.getByRole("button", { name: "Login" })).toBeVisible();
});
