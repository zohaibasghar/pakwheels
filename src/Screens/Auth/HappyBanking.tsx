import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Box, Button, Image, Text, VStack } from "native-base";
import { useNavigation } from "@react-navigation/native";

const HappyBanking = () => {
  const nav = useNavigation();
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <VStack justifyContent={"space-between"} flex={1} mx={6}>
        <Box position={"relative"} h={"3/5"} mt={4}>
          <Image
            source={require("../../../assets/card_bg.png")}
            alt="People"
            style={{ position: "absolute" }}
          />
          <Image
            source={require("../../../assets/card_sample.png")}
            alt="Island bank"
            style={{ position: "absolute", top: "30%", left: "12%" }}
          />
          <Image
            source={require("../../../assets/girl.png")}
            alt="Girl"
            style={{ position: "absolute", bottom: "24%", left: "17%" }}
          />
          <Image
            source={require("../../../assets/man.png")}
            alt="Man"
            style={{ position: "absolute", bottom: 40, right: 0 }}
          />
        </Box>
        <VStack alignItems={"center"}>
          <Text fontSize={"xl"} bold>
            Your Island Bank account is open,
          </Text>
          <Text fontSize={"xl"} bold>
            heppy banking!
          </Text>
          <Text color={"#616161"} fontSize={"md"} mt={2}>
            Good news, you've joined Island Bank, You
          </Text>
          <Text color={"#616161"} fontSize={"md"}>
            can add more accounts in a moment
          </Text>
        </VStack>
        <Button onPress={() => nav.navigate("SelectCard" as never)} _pressed={{ bg: "#f1f1f1" }}>
          Get my card
        </Button>
      </VStack>
    </SafeAreaView>
  );
};

export default HappyBanking;
