import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Image,
  } from 'react-native';
import Footer from '../components/Footer';
import MainText from "../components/UI/MainText";
import HeadingText from '../components/UI/HeadingText';
import BodyScroll from "../components/UI/BodyScroll";

class FatigueScreen extends Component {
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

    render() {
        return (
          <View style={styles.container}>
            <BodyScroll style={{flexGrow: 100}}>
                    <Image source={require('../assets/fatigue.png')} style={styles.image} />
                    <MainText>  
                    I was a surgeon with never ending work –starting 
                    before 6 when I began operating, until returning home 
                    11 at night. Since my stroke, fatigue is a major challenge. 
                    </MainText>
                    <MainText>
                    Ghauth, South Africa
                    </MainText>
                    
             
            </BodyScroll>                
            <Footer style={{marginBottom: 30}}
              navigator={this.props.navigator} 
              navBkText={'Orient Yourself'} navBkAction={'StrokeApp.OrientYourselfScreen'}
              navFdText={'Orient Yourself'} navFdAction={'StrokeApp.OrientYourselfScreen'}
            />
          </View>           
        );
    }
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      backgroundColor: 'white',
    },
    image: {
      width: '100%',
      height: 400,
    },
  });

  

export default FatigueScreen;