import { useEffect, useState } from "react";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { Provider, useSelector } from "react-redux";
import store, { RootState } from "../modules/store";
import styled, { ThemeProvider } from "styled-components";
import { paletteLight, paletteDark } from "@/styles/paletteStyles";

// msw 적용
if (typeof global.process === "undefined") {
  const { worker } = require("../mocks/browser");
  worker.start();
}

function MyApp({ Component, pageProps }: AppProps) {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <Provider store={store}>
      <App
        queryClient={queryClient}
        Component={Component}
        pageProps={pageProps}
      />
    </Provider>
  );
}

function App({ queryClient, Component, pageProps }) {
  const themeIsLight = useSelector(
    (state: RootState) => state.global.themeIsLight
  );

  const theme = themeIsLight ? paletteLight : paletteDark;

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <Component {...pageProps}></Component>
        <ReactQueryDevtools />
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default MyApp;
