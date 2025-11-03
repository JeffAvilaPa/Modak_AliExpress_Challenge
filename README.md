```markdown
# AliExpress Automation Challenge – Playwright Test

This repository contains an automation test for AliExpress implemented using **Playwright with JavaScript**.

## Environment & Versions

| Tool / Dependency | Version  |
|-------------------|----------|
| Node.js           | v20.11.1 | 
| Playwright        | 1.48.0   | 
| NPM               | 10.2.4   | 
| JavaScript        | ES2023   | 

You can verify your local versions using:
```bash
node -v
npx playwright --version
npm -v


## Project Overview

The test verifies that the **first page** of search results for "instax mini" displays items correctly.  
It is built using a **Page Object Model (POM)** structure for maintainability and readability.


## Project Structure

aliexpress_challenge-playwright-test/
├─ pages/               # Page Object files (HomePage, ResultsPage)
├─ tests/               # Test files
├─ playwright.config.js # Playwright configuration
├─ package.json         # Node.js dependencies and scripts
├─ .gitignore           # Files to ignore in Git
└─ README.md

````

---

## Key Features

- **Page Object Model (POM):** Clean separation of page logic and test logic.  
- **Logs and debugging:** Logs test flow to the console.  
- **HTML report:** Generated in `playwright-report/`.  

---

## Installation

1. Clone the repository:
```bash
git clone https://github.com/JeffAvilaPa/Modak_AliExpress_Challenge.git
cd aliexpress_challenge-playwright-test
````

2. Install dependencies:

```bash
npm install
```

---

## Running Tests

Run all tests using:

```bash
npx playwright test
```

or using the npm script:

```bash
npm test
```

---

## Reports and Artifacts

* **HTML report:** `playwright-report/index.html`

---

## Notes

* The project is designed to run **headless** by default.
* Timeout is set to 30 seconds per test.
* Make sure you have a stable internet connection, as the test interacts with the live AliExpress site.

---

## Author

Jefferson Avila