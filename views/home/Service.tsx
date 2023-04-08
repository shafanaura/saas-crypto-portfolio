import { Box, GridItem, SimpleGrid, Text } from "@chakra-ui/react";
import SpaceContainer from "components/space/SpaceContainer";
import { AiOutlineDatabase } from "react-icons/ai";
import { HiOutlineBuildingOffice2 } from "react-icons/hi2";
import { IoShieldCheckmarkOutline } from "react-icons/io5";
import ServiceCard from "./Service/components/ServiceCard";
import ServiceCardIcon from "./Service/components/ServiceCardIcon";

const ARTICLE = [
  {
    title: "Outward clothes promise at gravity.",
    description:
      "End-to-end payments and financial management in a single solution. Meet the right platform to help realize.",
  },
  {
    title: "Sufficient particular impossible.",
    description:
      "End-to-end payments and financial management in a single solution. Meet the right platform to help realize.",
  },
];

const LIST = [
  {
    icon: IoShieldCheckmarkOutline,
    label: "Data does not leave our servers",
  },
  {
    icon: HiOutlineBuildingOffice2,
    label: "Great own infrastructure",
  },
  {
    icon: AiOutlineDatabase,
    label: "Most renowed data centers",
  },
];

const Service = () => {
  return (
    <Box py="60px" id="service">
      <SpaceContainer>
        <SimpleGrid
          columns={3}
          alignItems="center"
          p="30px"
          borderRadius="2xl"
          bg="white"
          border="1px"
          borderColor="gray.300"
        >
          <GridItem>
            <Text lineHeight="shorter" fontWeight="extrabold" fontSize="3xl">
              Germany-based & GDPR Compliant
            </Text>
          </GridItem>
          <GridItem colSpan={2}>
            <SimpleGrid gap="24px" columns={3}>
              {LIST.map(({ icon, label }, idx) => (
                <ServiceCardIcon key={idx} icon={icon} label={label} />
              ))}
            </SimpleGrid>
          </GridItem>
        </SimpleGrid>
        <SimpleGrid mt="52px" gap="28px" columns={2}>
          {ARTICLE.map(({ description, title }, idx) => (
            <ServiceCard key={idx} description={description} title={title} />
          ))}
        </SimpleGrid>
      </SpaceContainer>
    </Box>
  );
};

export default Service;
