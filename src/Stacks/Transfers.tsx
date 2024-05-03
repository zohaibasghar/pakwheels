import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import TransferDirect from "../Screens/Transfer/TransferDirect";
import Transfer from "../Screens/Transfer";

const Stack = createStackNavigator();

const Transfers = () => {
  return (
    <Stack.Navigator initialRouteName="Transfer" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Transfer" component={Transfer} />
      <Stack.Screen name="TransferDirect" component={TransferDirect} />
    </Stack.Navigator>
  );
};

export default Transfers;
