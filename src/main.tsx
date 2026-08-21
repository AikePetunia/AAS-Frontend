import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { SpeedInsights } from "@vercel/speed-insights/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { persistQueryClient } from "@tanstack/react-query-persist-client";
import { createAsyncStoragePersister } from "@tanstack/query-async-storage-persister";

// Monitorea toda la cache que pase por aquí y guarda en el navegador
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      gcTime: 1000 * 60 * 10,
    },
  },
});

const localStoragePersister = createAsyncStoragePersister({
  storage: window.localStorage,
});

persistQueryClient({ queryClient, persister: localStoragePersister });

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <App />
      <SpeedInsights debug={false} />
    </QueryClientProvider>
  </StrictMode>,
);