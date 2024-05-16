import { createStackNavigator } from "@react-navigation/stack";
import PayHome from "../Screens/Pay/PayHome";
import TapToPay from "../Screens/Pay/TapToPay";

const Stack = createStackNavigator();

export default function Pay() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="PayHome" component={PayHome} />
      <Stack.Screen name="TapToPay" component={TapToPay} />
    </Stack.Navigator>
  );
}
