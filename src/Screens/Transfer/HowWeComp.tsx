import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Box, Container, HStack, Image, ScrollView, Text, VStack } from "native-base";
import { useNavigation } from "@react-navigation/native";
import { StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const HowWeComp = () => {
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
          </HStack>
        </Container>
        <ScrollView>
          <VStack space={4}>
            <VStack my={4}>
              <Text fontFamily={"Manrope_700Bold"} fontSize={28}>
                How we compare
              </Text>
              <Text color={"#616161"}>
                Looks like we're the cheapest way to send $1400.00 XCD to USD, see for yourself.
              </Text>
            </VStack>
          </VStack>
          <VStack space={8} mt={4}>
            <HStack justifyContent={"space-between"} alignItems={"center"}>
              <HStack space={2} alignItems={"center"}>
                <Image source={require("../../../assets/island_comp.png")} alt="Island Bank" />
                <Text fontFamily={"Manrope_700Bold"}>Island Bank</Text>
              </HStack>
              <VStack alignItems={"flex-end"}>
                <Text fontFamily={"Manrope_700Bold"}>$1450.00</Text>
                <Text fontSize={10} color={"#7B7B7B"}>
                  Best Price
                </Text>
              </VStack>
            </HStack>
            <HStack justifyContent={"space-between"} alignItems={"center"}>
              <HStack space={2} alignItems={"center"}>
                <Image source={require("../../../assets/wise.png")} alt="Island Bank" />
                <Text fontFamily={"Manrope_700Bold"}>Wise</Text>
              </HStack>
              <VStack alignItems={"flex-end"}>
                <Text fontFamily={"Manrope_700Bold"}>$1450.00</Text>
                <Text fontSize={10} color={"#7B7B7B"}>
                  +$18.75
                </Text>
              </VStack>
            </HStack>
            <HStack justifyContent={"space-between"} alignItems={"center"}>
              <HStack space={2} alignItems={"center"}>
                <Image source={require("../../../assets/paypal.png")} alt="Island Bank" />
                <Text fontFamily={"Manrope_700Bold"}>PayPal</Text>
              </HStack>
              <VStack alignItems={"flex-end"}>
                <Text fontFamily={"Manrope_700Bold"}>$1450.00</Text>
                <Text fontSize={10} color={"#7B7B7B"}>
                  +$18.75
                </Text>
              </VStack>
            </HStack>
            <HStack justifyContent={"space-between"} alignItems={"center"}>
              <HStack space={2} alignItems={"center"}>
                <Image source={require("../../../assets/pioneer.png")} alt="Island Bank" />
                <Text fontFamily={"Manrope_700Bold"}>Payoneer</Text>
              </HStack>
              <VStack alignItems={"flex-end"}>
                <Text fontFamily={"Manrope_700Bold"}>$1450.00</Text>
                <Text fontSize={10} color={"#7B7B7B"}>
                  +$18.75
                </Text>
              </VStack>
            </HStack>
            <HStack justifyContent={"space-between"} alignItems={"center"}>
              <HStack space={2} alignItems={"center"}>
                <Image source={require("../../../assets/Remitly.png")} alt="Island Bank" />
                <Text fontFamily={"Manrope_700Bold"}>Remitly</Text>
              </HStack>
              <VStack alignItems={"flex-end"}>
                <Text fontFamily={"Manrope_700Bold"}>$1450.00</Text>
                <Text fontSize={10} color={"#7B7B7B"}>
                  +$18.75
                </Text>
              </VStack>
            </HStack>
            <HStack justifyContent={"space-between"} alignItems={"center"}>
              <HStack space={2} alignItems={"center"}>
                <Image source={require("../../../assets/western_union.png")} alt="Island Bank" />
                <Text fontFamily={"Manrope_700Bold"}>Western Union</Text>
              </HStack>
              <VStack alignItems={"flex-end"}>
                <Text fontFamily={"Manrope_700Bold"}>$1450.00</Text>
                <Text fontSize={10} color={"#7B7B7B"}>
                  +$18.75
                </Text>
              </VStack>
            </HStack>
            <HStack justifyContent={"space-between"} alignItems={"center"}>
              <HStack space={2} alignItems={"center"}>
                <Image source={require("../../../assets/money_gram.png")} alt="Island Bank" />
                <Text fontFamily={"Manrope_700Bold"}>MoneyGram</Text>
              </HStack>
              <VStack alignItems={"flex-end"}>
                <Text fontFamily={"Manrope_700Bold"}>$1450.00</Text>
                <Text fontSize={10} color={"#7B7B7B"}>
                  +$18.75
                </Text>
              </VStack>
            </HStack>
          </VStack>
        </ScrollView>
      </VStack>
    </SafeAreaView>
  );
};

export default HowWeComp;

const styles = StyleSheet.create({
  backButtonContainer: {
    backgroundColor: "#f8f8f8",
    borderRadius: 100,
    padding: 16,
  },
});
