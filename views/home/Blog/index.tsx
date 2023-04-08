import {
  Box,
  Button,
  ButtonGroup,
  Flex,
  GridItem,
  Icon,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import SpaceContainer from "components/space/SpaceContainer";
import { BLOG1, BLOG2, BLOG3, BLOG4 } from "constant/image";
import Image from "next/image";
import Link from "next/link";
import { BsArrowRightShort } from "react-icons/bs";
import BlogCard from "./components/BlogCard";

const LIST = [
  {
    category: "best practices",
    title: "Partiality on or continuing particular principles as. ",
    image: BLOG2,
  },
  {
    category: "best practices",
    title: "Village did removed enjoyed explain",
    image: BLOG3,
  },
  {
    category: "best practices",
    title: "Wise busy past both park when an ye no. Nay likely her length.",
    image: BLOG4,
  },
];

const Blog = () => {
  return (
    <SpaceContainer pb="80px">
      <Text fontWeight="extrabold" fontSize="4xl" mb="44px">
        Recent Blogs
      </Text>

      <Flex bg="white" _hover={{ shadow: "xl" }} transition="all .2s ease">
        <SimpleGrid columns={5}>
          <GridItem colSpan={3} w="70%">
            <Flex
              direction="column"
              justifyContent="space-between"
              h="full"
              p="24px"
            >
              <Box>
                <Text fontWeight="bold" mb="8px">
                  BEST PRACTICES
                </Text>
                <Text
                  fontWeight="bold"
                  fontSize="2xl"
                  mb="32px"
                  lineHeight="shorter"
                >
                  In design active temper be uneasy. Thirty for remove plenty
                  regard.
                </Text>
              </Box>
              <ButtonGroup>
                <Link href="#">
                  <Button
                    variant="link"
                    color="black"
                    fontWeight="semibold"
                    rightIcon={
                      <Icon
                        as={BsArrowRightShort}
                        transition="all .2s ease"
                        fontSize={24}
                        transform="translateX(-5px)"
                        _groupHover={{ transform: "translateX(0px)" }}
                      />
                    }
                  >
                    Read More
                  </Button>
                </Link>
              </ButtonGroup>
            </Flex>
          </GridItem>

          <GridItem colSpan={2}>
            <Box w="full" h="250px" position="relative">
              <Image src={BLOG1} alt="" style={{ objectFit: "cover" }} fill />
            </Box>
          </GridItem>
        </SimpleGrid>
      </Flex>
      <SimpleGrid mt="24px" columns={3} gap="20px">
        {LIST.map(({ category, image, title }, idx) => (
          <BlogCard key={idx} category={category} image={image} title={title} />
        ))}
      </SimpleGrid>
    </SpaceContainer>
  );
};

export default Blog;
