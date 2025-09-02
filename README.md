# 🔰 Node.js + TypeScript Quickstart

A modern, **production-ready boilerplate** for building scalable **Node.js applications** with **TypeScript**.  
This setup eliminates repetitive configuration and provides a clean, extensible foundation for development.

## ✨ Features at a Glance

- ⚡ **Zero-config TypeScript** – Strict type safety enabled out-of-the-box
- 📦 **Tsup Bundling** – Ultra-fast builds optimized for Node.js
- 🛤️ **Import Aliases** – Simplify imports with `@/*` path support
- 🧹 **Clean Architecture** – Minimal, organized, and intuitive project layout
- 🔄 **Live Watch Mode** – Automatic rebuilds for a smooth development experience
- 🛠️ **Framework Agnostic** – Easily integrate Express, Fastify, or NestJS
- 📜 **MIT License** – Free for personal and commercial use

_Suitable for microservices, CLI tools, and full-scale APIs._

## 📂 Project Structure

```ini
node-ts-setup/
├── dist/             # Compiled output
├── src/              # Application source code
├── tsconfig.json     # TypeScript configuration
├── tsup.config.ts    # Tsup build configuration
├── package.json      # Metadata, dependencies, and scripts
├── .gitignore        # Git ignore rules
├── LICENSE.txt       # License file
└── README.md         # Project documentation
```

## ⚙️ Installation

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

   _Use the `./src` directory as your primary workspace. Create your entry point as `src/index.ts`, and structure supporting modules, services, and utilities within subdirectories as needed._

4. **Run the Application**

   ```bash
   # Development mode
   npm run dev

   # Production build
   npm run build
   npm start
   ```

## 🤏 Manual Set-up

### ❌ Without TSUP & Import Alias

1. **Initialize the Project**

   ```bash
   mkdir node-ts-app
   cd node-ts-app
   npm init -y
   ```

2. **Install Dependencies**

   ```bash
   npm install typescript @types/node tsx --save-dev
   ```

3. **Configure TypeScript**

   ```bash
   npx tsc --init
   ```

   _Update `tsconfig.json` with recommended strict options:_

   ```json
   // tsconfig.json

   {
     "compilerOptions": {
       "lib": ["ES2020"],
       "target": "ES2020",
       "module": "ESNext",
       "skipLibCheck": true,
       "moduleResolution": "bundler",

       /* Strictness and safety checks */
       "strict": true,
       "noUnusedLocals": true,
       "noImplicitReturns": true,
       "noUnusedParameters": true,
       "noUncheckedIndexedAccess": true,
       "noFallthroughCasesInSwitch": true,
       "noUncheckedSideEffectImports": true,

       /* Emit and compilation behavior */
       "noEmitOnError": true,
       "importHelpers": true,
       "removeComments": true,
       "resolveJsonModule": true,
       "rewriteRelativeImportExtensions": true,

       /* Path resolution */
       "outDir": "./dist",
       "rootDir": "./src",
       "typeRoots": ["./node_modules/@types", "./src/types"]
     },
     "include": ["./src"],
     "exclude": ["./node_modules", "./dist"]
   }
   ```

4. **Create Entry Point**

   _Create an `index.ts` file inside the `./src` directory to serve as the central entry point of the codebase. This file will act as the main module that organizes and re-exports functionality from other parts of the project, ensuring cleaner imports and a more maintainable structure._

5. **Update `package.json`**

   ```json
   // package.json

   "type": "module",
   "main": "./dist/index.js",
   "scripts": {
    "build": "tsc",
    "start": "node ./dist/index.js",
    "dev": "tsx watch ./src/index.ts"
   }
   ```

6. **Begin Development**

   _Place all application logic in `./src` directory for a clean separation from build outputs and external dependencies._

7. **Run the Application**

   ```bash
   # Development
   npm run dev

   # Production
   npm run build
   npm start
   ```

### ✅ With Tsup & Import Aliases

_Building on the above setup, only the following changes/additions are require_

1. **Install Additional Dependencies**

   ```bash
   npm install tsconfig-paths tsup --save-dev
   ```

2. **Update `tsconfig.json`**

   ```json
   // tsconfig.json

   {
     "compilerOptions": {
       // ...
       "baseUrl": "./",
       "paths": { "@/*": ["./src/*"] }
       // ...
     }
   }
   ```

3. **Configure `tsup.config.ts`**

   ```ts
   // tsup.config.ts

   import path from "path";
   import { defineConfig } from "tsup";

   export default defineConfig({
     format: ["esm"],
     target: "ES2020",
     outDir: "./dist",
     entry: ["./src/index.ts"],

     /* Output options */
     dts: true,
     clean: true,
     minify: true,
     sourcemap: true,
     tsconfig: "./tsconfig.json",

     /* Alias configuration */
     esbuildOptions(options) {
       options.alias = {
         "@": path.resolve(__dirname, "./src"),
       };
     },
   });
   ```

4. **Update `package.json`**

   ```json
   // package.json

   "scripts": {
    // ...
    "build": "tsup",
    // ...
   }
   ```

5. **Run the Application**

   ```bash
   # Development
   npm run dev

   # Production
   npm run build
   npm start
   ```

## 🚀 Roadmap

- Integrate ESLint and Prettier for consistent code quality
- Include Jest or Vitest as a default testing framework
- Provide Docker support for containerized environments
- Add starter templates for Express.js and Fastify

## ❓ Frequently Asked Questions

**Question: Why use Tsup instead of tsc?**  
Answer: Tsup offers superior performance, tree-shaking, minification, and better support for modern Node.js compared to plain tsc.

**Question: Can this be used with Express or NestJS?**  
Answer: Absolutely. Install your preferred framework (express, fastify, or @nestjs/core) and begin development without additional configuration.

**Question: Is this production-ready?**  
Answer: Yes, the setup is minimal but optimized, making it suitable for production deployments out of the box.

## 📜 License

This project is licensed under the [MIT](./LICENSE.txt) License.

## 👨‍💻 Author

Built with ❤️ by **Mohammad Asad**  
[Portfolio](https://mohammad-asad-portfolio.vercel.app/)
[Linked](https://www.linkedin.com/in/mohammad-asad-091b6a217/)
[GitHub](https://github.com/MohammadAsad-Weber)
[X](https://x.com/IronCodeNagi)
