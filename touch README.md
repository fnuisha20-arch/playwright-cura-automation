# Playwright Automation Framework – CURA Healthcare

## Overview

I built this project to practice and demonstrate automation framework design using Playwright with TypeScript.
The framework automates a healthcare web application workflow, covering login and appointment booking scenarios.

---

## Tech Stack

* Playwright
* TypeScript
* Node.js

---

## What I implemented

* Page Object Model (POM) for better code organization and reuse
* Separate test layers for login, appointment, and end-to-end flows
* Positive, negative, and edge case scenarios for login
* End-to-end flow: Login → Book Appointment → Confirmation
* Handling of date picker using JavaScript execution for stability

---

## Project Structure

```
pages/
  loginPage.ts
  appointmentPage.ts

tests/
  login.spec.ts
  appointment.spec.ts
  e2e.spec.ts

utils/
  env.ts
```

---

## How to run

Run all tests:

```bash
npx playwright test
```

Run only E2E test:

```bash
npx playwright test tests/e2e.spec.ts
```

---

## Reports

```bash
npx playwright show-report
```

---

## Notes

This project helped me understand:

* how to structure an automation framework
* how to separate test logic from UI interactions
* how to handle real-world UI challenges like date pickers
