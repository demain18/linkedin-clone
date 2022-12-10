import * as NextImage from "next/image";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

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
  worker.start();
}

// react-quary 적용
const queryClient = new QueryClient();
export const decorators = [
  (Story) => (
    <QueryClientProvider client={queryClient}>
      <Story />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  ),
];
