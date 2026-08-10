import { createRoot } from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import App from "./App.tsx";

// Self-hosted variable fonts. Bundled and hashed by Vite, so there is no
// third-party origin in the critical path and no separate DNS/TLS handshake.
// Both cover 100-900, which the previous Google Fonts request did not.
import "@fontsource-variable/archivo";
import "@fontsource-variable/inter";

import "./index.css";
import { initializeErrorHandling } from "./utils/debug";

// Initialize error handling and debugging
initializeErrorHandling();

createRoot(document.getElementById("root")!).render(
  <HelmetProvider>
    <App />
  </HelmetProvider>
);