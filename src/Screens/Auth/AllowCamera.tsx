import { Text, VStack, ScrollView, Button, HStack, Image } from "native-base";
import React, { useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomHeaderHelp from "../../Components/CustomHeaderHelp";
import { useNavigation } from "@react-navigation/native";
import { Feather } from "@expo/vector-icons";
import { useCameraPermissions } from "expo-camera";

const AllowCamera = () => {
  const nav = useNavigation();
  const [permission, requestPermission] = useCameraPermissions();
  useEffect(() => {
    if (permission?.granted) {
      nav.navigate("FrontCard" as never);
    }
  }, []);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <CustomHeaderHelp title="" />
      <VStack justifyContent={"space-between"} flex={1} mx={6}>
        <ScrollView>
          <VStack space={4}>
            <VStack my={4}>
              <Text fontFamily={"Manrope_700Bold"} fontSize={28}>
                Allow camera access
              </Text>
              <Text color={"#616161"} fontSize={16}>
                When prompted, you must enable camera access to continue.
              </Text>
            </VStack>
            <VStack alignItems={"center"} mt={24}>
              <Image source={require("../../../assets/CameraGlass.png")} alt="Camera" />
            </VStack>
          </VStack>
        </ScrollView>
        <VStack alignItems={"center"}>
          <HStack mb={4} space={2} bg={"#E8F8F5"} py={3} px={6} rounded={16} alignItems={"center"}>
            <Feather name="info" size={18} color="black" />
            <Text fontFamily={"Manrope_500Medium"}>We can't verify you without your camera</Text>
          </HStack>
          <Button
            _pressed={{ bg: "#f1f1f1" }}
            onPress={() => {
              if (permission?.granted) {
                return nav.navigate("FrontCard" as never);
              }
              return requestPermission();
            }}
            w={"100%"}
            mb={0}
            _text={{ fontFamily: "Manrope_600SemiBold", fontSize: 16 }}
          >
            {permission?.granted ? "Open camera" : "Enable camera"}
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

export default AllowCamera;
