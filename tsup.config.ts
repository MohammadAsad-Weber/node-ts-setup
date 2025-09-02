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
