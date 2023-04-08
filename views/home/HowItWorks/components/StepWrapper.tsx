import { Flex, Stack, Text } from "@chakra-ui/react";
import React from "react";

const StepWrapper = ({
  number,
  title,
  description,
}: {
  number: string | number;
  title: string;
  description: string;
}) => {
  return (
    <Flex gap="18px">
      <Flex
        h="max"
        alignItems="center"
        justifyContent="center"
        borderRadius="full"
        minHeight="70px"
        minWidth="70px"
        textColor="white"
        fontSize="3xl"
        fontWeight="bold"
        bg="rgba(27,28,49,0.2)"
      >
        <Text>{number}</Text>
      </Flex>

      <Stack spacing="4px">
        <Text fontWeight="bold" fontSize="2xl" textColor="white">
          {title}
        </Text>
        <Text fontWeight="medium" color="#A0B3E9">
          {description}
        </Text>
      </Stack>
    </Flex>
  );
};

export default StepWrapper;
