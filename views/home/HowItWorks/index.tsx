import {
  Box,
  Button,
  Flex,
  GridItem,
  SimpleGrid,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import SpaceContainer from "components/space/SpaceContainer";
import { THUMBNAIL } from "constant/image";
import { PATTERN4 } from "constant/pattern";
import { PATTERN3 } from "constant/pattern";
import { PATTERN2 } from "constant/pattern";
import Image from "next/image";
import React from "react";
import StepWrapper from "./components/StepWrapper";

const STEPS = [
  {
    title: "First Working Process",
    description: "Blessing it ladyship on sensible judgment settling outweigh.",
  },
  {
    title: "Dedicated Team",
    description: "Warmly little before cousin sussex entire men set.",
  },
  {
    title: "24/7 Hours Support",
    description:
      "And excellence partiality estimating terminated day everything.",
  },
];

const HowItWorks = () => {
  return (
    <Box bg="primary.500">
      <SpaceContainer>
        <Box py="100px">
          <SimpleGrid columns={3}>
            <GridItem colSpan={2}>
              <Text
                color="white"
                fontWeight="extrabold"
                fontSize="4xl"
                lineHeight="shorter"
              >
                Yet preference connection unpleasant yet melancholy but end
                appearance
              </Text>
            </GridItem>
            <Flex justifyContent="end" h="max">
              <Button colorScheme="secondary" size="xl">
                Get Started Now
              </Button>
            </Flex>
          </SimpleGrid>
          <Flex gap="80px" mt="60px">
            <Stack gap="24px">
              {STEPS.map(({ description, title }, idx) => (
                <StepWrapper
                  key={idx}
                  number={idx + 1}
                  description={description}
                  title={title}
                />
              ))}
            </Stack>
            <Box w="55%">
              <Box position="relative">
                <Box position="absolute" zIndex={3} top={-30} left={-30}>
                  <Image src={PATTERN2} alt="" height={120} width={120} />
                </Box>
                <Box position="absolute" zIndex={1} top={-30} right={-30}>
                  <Image src={PATTERN3} alt="" height={70} width={70} />
                </Box>
                <Box position="absolute" zIndex={1} bottom={-340} right={-5}>
                  <Image src={PATTERN4} alt="" height={40} width={40} />
                </Box>
                <Box zIndex={99} position="absolute">
                  <Image src={THUMBNAIL} alt="" width={1000} height={200} />
                </Box>
              </Box>
            </Box>
          </Flex>
        </Box>
      </SpaceContainer>
    </Box>
  );
};

export default HowItWorks;
