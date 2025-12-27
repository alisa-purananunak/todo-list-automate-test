# To-Do List Playwright Test Automation Project

This project contains automated end-to-end tests for a simple To-Do List application, written using [Playwright](https://playwright.dev/).

## Project Description

The tests cover the basic functionality of the To-Do List application, including:
- Adding a new task.
- Completing a task.
- Deleting a task.

## Prerequisites

Before running the tests, you need to have the following installed:

1.  **Node.js:** It is recommended to use the latest LTS version. You can download it from [nodejs.org](https://nodejs.org/).
2.  **npm (Node Package Manager):** This is included with Node.js.

## Getting Started

1.  **Clone the repository:**
    ```bash
    git clone <repository-url>
    ```

2.  **Navigate to the project directory:**
    ```bash
    cd todo-list-automate-test
    ```

3.  **Install project dependencies:**
    ```bash
    npm install
    ```

4.  **Install Playwright browsers:**
    ```bash
    npx playwright install --with-deps
    ```

## Running the Tests

You can run the tests using the following npm scripts:

-   **Run all tests in headless mode:**
    ```bash
    npm test
    ```

-   **Run tests with the Playwright UI:**
    ```bash
    npm run test:ui
    ```

-   **View the latest HTML report:**
    ```bash
    npm run test:report
    ```

## Project Structure

-   `tests/`: Contains all the test files (`.spec.ts`).
-   `playwright.config.ts`: The main configuration file for Playwright.
-   `package.json`: Defines project dependencies and scripts.
-   `playwright-report/`: Stores the HTML report generated after test runs.
-   `test-results/`: Stores test results, including traces and screenshots.

## Suggested Improvements

-   **Descriptive Test File Names:** Consider renaming test files from `tc-001.spec.ts` to something more descriptive, like `add-task.spec.ts`, `complete-task.spec.ts`, etc.
-   **Page Object Model (POM):** For larger projects, consider implementing the Page Object Model design pattern to make the tests more modular and maintainable.
-   **Environment Variables:** For sensitive data or environment-specific configurations, use environment variables (e.g., with `dotenv`).
