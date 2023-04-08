import { Flex, Icon, Text, VStack } from "@chakra-ui/react";
import { IconType } from "react-icons/lib";

const ServiceCardIcon = ({
  icon,
  label,
}: {
  icon: IconType;
  label: string;
}) => {
  return (
    <Flex gap="8px" alignItems="center">
      <VStack
        justifyContent="center"
        p="12px"
        minH="50px"
        minW="50px"
        bg="gray.200"
        borderRadius="lg"
      >
        <Icon as={icon} fontSize="24px" />
      </VStack>
      <Text fontWeight="semibold" color="#64607D">
        {label}
      </Text>
    </Flex>
  );
};

export default ServiceCardIcon;
