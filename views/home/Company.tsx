import { Box, Flex, Text } from "@chakra-ui/react";
import SpaceContainer from "components/space/SpaceContainer";
import {
  MONDAY,
  MORPHEUS,
  ZEPPELIN,
  ORACLE,
  PROTONET,
  SAMSUNG,
  SEGMENT,
} from "constant/logo";
import Image from "next/image";
import React from "react";
import Marquee from "react-fast-marquee";

const LOGO = [MONDAY, MORPHEUS, ZEPPELIN, ORACLE, PROTONET, SAMSUNG, SEGMENT];

const Company = () => {
  return (
    <Box mt="450px">
      <SpaceContainer textAlign="center" mb="20px">
        <Text fontWeight="medium" fontSize="xl">
          Over 32k+ software businesses growing with us.
        </Text>
      </SpaceContainer>
      <Marquee speed={80}>
        {LOGO.map((item, idx) => (
          <Image
            key={idx}
            src={item}
            width={140}
            height={140}
            style={{
              margin: "0px 32px",
            }}
            alt=""
          />
        ))}
      </Marquee>
    </Box>
  );
};

export default Company;
