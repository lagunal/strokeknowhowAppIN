console.disableYellowBox = true;

import { Navigation } from "react-native-navigation";
import Icon from 'react-native-vector-icons/Ionicons';

import HomeScreen from "./src/screens/Home.Screen";
import SideDrawer from "./src/screens/SideDrawer";
import NewDayScreen from './src/screens/NewDay.Screen';
import LearnMoreScreen from './src/screens/LearnMore.Screen';
import NewDayLMScreen from './src/screens/NewDayLM.Screen';
import MovingSafelyScreen from './src/screens/MovingSafely.Screen';
import MovingSafelyLM1Screen from './src/screens/MovingSafelyLM1.Screen';
import MovingSafelyLM2Screen from './src/screens/MovingSafelyLM2.Screen';
import EmergencyToolkit from './src/screens/EmergencyToolkit.Screen';
import LoginScreen from './src/screens/Login.Screen';
import SharingHomeCareScreen from './src/screens/SharingHomeCare.Screen';
import SharingHomeCareLMScreen from './src/screens/SharingHomeCareLM.Screen';
import FamilyPlanScreen from './src/screens/FamilyPlan.Screen';
import OrientYourselfScreen from './src/screens/OrientYourself.Screen';
import OrientYourselfLMScreen from './src/screens/OrientYourselfLM.Screen';
import FatigueScreen from './src/screens/Fatigue.Screen';


// Register Screens
Navigation.registerComponent("StrokeApp.SideDrawer",() => SideDrawer);
Navigation.registerComponent("StrokeApp.HomeScreen", () => HomeScreen);
Navigation.registerComponent("StrokeApp.NewDayScreen", () => NewDayScreen);
Navigation.registerComponent("StrokeApp.LearnMoreScreen", () => LearnMoreScreen);
Navigation.registerComponent("StrokeApp.NewDayLMScreen", () => NewDayLMScreen);
Navigation.registerComponent("StrokeApp.MovingSafelyScreen", () => MovingSafelyScreen);
Navigation.registerComponent("StrokeApp.MovingSafelyLM1Screen", () => MovingSafelyLM1Screen);
Navigation.registerComponent("StrokeApp.MovingSafelyLM2Screen", () => MovingSafelyLM2Screen);
Navigation.registerComponent("StrokeApp.EmergencyToolkitScreen", () => EmergencyToolkit);
Navigation.registerComponent("StrokeApp.LoginScreen", () => LoginScreen);
Navigation.registerComponent("StrokeApp.SharingHomeCareScreen", () => SharingHomeCareScreen);
Navigation.registerComponent("StrokeApp.SharingHomeCareLMScreen", () => SharingHomeCareLMScreen);
Navigation.registerComponent("StrokeApp.FamilyPlanScreen", () => FamilyPlanScreen);
Navigation.registerComponent("StrokeApp.OrientYourselfScreen", () => OrientYourselfScreen);
Navigation.registerComponent("StrokeApp.OrientYourselfLMScreen", () => OrientYourselfLMScreen);
Navigation.registerComponent("StrokeApp.FatigueScreen", () => FatigueScreen);

// Start a App
  Promise.all([
      Icon.getImageSource("ios-menu", 30)
  ]).then(sources => {
      Navigation.startSingleScreenApp({
        screen: {
          screen: "StrokeApp.LoginScreen",
          //screen: "StrokeApp.HomeScreen",
          title: "Login",

      },
    });
});


