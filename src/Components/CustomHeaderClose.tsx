import React from "react";
import { Text, VStack, HStack, Container, Box } from "native-base";
import { MaterialIcons } from "@expo/vector-icons";
import { StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

const CustomHeaderClose = ({ title, subtitle }: { title: string; subtitle?: string }) => {
  const nav = useNavigation();
  return (
    <Container mb={1} mt={4}>
      <HStack alignItems={"center"} justifyContent={"space-between"}>
        <Box ml={4}>
          <TouchableOpacity style={styles.backButtonContainer} onPress={() => nav.goBack()}>
            <MaterialIcons name="close" size={24} color="black" />
          </TouchableOpacity>
        </Box>
        <VStack alignItems="center" w={"85%"}>
          <Text fontSize="lg" fontWeight="bold" textAlign={"center"}>
            {title}
          </Text>
          {subtitle && (
            <Text fontSize={12} color="gray.500" m={0} lineHeight={16}>
              {subtitle}
            </Text>
          )}
        </VStack>
      </HStack>
    </Container>
  );
};

export default CustomHeaderClose;

const styles = StyleSheet.create({
  backButtonContainer: {
    backgroundColor: "#f8f8f8",
    borderRadius: 100,
    padding: 16,
  },
});
