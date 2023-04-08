import { Box, Button, ButtonGroup, Icon, Text, VStack } from "@chakra-ui/react";
import SpaceContainer from "components/space/SpaceContainer";
import Link from "next/link";
import React from "react";
import { BsArrowRightShort } from "react-icons/bs";

const JoinCTA = () => {
  return (
    <Box bg="blueBlack.500">
      <SpaceContainer py="72px">
        <Box textAlign="center">
          <Text
            mb="30px"
            fontWeight="medium"
            lineHeight="shorter"
            fontSize="5xl"
            color="white"
          >
            Join millions of <br /> creative people with us
          </Text>
          <ButtonGroup>
            <Link href="#">
              <Button
                variant="secondaryBlack"
                size="xl"
                fontWeight="semibold"
                rightIcon={
                  <Icon
                    as={BsArrowRightShort}
                    transition="all .2s ease"
                    fontSize={24}
                    transform="translateX(-2px)"
                    _groupHover={{ transform: "translateX(2px)" }}
                  />
                }
              >
                Join The Waitlist
              </Button>
            </Link>
          </ButtonGroup>
        </Box>
      </SpaceContainer>
    </Box>
  );
};

export default JoinCTA;
