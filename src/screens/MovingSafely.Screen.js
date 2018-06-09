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

class MovingSafelyScreen extends Component {
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

    learnMoreHandler1 = () => {
      this.props.navigator.push({
        screen: "StrokeApp.MovingSafelyLM1Screen",
      });  
    }
    learnMoreHandler2 = () => {
      this.props.navigator.push({
        screen: "StrokeApp.MovingSafelyLM2Screen",
      });  
    }

    render() {
        return (
          <View style={styles.container}>
            <BodyScroll>
                    <Image source={require('../assets/boton-video.png')} style={styles.image} />
                    <HeadingText>
                    How Helpers Protect Themselves
                    </HeadingText>
                    <MainText>  
                    • Helpers keep their hips and knees slightly bent. 
                    • Stand close to you -- too far, places a strain on a helper’s back. For a base of support, a helper stands with feet slightly apart, one foot ahead of other to maintain their balance, quickly shift their weight when necessary.
                    </MainText>
                    <HeadingText>
                    Transfer to the Toilet
                    </HeadingText>
                    <MainText> 
                    • If you are a wheelchair user, a helper brings wheelchair close to front edge of toilet. Both brakes are locked, footrests swung out.
                    </MainText>
                    <Button color="#0773B9" textColor="white" onPress={this.learnMoreHandler1}>Learn More >></Button>  

                    <HeadingText>
                    Assisted Transfer to the Bathtub
                    </HeadingText>
                    <MainText> 
                    It takes good balance and sure footing to get in and out of the bathtub. Generally more difficult to get out of the tub on your own than to get into it. 
                    </MainText>                   
                    <Button color="#0773B9" textColor="white" onPress={this.learnMoreHandler2}>Learn More >></Button>             
            </BodyScroll>                
            <Footer style={{marginBottom: 40}}
              navigator={this.props.navigator} 
              navBkText={'A New Day'} navBkAction={'StrokeApp.NewDayScreen'}
              navFdText={'Toolkit'} navFdAction={'StrokeApp.EmergencyToolkitScreen'}
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
      //width: '100%',
    },
  });

  

export default MovingSafelyScreen;