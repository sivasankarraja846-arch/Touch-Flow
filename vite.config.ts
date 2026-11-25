// The shared Vite configuration provides the TanStack Start, React, Tailwind,
// TypeScript paths, Nitro, and development-server setup used by this project.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  tanstackStart: {
    // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
    // nitro/vite builds from this
    server: { entry: "server" },
  },
});
