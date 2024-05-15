import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import TransferDirect from "../Screens/Transfer/TransferDirect";
import Transfer from "../Screens/Transfer";
import WireTransfer from "../Screens/Transfer/WireTransfer";
import HowWeComp from "../Screens/Transfer/HowWeComp";
import TransferProcess from "../Screens/Transfer/TransferProcess";

const Stack = createStackNavigator();

const Transfers = () => {
  return (
    <Stack.Navigator initialRouteName="Transfer" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Transfer" component={Transfer} />
      <Stack.Screen name="TransferDirect" component={TransferDirect} />
      <Stack.Screen name="WireTransfer" component={WireTransfer} />
      <Stack.Screen name="HowWeComp" component={HowWeComp} />
      <Stack.Screen name="TransferProcess" component={TransferProcess} />
    </Stack.Navigator>
  );
};

export default Transfers;
