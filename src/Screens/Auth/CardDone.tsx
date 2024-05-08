import { ImageBackground, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Button, Container, Flex, HStack, Image, Stack, Text, VStack, View } from "native-base";
import { useAppDispatch } from "../../redux/Store";
import { signIn } from "../../redux/authSlice";

const CardDone = () => {
  const dispatch = useAppDispatch();
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <VStack flex={1} justifyContent={"space-between"}>
        <Container mb={1} mt={4} mx={7}>
          <HStack w={"110%"} alignContent={"end"} justifyContent={"flex-end"}>
            <TouchableOpacity onPress={() => dispatch(signIn())}>
              <Text fontSize="md" color={"#401EE1"}>
                Done
              </Text>
            </TouchableOpacity>
          </HStack>
        </Container>
        <View
          h={"1/3"}
          w={"95%"}
          mx={"auto"}
          my={5}
          style={{ transform: [{ rotate: "90deg" }] }}
          justifyContent={"center"}
        >
          <ImageBackground
            source={require("../../../assets/Card_Shape.png")}
            style={styles.imageBackground} // Apply the style to control width, height, and alignment
            imageStyle={styles.imageStyle} // Control the rounding of the corners
          >
            <Stack
              style={styles.card}
              justifyContent="space-between" // Distribute space evenly
              w="100%" // Ensure it takes the full width of the ImageBackground
              rounded="2xl" // Apply border-radius to the whole stack
              h={"100%"}
              py={6}
              px={3}
            >
              <Flex
                justify="space-between" // Align content within the row
                direction="row" // Horizontal layout
                alignItems="center" // Align vertically
                style={styles.row} // Apply custom styles
              >
                <Stack space={2} direction="row" alignItems="center">
                  <Image
                    source={require("../../../assets/island_logo.png")}
                    alt="PITG island bank"
                  />
                  <Text color="white" bold fontSize="md">
                    Island Bank
                  </Text>
                </Stack>

                <Stack direction="row" space={1} alignItems="center">
                  <Text color="white">Debit</Text>
                  <Image source={require("../../../assets/connection.png")} alt="Connection NFC" />
                </Stack>
              </Flex>

              <Flex justify="space-between" direction="row" align="center" style={styles.row}>
                <Text color="#f5f5f5">Richard Reyes</Text>
                <Image source={require("../../../assets/visa-logo.png")} alt="VISA logo" />
              </Flex>
            </Stack>
          </ImageBackground>
        </View>

        <VStack alignItems={"center"} mx={8}>
          <Text bold fontSize={"lg"}>
            Your card is on way!
          </Text>
          <Text color={"#616161"} textAlign={"center"} fontSize={"15px"}>
            Add your active digital card to your wallet to make easy-breezy payments online, in
            stores, and in apps.
          </Text>
          <Button
            bg={"#000"}
            w={"100%"}
            mt={6}
            onPress={() => dispatch(signIn())}
            _pressed={{ bg: "#f1f1f1" }}
          >
            <HStack alignItems={"center"} space={4}>
              <Image source={require("../../../assets/apple.png")} alt="Apple wallet" />
              <Text color={"white"}>Add to Apple Wallet</Text>
            </HStack>
          </Button>
        </VStack>
      </VStack>
    </SafeAreaView>
  );
};

export default CardDone;

const styles = StyleSheet.create({
  imageBackground: {
    width: "100%", // Custom width for the ImageBackground
    height: "100%",
    marginHorizontal: "auto", // Center the card horizontally
    marginVertical: 10, // Vertical margin
    borderRadius: 20, // Rounded corners for the card
  },
  imageStyle: {
    borderRadius: 20, // Ensures the image has rounded corners
    objectFit: "cover",
  },
  card: {
    padding: 20, // Add padding around the content
    shadowColor: "#000030", // Shadow for a subtle effect
    shadowOpacity: 1,
    shadowOffset: { width: 0, height: 4 }, // Shadow offset
    shadowRadius: 5, // Shadow blur
  },
  row: {
    paddingHorizontal: 15, // Horizontal padding to separate content
  },
});
