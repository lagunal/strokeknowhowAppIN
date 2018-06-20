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

    render() {
        return (
          <View style={styles.container}>
            <BodyScroll style={{flexGrow: 100}}>

                    <MainText>  
                    • After a stroke, it takes more energy to get around, talk and listen. Pace yourself balancing light and heavy tasks. Conserving your energy, will actually let you do more.
                    </MainText>
                    <MainText> 
                    • Notice times when you become especially fatigued. A pattern emerges when you could use someone's assistance. This helps the family to be available or a paid helper.  
                    </MainText>
                    <MainText> 
                    • Think of time as an ally, not to compete with. 
                    </MainText>                   

             
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