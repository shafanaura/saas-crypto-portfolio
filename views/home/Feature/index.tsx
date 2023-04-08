import { Box, Button, Flex, SimpleGrid, Stack, Text } from "@chakra-ui/react";
import SpaceContainer from "components/space/SpaceContainer";
import { SECTION1_IMAGE, SECTION2_IMAGE } from "constant/image";
import Image from "next/image";
import React from "react";
import FeatureCard from "./components/FeatureCard";

const Feature = () => {
  return (
    <SpaceContainer
      display="flex"
      flexDirection="column"
      gap="76px"
      id="feature"
    >
      <SimpleGrid alignItems="center" gap="68px" columns={2}>
        <Image src={SECTION1_IMAGE} alt="" width={800} height={400} />
        <FeatureCard
          category="OUR FEATURE"
          title="All of your portfolios are linked to your one account"
          href="#"
          description="Why kept very ever home mrs. Considered sympathize ten uncommonly occasional assistance sufficient not. Letter of on become he tended active enable to."
        />
      </SimpleGrid>
      <SimpleGrid alignItems="center" gap="68px" columns={2}>
        <FeatureCard
          category="OUR FEATURE"
          title="All payments can be managed from one account"
          href="#"
          description="Why kept very ever home mrs. Considered sympathize ten uncommonly occasional assistance sufficient not. Letter of on become he tended active enable to."
        />
        <Image src={SECTION2_IMAGE} alt="" width={800} height={400} />
      </SimpleGrid>
    </SpaceContainer>
  );
};

export default Feature;
