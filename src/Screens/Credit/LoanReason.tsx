import React from "react";
import CustomHeaderHelp from "../../Components/CustomHeaderHelp";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import { Button, HStack, Image, Radio, ScrollView, Stack, Text, VStack } from "native-base";

const LoanReason = () => {
  const nav = useNavigation();

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <CustomHeaderHelp
        title="Cancel"
        handleFunc={() => nav.navigate("HomeTabs", { screen: "Credit" })}
      />
      <Stack w={"92%"} mx={"auto"} mt={8} justifyContent={"space-between"} flex={1}>
        <ScrollView>
          <Stack mb={6}>
            <Text fontSize={"3xl"} bold>
              What's this loan for?
            </Text>
            <Text color={"#616161"} fontSize={"16px"}>
              Telling us the purpose will ensure we only show you a suitable offer.
            </Text>
          </Stack>
          <Radio.Group
            name="Loan reason"
            _radio={{
              _icon: { color: "#401EE1" },
              _checked: {
                borderColor: "#401EE1",
                _icon: {
                  color: "#401EE1",
                },
              },
            }}
          >
            <VStack space={4}>
              <Radio value="1" size={"sm"}>
                <HStack justifyContent={"space-between"} w={"89%"}>
                  <Text fontWeight={700}>Debt consolidation</Text>
                  <Image source={require("../../../assets/hand-coins.png")} alt="coins in hands" />
                </HStack>
              </Radio>
              <Radio value="2" size={"sm"}>
                <HStack justifyContent={"space-between"} w={"89%"}>
                  <Text fontWeight={700}>Everyday expense</Text>
                  <Image source={require("../../../assets/coins.png")} alt="coins" />
                </HStack>
              </Radio>
              <Radio value="3" size={"sm"}>
                <HStack justifyContent={"space-between"} w={"89%"}>
                  <Text fontWeight={700}>Family</Text>
                  <Image source={require("../../../assets/users-round.png")} alt="users" />
                </HStack>
              </Radio>
              <Radio value="4" size={"sm"}>
                <HStack justifyContent={"space-between"} w={"89%"}>
                  <Text fontWeight={700}>Holiday</Text>
                  <Image source={require("../../../assets/tree-palm.png")} alt="beach" />
                </HStack>
              </Radio>
              <Radio value="5" size={"sm"}>
                <HStack justifyContent={"space-between"} w={"89%"}>
                  <Text fontWeight={700}>Medical bill</Text>
                  <Image source={require("../../../assets/heart-pulse.png")} alt="heart" />
                </HStack>
              </Radio>
              <Radio value="6" size={"sm"}>
                <HStack justifyContent={"space-between"} w={"89%"}>
                  <Text fontWeight={700}>Pay bills</Text>
                  <Image source={require("../../../assets/receipt-cent.png")} alt="cent" />
                </HStack>
              </Radio>
              <Radio value="7" size={"sm"}>
                <HStack justifyContent={"space-between"} w={"89%"}>
                  <Text fontWeight={700}>Special occasion</Text>
                  <Image source={require("../../../assets/gem.png")} alt="gem" />
                </HStack>
              </Radio>
            </VStack>
          </Radio.Group>
        </ScrollView>
        <Button _pressed={{ bg: "#f1f1f1" }} onPress={() => nav.navigate("WorkInfo" as never)}>
          Continue
        </Button>
      </Stack>
    </SafeAreaView>
  );
};

export default LoanReason;
