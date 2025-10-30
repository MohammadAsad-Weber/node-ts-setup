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
