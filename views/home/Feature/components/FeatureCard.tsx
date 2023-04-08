import { Button, Flex, Text } from "@chakra-ui/react";
import Link from "next/link";

type Props = {
  category: string;
  title: string;
  description: string;
  href: string;
};

const FeatureCard = ({ category, title, description, href }: Props) => {
  return (
    <Flex direction="column" gap="20px" alignItems="start">
      <Text color="primary.500" fontWeight="extrabold" fontSize="lg">
        {category}
      </Text>
      <Text fontWeight="extrabold" fontSize="4xl" lineHeight="shorter">
        {title}
      </Text>
      <Text color="#757095" fontWeight="medium">
        {description}
      </Text>
      <Link href={href}>
        <Button size="xl">Get Started</Button>
      </Link>
    </Flex>
  );
};

export default FeatureCard;
