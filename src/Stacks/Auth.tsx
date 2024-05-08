import { createStackNavigator } from "@react-navigation/stack";
import Login from "../Screens/Auth/Login";
import OtpVerification from "../Screens/Auth/OtpVerification";
import Signup from "../Screens/Auth/Signup";
import GetStarted from "../Screens/Auth/GetStarted";
import CreateAccount from "../Screens/Auth/CreateAccount";
import OtpVerification2 from "../Screens/Auth/OtpVerification2";
import PushNotifications from "../Screens/Auth/PushNotifications";
import Residency from "../Screens/Auth/Residency";
import PersonalDetails from "../Screens/Auth/PersonalDetails";
import ConfirmDetails from "../Screens/Auth/ConfirmDetails";
import ConfirmName from "../Screens/Auth/ConfirmName";
import DOB from "../Screens/Auth/DOB";
import HomeAddress from "../Screens/Auth/HomeAddress";
import EmailContact from "../Screens/Auth/EmailContact";
import Support from "../Screens/Support/Index";
import EmploymentStatus from "../Screens/Auth/EmploymentStatus";
import SalaryRange from "../Screens/Auth/SalaryRange";
import AccountUsage from "../Screens/Auth/AccountUsage";
import TaxInfo from "../Screens/Auth/TaxInfo";
import GetVerified from "../Screens/Auth/GetVerified";
import AllowCamera from "../Screens/Auth/AllowCamera";
import FrontCard from "../Screens/Auth/FrontCard";
import RecordVideo from "../Screens/Auth/RecordVideo";
import Video from "../Screens/Auth/Video";
import ReviewVideo from "../Screens/Auth/ReviewVideo";
import HappyBanking from "../Screens/Auth/HappyBanking";
import SelectCard from "../Screens/Auth/SelectCard";
import CreatePIN from "../Screens/Auth/CreatePIN";
import DeliveryAdd from "../Screens/Auth/DeliveryAdd";
import CardDone from "../Screens/Auth/CardDone";

const Stack = createStackNavigator();
export default function Auth() {
  return (
    <Stack.Navigator
      // initialRouteName="Signup"
      screenOptions={{
        headerShown: false,
        headerBackgroundContainerStyle: { backgroundColor: "#f8f8f8" },
      }}
    >
      {/* <Stack.Screen name="Signup" component={Signup} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="OtpVerification" component={OtpVerification} />
      <Stack.Screen name="OtpVerification2" component={OtpVerification2} />
      <Stack.Screen name="GetStarted" component={GetStarted} />
      <Stack.Screen name="CreateAccount" component={CreateAccount} />
      <Stack.Screen name="PushNotifications" component={PushNotifications} /> */}
      {/* <Stack.Screen name="Residency" component={Residency} />
      <Stack.Screen name="PersonalDetails" component={PersonalDetails} />
      <Stack.Screen name="ConfirmDetails" component={ConfirmDetails} />
      <Stack.Screen name="ConfirmName" component={ConfirmName} />
      <Stack.Screen name="DOB" component={DOB} />
      <Stack.Screen name="HomeAddress" component={HomeAddress} />
      <Stack.Screen name="EmailContact" component={EmailContact} />
      <Stack.Screen name="EmploymentStatus" component={EmploymentStatus} />
      <Stack.Screen name="SalaryRange" component={SalaryRange} />
      <Stack.Screen name="AccountUsage" component={AccountUsage} />
      <Stack.Screen name="TaxInfo" component={TaxInfo} /> */}
      {/* <Stack.Screen name="GetVerified" component={GetVerified} />
      <Stack.Screen name="AllowCamera" component={AllowCamera} />
      <Stack.Screen name="FrontCard" component={FrontCard} /> */}
      {/* <Stack.Screen name="RecordVideo" component={RecordVideo} />
      <Stack.Screen name="Video" component={Video} />
      <Stack.Screen name="ReviewVideo" component={ReviewVideo} />
      <Stack.Screen name="HappyBanking" component={HappyBanking} /> */}
      <Stack.Screen name="SelectCard" component={SelectCard} />
      <Stack.Screen name="DeliveryAdd" component={DeliveryAdd} />
      <Stack.Screen name="CreatePIN" component={CreatePIN} />
      <Stack.Screen name="CardDone" component={CardDone} />
      <Stack.Screen name="Support" component={Support} />
    </Stack.Navigator>
  );
}
