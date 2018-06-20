import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Image,
  } from 'react-native';
import Footer from '../components/Footer';
import Header from '../components/Header';
import MainText from "../components/UI/MainText";
import BodyScroll from "../components/UI/BodyScroll";

class LearnMoreScreen extends Component {
  constructor(props) {
    super(props);
    this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent);
}
onNavigatorEvent = event => {
    // console.log(event);
    // if (event.type === "NavBarButtonPress") {
    //     if (event.id === "sideDrawerToggle") {
    //         this.props.navigator.toggleDrawer({
    //             side: "left"
    //         });
    //     } 
    // }
    // if (event.id === "bottomTabReselected") {
    //   this.props.navigator.push({
    //     screen: "StrokeApp.LearnMoreScreen",
    //   });
    // }  
    // if (event.id === "willDisappear") {
    //   this.props.navigator.pop({
    //     animated: true, // does the pop have transition animation or does it happen immediately (optional)
    //     animationType: 'fade', // 'fade' (for both) / 'slide-horizontal' (for android) does the pop have different transition animation (optional)
    //   });
    // } 
}

    render() {
        return (
          <View style={styles.container}>
            <BodyScroll>
                <Header />
                <Image source={require('../assets/home.png')} style={styles.image} />
                <MainText>
                  I was a sports writer of a major newspaper,  who had a stroke in a New York subway during rush hour.  In the ambulance, 
                  I overheard the word ‘stroke,’ and realized they were talking about me. 
                  Out of the hospital in five days: I could stand, but not walk. My family couldn’t understand what I was trying to say to them. 
                  Insurance paid only a handful of physical therapy. NOW WHAT?
                </MainText>
                <MainText style={{margin: 25}}>
                  We’re living through a time when every 
                  family affected by stroke must find out what it will 
                  take to reclaim your life – there’s no other way! 
                </MainText>
            </BodyScroll>      
          </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'space-between',
      backgroundColor: 'white',
    },
    image: {
      width: '100%',
      //height: 150,
    },  
  });

  

export default LearnMoreScreen;