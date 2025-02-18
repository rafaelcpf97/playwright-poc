# Playwright Project

This repository contains a UI testing projects using [Playwright](https://playwright.dev/). Tests are written using TypeScript.

## Table of Contents

- [ProjectOverview](#project-overview)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)
    - [Run tests with custom commands](#run-tests-with-custom-commands)
    - [Debug mode](#debug-mode)
- [Test structure](#test-structure)

## Project Overview

This project aims to:
- Create a simple, yet relevant PoC using Playwright technology
- Explore Playwright features
- Create tests for main user flows

## Prerequisites

Before using this project, ensure you have the following installed:
- [Node.js](https://nodejs.org/)
- [Docker](https://www.docker.com/)

## Installation

Clone this repository:

   ```bash
   git clone https://github.com/rafaelcpf97/playwright-poc.git
   cd playwright-poc
   npm install
   ```


## Usage

Run tests in headless mode:
   ```bash
   npx playwright test --project=chromium
   ```

Run tests in headed mode:
   ```bash
   npx playwright test --project=chromium --headed
   ```

To run specific file:
   ```bash
   npx playwright test example.spec.ts --project=chromium
   ```

To open Playwright UI:
   ```bash
   npx playwright test --ui
   ```

To enable trace:
   ```bash
   npx playwright test --project=chromium --trace on
   ```

To generate allure report:
   ```bash
   allure generate allure-results -o allure-report --clean
   ```

You can also change trace config on playwright.config.ts, on "use" property by updating "Trace" value to "on".

### Run tests with custom commands

Alternatively, you can use custom commands to simplify. For example, instead of running this long command:
    
   ```bash
   npx playwright test e2e.spec.ts --project=chromium && npx playwright test e2e.spec.ts --project=firefox
   ```

You can run this command which is defined in **package.json**:

   ```bash
   npm run e2e-all-browsers
   ```


### Debug mode

To run tests and view debug logs:
   ```bash
   npx playwright test --project=chromium --debug
   ```

## Test structure

Testing project follows Page Object Model:
- Inside "page-objects" folder, there are PageManager and other page objects
- "tests" folder contains the e2e spec file
- "workflows" folder contains the yml file used by GitHub Actions
- In root level there are config and Docker files