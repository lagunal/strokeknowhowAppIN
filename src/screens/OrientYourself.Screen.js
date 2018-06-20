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

class OrientYourselfScreen extends Component {
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
          screen: "StrokeApp.OrientYourselfLMScreen",
        });  
      }

    render() {
        return (
          <View style={styles.container}>
            <BodyScroll style={{flexGrow: 100}}>

                    <MainText>  
                    • Being aware of time is very important after a stroke. It helps build structure into the day knowing what you're going to do, it organizes the day. Then prioritize what needs to take place and to give it time.
                    </MainText>
                    <MainText> 
                    • Have times that are stimulating, others in between, that are quiet — to sit down, nap, simply relax. 
                    </MainText>
                    <Button color="#0773B9" textColor="white" onPress={this.learnMoreHandler}>Learn More >></Button>  
             
            </BodyScroll>                
            <Footer style={{marginBottom: 10}}
              navigator={this.props.navigator} 
              navBkText={'Family Plan'} navBkAction={'StrokeApp.FamilyPlanScreen'}
              navFdText={'Fatigue'} navFdAction={'StrokeApp.FatigueScreen'}
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

  

export default OrientYourselfScreen;