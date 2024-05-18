import { Text, Stack, Button } from "native-base";
import React from "react";
import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import CustomSlider from "../../Components/CustomSlider";
import CustomHeaderHelp from "../../Components/CustomHeaderHelp";

const SelectMonths = () => {
  const nav = useNavigation();
  const [value, setValue] = React.useState(10);
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
          <Text fontFamily={"Manrope_700Bold"} fontSize={28}>
            For how long?
          </Text>
          <Text color={"#616161"} fontSize={"16px"}>
            Select months for how long you want to iSuSu account
          </Text>
          <Text fontWeight={400} fontSize={"5xl"} textAlign={"center"} my={6}>
            {value} mo
          </Text>
          <CustomSlider handleFunc={handleFund} min={1} max={12} value={value} />
        </Stack>
        <Button
          _text={{ fontFamily: "Manrope_600SemiBold", fontSize: 16 }}
          _pressed={{ bg: "#f1f1f1" }}
          onPress={() => nav.navigate("LoanReason" as never)}
        >
          Continue
        </Button>
      </Stack>
    </SafeAreaView>
  );
};

export default SelectMonths;

const styles = StyleSheet.create({
  backButtonContainer: {
    backgroundColor: "#f8f8f8",
    borderRadius: 100,
    padding: 16,
  },
});
