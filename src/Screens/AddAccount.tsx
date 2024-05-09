import { View, Text } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomHeader from "../Components/CustomHeader";
import { ScrollView, VStack } from "native-base";
import SimpleCard from "../Components/SimpleCard";
import { useNavigation } from "@react-navigation/native";

const AddAccount = () => {
  const nav = useNavigation();
  const cardsData = [
    {
      title: "Checking",
      desc: "Open a checking account to enjoy convenient access to your funds, easy bill payments, secure online banking, and personalized customer service.",
      handleFunc: () => nav.navigate("" as never),
    },
    {
      title: "Flexible Savings",
      desc: "Create and earn interest on buckets of funds within your primary Flexible saving account with no minimum balance, unlimited access, and free transfers.",
      handleFunc: () => nav.navigate("FlexibleSavings" as never),
    },
    {
      title: "iSuSu Fund",
      desc: "Design a savings plan with other customers or for a special project, establishing the fund's rules to maintain accountability.",
      handleFunc: () => nav.navigate("" as never),
    },
    {
      title: "Fixed Savings",
      desc: "Earn a higher interest rate by agreeing to a minimum term of one year with no permitted withdrawals during the agreed term.",
      handleFunc: () => nav.navigate("" as never),
    },
  ];
  return (
    <SafeAreaView style={{ backgroundColor: "#fff", flex: 1 }}>
      <CustomHeader title="Create Account" />
      <ScrollView>
        <VStack space={4} my={6} mx={2}>
          {cardsData.map((card, index) => (
            <SimpleCard
              key={index}
              title={card.title}
              desc={card.desc}
              link={"Get Started "}
              handleFunc={card.handleFunc}
            />
          ))}
        </VStack>
      </ScrollView>
    </SafeAreaView>
  );
};

export default AddAccount;
