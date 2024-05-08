import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Accounts from "./Stacks/Accounts";
import {
  FontAwesome5,
  AntDesign,
  MaterialIcons,
  Feather,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import Transfer from "./Screens/Transfer/index";
import Pay from "./Screens/Pay/Index";
import Support from "./Screens/Support/Index";
import Auth from "./Stacks/Auth";
import { useAppSelector } from "./redux/Store";
import Transfers from "./Stacks/Transfers";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "./Screens/Home";
import Credit from "./Stacks/Credit";
import CreditHome from "./Screens/Credit/CreditHome";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();
const HomeTabs = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: "#5E41E6",
        tabBarInactiveTintColor: "gray",
        tabBarLabelPosition: "below-icon",
        tabBarIcon: ({ color }) => {
          switch (route.name) {
            case "HomeAcc":
              return <FontAwesome5 name={"credit-card"} size={24} color={color} />;
            case "Transfer":
              return <Feather name="repeat" size={24} color={color} />;
            case "Pay":
              return (
                <AntDesign
                  name="wifi"
                  size={24}
                  color={color}
                  style={{ transform: [{ rotate: "90deg" }] }}
                />
              );
            case "CreditHome":
              return <MaterialCommunityIcons name="inbox-full-outline" size={24} color={color} />;
            case "Support":
              return <MaterialIcons name="chat-bubble-outline" size={24} color={color} />;
          }
        },
        tabBarLabelStyle: { marginBottom: 4, fontSize: 11 },
      })}
    >
      <Tab.Screen name="HomeAcc" component={Home} options={{ tabBarLabel: "Accounts" }} />
      <Tab.Screen name="Transfer" component={Transfer} />
      <Tab.Screen name="Pay" component={Pay} />
      <Tab.Screen name="CreditHome" component={CreditHome} options={{ tabBarLabel: "Credit" }} />
      <Tab.Screen name="Support" component={Support} />
    </Tab.Navigator>
  );
};
export default function Main() {
  const { token } = useAppSelector((state) => state.auth);
  if (!token) {
    return <Auth />;
  }
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={HomeTabs} />
      <Stack.Screen name="Accounts" component={Accounts} />
      <Stack.Screen name="Transfers" component={Transfers} />
      <Stack.Screen name="Credit" component={Credit} />
    </Stack.Navigator>
  );
}
