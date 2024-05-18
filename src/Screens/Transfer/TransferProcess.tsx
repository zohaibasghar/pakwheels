import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomActionHeader from "../../Components/CustomActionHeader";
import { useNavigation } from "@react-navigation/native";
import { Button, Center, HStack, Image, ScrollView, Stack, Text, VStack, View } from "native-base";
import { TouchableOpacity } from "react-native";
import { MaterialIcons, Feather, MaterialCommunityIcons } from "@expo/vector-icons";

const TransferProcess = () => {
  const nav = useNavigation();
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <View px={4}>
        <CustomActionHeader title="Give Feedback" handleClose={() => nav.goBack()} />
      </View>
      <VStack justifyContent={"space-between"} flex={1}>
        <ScrollView>
          <VStack space={4} my={4}>
            <Center my={4}>
              <Image source={require("../../../assets/Send_big.png")} alt="send" />
            </Center>
            <VStack alignItems={"center"} mx={6}>
              <Text fontFamily={"Manrope_700Bold"} fontSize={28}>
                Transfer's on the way,
              </Text>
              <Text fontFamily={"Manrope_700Bold"} fontSize={28} lineHeight={32} mb={2}>
                Share your transfer link
              </Text>
              <Text textAlign={"center"} color={"#616161"} fontSize={16} mx={1}>
                Give this link to the person you're paying. It'll expire after 7 days from a
                completed transfer. By sharing your link, you can track the transfer's details.
              </Text>
            </VStack>
          </VStack>
          <HStack space={6} my={4} justifyContent={"center"}>
            <TouchableOpacity>
              <Stack alignItems={"center"} space={1}>
                <Stack
                  w={16}
                  alignItems={"center"}
                  justifyContent={"center"}
                  h={16}
                  rounded={16}
                  borderWidth={1}
                  borderColor={"#F2F5F7"}
                  space={1}
                  direction={"row"}
                >
                  <Feather name="mail" size={24} color="black" />
                </Stack>
                <Stack alignItems={"center"}>
                  <Text fontSize={12} fontFamily={"Manrope_500Medium"}>
                    Email
                  </Text>
                </Stack>
              </Stack>
            </TouchableOpacity>
            <TouchableOpacity>
              <Stack alignItems={"center"} space={1}>
                <Stack
                  w={16}
                  alignItems={"center"}
                  justifyContent={"center"}
                  h={16}
                  rounded={16}
                  borderWidth={1}
                  borderColor={"#F2F5F7"}
                  space={1}
                  direction={"row"}
                >
                  <MaterialCommunityIcons
                    name="message-processing-outline"
                    size={24}
                    color="black"
                  />
                </Stack>
                <Stack alignItems={"center"}>
                  <Text fontSize={12} fontFamily={"Manrope_500Medium"}>
                    Text
                  </Text>
                </Stack>
              </Stack>
            </TouchableOpacity>
            <TouchableOpacity>
              <Stack alignItems={"center"} space={1}>
                <Stack
                  w={16}
                  alignItems={"center"}
                  justifyContent={"center"}
                  h={16}
                  rounded={16}
                  borderWidth={1}
                  borderColor={"#F2F5F7"}
                  space={1}
                  direction={"row"}
                >
                  <MaterialCommunityIcons name="link-variant" size={24} color="black" />
                </Stack>
                <Stack alignItems={"center"}>
                  <Text fontSize={12} fontFamily={"Manrope_500Medium"}>
                    Copy
                  </Text>
                </Stack>
              </Stack>
            </TouchableOpacity>
            <TouchableOpacity>
              <Stack alignItems={"center"} space={1}>
                <Stack
                  w={16}
                  alignItems={"center"}
                  justifyContent={"center"}
                  h={16}
                  rounded={16}
                  borderWidth={1}
                  borderColor={"#F2F5F7"}
                  space={1}
                  direction={"row"}
                >
                  <Feather name="share" size={24} color="black" />
                </Stack>
                <Stack alignItems={"center"}>
                  <Text fontSize={12} fontFamily={"Manrope_500Medium"}>
                    Share
                  </Text>
                </Stack>
              </Stack>
            </TouchableOpacity>
          </HStack>
          <TouchableOpacity>
            <HStack my={6} alignItems={"center"} justifyContent={"space-between"} mx={6}>
              <HStack space={2}>
                <Image source={require("../../../assets/qr_code.png")} alt="QR Code" />
                <VStack>
                  <Text fontFamily={"Manrope_700Bold"}>Get a QR code</Text>
                  <Text color={"#7B7B7B"} fontSize={12}>
                    Share directly to another smartphone
                  </Text>
                </VStack>
              </HStack>
              <MaterialIcons name="keyboard-arrow-right" size={24} color="#5E41E6" />
            </HStack>
          </TouchableOpacity>
        </ScrollView>
        <Button
          mx={6}
          _text={{ fontFamily: "Manrope_600SemiBold", fontSize: 16 }}
          onPress={() => nav.navigate("HomeTabs", { screen: "Transfers" })}
          _pressed={{ bg: "#f1f1f1", borderWidth: 1, borderColor: "#5E41E6" }}
        >
          Done
        </Button>
      </VStack>
    </SafeAreaView>
  );
};

export default TransferProcess;
