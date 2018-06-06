console.disableYellowBox = true;

import { Navigation } from "react-native-navigation";
import Icon from 'react-native-vector-icons/Ionicons';

import HomeScreen from "./src/screens/Home.Screen";
import SideDrawer from "./src/screens/SideDrawer";
import NewDayScreen from './src/screens/NewDay.Screen';
import LearnMoreScreen from './src/screens/LearnMore.Screen';
import NewDayLMScreen from './src/screens/NewDayLM.Screen';
import MovingSafelyScreen from './src/screens/MovingSafely.Screen';


// Register Screens
Navigation.registerComponent("StrokeApp.SideDrawer",() => SideDrawer);
Navigation.registerComponent("StrokeApp.HomeScreen", () => HomeScreen);
Navigation.registerComponent("StrokeApp.NewDayScreen", () => NewDayScreen);
Navigation.registerComponent("StrokeApp.LearnMoreScreen", () => LearnMoreScreen);
Navigation.registerComponent("StrokeApp.NewDayLMScreen", () => NewDayLMScreen);
Navigation.registerComponent("StrokeApp.MovingSafelyScreen", () => MovingSafelyScreen);


// Start a App
  Promise.all([
      Icon.getImageSource("ios-menu", 30)
  ]).then(sources => {
      Navigation.startSingleScreenApp({
        screen: {
          screen: "StrokeApp.HomeScreen",
          title: "Home",
          navigatorButtons: {
            leftButtons: [
                {
                    icon: sources[0],
                    title: "Menu",
                    id: "sideDrawerToggle"
                }
            ]
        }
        },
        drawer: {
          left: {
              screen: "StrokeApp.SideDrawer"
          }
      }
      });
 });

// Navigation.startTabBasedApp({
//   tabs: [
//       {
//           screen: "StrokeApp.HomeScreen",
//           label: "Home",
//           title: "Home",
//           icon: require('./src/assets/leftIcon.png'),
//       },
//       {
// //           screen: "StrokeApp.NewDayScreen",
//           label: "A New Day",
//           title: "A New Day",
//           icon: require('./src/assets/rightIcon.png'),
//       }
//   ]


