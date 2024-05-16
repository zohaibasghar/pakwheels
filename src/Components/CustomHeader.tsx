import React from "react";
import { Text, VStack, HStack, Container, Box } from "native-base";
import CustomBackButton from "./CustomBackButton";

const CustomHeader = ({ title, subtitle }: { title: string; subtitle?: string }) => {
  return (
    <Container mb={1} mt={4}>
      <HStack alignItems={"center"} justifyContent={"space-between"}>
        <Box ml={4}>
          <CustomBackButton />
        </Box>
        <VStack alignItems="center" w={"85%"}>
          <Text fontSize="lg" fontWeight="bold" textAlign={"center"}>
            {title}
          </Text>
          {subtitle && (
            <Text fontSize="sm" color="gray.500" m={0} lineHeight={16}>
              {subtitle}
            </Text>
          )}
        </VStack>
      </HStack>
    </Container>
  );
};

export default CustomHeader;
