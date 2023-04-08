import { defineStyleConfig } from "@chakra-ui/react";

const buttonTheme = defineStyleConfig({
  baseStyle: {
    fontWeight: "medium",
  },
  sizes: {
    lg: {
      fontSize: "md",
    },
    xl: {
      fontSize: "md",
      py: "20px",
      px: "38px",
    },
  },
  variants: {
    secondaryBlack: {
      color: "black",
      bgColor: "secondaryBlack.500",
      _focus: {
        bgColor: "secondaryBlack.600",
      },
      _active: {
        bgColor: "secondaryBlack.600",
      },
      _hover: {
        bgColor: "secondaryBlack.600",
      },
    },
  },
});

export default buttonTheme;
