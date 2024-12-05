import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/index.ts"], // Entry point
  format: ["esm", "cjs"], // Output formats
  dts: true, // Enable generation of .d.ts files
  target: "esnext", // Target modern JavaScript
  sourcemap: true, // Optional: Generate sourcemaps
  clean: true, // Clean the output directory before building
});
