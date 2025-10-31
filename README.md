# 🆕 Node.js and TypeScript Boilerplate – Version 2.0.0

A modern, minimal, and production-ready Node.js + TypeScript boilerplate — designed for speed, clarity, and scalability. This setup uses **TSUP** as the build engine, **TSX** for instant TypeScript execution, and **path aliases** for clean and maintainable imports.

## ✨ Core Features and Capabilities

- **Modern TypeScript support** — Fully typed with the latest TypeScript (v5.9+).
- **TSUP builder** — Lightning-fast builds with minimal configuration.
- **ESM ready** — Uses `"type": "module"` for next-gen JavaScript compatibility.
- **Import aliases** — Clean and structured import paths via `tsconfig.json`.
- **Hot development environment** — `tsx watch` for seamless development without rebuild fatigue.
- **Optimized output** — Builds directly to `/dist` with efficient bundling.
- **Node.js native support** — Leverages `@types/node` for smooth Node.js API integration.
- **MIT Licensed** — Open source and free to modify.

## 📂 Repository Structure Overview

```ini
node-ts-setup/
│
├── src/
│   ├── index.ts                 # Application entry point
│   └── utilities/
│       └── greet-user.ts        # Example utility function
│
├── tsconfig.json                # TypeScript configuration (with path aliases)
├── tsup.config.ts               # TSUP build configuration
├── package.json                 # Project metadata and npm scripts
├── package-lock.json            # Dependency lock file
├── .gitignore                   # Git ignore rules
├── LICENSE.txt                  # MIT license
```

## ⚙️ Overview of the TSUP Build System

