import { useState } from "react";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { Provider, useSelector } from "react-redux";
import store, { RootState } from "../modules/store";
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

const paletteDark = {
  white: "#1b1c1d",
  black: "#fff",
  primary: "#2185d0",
  gray: "#767676",
  grayPoint1: "rgba(255, 255, 255, 0.1)",
  grayPoint2: "rgba(255, 255, 255, 0.2)",
  grayPoint4: "rgba(255, 255, 255,0.4)",
  grayPoint6: "rgba(255, 255, 255, 0.6)",
  grayPoint8: "rgba(255, 255, 255, 0.771)",
  lightGray: "#ececec",
  background: "#323232",
};

function MyApp({ Component, pageProps }: AppProps) {
  const [queryClient] = useState(() => new QueryClient());
  // const themeNow = useSelector((state: RootState) => state.global.themeIsLight);
  // console.log(themeNow);

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
