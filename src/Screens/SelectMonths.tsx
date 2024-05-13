import { Text, Slider, Image, Stack, Button, View } from "native-base";
import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import CustomSlider from "../Components/CustomSlider";

const SelectMonths = () => {
  const nav = useNavigation();
  const [value, setValue] = React.useState(10);
  function handleFund(e: number) {
    setValue(Math.floor(e / 8.3333));
  }
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <Stack alignSelf={"flex-start"} ml={6} mt={4}>
        <TouchableOpacity style={styles.backButtonContainer} onPress={() => nav.goBack()}>
          <Ionicons name="arrow-back" size={22} color="#000" />
        </TouchableOpacity>
      </Stack>
      <Stack w={"92%"} mx={"auto"} mt={8} justifyContent={"space-between"} flex={1}>
        <Stack>
          <Text fontSize={"3xl"} bold>
            For how long?
          </Text>
          <Text color={"#616161"} fontSize={"16px"}>
            Select months for how long you want to iSuSu account
          </Text>
          <Text fontWeight={400} fontSize={"5xl"} textAlign={"center"} my={6}>
            {value} mo
          </Text>
          <CustomSlider handleFunc={handleFund} />
        </Stack>
        <Button _pressed={{ bg: "#f1f1f1" }} onPress={() => nav.navigate("MonthlyAmount" as never)}>
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
