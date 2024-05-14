import { View, Text, VStack, Button, HStack, Image, Actionsheet, Spinner } from "native-base";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomHeaderHelp from "../../Components/CustomHeaderHelp";
import { useNavigation } from "@react-navigation/native";
import { Camera, CameraType, CameraView } from "expo-camera";
import { StyleSheet, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import CustomActionHeader from "../../Components/CustomActionHeader";

const FrontCard = () => {
  const nav = useNavigation();
  const cameraRef = React.useRef(null);
  const [isOpen, setIsOpen] = React.useState(false);
  const [capturedImage, setCapturedImage] = React.useState(null);
  const [loading, setLoading] = useState(false);

  const captureImage = async () => {
    if (cameraRef.current) {
      console.log("ref");
      const photo = await cameraRef.current?.takePictureAsync();
      console.log(photo);
      setCapturedImage(photo.uri); // Store the image URI
      setIsOpen(true); // Open the action sheet
    }
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <CustomHeaderHelp title="" />
      <VStack justifyContent={"space-between"} flex={1}>
        <VStack my={6} mx={6}>
          <Text bold fontSize={"3xl"}>
            Front of driver's license
          </Text>
        </VStack>

        {loading ? (
          <Spinner size={"lg"} />
        ) : (
          <CameraView style={{ flex: 1, marginVertical: 24 }} facing="back" ref={cameraRef}>
            <View style={styles.overlay}>
              {/* Create a black overlay with a cutout for the rectangle */}
              {/* Top, Bottom, Left, and Right views create the overlay */}
              <View style={styles.topOverlay} />
              <View style={styles.leftOverlay} />
              <View style={styles.rightOverlay} />
              <View style={styles.bottomOverlay} />

              {/* The transparent rectangle in the center */}
              <View style={styles.rectangle} />
            </View>
          </CameraView>
        )}

        <VStack alignItems={"center"} mx={6}>
          <Button
            _pressed={{ bg: "#f1f1f1" }}
            onPress={captureImage}
            w={"100%"}
            mb={0}
            disabled={loading}
          >
            Capture
          </Button>
          <HStack alignItems={"center"} mb={3}>
            <Text fontSize={"2xs"}>Powered by </Text>
            <Image source={require("../../../assets/metamap.png")} alt="Metamap" />
          </HStack>
        </VStack>
      </VStack>
      <Actionsheet isOpen={isOpen} onClose={() => setIsOpen(false)} hideDragIndicator>
        <Actionsheet.Content
          alignItems={"flex-start"}
          p={6}
          justifyContent={"space-between"}
          w={"100%"}
        >
          <CustomActionHeader
            title="Retake"
            handleClose={() => setIsOpen(false)}
            handleFunc={() => setIsOpen(false)}
          />
          <VStack space={4}>
            <VStack my={4}>
              <Text bold fontSize={"3xl"}>
                Review photo
              </Text>
              <Text color={"#616161"}>Make sure your details are clear and unobstructed</Text>
            </VStack>
          </VStack>
          <Image
            source={{ uri: capturedImage ?? undefined }}
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
                setIsOpen(false);
                nav.navigate("RecordVideo" as never);
              }}
            >
              Upload photo
            </Button>
            <HStack alignItems={"center"} mb={3}>
              <Text fontSize={"2xs"}>Powered by </Text>
              <Image source={require("../../../assets/metamap.png")} alt="Metamap" />
            </HStack>
          </VStack>
        </Actionsheet.Content>
      </Actionsheet>
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
  capturedImage: {
    width: 200,
    height: 200,
  },
  overlay: {
    flex: 1,
    position: "relative",
  },

  rectangle: {
    position: "absolute",
    top: "28%", // Adjust based on where you want the rectangle
    left: "15%",
    width: "70%", // Adjust the size of the rectangle
    height: "44%",
    borderWidth: 1, // Optional border to visualize the rectangle
    borderColor: "#e0e0e0",
    backgroundColor: "transparent",
  },
  // Black overlay parts that surround the rectangle
  topOverlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    height: "28%", // Matches the top position of the rectangle
    backgroundColor: "rgba(0, 0, 0, 0.7)", // Semi-transparent black
  },
  bottomOverlay: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: "28%", // Matches the bottom position of the rectangle
    backgroundColor: "rgba(0, 0, 0, 0.7)",
  },
  leftOverlay: {
    position: "absolute",
    top: "28%", // Matches the top position of the rectangle
    bottom: "28%", // Matches the bottom position
    left: 0,
    width: "15%", // Matches the left position of the rectangle
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
