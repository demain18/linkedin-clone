import { useState } from "react";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { Provider } from "react-redux";
import store from "../modules/store";
import styled, { ThemeProvider } from "styled-components";

// msw 적용
if (typeof global.process === "undefined") {
  const { worker } = require("../mocks/browser");
  worker.start();
}

const paletteLight = {
  white: "#fff",
  black: "#1b1c1d",
  primary: "#2185d0",
  gray: "#767676",
  grayPoint1: "rgba(0, 0, 0, 0.1)",
  grayPoint2: "rgba(0, 0, 0, 0.2)",
  grayPoint4: "rgba(0, 0, 0, 0.4)",
  grayPoint6: "rgba(0, 0, 0, 0.6)",
  grayPoint8: "rgba(0, 0, 0, 0.8)",
  lightGray: "#ececec",
  background: "#f3f2ef",
};

function MyApp({ Component, pageProps }: AppProps) {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={paletteLight}>
          <Component {...pageProps} />
          <ReactQueryDevtools />
        </ThemeProvider>
      </QueryClientProvider>
    </Provider>
  );
}

export default MyApp;
