import path from "path";
import { defineConfig } from "vitest/config";

export default defineConfig({
  resolve: {
    alias: {
      "@stellar-dev-kit/auth": path.resolve(
        __dirname,
        "../../shared/auth/src/index.ts",
      ),
      "@stellar-dev-kit/config": path.resolve(
        __dirname,
        "../../shared/config/src/index.ts",
      ),
      "@stellar-dev-kit/hooks": path.resolve(
        __dirname,
        "../../shared/hooks/src/index.ts",
      ),
      "@stellar-dev-kit/ui": path.resolve(
        __dirname,
        "../../shared/ui/src/index.ts",
      ),
      "@stellar-dev-kit/utils": path.resolve(
        __dirname,
        "../../shared/utils/src/index.ts",
      ),
    },
  },
});
