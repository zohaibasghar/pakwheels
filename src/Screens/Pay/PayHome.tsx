import { StyleSheet, TouchableOpacity } from "react-native";
import React, { useEffect, useRef, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  Box,
  Button,
  Center,
  Container,
  HStack,
  Input,
  ScrollView,
  Text,
  VStack,
} from "native-base";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";

export default function PayHome() {
  const nav = useNavigation();
  const [amount, setAmount] = useState("$36.20");
  const textInputRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (textInputRef.current) {
        textInputRef.current?.focus();
      }
    }, 200);
    if (amount === "") {
      setAmount("$");
    }
    return () => clearTimeout(timer);
  }, [amount]);
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
            <Text fontSize={18} bold textAlign={"center"} mx={"auto"}>
              Tap to Pay
            </Text>
          </HStack>
          <VStack space={4}>
            <VStack my={4}>
              <Text bold fontSize={"3xl"}>
                Enter amount
              </Text>
              <Text color={"#616161"}>
                Input the amount the merchant is charging you to continue to tap to pay
              </Text>
            </VStack>
            <Center>
              <Input
                variant={"unstyled"}
                ref={textInputRef}
                my={4}
                value={amount}
                onChangeText={(e) => setAmount(e)}
                w={"1/2"}
                keyboardType="number-pad"
                fontSize={"4xl"}
                textAlign={"center"}
              />
            </Center>
          </VStack>
        </Container>
        <Button
          _pressed={{ bg: "#f1f1f1", borderWidth: 1, borderColor: "#5E41E6" }}
          onPress={() => nav.navigate("TapToPay" as never)}
        >
          <Text color={"white"}>Continue</Text>
        </Button>
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
