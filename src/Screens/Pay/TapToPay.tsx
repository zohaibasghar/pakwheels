import { StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { Box, Container, HStack, Image, Text, VStack } from "native-base";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";

export default function TapToPay() {
  const nav = useNavigation();

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#0008" }}>
      <VStack justifyContent={"space-between"} flex={1} px={6} bg={"#fff"} roundedTop={24}>
        <Container mb={1} mt={6}>
          <HStack alignItems={"center"} w={"100%"}>
            <Box>
              <TouchableOpacity style={styles.backButtonContainer} onPress={() => nav.goBack()}>
                <Ionicons name="close" size={22} color="#000" />
              </TouchableOpacity>
            </Box>
            <Text fontSize={18} fontFamily={"Manrope_700Bold"} textAlign={"center"} mx={"auto"}>
              Tap to Pay
            </Text>
          </HStack>
        </Container>
        <VStack alignItems={"center"} space={4}>
          <Image source={require("../../../assets/taptopay.png")} alt="Tap to pay" />
          <Text color={"#616161"}>Tap on the card machine or other device</Text>
        </VStack>
        <VStack alignItems={"center"} mb={24} space={2}>
          <Text color={"#616161"}>Total</Text>
          <Text fontSize={48}>$36.20</Text>
          <Image source={require("../../../assets/bank_sponsors.png")} alt="Bank sponsors" />
        </VStack>
      </VStack>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  backButtonContainer: {
    backgroundColor: "#f8f8f8",
    borderRadius: 100,
    padding: 16,
  },
});
