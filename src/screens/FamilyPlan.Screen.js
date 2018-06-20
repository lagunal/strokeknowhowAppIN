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

class FamilyPlanScreen extends Component {
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
                    <Image source={require('../assets/family-plan.png')} style={styles.image} />
                    <MainText>  
                    •After a stroke, a family looks at their living and medical expenses. Then decide caring help and financial support they each will give. 
                    • A physical and speech therapist may be asked for an evaluation of abilities to move about, talk, understand, cope emotionally. 
                    • To better understand emotional effects of depression, agitation, and the way to cope, a family may ask a psychologist. 

                    </MainText>
                    <HeadingText>
                    A Weekly Plan
                    </HeadingText>
                    <MainText>
                    Rachel’s granddaughter shows her how to organize her weekly schedule in Tel Aviv, Israel.  
                    </MainText>
                    <MainText><HeadingText>
                    Interactive Weekly Schedule Toolkit 
                    </HeadingText></MainText>
                    <Image source={require('../assets/schedule.png')} style={styles.image} />
             
            </BodyScroll>                
            <Footer style={{marginBottom: 30}}
              navigator={this.props.navigator} 
              navBkText={'Sharing Home Care'} navBkAction={'StrokeApp.SharingHomeCareScreen'}
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
      //height: '20%',
    },
  });

  

export default FamilyPlanScreen;