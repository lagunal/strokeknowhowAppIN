import { Navigation } from 'react-native-navigation';
import { Platform } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const startTabs = () => {
    Promise.all([
        Icon.getImageSource(Platform.OS === 'android' ? "md-home" : "ios-home", 20),  //home icon
        Icon.getImageSource(Platform.OS === 'android' ? "md-arrow-forward" : "ios-arrow-forward", 30), //forward icon
        Icon.getImageSource(Platform.OS === 'android' ? "md-create" : "ios-create", 30), //toolkit icon
        Icon.getImageSource(Platform.OS === 'android' ? "md-menu" : "ios-menu", 30), //side drawer icon
        Icon.getImageSource(Platform.OS === 'android' ? "md-list-box" : "ios-list-box", 30), //contents icon
        Icon.getImageSource(Platform.OS === 'android' ? "md-people" : "ios-people", 30) //sign out icon
    ]).then(sources => {
        Navigation.startTabBasedApp({
            tabs: [
                {
                    screen: "StrokeApp.HomeScreen",
                    label: "Home",
                    title: "Home",
                    icon: sources[0],
                    navigatorButtons: {
                        rightButtons: [
                            {
                                icon: sources[1],
                                //component: 'ForwardButton',
                                //title: "Forward",
                                //label: "Forward",
                                id: "forwardButton"
                            }
                        ]
                    }
                },
                {
                    screen: "StrokeApp.ContentsScreen",
                    label: "Contents",
                    title: "Contents",
                    icon: sources[4],
                },
                {
                    screen: "StrokeApp.ToolkitHomeScreen",
                    label: "Toolkits",
                    title: "Toolkits Home",
                    icon: sources[2],
                },
                {
                    screen: "StrokeApp.ProfileScreen",
                    label: "Account",
                    //title: "Sign out",
                    icon: sources[5],
                    modal: true,
                },
            ],
            tabsStyle: { //for iOS
                tabBarSelectedButtonColor: "#0032e6",
                tabBarBackgroundColor: '#0032e6', // change the background color of the tab bar
                tabBarButtonColor: '#0032e6',
                tabBarTextFontFamily: 'Helvetica', //change the tab font family
                tabBarTextFontSize: 20,
                //tabBarTextMargin: 10,
                //tabBarSelectedTextColor: 'black',
                tabBarTextColor: 'white',
                navBarButtonColor: '#b30000',
                navBarTextColor: '#b30000',
                tabBarOptions: {
                    labelStyle: { fontSize: 12 },
                    height: 50,
                }
                    
                    
            },
            appStyle: { //for Android
                tabBarSelectedButtonColor: 'white',
                tabBarBackgroundColor: '#0032e6',
                tabBarButtonColor: 'white',
                tabFontSize: 22,
                selectedTabFontSize: 22,
                //navBarHideOnScroll: true,
                navBarBackgroundColor: '#0032e6',
                navBarButtonColor: 'white',
                navBarTextColor: 'white',
                navBarTitleTextCentered: true,
                hideBackButtonTitle: true, //hide back button title for iOS
            },
        });
    });
};

export default startTabs;