import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Accounts from "./Stacks/Accounts";
import {
  FontAwesome5,
  AntDesign,
  MaterialIcons,
  Feather,
} from "@expo/vector-icons";
import Transfer from "./Screens/Transfer/index";
import Pay from "./Screens/Pay/Index";
import Credit from "./Screens/Credit/index";
import Support from "./Screens/Support/Index";
import Auth from "./Stacks/Auth";
import { useAppSelector } from "./redux/Store";

const Tab = createBottomTabNavigator();

export default function Main() {
  const { token } = useAppSelector(state => state.auth);
  if (!token) {
    return <Auth />
  }
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: "#5E41E6",
        tabBarInactiveTintColor: "gray",
        tabBarLabelPosition: "below-icon",
        tabBarIcon: ({ color }) => {
          switch (route.name) {
            case "Accounts":
              return (
                <FontAwesome5 name={"credit-card"} size={24} color={color} />
              );
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
            case "Credit":
              return <AntDesign name="creditcard" size={24} color={color} />;
            case "Support":
              return (
                <MaterialIcons
                  name="chat-bubble-outline"
                  size={24}
                  color={color}
                />
              );
          }
        },
        tabBarLabelStyle: { marginBottom: 4, fontSize: 11 },
      })}
    >
      <Tab.Screen name="Accounts" component={Accounts} />
      <Tab.Screen name="Transfer" component={Transfer} />
      <Tab.Screen name="Pay" component={Pay} />
      <Tab.Screen name="Credit" component={Credit} />
      <Tab.Screen name="Support" component={Support} />
    </Tab.Navigator>
  );
}
