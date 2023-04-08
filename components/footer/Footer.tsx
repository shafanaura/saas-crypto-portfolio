import {
  Box,
  GridItem,
  SimpleGrid,
  Stack,
  Text,
  Link as ChakraLink,
  Divider,
  Flex,
} from "@chakra-ui/react";
import SpaceContainer from "components/space/SpaceContainer";
import Link from "next/link";
import React from "react";

const LIST = [
  {
    category: "Company",
    child: [
      {
        title: "About Us",
        href: "#",
      },
      {
        title: "Careers",
        href: "#",
      },
      {
        title: "Blog",
        href: "#",
      },
      {
        title: "Pricing",
        href: "#",
      },
    ],
  },
  {
    category: "Product",
    child: [
      {
        title: "Invoicing Platform",
        href: "#",
      },
      {
        title: "Accounting Plateform",
        href: "#",
      },
      {
        title: "Create Proposal",
        href: "#",
      },
      {
        title: "Contracts",
        href: "#",
      },
    ],
  },
  {
    category: "Resources",
    child: [
      {
        title: "Proposal Template",
        href: "#",
      },
      {
        title: "Proposal Template",
        href: "#",
      },
      {
        title: "Tuturoial",
        href: "#",
      },
      {
        title: "How to write a contract",
        href: "#",
      },
    ],
  },
];

const Footer = () => {
  return (
    <>
      <Divider borderColor="gray.900" />
      <Box bg="blueBlack.500">
        <SpaceContainer py="72px" color="white">
          <SimpleGrid columns={5} gap="42px">
            <GridItem colSpan={2}>
              <Text fontWeight="bold" fontSize="xl" mb="24px">
                LOGO
              </Text>
              <Text fontWeight="medium" opacity={0.4}>
                Yet bed any for travelling assistance indulgence unpleasing. Not
                thoughts all exercise blessing. Indulgence way everything joy
                alteration boisterous the attachment.
              </Text>
            </GridItem>
            <GridItem colSpan={3}>
              <SimpleGrid columns={3} gap="24px">
                {LIST.map((item, idx) => (
                  <Box key={idx}>
                    <Text fontWeight="bold" fontSize="xl" mb="24px">
                      {item.category}
                    </Text>
                    <Stack gap="8px">
                      {item.child.map((c, id) => (
                        <Text opacity={0.4} _hover={{ opacity: 1 }} key={id}>
                          <Link href={c.href}>{c.title}</Link>
                        </Text>
                      ))}
                    </Stack>
                  </Box>
                ))}
              </SimpleGrid>
            </GridItem>
          </SimpleGrid>
        </SpaceContainer>
      </Box>
      <Divider borderColor="gray.900" />
      <Box bg="blueBlack.500" color="white" fontSize="sm">
        <SpaceContainer>
          <Flex justifyContent="space-between" py="32px">
            <Text>
              2023 Company. All rights reserved. -- Privacy Policy - Terms of
              Services
            </Text>
            <Text>
              Supported by{" "}
              <Text as="span" fontWeight="bold">
                Microsoft Startup
              </Text>
            </Text>
          </Flex>
        </SpaceContainer>
      </Box>
    </>
  );
};

export default Footer;
