import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { AntDesign, MaterialIcons, Entypo, Octicons } from "@expo/vector-icons";
import React from "react";
import Home from "./Screens/Home";
import MyAds from "./Screens/MyAds";
import SellNow from "./Screens/SellNow";
import Chat from "./Screens/Chat";
import More from "./Screens/More";
import { View } from "react-native";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();
const HomeTabs = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: "#1D3A5F",
        tabBarLabelPosition: "below-icon",
        tabBarIcon: ({ color }) => {
          switch (route.name) {
            case "Home":
              return <Entypo name="home" size={24} color={color} />;
            case "MyAds":
              return <AntDesign name="pushpino" size={20} color={color} />;
            case "Sell":
              return (
                <View
                  style={{
                    backgroundColor: "#1D3A5F",
                    padding: 12,
                    position: "absolute",
                    top: -20,
                    borderRadius: 50,
                  }}
                >
                  <AntDesign
                    name="plus"
                    size={28}
                    color={"white"}
                    style={{ transform: [{ rotate: "90deg" }] }}
                  />
                </View>
              );
            case "Chat":
              return <MaterialIcons name="chat" size={22} color={color} />;

            case "More":
              return <Octicons name="three-bars" size={22} color={color} />;
          }
        },
        tabBarLabelStyle: { fontSize: 11 },
      })}
    >
      <Tab.Screen name="Home" component={Home} options={{ tabBarLabel: "Home" }} />
      <Tab.Screen name="MyAds" component={MyAds} options={{ tabBarLabel: "My Ads" }} />
      <Tab.Screen name="Sell" component={SellNow} options={{ tabBarLabel: "Sell Now" }} />
      <Tab.Screen name="Chat" component={Chat} />
      <Tab.Screen name="More" component={More} />
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
