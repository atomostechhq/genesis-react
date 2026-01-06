import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/index.ts"], // Entry point
  format: ["esm", "cjs"], // Output formats
  dts: {
    resolve: true,
    compilerOptions: {
      skipLibCheck: true,
      moduleResolution: "node", // Explicitly set module resolution
      esModuleInterop: true,
      allowSyntheticDefaultImports: true,
    },
  }, // Enable generation of .d.ts files
  target: "esnext", // Target modern JavaScript
  sourcemap: true, // Optional: Generate sourcemaps
  clean: true, // Clean the output directory before building
  external: ["react", "react-dom", "react-router-dom"], // Exclude React and React-DOM from the bundle
  esbuildOptions(options) {
    options.banner = {
      js: `'use client';`, // Add the "use client" directive if building React client components
    };
  },
});
