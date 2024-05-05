import { useNavigation } from "@react-navigation/native";
import { Text, VStack, Button, Radio, ScrollView } from "native-base";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomHeaderHelp from "../../Components/CustomHeaderHelp";

const SalaryRange = () => {
  const nav = useNavigation();
  const [value, setValue] = React.useState("1");
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <CustomHeaderHelp title="Skip" />
      <VStack justifyContent={"space-between"} flex={1} mx={6}>
        <ScrollView>
          <VStack space={4}>
            <VStack my={4}>
              <Text bold fontSize={"3xl"}>
                Salary range
              </Text>
              <Text color={"#616161"}>What is the range of your annual salary?</Text>
            </VStack>
            <VStack>
              {/* // TODO: Still not confirm input or select */}
              <Radio.Group
                name="myRadioGroup"
                accessibilityLabel="favorite number"
                value={value}
                onChange={(nextValue) => {
                  setValue(nextValue);
                }}
              >
                <Radio
                  shadow={2}
                  value="1"
                  my="2"
                  _icon={{ color: "#401EE1" }}
                  _checked={{
                    borderColor: "#401EE1",
                    _icon: {
                      color: "#401EE1",
                    },
                  }}
                >
                  $0 - $50,000
                </Radio>
                <Radio
                  shadow={2}
                  value="2"
                  my="2"
                  _icon={{ color: "#401EE1" }}
                  _checked={{
                    borderColor: "#401EE1",
                    _icon: {
                      color: "#401EE1",
                    },
                  }}
                >
                  $50,001 - $100,000
                </Radio>
                <Radio
                  shadow={2}
                  value="3"
                  my="2"
                  _icon={{ color: "#401EE1" }}
                  _checked={{
                    borderColor: "#401EE1",
                    _icon: {
                      color: "#401EE1",
                    },
                  }}
                >
                  $100,001 - $200,000
                </Radio>
                <Radio
                  shadow={2}
                  value="4"
                  my="2"
                  _icon={{ color: "#401EE1" }}
                  _checked={{
                    borderColor: "#401EE1",
                    _icon: {
                      color: "#401EE1",
                    },
                  }}
                >
                  $200,001 - $300,000
                </Radio>
                <Radio
                  shadow={2}
                  value="5"
                  my="2"
                  _icon={{ color: "#401EE1" }}
                  _checked={{
                    borderColor: "#401EE1",
                    _icon: {
                      color: "#401EE1",
                    },
                  }}
                >
                  Over $300,000
                </Radio>
              </Radio.Group>
            </VStack>
          </VStack>
        </ScrollView>
        <Button _pressed={{ bg: "#f1f1f1" }} onPress={() => nav.navigate("AccountUsage" as never)}>
          Continue
        </Button>
      </VStack>
    </SafeAreaView>
  );
};

export default SalaryRange;
