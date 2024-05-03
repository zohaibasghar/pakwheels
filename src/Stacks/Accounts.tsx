import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../Screens/Home";
import Transactions from "../Screens/Transactions";
import MyCard from "../Screens/MyCard";
import TransactionDetail from "../Screens/TransactionDetail";
import TransferDirect from "../Screens/Transfer/TransferDirect";

const Stack = createStackNavigator();

const Accounts = () => {
  return (
    <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Transactions" component={Transactions} />
      <Stack.Screen name="MyCard" component={MyCard} />
      <Stack.Screen name="TransactionDetail" component={TransactionDetail} />
      <Stack.Screen name="TransferDirect" component={TransferDirect} />
    </Stack.Navigator>
  );
};

export default Accounts;
