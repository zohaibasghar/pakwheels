import { Box, Button, HStack, Stack, Switch, Text, VStack } from "native-base";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons, Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { StyleSheet, TouchableOpacity } from "react-native";
import { FloatingLabelInput } from "react-native-floating-label-input";

const AddParticipants = () => {
  const nav = useNavigation();
  const [data, setData] = useState<number[]>([1]);
  return (
    <SafeAreaView style={{ backgroundColor: "#fff", flex: 1 }}>
      <Stack alignSelf={"flex-start"} ml={6} mt={4}>
        <TouchableOpacity style={styles.backButtonContainer} onPress={() => nav.goBack()}>
          <Ionicons name="arrow-back" size={22} color="#000" />
        </TouchableOpacity>
      </Stack>
      <Stack w={"92%"} mx={"auto"} mt={8} justifyContent={"space-between"} flex={1}>
        <Stack>
          <Text fontFamily={"Manrope_700Bold"} fontSize={28}>
            Add participants
          </Text>
          <Text color={"#616161"} fontSize={"16px"}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam dicta a nemo?
          </Text>
          <Stack space={2} mt={6}>
            <HStack justifyContent={"space-between"}>
              <Text color={"#7B7B7B"} fontSize={"2xs"}>
                Participant's email address
              </Text>
              <Text color={"#7B7B7B"} mr={4} fontSize={"2xs"}>
                Admin
              </Text>
            </HStack>
            <VStack space={4}>
              {Array.from(data).map((input) => {
                return (
                  <HStack space={4} key={input}>
                    <FloatingLabelInput
                      label="Email address"
                      containerStyles={{
                        borderColor: "#E0E0E0",
                        borderWidth: 1,
                        padding: 12,
                        borderRadius: 12,
                      }}
                      inputStyles={{ padding: 2 }}
                    />
                    <Switch
                      offTrackColor="#e6e6e6"
                      onTrackColor="#24AD3B"
                      onThumbColor="white"
                      offThumbColor="white"
                      size={"lg"}
                    />
                  </HStack>
                );
              })}
            </VStack>
            <TouchableOpacity onPress={() => setData([...data, data.length + 1])}>
              <HStack
                alignItems={"center"}
                mt={4}
                justifyContent={"center"}
                py={4}
                bg={"#F2F5F7"}
                rounded={12}
              >
                <Text fontSize={"16px"} fontFamily={"Manrope_500Medium"}>
                  Add another
                </Text>
                <Feather name="plus" size={18} color={"black"} />
              </HStack>
            </TouchableOpacity>
          </Stack>
        </Stack>
        <Button
          _text={{ fontFamily: "Manrope_600SemiBold", fontSize: 16 }}
          _pressed={{ bg: "#f1f1f1" }}
          onPress={() => nav.navigate("Accounts", { screen: "ISuSuTransfer" })}
        >
          Continue
        </Button>
      </Stack>
    </SafeAreaView>
  );
};

export default AddParticipants;

const styles = StyleSheet.create({
  backButtonContainer: {
    backgroundColor: "#f8f8f8",
    borderRadius: 100,
    padding: 16,
  },
});
