import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { Feather, AntDesign, MaterialIcons } from "@expo/vector-icons";
import React from "react";
import Home from "./Screens/Home";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();
const HomeTabs = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: "#5E41E6",
        tabBarLabelPosition: "below-icon",
        tabBarIcon: ({ color }) => {
          switch (route.name) {
            case "HomeAcc":
              return <Feather name="credit-card" size={24} color={color} />;
            case "Transfer":
              return <Feather name="repeat" size={20} color={color} />;
            case "Pay":
              return (
                <AntDesign
                  name="wifi"
                  size={20}
                  color={color}
                  style={{ transform: [{ rotate: "90deg" }] }}
                />
              );
            case "CreditHome":
              return <AntDesign name="inbox" size={22} color={color} />;

            case "SupportHome":
              return <MaterialIcons name="chat-bubble-outline" size={22} color={color} />;
          }
        },
        tabBarLabelStyle: { fontSize: 11 },
      })}
    >
      <Tab.Screen name="HomeAcc" component={Home} options={{ tabBarLabel: "Accounts" }} />
      
    </Tab.Navigator>
  );
};
export default function Main() {

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="HomeTabs" component={HomeTabs} />
    </Stack.Navigator>
  );
}
