import { View, Text } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../../Components/Header";
import HomeCards from "../../Components/HomeCards";
import { VStack } from "native-base";
import { useNavigation } from "@react-navigation/native";

export default function CreditHome() {
  const navigation = useNavigation();
  const cardsData = [
    {
      id: 1,
      title: "Overdraft",
      desc: "Get overdraft coverage, avoiding fees and declined transactions during unexpected expenses",
      link: "Turn on",
      handleFunc: () => navigation.navigate("Credit", { screen: "Overdraft" }),
      path: require("../../../assets/Shield.png"),
    },
    {
      id: 2,
      title: "Credit Card",
      desc: "Pay for what you use when you earn more on your money so you can save for what matters",
      link: "Apply now",
      path: require("../../../assets/Bag.png"),
    },
    {
      id: 3,
      title: "Secured Loan",
      desc: "Secure and consolidate your debts or for an upcoming special occasion using your salary or acceptable assets",
      link: "Apply now",
      path: require("../../../assets/Lock.png"),
      handleFunc: () => navigation.navigate("Credit", { screen: "LoanApplication" }),
    },
  ];
  return (
    <SafeAreaView>
      <Header />
      <VStack space={4} my={4}>
        {cardsData.map((card) => {
          return (
            <HomeCards
              title={card.title}
              desc={card.desc}
              handleFunc={card.handleFunc}
              key={card.id}
              path={card.path}
              link={card.link}
            />
          );
        })}
      </VStack>
    </SafeAreaView>
  );
}
