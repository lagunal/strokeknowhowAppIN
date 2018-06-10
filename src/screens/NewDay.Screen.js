import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Image,
  } from 'react-native';

import Footer from '../components/Footer';
import HeadingText from '../components/UI/HeadingText';
import MainText from "../components/UI/MainText";
import Button from "../components/UI/Button";
import BodyScroll from "../components/UI/BodyScroll";

class NewDayScreen extends Component {
    constructor(props) {
        super(props);
        this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent);
    }
    onNavigatorEvent = event => {
        if (event.type === "NavBarButtonPress") {
            if (event.id === "sideDrawerToggle") {
                this.props.navigator.toggleDrawer({
                    side: "left"
                });
            } 
        }  
    }

    learnMoreHandler = () => {
      this.props.navigator.push({
        screen: "StrokeApp.NewDayLMScreen",
      });  
    }
    render() {
        return (
          <View style={styles.container}>
            <BodyScroll> 
                <Image source={require('../assets/newDay.png')} style={styles.image} />
                <MainText>
                It’s important to get out of bed and dress every day. Complete bed rest deconditions the body. It lowers capacity of the heart’s pumping rate, reduces lung capacity, alters blood pressure, and increases chance 
                of pneumonia. Instead of remaining in bed, rest and take short naps in a comfortable chair with your legs elevated. 
                </MainText>
                <MainText>
                  <HeadingText>
                  What You Can Do
                  </HeadingText>
                </MainText>  
                <MainText>  
                • Do slow stretches in bed to ease stiffness. Before sitting up, roll from side to side to involve both sides of your body. 
                </MainText>
                <Button color="#0773B9" textColor="white" onPress={this.learnMoreHandler}>Learn More >></Button>                                 
            </BodyScroll>                    
            <Footer 
              navigator={this.props.navigator} 
              navBkText={'Home'} navBkAction={'StrokeApp.HomeScreen'}
              navFdText={'Moving Safely'} navFdAction={'StrokeApp.MovingSafelyScreen'}
            />
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
    },

  });

  

export default NewDayScreen;