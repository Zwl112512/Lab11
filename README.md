# Lab 11 – API Testing and Linting

This project demonstrates API integration testing and linting using **Jest**, **Supertest**, and **ESLint (v9+)** in a Koa.js web API project.

---

## 📦 Technologies Used

- [Koa](https://koajs.com/) – Lightweight Node.js web framework
- [Jest](https://jestjs.io/) – JavaScript testing framework
- [Supertest](https://www.npmjs.com/package/supertest) – HTTP assertions for Node.js APIs
- [ESLint](https://eslint.org/) – Linting utility for JavaScript
- [eslint.config.mjs](https://eslint.org/docs/latest/use/configure/) – ESLint v9+ configuration format

---

## 📁 Project Structure

```
Lab11/
├── routes/
│   └── articles.js            # Koa route module (CRUD APIs)
├── test/
│   ├── articles.test.js       # API route tests (Jest + Supertest)
│   └── app.js                 # Exported Koa app for testing
├── eslint.config.mjs         # ESLint v9+ configuration
├── package.json              # Project config & test scripts
```

---

## 🧪 Test Coverage (8 tests total)

| Route                      | Description                        |
|----------------------------|------------------------------------|
| GET /articles              | Get all articles                   |
| GET /articles/:id          | Get article by ID (success/fail)   |
| POST /articles             | Create new article                 |
| POST /articles (fail)      | Error when missing fields          |
| PUT /articles/:id          | Update article                     |
| DELETE /articles/:id       | Delete article                     |

All test cases passed using:

```bash
npx jest
```

---

## 🧹 ESLint (v9) Setup

Configured using `eslint.config.mjs` with Standard style guide and Jest support.

### Plugins Installed

```bash
npm install --save-dev eslint-plugin-standard eslint-plugin-import eslint-plugin-n eslint-plugin-promise
```

### Linting Commands

```bash
npx eslint .
npx eslint . --fix   # Auto-fix
```

---

## 🏁 How to Run

### 1. Install dependencies

```bash
npm install
```

### 2. Run tests

```bash
npx jest
```

### 3. Run ESLint check

```bash
npx eslint .
```

---

## ✅ Outcome

- Full API integration test suite with proper error handling
- ESLint configured using modern `eslint.config.mjs` format
- All tests passed and code linted cleanly
