import { test, expect } from "@playwright/test";

test("Github Actions Practice 1", async ({ page }) => {
  console.log("Starting Practice 1");
  await page.goto("https://www.saucedemo.com/");
  console.log(await page.title());
  expect(page).toHaveTitle("Swag Labs");
  console.log("Ending Practice 1");
});

test("Github Actions Practice 2", async ({ page }) => {
  console.log("Starting Practice 1");
  await page.goto("https://www.saucedemo.com/");
  console.log(await page.title());
  expect(page).toHaveTitle("Swag Labs");
  console.log("Ending Practice 2");
});

test("Github Actions Practice 3", async ({ page }) => {
  console.log("Starting Practice 1");
  await page.goto("https://www.saucedemo.com/");
  console.log(await page.title());
  expect(page).toHaveTitle("Swag Labs worng");
  console.log("Ending Practice 3");
});

test.describe("Practice od Describe", async () => {
  test("Github Actions Practice 4", async ({ page }) => {
    console.log("Starting Practice 1");
    await page.goto("https://www.saucedemo.com/");
    console.log(await page.title());
    expect(page).toHaveTitle("Swag Labs");
    console.log("Ending Practice 4");
  });

  test("Github Actions Practice 5", async ({ page }) => {
    console.log("Starting Practice 1");
    await page.goto("https://www.saucedemo.com/");
    console.log(await page.title());
    expect(page).toHaveTitle("Swag Labs");
    console.log("Ending Practice 5");
  });

  test("Github Actions Practice 6", async ({ page }) => {
    console.log("Starting Practice 1");
    await page.goto("https://www.saucedemo.com/");
    console.log(await page.title());
    expect(page).toHaveTitle("Swag Labs");
    console.log("Ending Practice 6");
  });
});

test("Github Actions Practice 7", async ({ page }) => {
  console.log("Starting Practice 1");
  await page.goto("https://www.saucedemo.com/");
  console.log(await page.title());
  expect(page).toHaveTitle("Swag Labs");
  console.log("Ending Practice 7");
});
