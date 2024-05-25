import { View, Text, VStack, Button, HStack, Image, Actionsheet } from "native-base";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomHeaderHelp from "../../Components/CustomHeaderHelp";
import { useNavigation } from "@react-navigation/native";
import { CameraView } from "expo-camera";
import { StyleSheet } from "react-native";
import { useAppDispatch } from "../../redux/Store";
import { capturePhoto } from "../../redux/authSlice";

const FrontCard = () => {
  const nav = useNavigation();
  const cameraRef = React.useRef(null);

  const dispatch = useAppDispatch();
  const captureImage = async () => {
    if (cameraRef.current) {
      const photo = await cameraRef.current?.takePictureAsync();

      dispatch(capturePhoto(photo.uri));
      nav.navigate("ReviewPhoto" as never);
    }
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <CustomHeaderHelp title="" />
      <VStack justifyContent={"space-between"} flex={1}>
        <VStack my={6} mx={6}>
          <Text fontFamily={"Manrope_700Bold"} fontSize={28}>
            Front of driver’s license
          </Text>
        </VStack>

        <CameraView style={{ flex: 1, marginVertical: 24 }} facing="back" ref={cameraRef}>
          <View style={styles.overlay}>
            <View style={styles.topOverlay} />
            <View style={styles.leftOverlay} />
            <View style={styles.rightOverlay} />
            <View style={styles.bottomOverlay} />
            <View style={styles.rectangle} />
          </View>
        </CameraView>

        <VStack alignItems={"center"} mx={6}>
          <Button
            _pressed={{ bg: "#f1f1f1" }}
            onPress={captureImage}
            w={"100%"}
            mb={0}
            _text={{ fontFamily: "Manrope_600SemiBold", fontSize: 16 }}
          >
            Capture
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

export default FrontCard;

const styles = StyleSheet.create({
  camera: {
    flex: 1,
    marginVertical: 24,
  },
  backButtonContainer: {
    backgroundColor: "#f8f8f8",
    borderRadius: 100,
    padding: 16,
    width: 56,
    marginBottom: 24,
  },
  overlay: {
    flex: 1,
    position: "relative",
  },

  rectangle: {
    position: "absolute",
    top: "28%",
    left: "15%",
    width: "70%",
    height: "44%",
    borderWidth: 1,
    borderColor: "#e0e0e0",
    backgroundColor: "transparent",
  },
  topOverlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    height: "28%",
    backgroundColor: "rgba(0, 0, 0, 0.7)",
  },
  bottomOverlay: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: "28%",
    backgroundColor: "rgba(0, 0, 0, 0.7)",
  },
  leftOverlay: {
    position: "absolute",
    top: "28%",
    bottom: "28%",
    left: 0,
    width: "15%",
    backgroundColor: "rgba(0, 0, 0, 0.7)",
  },
  rightOverlay: {
    position: "absolute",
    top: "28%",
    bottom: "28%",
    right: 0,
    width: "15%",
    backgroundColor: "rgba(0, 0, 0, 0.7)",
  },
});
