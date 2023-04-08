import {
  Box,
  Button,
  ButtonGroup,
  Flex,
  Icon,
  Image as ChakraImage,
  Text,
} from "@chakra-ui/react";
import Navbar from "components/navbar/Navbar";
import SpaceContainer from "components/space/SpaceContainer";
import { DASHBOARD_IMAGE } from "constant/image";
import { PATTERN1 } from "constant/pattern";
import Image from "next/image";
import { BsFillPlayCircleFill } from "react-icons/bs";

const Hero = () => {
  return (
    <Box h="700px" bg="primary.500">
      <ChakraImage
        src={PATTERN1}
        alt=""
        w="full"
        position="absolute"
        pointerEvents="none"
      />
      <SpaceContainer pt="12px">
        <Navbar />
        <Flex
          direction="column"
          alignItems="center"
          textColor="white"
          textAlign="center"
          py="42px"
        >
          <Text
            maxW="950px"
            fontWeight="extrabold"
            lineHeight="shorter"
            fontSize={{ base: "3xl", sm: "4xl", md: "6xl" }}
          >
            Managing your crypto portfolio has never been easier
          </Text>
          <Text maxW="550px" mt="14px">
            End-to-end payments and financial management in a single solution.
            Meet the right platform to help realize.
          </Text>
          <Flex my="52px" gap="48px">
            <Button size="xl" rounded="full" colorScheme="secondary">
              Get started
            </Button>
            <ButtonGroup>
              <Button
                variant="link"
                color="white"
                leftIcon={
                  <Icon
                    transition="all .2s ease"
                    bg="white"
                    rounded="full"
                    as={BsFillPlayCircleFill}
                    color="green.400"
                    fontSize="60px"
                    _groupHover={{ color: "green.300" }}
                  />
                }
                _groupHover={{ color: "white" }}
              >
                See How It Works
              </Button>
            </ButtonGroup>
          </Flex>
          <Box p={4} borderRadius="xl" bg="whiteAlpha.100">
            <Box p={4} borderRadius="xl" bg="whiteAlpha.200">
              <Box p={4} borderRadius="xl" bg="whiteAlpha.300">
                <Image
                  style={{
                    borderRadius: "0.75rem",
                    boxShadow: "0px 24px 34px rgba(0, 0, 0, 0.04)",
                  }}
                  src={DASHBOARD_IMAGE}
                  alt=""
                  width={800}
                  height={120}
                />
              </Box>
            </Box>
          </Box>
        </Flex>
      </SpaceContainer>
    </Box>
  );
};

export default Hero;
