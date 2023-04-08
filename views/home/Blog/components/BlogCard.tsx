import { Box, Flex, Text } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";

type Props = { category: string; title: string; image: string };

const BlogCard = ({ category, title, image }: Props) => {
  return (
    <Flex
      h="370px"
      direction="column"
      justifyContent="space-between"
      bg="white"
      _hover={{ shadow: "xl" }}
      transition="all .2s ease"
    >
      <Box p="24px">
        <Text fontWeight="bold" mb="8px" textTransform="uppercase">
          {category}
        </Text>
        <Text fontWeight="bold" fontSize="2xl" lineHeight="shorter">
          {title}
        </Text>
      </Box>
      <Box w="full" h="190px" position="relative">
        <Image src={image} alt="" style={{ objectFit: "cover" }} fill />
      </Box>
    </Flex>
  );
};

export default BlogCard;
