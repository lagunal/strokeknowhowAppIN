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
import Button from "../components/UI/Button";

class SharingHomeCareLMScreen extends Component {
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
                    <Image source={require('../assets/family.png')} style={styles.image} />
                    <MainText>• Who will do personal care; physical therapy? When? </MainText>
                    <MainText>• Shop, share housekeeping? When?</MainText>      
                    <MainText>• Go to doctor and therapist’s appointments. When?</MainText> 
                    <MainText>• Tina’s difficulty swallowing led the family to learn CPR at American Stroke Association. 1-877-242-4277. 
                    </MainText>

            </BodyScroll>                
            <Footer style={{marginBottom: 30}}
              navigator={this.props.navigator} 
              navBkText={'Moving Safely'} navBkAction={'StrokeApp.MovingSafelyScreen'}
              navFdText={'A Family Plan'} navFdAction={'StrokeApp.FamilyPlanScreen'}
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
      //height: '20%',
    },
  });

  

export default SharingHomeCareLMScreen;