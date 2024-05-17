import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomHeaderHelp from "../../Components/CustomHeaderHelp";
import { Button, HStack, Image, ScrollView, Text, VStack } from "native-base";
import { useNavigation } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";

const RecordVideo = () => {
  const nav = useNavigation();
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <CustomHeaderHelp title="" />
      <VStack justifyContent={"space-between"} flex={1} mx={6}>
        <ScrollView>
          <VStack space={4}>
            <VStack my={4}>
              <Text fontFamily={"Manrope_700Bold"} fontSize={28}>
                Record a video
              </Text>
              <Text color={"#616161"}>For security, we need a live capture</Text>
              <Text color={"#616161"} ml={2}>
                • You have 25 seconds to finish
              </Text>
              <Text color={"#616161"} ml={2}>
                • Follow the instructions to move or speak
              </Text>
            </VStack>
            <VStack alignItems={"center"} mt={12} w={"100%"} position={"relative"}>
              <Image
                h={"220px"}
                source={require("../../../assets/record_video.png")}
                alt="Camera"
                w={"100%"}
                style={{ objectFit: "cover" }}
              />
              <AntDesign
                name="caretright"
                size={24}
                color="white"
                style={{
                  backgroundColor: "#5E41E6",
                  padding: 12,
                  borderRadius: 40,
                  position: "absolute",
                  bottom: 5,
                  right: 5,
                }}
              />
            </VStack>
          </VStack>
        </ScrollView>
        <VStack alignItems={"center"}>
          <Button
            _pressed={{ bg: "#f1f1f1" }}
            onPress={() => nav.navigate("Video" as never)}
            w={"100%"}
            mb={0}
            _text={{ fontFamily: "Manrope_600SemiBold", fontSize: 16 }}
          >
            Record video
          </Button>
          <HStack alignItems={"center"} mb={3}>
            <Text fontSize={"2xs"}>Powered by </Text>
            <Image source={require("../../../assets/metamap.png")} alt="Metamap" />
          </HStack>
        </VStack>
      </VStack>
    </SafeAreaView>
  );
};

export default RecordVideo;
