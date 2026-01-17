# eslint-config-sdm

A shared ESLint flat config for JavaScript projects with Prettier integration.  
Use this library to enforce consistent code style and best practices across your projects.

---

## Installation

Install ESLint and this config as **dev dependencies**

```bash
npm install -D eslint eslint-config-sdm
```
## Usage

### 1. Create ESLint config in your project

Create `eslint.config.mjs` in the root of your project:

```js
import baseConfig from "eslint-config-sdm";

export default [
  ...baseConfig,

  // Optional: add project-specific overrides
  {
    rules: {
      "no-console": "off"
    }
  }
];
```

### 2. Run ESLint from the command line

```bash
npx eslint .
```
