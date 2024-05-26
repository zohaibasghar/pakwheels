import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomHeaderHelp from "../../Components/CustomHeaderHelp";
import { useNavigation } from "@react-navigation/native";
import { Button, Checkbox, HStack, Image, Stack, Text, VStack } from "native-base";

const LoanDone = () => {
  const nav = useNavigation();
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <CustomHeaderHelp
        title="Cancel"
        handleFunc={() => nav.navigate("HomeTabs", { screen: "Credit" })}
      />
      <Stack w={"92%"} mx={"auto"} mt={6} justifyContent={"space-between"} flex={1}>
        <Stack>
          <Text fontFamily={"Manrope_700Bold"} fontSize={28}>
            Thank you, Richard!
          </Text>
          <Text color={"#616161"} fontSize={"16px"}>
            We’re ready to get you personalized loan offer, this will take a few minutes.
          </Text>
        </Stack>
        <Image
          source={require("../../../assets/Document.png")}
          alt="Documents"
          mx={"auto"}
          mb={24}
        />
        <VStack space={4}>
          <HStack space={3} mx={2}>
            <Checkbox
              value="check"
              mt={"5px"}
              aria-label="check"
              _checked={{ bg: "#401EE1", borderColor: "#401EE1", borderWidth: 1 }}
            />
            <Text>
              Please tick the box to indicate that you have provided accurate information and have
              read and agree to our{" "}
              <Text color={"#5E41E6"} fontWeight={600}>
                Terms and conditions
              </Text>{" "}
              and{" "}
              <Text fontWeight={600} color={"#5E41E6"}>
                Privacy Policy
              </Text>
              .
            </Text>
          </HStack>
          <Button
            _text={{ fontFamily: "Manrope_600SemiBold", fontSize: 16 }}
            _pressed={{ bg: "#f1f1f1" }}
            onPress={() => nav.navigate("HomeTabs", { screen: "Credit" })}
          >
            Submit and get loan offer
          </Button>
        </VStack>
      </Stack>
    </SafeAreaView>
  );
};

export default LoanDone;
