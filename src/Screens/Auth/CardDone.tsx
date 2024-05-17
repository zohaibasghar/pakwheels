import { ImageBackground, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Button, Container, Flex, HStack, Image, Stack, Text, VStack, View } from "native-base";
import { useAppDispatch } from "../../redux/Store";
import { createTransaction, signIn } from "../../redux/authSlice";

const CardDone = () => {
  const dispatch = useAppDispatch();
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <VStack flex={1} justifyContent={"space-between"}>
        <Container mb={1} mt={4} mx={7}>
          <HStack w={"110%"} alignContent={"end"} justifyContent={"flex-end"}>
            <TouchableOpacity onPress={() => dispatch(signIn())}>
              <Text color={"#401EE1"} fontFamily={"Manrope_600SemiBold"} fontSize={16}>
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
            style={styles.imageBackground}
            imageStyle={styles.imageStyle}
          >
            <Stack
              style={styles.card}
              justifyContent="space-between"
              w="100%"
              rounded="2xl"
              h={"100%"}
              py={6}
              px={3}
            >
              <Flex justify="space-between" direction="row" alignItems="center" style={styles.row}>
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
          <Text fontFamily={"Manrope_600SemiBold"} fontSize={24}>
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
            onPress={() => {
              dispatch(signIn());
              dispatch(createTransaction());
            }}
            _pressed={{ bg: "#f1f1f1" }}
          >
            <HStack alignItems={"center"} space={4}>
              <Image source={require("../../../assets/apple.png")} alt="Apple wallet" />
              <Text color={"white"} fontFamily={"Manrope_600SemiBold"} fontSize={16}>
                Add to Apple Wallet
              </Text>
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
    width: "100%",
    height: "100%",
    marginHorizontal: "auto",
    marginVertical: 10,
    borderRadius: 20,
  },
  imageStyle: {
    borderRadius: 20,
    objectFit: "cover",
  },
  card: {
    padding: 20,
    shadowColor: "#000030",
    shadowOpacity: 1,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 5,
  },
  row: {
    paddingHorizontal: 15,
  },
});
