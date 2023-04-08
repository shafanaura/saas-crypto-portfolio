import { extendTheme, withDefaultColorScheme } from "@chakra-ui/react";
import { colorTheme } from "./colors/color";
import buttonTheme from "./components/button";

const config = {
  initialColorMode: "light",
  useSystemColorMode: false,
};

const theme = extendTheme(
  {
    colors: colorTheme,
    components: { Button: buttonTheme },
  },
  { config },
  withDefaultColorScheme({ colorScheme: "primary" })
);

export default theme;
