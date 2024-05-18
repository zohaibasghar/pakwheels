import { TouchableOpacity, ImageBackground, StyleSheet } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Button, Container, Flex, HStack, Image, Stack, Text, VStack, View } from "native-base";
import { useNavigation } from "@react-navigation/native";

const DoneSavingAccount = () => {
  const nav = useNavigation();
  return (
    <SafeAreaView style={{ backgroundColor: "#fff", flex: 1 }}>
      <VStack flex={1} justifyContent={"space-between"}>
        <Container mb={1} mt={4} mx={7}>
          <HStack w={"110%"} alignContent={"end"} justifyContent={"flex-end"}>
            <TouchableOpacity onPress={() => nav.navigate("HomeTabs" as never)}>
              <Text fontSize={16} fontFamily={"Manrope_600SemiBold"} color={"#401EE1"}>
                Done
              </Text>
            </TouchableOpacity>
          </HStack>
        </Container>
        <View
          h={"1/3"}
          mt={16}
          w={"100%"}
          my={6}
          style={{
            transform: [{ rotate: "90deg" }],
          }}
          justifyContent={"center"}
          position={"relative"}
        >
          <Image
            source={require("../../assets/bg_umb.png")}
            alt="Umbrella"
            top={"80%"}
            left={-24}
            zIndex={2}
            position={"absolute"}
            style={{ transform: [{ rotate: "-90deg" }] }}
          />
          <ImageBackground
            source={require("../../assets/Card_Shape.png")}
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
                  <Image source={require("../../assets/island_logo.png")} alt="PITG island bank" />
                  <Text color="white" bold fontSize="md">
                    Island Bank
                  </Text>
                </Stack>

                <Stack direction="row" space={1} alignItems="center">
                  <Text color="white">Debit</Text>
                  <Image source={require("../../assets/connection.png")} alt="Connection NFC" />
                </Stack>
              </Flex>

              <Flex justify="space-between" direction="row" align="center" style={styles.row}>
                <Text color="#f5f5f5"></Text>
                <Image source={require("../../assets/visa-logo.png")} alt="VISA logo" />
              </Flex>
            </Stack>
          </ImageBackground>
        </View>
        <Stack alignItems={"center"} mt={4}>
          <Text fontFamily={"Manrope_600SemiBold"} fontSize={"md"}>
            Rainy Day Fund
          </Text>
          <Text color={"#7B7B7B"} fontSize={"xs"}>
            $0.00 • Savings **6272
          </Text>
        </Stack>
        <VStack alignItems={"center"} mx={6}>
          <Text fontFamily={"Manrope_700Bold"} fontSize={20} textAlign={"center"}>
            New account created. Do you want to spend from there?
          </Text>
          <Text color={"#616161"} textAlign={"center"} fontSize={"15px"}>
            Use your card and the money will come out of this account.
          </Text>
          <Button
            mt={8}
            _text={{ fontFamily: "Manrope_600SemiBold", fontSize: 16 }}
            onPress={() => nav.navigate("HomeTabs" as never)}
            _pressed={{ bg: "#f1f1f1" }}
            w={"100%"}
          >
            Spend from here
          </Button>
        </VStack>
      </VStack>
    </SafeAreaView>
  );
};

export default DoneSavingAccount;

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
    objectFit: "contain",
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
