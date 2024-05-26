import {
  Text,
  Stack,
  Flex,
  ScrollView,
  Image,
  useDisclose,
  Actionsheet,
  Radio,
  View,
  Divider,
  Button,
} from "native-base";
import React, { useState } from "react";
import { AntDesign } from "@expo/vector-icons";
import BankCard from "../Components/BankCard";
import { StyleSheet, TouchableOpacity } from "react-native";
import OptionCards from "../Components/OptionCards";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomHeader from "../Components/CustomHeader";
import BankCardDetails from "../Components/BankCardDetails";

export default function MyCard() {
  const [details, setDetails] = useState(false);
  const [spending, setSpending] = useState("1");
  const { isOpen, onOpen, onClose } = useDisclose();
  return (
    <SafeAreaView style={{ backgroundColor: "#fff", flex: 1 }}>
      <CustomHeader title="My Card" />
      {details ? <BankCardDetails /> : <BankCard />}
      <ScrollView>
        <Flex align="center" w={"85%"} mx={"auto"} direction="row" justify="space-between" my={4}>
          <Stack direction={"row"} alignItems={"center"} space={2}>
            <Stack
              w={9}
              alignItems={"center"}
              justifyContent={"center"}
              h={9}
              rounded={"lg"}
              borderWidth={1}
              borderColor={"#d9d9d9"}
            >
              <Image source={require("../../assets/dollar_wings.png")} alt="Money" />
            </Stack>
            <Stack>
              <Text fontSize={"xs"} color={"#7b7b7b"}>
                Debit Spending from
              </Text>
              <Text fontFamily={"Manrope_700Bold"}>Checking **2830</Text>
            </Stack>
          </Stack>
          <TouchableOpacity onPress={onOpen}>
            <Stack bg={"#F2F5F7"} px={4} py={2} rounded={"full"} borderRadius={"full"}>
              <Text fontFamily={"Manrope_700Bold"}>Change</Text>
            </Stack>
          </TouchableOpacity>
          <Actionsheet isOpen={isOpen} onClose={onClose} hideDragIndicator>
            <Actionsheet.Content
              p={6}
              bg={"#fff"}
              alignItems={"flex-start"}
              justifyContent={"space-between"}
            >
              <View h={"90%"}>
                <TouchableOpacity style={styles.backButtonContainer} onPress={onClose}>
                  <AntDesign name="close" size={24} color="black" />
                </TouchableOpacity>
                <Text fontFamily={"Manrope_700Bold"} fontSize={28}>
                  Spending from
                </Text>
                <Text color={"#616161"} mb={2} fontSize={16}>
                  Select a default account which you'd like your card to spend from
                </Text>
                <Radio.Group
                  name="spendingFrom"
                  accessibilityLabel="Spending from"
                  value={spending}
                  onChange={(nextValue) => {
                    setSpending(nextValue);
                  }}
                >
                  <Radio
                    _icon={{ color: "#401EE1" }}
                    _checked={{
                      borderColor: "#401EE1",
                      _icon: {
                        color: "#401EE1",
                      },
                    }}
                    value="1"
                  >
                    <Flex
                      align="center"
                      direction="row"
                      justify="space-between"
                      mb={2}
                      mt={4}
                      w={"90%"}
                    >
                      <Stack direction={"row"} alignItems={"center"} space={2}>
                        <Image source={require("../../assets/dollar_wings.png")} alt="Money" />
                        <Stack>
                          <Text fontSize={"xs"} color={"#7b7b7b"}>Checking **2830</Text>
                          <Text fontFamily={"Manrope_700Bold"} lineHeight={18}>
                            New Account
                          </Text>
                        </Stack>
                      </Stack>
                      <Text fontFamily={"Manrope_700Bold"} textAlign={"right"}>
                        $160.00
                      </Text>
                    </Flex>
                  </Radio>
                  <Divider mt={2} />
                  <Radio
                    value="2"
                    _icon={{ color: "#401EE1" }}
                    _checked={{
                      borderColor: "#401EE1",
                      _icon: {
                        color: "#401EE1",
                      },
                    }}
                  >
                    <Flex
                      align="center"
                      direction="row"
                      justify="space-between"
                      mb={2}
                      mt={4}
                      w={"90%"}
                    >
                      <Stack direction={"row"} alignItems={"center"} space={2}>
                        <Image source={require("../../assets/rainy_day_fund.png")} alt="Funds" />
                        <Stack>
                          <Text fontSize={"xs"} color={"#7b7b7b"}>Savings **2619</Text>
                          <Text fontFamily={"Manrope_700Bold"} lineHeight={18}>
                            Rainy Day Fund
                          </Text>
                        </Stack>
                      </Stack>
                      <Text fontFamily={"Manrope_700Bold"} textAlign={"right"}>
                        $50.00
                      </Text>
                    </Flex>
                  </Radio>
                </Radio.Group>
              </View>
              <Button
                onPress={onClose}
                w={"full"}
                _pressed={{ bg: "#f1f1f1" }}
                _text={{ fontFamily: "Manrope_600SemiBold", fontSize: 16 }}
              >
                Continue
              </Button>
            </Actionsheet.Content>
          </Actionsheet>
        </Flex>
        <OptionCards setDetails={setDetails} details={details} />
        <Stack bg={"#E8F8F5"} w={"94%"} mx={"auto"} mt={4} p={4} rounded={"2xl"} space={1}>
          <Stack space={2} direction={"row"} alignItems={"center"}>
            <AntDesign name="infocirlceo" size={16} color="black" />
            <Text fontSize={16} fontFamily={"Manrope_600SemiBold"}>
              Your card is on its way!
            </Text>
          </Stack>
          <Stack>
            <Text>
              Ready to shop? Your virtual card details are ready to use now in-store and online.
              Already got your card?{" "}
              <Text bold underline>
                Activate it now
              </Text>
            </Text>
          </Stack>
        </Stack>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  backButtonContainer: {
    backgroundColor: "#f8f8f8",
    borderRadius: 100,
    padding: 16,
    width: 56,
    marginBottom: 24,
  },
});
