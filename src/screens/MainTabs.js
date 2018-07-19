import { Navigation } from 'react-native-navigation';
import { Platform } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const startTabs = () => {
    Promise.all([
        Icon.getImageSource(Platform.OS === 'android' ? "md-home" : "ios-home", 30),  //home icon
        Icon.getImageSource(Platform.OS === 'android' ? "md-arrow-forward" : "ios-arrow-forward", 30), //forward icon
        Icon.getImageSource(Platform.OS === 'android' ? "md-create" : "ios-create", 30), //toolkit icon
        Icon.getImageSource(Platform.OS === 'android' ? "md-menu" : "ios-menu", 30), //side drawer icon
        Icon.getImageSource(Platform.OS === 'android' ? "md-list-box" : "ios-list-box", 30), //contents icon
        Icon.getImageSource(Platform.OS === 'android' ? "md-log-out" : "ios-log-out-outline", 30) //sign out icon
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
                                title: "Forward",
                                label: "Forward",
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
                    screen: "StrokeApp.HomeScreen",
                    label: "Sign out",
                    title: "Sign out",
                    icon: sources[5],
                },
            ],
            tabsStyle: {
                tabBarSelectedButtonColor: "white",
                tabBarBackgroundColor: '#1749FF', // change the background color of the tab bar
                tabBarButtonColor: 'white',
                tabBarTextFontFamily: 'Helvetica', //change the tab font family
                selectedTabFontSize: 12,
            },
            drawer: {
                left: {
                    screen: "StrokeApp.SideDrawer"
                }
            },
            appStyle: {
                tabBarSelectedButtonColor: "white",
                tabBarBackgroundColor: '#1749FF',
                tabBarButtonColor: 'white',
            },
        });
    });
};

export default startTabs;