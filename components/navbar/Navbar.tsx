import {
  Box,
  Button,
  Flex,
  Link as ChakraLink,
  Popover,
  PopoverBody,
  PopoverContent,
  PopoverTrigger,
  Stack,
  Text,
  Icon,
  SimpleGrid,
  GridItem,
} from "@chakra-ui/react";
import Link from "next/link";
import { BsGithub } from "react-icons/bs";
import { HiOutlineChevronRight } from "react-icons/hi";

const menuItems = [
  {
    label: "List 1",
    subLabel: "Label 1",
    href: "/list-1",
  },
  {
    label: "List 2",
    subLabel: "Label 2",
    href: "/list-2",
  },
  {
    label: "List 3",
    subLabel: "Label 3",
    href: "/list-3",
  },
];

const menuData = [
  {
    title: "Product",
    children: menuItems,
  },
  {
    title: "Feature",
    href: "#feature",
  },
  {
    title: "Blog",
    href: "/blog",
  },
  {
    title: "Service",
    href: "#service",
  },
];

const Navbar = () => {
  return (
    <Box>
      <Flex justifyContent="space-between" alignItems="center">
        <Flex gap="72px" alignItems="center">
          <Text fontSize="2xl" textColor="white" fontWeight="bold">
            LOGO
          </Text>
          <Flex justifyContent="center" gap={10}>
            {menuData.map(({ title, children, href }, idx) =>
              children ? (
                <Popover key={idx} trigger="hover" placement="bottom-start">
                  <PopoverTrigger>
                    <Text
                      cursor="pointer"
                      _hover={{ color: "white" }}
                      textColor="whiteAlpha.800"
                      fontWeight="medium"
                    >
                      {title}
                    </Text>
                  </PopoverTrigger>
                  <PopoverContent>
                    {children.map(({ label, href, subLabel }, mIdx) => (
                      <PopoverBody key={mIdx}>
                        <ChakraLink
                          _hover={{
                            textDecoration: "none",
                            bg: "secondary.50",
                          }}
                          href={href}
                          role="group"
                          display="block"
                          p={2}
                          rounded="md"
                        >
                          <Stack direction="row" align="center">
                            <Box>
                              <Text
                                transition="all .3s ease"
                                _groupHover={{ color: "secondary.400" }}
                                fontWeight="medium"
                              >
                                {label}
                              </Text>
                              <Text fontSize="sm">{subLabel}</Text>
                            </Box>
                            <Flex
                              transition="all .3s ease"
                              transform="translateX(-10px)"
                              opacity={0}
                              _groupHover={{
                                opacity: "100%",
                                transform: "translateX(0)",
                              }}
                              justify="flex-end"
                              align="center"
                              flex={1}
                            >
                              <Icon
                                color="secondary.400"
                                w={5}
                                h={5}
                                as={HiOutlineChevronRight}
                              />
                            </Flex>
                          </Stack>
                        </ChakraLink>
                      </PopoverBody>
                    ))}
                  </PopoverContent>
                </Popover>
              ) : (
                <Text
                  cursor="pointer"
                  _hover={{ color: "white" }}
                  textColor="whiteAlpha.800"
                  fontWeight="medium"
                  key={idx}
                >
                  <Link href={href}>{title}</Link>
                </Text>
              )
            )}
          </Flex>
        </Flex>
        <Flex alignItems="center" gap={10}>
          <ChakraLink color="white">Sign In</ChakraLink>
          <a
            target="_blank"
            href="https://github.com/shafanaura/saas-crypto-portfolio"
          >
            <Button
              leftIcon={<Icon as={BsGithub} />}
              size="lg"
              fontSize="md"
              rounded="10px"
              colorScheme="secondary"
            >
              Source code
            </Button>
          </a>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Navbar;