[**TSUP**](https://tsup.egoist.dev/) is the powerhouse behind this setup. It’s an extremely fast TypeScript bundler built on top of **esbuild**, optimized for developer experience.

### 💡 Advantages of Using TSUP

- **Zero-config builds** — Just run `npm run build` and it just works.
- **Blazing fast** — Powered by esbuild, compiles and bundles TypeScript in seconds.
- **Out-of-the-box ESM + CJS support** — Automatically handles module formats.
- **Type declaration support** — Outputs `.d.ts` files seamlessly.
- **Simple but flexible** — Ideal for libraries and production apps alike.

> **In short:** TSUP gives you Vite-like speed for backend development — minimal setup, maximum output.

## 🧭 Rationale for Using Import Path Aliases

Import aliases simplify how you structure and reference your project files.

> **Note:** This alias is resolved via `tsconfig.json` and mirrored in `tsup.config.ts` to ensure consistency between runtime and build paths.

### 📘 Illustrative Example

Instead of writing:

```ts
import { greetUser } from "../../utilities/greet-user";
```

You can write:

```ts
import { greetUser } from "@/utilities/greet-user";
```

### 🎯 Benefits of Import Path Aliasing

- Cleaner and shorter import statements.
- Easier refactoring — no breaking imports when moving files.
- Improves project scalability and readability.

## 🧩 Available NPM Scripts

| Script          | Description                                               |
| --------------- | --------------------------------------------------------- |
| `npm run build` | Builds the project using **TSUP**                         |
| `npm run start` | Runs the compiled code from `dist/`                       |
| `npm run dev`   | Starts development mode using **TSX** with live reloading |

## 🛠️ Setup and Installation Guide

1. **Clone the Repository**

   ```bash
   git clone https://github.com/MohammadAsad-Weber/node-ts-setup.git
   cd node-ts-setup
   ```

2. **Install Dependencies**

   ```bash
   npm install
   ```

3. **Begin Development**

   _Use the `./src` directory as your primary workspace. Use `src/index.ts` as entry point of your application, and structure supporting modules, services, and utilities within subdirectories as needed._

4. **Run the Application**

   ```bash
   # Development mode
   npm run dev

   # Production build
   npm run build
   npm start
   ```

### 📝 Manual Project Setup

1. **Initialize the Project**

   ```bash
   mkdir node-ts-app
   cd node-ts-app
   npm init -y
   ```

2. **Install Dependencies**

   ```bash
   npm install typescript tsconfig-paths @types/node tsup tsx --save-dev
   ```

3. **Configure TypeScript**

   ```bash
   npx tsc --init
   ```

   _Update `tsconfig.json` with recommended strict options:_

   ```json
   // tsconfig.json

   {
     "include": ["./src"],
     "exclude": ["./node_modules", "./dist", "**/*.test.ts"],

     "compilerOptions": {
       "lib": ["ES2022"],
       "target": "ES2022",
       "module": "ESNext",
       "skipLibCheck": true,
       "moduleResolution": "bundler",

       // Linting
       "noUnusedLocals": true,
       "allowUnusedLabels": false,
       "noUnusedParameters": true,
       "allowUnreachableCode": false,
       "noFallthroughCasesInSwitch": true,

       // Strictness
       "strict": true,
       "noImplicitReturns": true,
       "noImplicitOverride": true,
       "noUncheckedIndexedAccess": true,

       // Modules
       "esModuleInterop": true,
       "isolatedModules": true,
       "resolveJsonModule": true,
       "moduleDetection": "force",
       "verbatimModuleSyntax": true,
       "allowImportingTsExtensions": true,

       // Path Aliases
       "baseUrl": "./",
       "paths": {
         "@/*": ["./src/*"]
       },

       // Output
       "noEmit": true,
       "outDir": "./dist"
     }
   }
   ```

4. **Create Entry Point**

   _Create an `index.ts` file inside the `./src` directory to serve as the central entry point of the codebase. This file will act as the main module that organizes and re-exports functionality from other parts of the project, ensuring cleaner imports and a more maintainable structure._

5. **Configure `tsup.config.ts`**

   ```ts
   // tsup.config.ts

   import { resolve } from "path";
   import { defineConfig } from "tsup";

   export default defineConfig({
     // Entry and Output Configuration
     dts: true,
     format: ["esm"],
     target: "ES2022",
     outDir: "./dist",
     entry: ["./src/index.ts"],
     tsconfig: "./tsconfig.json",

     // Build Process Settings
     clean: true,
     shims: true,
     minify: true,
     sourcemap: true,
     splitting: false,
     treeshake: "recommended",

     // Dependency and Bundling Controls
     removeNodeProtocol: true,
     skipNodeModulesBundle: true,

     // Esbuild Customization
     esbuildOptions(options) {
       options.alias = {
         "@": resolve(__dirname, "./src"),
       };
     },
   });
   ```

6. **Update `package.json`**

   ```json
   // package.json

   "type": "module",
   "main": "./dist/index.js",
   "scripts": {
    "build": "tsup",
    "start": "node ./dist/index.js",
    "dev": "tsx watch ./src/index.ts"
   }
   ```

7. **Begin Development**

   _Place all application logic in `./src` directory for a clean separation from build outputs and external dependencies._

8. **Run the Application**

   ```bash
   # Development
   npm run dev

   # Production
   npm run build
   npm start
   ```

## ❓ Frequently Asked Questions (FAQs)

**Question: Why TSUP instead of tsc or webpack?**  
Answer: TSUP is significantly faster, requires no boilerplate config, and outputs clean bundles for both CJS and ESM — perfect for libraries and backend apps.

**Question: Can I use this setup for production APIs?**  
Answer: Absolutely. TSUP outputs clean, optimized builds that are production-ready.

**Question: How do I add environment variables?**  
Answer: Use a `.env` file and load it using a package like `dotenv`.

```ts
// src/index.ts

import "dotenv/config";
console.log(process.env.PORT);
```

**Question: Does this setup support testing frameworks like Jest or Vitest?**  
Answer: Yes. You can easily add `vitest` or `jest` since the structure and TypeScript setup are already aligned for test integration.

## 🔮 Recommended Next Steps

- Integrate **ESLint + Prettier** for code consistency.
- Add **Vitest** for testing support.
- Expand `tsup.config.ts` for multi-entry or library mode builds.
- Consider Dockerizing for deployment.

> This setup is your foundation — clean, modern, and lightning-fast. Extend it as your project grows.

## 📜 License Information

This project is distributed under the terms of the [MIT License](./LICENSE.txt).

## 👨‍💻 Author and Acknowledgments

Developed with dedication and precision by **Mohammad Asad**.  
Explore more about my work and professional background through the following platforms:  
[Portfolio](https://mohammad-asad-portfolio.vercel.app/) |
[LinkedIn](https://www.linkedin.com/in/mohammad-asad-091b6a217/) |
[GitHub](https://github.com/MohammadAsad-Weber) |
[X (Twitter)](https://x.com/IronCodeNagi)
