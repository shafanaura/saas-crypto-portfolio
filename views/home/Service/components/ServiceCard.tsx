import { Box, Button, Text } from "@chakra-ui/react";
import Link from "next/link";

const ServiceCard = ({
  title,
  description,
  href = "#",
}: {
  title: string;
  description: string;
  href?: string;
}) => {
  return (
    <Box
      transition="all .2s ease"
      _hover={{ shadow: "xl" }}
      py="36px"
      px="62px"
      borderRadius="2xl"
      bg="white"
      textAlign="center"
    >
      <Text fontWeight="extrabold" lineHeight="shorter" fontSize="4xl">
        {title}
      </Text>
      <Text color="#64607D" mt="16px" mb="32px" fontWeight="medium">
        {description}
      </Text>
      <Link href={href}>
        <Button size="xl">Read More</Button>
      </Link>
    </Box>
  );
};
export default ServiceCard;
