import React from "react";
import CustomActionHeader from "../../Components/CustomActionHeader";
import { Button, HStack, Image, Text, VStack, View } from "native-base";
import { useAppSelector } from "../../redux/Store";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";

const ReviewPhoto = () => {
  const { photo } = useAppSelector((state) => state.auth);
  const nav = useNavigation();
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#0008" }}>
      <View bg={"#fff"} flex={1} borderTopRadius={24}>
        <View mx={6} mt={4}>
          <CustomActionHeader
            title="Retake"
            handleClose={() => nav.navigate("FrontCard" as never)}
            handleFunc={() => nav.navigate("FrontCard" as never)}
          />
          <VStack justifyContent={"space-between"} h={"90%"}>
            <VStack space={4}>
              <VStack my={4}>
                <Text fontFamily={"Manrope_700Bold"} fontSize={28}>
                  Review photo
                </Text>
                <Text color={"#616161"} fontSize={16}>
                  Make sure your details are clear and unobstructed
                </Text>
              </VStack>
            </VStack>
            <Image
              source={{ uri: photo ?? undefined }}
              my={6}
              mx={"auto"}
              w={"100%"}
              style={{ objectFit: "cover" }}
              h={250}
              alt="Captured Image"
            />
            <VStack alignItems={"center"} w={"100%"}>
              <Button
                _pressed={{ bg: "#f1f1f1" }}
                w={"100%"}
                mb={0}
                onPress={() => {
                  nav.navigate("RecordVideo" as never);
                }}
                _text={{ fontFamily: "Manrope_600SemiBold", fontSize: 16 }}
              >
                Upload photo
              </Button>
              <HStack alignItems={"center"} mb={3}>
                <Text fontSize={"2xs"}>Powered by </Text>
                <Image source={require("../../../assets/metamap.png")} alt="Metamap" />
              </HStack>
            </VStack>
          </VStack>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ReviewPhoto;
