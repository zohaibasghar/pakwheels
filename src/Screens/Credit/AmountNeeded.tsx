import { Text, Stack, Button } from "native-base";
import React from "react";
import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import CustomSlider from "../../Components/CustomSlider";
import CustomHeaderHelp from "../../Components/CustomHeaderHelp";

const AmountNeeded = () => {
  const nav = useNavigation();
  const [value, setValue] = React.useState(1500);
  function handleFund(e: number) {
    setValue(e);
  }
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <CustomHeaderHelp
        title="Cancel"
        handleFunc={() => nav.navigate("HomeTabs", { screen: "Credit" })}
      />
      <Stack w={"92%"} mx={"auto"} mt={8} justifyContent={"space-between"} flex={1}>
        <Stack>
          <Text fontSize={"3xl"} bold>
            How much do you need?
          </Text>
          <Text color={"#616161"} fontSize={"16px"}>
            Choose the amount you wish to borrow up to $20,000.
          </Text>
          <Text fontWeight={400} fontSize={"5xl"} textAlign={"center"} my={6}>
            {Number(value)
              .toLocaleString("en-US", {
                style: "currency",
                currency: "USD",
              })
              .split(".")[0] ?? 0}
          </Text>
          <CustomSlider handleFunc={handleFund} min={100} max={20000} value={value} />
        </Stack>
        <Button _pressed={{ bg: "#f1f1f1" }} onPress={() => nav.navigate("SelectMonths" as never)}>
          Continue
        </Button>
      </Stack>
    </SafeAreaView>
  );
};

export default AmountNeeded;

const styles = StyleSheet.create({
  backButtonContainer: {
    backgroundColor: "#f8f8f8",
    borderRadius: 100,
    padding: 16,
  },
});
