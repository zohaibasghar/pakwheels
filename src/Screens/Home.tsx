import React from "react";
import Header from "../Components/Header";
import CurrentAccounts from "../Components/CurrentAccounts";
import HomeCards from "../Components/HomeCards";
import { ScrollView, Stack } from "native-base";

export default function Home() {
  return (
    <ScrollView bg={"#f8f8f8"}>
      <Header />
      <CurrentAccounts />
      <Stack space={4} mb={4}>
        <HomeCards
          title={"Get your paycheck early"}
          desc={
            "Finish setting up direct deposit and get paid up to two days early"
          }
          link={"Finish setting up"}
          path={require("../../assets/Send.png")}
          image={"arrow-circle-right"}
        />
        <HomeCards
          title={"Grow your savings"}
          desc={"Earn more on your memory so you can save for what matters"}
          link={"Open Saving account"}
          path={require("../../assets/Chart.png")}
          image={"chart-bar"}
        />
      </Stack>
    </ScrollView>
  );
}
