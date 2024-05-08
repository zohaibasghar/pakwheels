import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Box, Button, Container, HStack, Image, ScrollView, Text, VStack } from "native-base";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const ReviewVideo = () => {
  const nav = useNavigation();
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#0008" }}>
      <VStack justifyContent={"space-between"} flex={1} px={6} bg={"#fff"} roundedTop={24}>
        <Container mb={1} mt={6} mx={2}>
          <HStack alignItems={"center"} justifyContent={"space-between"} w={"110%"}>
            <Box>
              <TouchableOpacity style={styles.backButtonContainer} onPress={() => nav.goBack()}>
                <Ionicons name="close" size={22} color="#000" />
              </TouchableOpacity>
            </Box>
            <TouchableOpacity onPress={() => nav.goBack()}>
              <Text fontSize="md" color={"#401EE1"} left={6}>
                Retake
              </Text>
            </TouchableOpacity>
          </HStack>
        </Container>
        <ScrollView>
          <VStack space={4}>
            <VStack my={4}>
              <Text bold fontSize={"3xl"}>
                Review video
              </Text>
              <Text color={"#616161"}>Your video has been recorded</Text>
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
            onPress={() => nav.navigate("HappyBanking" as never)}
            w={"100%"}
            mb={0}
          >
            Upload video
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

export default ReviewVideo;

const styles = StyleSheet.create({
  backButtonContainer: {
    backgroundColor: "#f8f8f8",
    borderRadius: 100,
    padding: 16,
  },
});
