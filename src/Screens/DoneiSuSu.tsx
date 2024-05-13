import { TouchableOpacity, ImageBackground, StyleSheet } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Button, Container, Flex, HStack, Image, Stack, Text, VStack, View } from "native-base";
import { useNavigation } from "@react-navigation/native";

const DoneiSuSu = () => {
  const nav = useNavigation();
  return (
    <SafeAreaView style={{ backgroundColor: "#fff", flex: 1 }}>
      <VStack flex={1} justifyContent={"space-between"}>
        <Container mb={1} mt={4} mx={7}>
          <HStack w={"110%"} alignContent={"end"} justifyContent={"flex-end"}>
            <TouchableOpacity onPress={() => nav.navigate("HomeTabs" as never)}>
              <Text fontSize="md" color={"#401EE1"}>
                Done
              </Text>
            </TouchableOpacity>
          </HStack>
        </Container>
        <View mx={"auto"} mt={16} justifyContent={"center"} position={"relative"}>
          <Image
            source={require("../../assets/honey_black_bg.png")}
            alt="Umbrella"
            top={-10}
            left={-8}
            zIndex={2}
            position={"absolute"}
          />
          <Image source={require("../../assets/gold_card.png")} alt="iSuSu Gold card" />
          <Stack position={"absolute"} bottom={16} left={0} right={0} alignItems={"center"}>
            <Text bold fontSize={"md"}>
              Honey Pot
            </Text>
            <Text color={"#7B7B7B"} fontSize={"xs"}>
              $250.00 • Savings **0948
            </Text>
          </Stack>
        </View>
        <Stack alignItems={"center"}></Stack>
        <VStack alignItems={"center"} mx={10}>
          <Text bold fontSize={"lg"} textAlign={"center"}>
            New iSuSu Fund created. Meet all your goals with friends now.
          </Text>
          <Text color={"#616161"} textAlign={"center"} fontSize={"15px"}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus, modi.
          </Text>
        </VStack>
        <Button
          mt={6}
          onPress={() => nav.navigate("HomeTabs" as never)}
          _pressed={{ bg: "#f1f1f1" }}
          mx={6}
        >
          Add participants
        </Button>
      </VStack>
    </SafeAreaView>
  );
};

export default DoneiSuSu;

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
