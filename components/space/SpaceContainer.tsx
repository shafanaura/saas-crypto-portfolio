import { Box, BoxProps, VStack } from "@chakra-ui/react";
import React, { ReactNode } from "react";

type SpaceContainerProps = BoxProps & {
  children: ReactNode;
};

const SpaceContainer = ({ children, ...rest }: SpaceContainerProps) => {
  return (
    <Box {...rest} mx="auto" maxW={{ base: "100%", md: "1100px" }}>
      {children}
    </Box>
  );
};

export default SpaceContainer;
