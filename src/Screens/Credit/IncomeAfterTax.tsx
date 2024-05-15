import React, { useEffect, useRef } from "react";
import CustomHeaderHelp from "../../Components/CustomHeaderHelp";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import { Button, Center, Input, ScrollView, Stack, Text } from "native-base";

const IncomeAfterTax = () => {
  const nav = useNavigation();
  const [income, setIncome] = React.useState("$");
  const textInputRef = useRef(null);

  useEffect(() => {
    if (income === "") {
      setIncome("$");
    }
    const timer = setTimeout(() => {
      if (textInputRef.current) {
        textInputRef.current?.focus();
      }
    }, 200);
    return () => clearTimeout(timer);
  }, []);
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
              Income after taxes?
            </Text>
            <Text color={"#616161"} fontSize={"16px"}>
              This improves your chance of being approved for each loan.
            </Text>
          </Stack>
          <Center>
            <Input
              variant={"unstyled"}
              ref={textInputRef}
              my={4}
              value={income}
              onChangeText={(e) => setIncome(e)}
              w={"1/2"}
              keyboardType="number-pad"
              fontSize={"4xl"}
              textAlign={"center"}
            />
          </Center>
        </ScrollView>
        <Button _pressed={{ bg: "#f1f1f1" }} onPress={() => nav.navigate("UploadLetter" as never)}>
          Continue
        </Button>
      </Stack>
    </SafeAreaView>
  );
};

export default IncomeAfterTax;
