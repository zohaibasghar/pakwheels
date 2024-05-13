import { View, Text, Button, Image, Stack } from "native-base";
import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { FloatingLabelInput } from "react-native-floating-label-input";
import { SafeAreaView } from "react-native-safe-area-context";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const CreateiSuSu = () => {
  const [name, setName] = React.useState("");
  const nav = useNavigation();
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <Stack alignSelf={"flex-start"} ml={6} mt={4}>
        <TouchableOpacity style={styles.backButtonContainer} onPress={() => nav.goBack()}>
          <AntDesign name="close" size={24} color="black" />
        </TouchableOpacity>
      </Stack>
      <Stack w={"92%"} mx={"auto"} mt={8} justifyContent={"space-between"} flex={1}>
        <Stack>
          <Text fontSize={"3xl"} bold>
            Create iSuSu Fund
          </Text>
          <Text color={"#616161"} fontSize={"16px"}>
            Create a bucket with fixed balance and unlimited access with iSuSu
          </Text>
          <Image
            source={require("../../assets/honey_pot.png")}
            mx={"auto"}
            my={4}
            alt="Flexible Saving account"
          />
          <FloatingLabelInput
            label="iSuSu nickname"
            value={name}
            containerStyles={{
              borderColor: "#E0E0E0",
              borderWidth: 1,
              padding: 12,
              borderRadius: 12,
            }}
            inputStyles={{ padding: 2 }}
            onChangeText={(e) => setName(e)}
          />
        </Stack>
        <Button _pressed={{ bg: "#f1f1f1" }} onPress={() => nav.navigate("SelectMonths" as never)}>
          Continue
        </Button>
      </Stack>
    </SafeAreaView>
  );
};

export default CreateiSuSu;

const styles = StyleSheet.create({
  backButtonContainer: {
    backgroundColor: "#f8f8f8",
    borderRadius: 100,
    padding: 16,
  },
});
