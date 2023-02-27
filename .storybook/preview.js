import * as NextImage from "next/image";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { Provider, useSelector } from "react-redux";
import store from "modules/store";
import { ThemeProvider } from "styled-components";
import { paletteLight, paletteDark } from "@/styles/paletteStyles";
import { RouterContext } from "next/dist/shared/lib/router-context";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  backgrounds: {
    default: "lightGray",
    values: [
      {
        name: "lightGray",
        value: "rgba(0, 0, 0, 0.02)",
      },
    ],
  },
  nextRouter: {
    Provider: RouterContext.Provider,
  },
};

// next image 적용
const OriginalNextImage = NextImage.default;

Object.defineProperty(NextImage, "default", {
  configurable: true,
  value: (props) => <OriginalNextImage {...props} unoptimized />,
});

// msw 적용
if (typeof global.process === "undefined") {
  const { worker } = require("../mocks/browser");
  worker.start({ quiet: true });
}

// react-quary 적용
const queryClient = new QueryClient();

export const decorators = [
  (Story) => (
    <Provider store={store}>
      <App queryClient={queryClient} Story={Story} />
    </Provider>
  ),
];

function App({ queryClient, Story }) {
  const themeIsLight = useSelector((state) => state.global.themeIsLight);

  const theme = themeIsLight ? paletteLight : paletteDark;

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <Story />
        <ReactQueryDevtools initialIsOpen={false} />
      </ThemeProvider>
    </QueryClientProvider>
  );
}
