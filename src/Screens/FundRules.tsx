import { View, Text, Stack, Button, HStack, VStack, Switch } from "native-base";
import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const FundRules = () => {
  const nav = useNavigation();
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <Stack alignSelf={"flex-start"} ml={6} mt={4}>
        <TouchableOpacity style={styles.backButtonContainer} onPress={() => nav.goBack()}>
          <Ionicons name="arrow-back" size={22} color="#000" />
        </TouchableOpacity>
      </Stack>
      <Stack w={"92%"} mx={"auto"} mt={8} justifyContent={"space-between"} flex={1}>
        <Stack>
          <Text fontFamily={"Manrope_700Bold"} fontSize={28}>
            Fund rules
          </Text>
          <Text color={"#616161"} fontSize={"16px"}>
            Set up your iSuSu Fund's rules for you and other participants
          </Text>
          <Stack space={4} mt={6}>
            <HStack alignItems={"center"}>
              <VStack w={"75%"}>
                <Text fontFamily={"Manrope_700Bold"} fontSize={18}>
                  Rule # 1
                </Text>
                <Text color={"#3e3e3e"} fontSize={"xs"}>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa, ut inventore.
                </Text>
              </VStack>
              <View w={"25%"}>
                <Switch
                  alignSelf={"flex-end"}
                  offTrackColor="#e6e6e6"
                  onTrackColor="#24AD3B"
                  onThumbColor="white"
                  offThumbColor="white"
                  size={"lg"}
                />
              </View>
            </HStack>
            <HStack alignItems={"center"}>
              <VStack w={"75%"}>
                <Text fontFamily={"Manrope_700Bold"} fontSize={18}>
                  Rule # 2
                </Text>
                <Text color={"#3e3e3e"} fontSize={"xs"}>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa, ut inventore.
                </Text>
              </VStack>
              <View w={"25%"}>
                <Switch
                  alignSelf={"flex-end"}
                  offTrackColor="#e6e6e6"
                  onTrackColor="#24AD3B"
                  onThumbColor="white"
                  offThumbColor="white"
                  size={"lg"}
                />
              </View>
            </HStack>
            <HStack alignItems={"center"}>
              <VStack w={"75%"}>
                <Text fontFamily={"Manrope_700Bold"} fontSize={18}>
                  Rule # 3
                </Text>
                <Text color={"#3e3e3e"} fontSize={"xs"}>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa, ut inventore.
                </Text>
              </VStack>
              <View w={"25%"}>
                <Switch
                  alignSelf={"flex-end"}
                  offTrackColor="#e6e6e6"
                  onTrackColor="#24AD3B"
                  onThumbColor="white"
                  offThumbColor="white"
                  size={"lg"}
                />
              </View>
            </HStack>
            <HStack alignItems={"center"}>
              <VStack w={"75%"}>
                <Text fontFamily={"Manrope_700Bold"} fontSize={18}>
                  Rule # 4
                </Text>
                <Text color={"#3e3e3e"} fontSize={"xs"}>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa, ut inventore.
                </Text>
              </VStack>
              <View w={"25%"}>
                <Switch
                  alignSelf={"flex-end"}
                  offTrackColor="#e6e6e6"
                  onTrackColor="#24AD3B"
                  onThumbColor="white"
                  offThumbColor="white"
                  size={"lg"}
                />
              </View>
            </HStack>
            <HStack alignItems={"center"}>
              <VStack w={"75%"}>
                <Text fontFamily={"Manrope_700Bold"} fontSize={18}>
                  Rule # 5
                </Text>
                <Text color={"#3e3e3e"} fontSize={"xs"}>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa, ut inventore.
                </Text>
              </VStack>
              <View w={"25%"}>
                <Switch
                  alignSelf={"flex-end"}
                  offTrackColor="#e6e6e6"
                  onTrackColor="#24AD3B"
                  onThumbColor="white"
                  offThumbColor="white"
                  size={"lg"}
                />
              </View>
            </HStack>
          </Stack>
        </Stack>
        <Button
          _text={{ fontFamily: "Manrope_600SemiBold", fontSize: 16 }}
          _pressed={{ bg: "#f1f1f1" }}
          onPress={() => nav.navigate("AddParticipants" as never)}
        >
          Continue
        </Button>
      </Stack>
    </SafeAreaView>
  );
};

export default FundRules;

const styles = StyleSheet.create({
  backButtonContainer: {
    backgroundColor: "#f8f8f8",
    borderRadius: 100,
    padding: 16,
  },
});
