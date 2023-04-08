import { ChakraProvider } from "@chakra-ui/react";
import type { AppProps } from "next/app";
import theme from "styles/theme/theme";
import { Manrope } from "next/font/google";

const manrope = Manrope({
  weight: [],
  subsets: [],
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <main className={manrope.className}>
        <Component {...pageProps} />
      </main>
    </ChakraProvider>
  );
}
export default MyApp;
