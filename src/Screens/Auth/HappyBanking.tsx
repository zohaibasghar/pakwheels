import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Box, Button, Image, Text, VStack } from "native-base";
import { useNavigation } from "@react-navigation/native";

const HappyBanking = () => {
  const nav = useNavigation();
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <VStack justifyContent={"space-between"} flex={1} mx={4}>
        <Box position={"relative"} h={"3/5"} mt={4}>
          <Image
            source={require("../../../assets/card_bg.png")}
            alt="People"
            style={{ position: "absolute", objectFit: "contain" }}
          />
          <Image
            source={require("../../../assets/card_sample.png")}
            alt="Island bank"
            style={{ position: "absolute", top: "30%", left: "7%", objectFit: "contain" }}
          />
          <Image
            source={require("../../../assets/girl.png")}
            alt="Girl"
            style={{ position: "absolute", bottom: "22%", left: "12%", objectFit: "contain" }}
          />
          <Image
            source={require("../../../assets/man.png")}
            alt="Man"
            style={{ position: "absolute", bottom: 30, right: 20, objectFit: "contain" }}
          />
        </Box>
        <VStack alignItems={"center"}>
          <Text fontSize={"xl"} bold>
            Your Island Bank account is open,
          </Text>
          <Text fontSize={"xl"} bold>
            happy banking!
          </Text>
          <Text color={"#616161"} fontSize={"md"} mt={2}>
            Good news, you've joined Island Bank, You
          </Text>
          <Text color={"#616161"} fontSize={"md"}>
            can add more accounts in a moment
          </Text>
        </VStack>
        <Button
          onPress={() => nav.navigate("SelectCard" as never)}
          _pressed={{ bg: "#f1f1f1" }}
          _text={{ fontFamily: "Manrope_600SemiBold", fontSize: 16 }}
        >
          Get my card
        </Button>
      </VStack>
    </SafeAreaView>
  );
};

export default HappyBanking;
