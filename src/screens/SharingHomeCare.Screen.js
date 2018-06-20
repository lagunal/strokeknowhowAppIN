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

class SharingHomeCareScreen extends Component {
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
        screen: "StrokeApp.SharingHomeCareLMScreen",
      });  
    }

    render() {
        return (
          <View style={styles.container}>
            <BodyScroll style={{flexGrow: 100}}>
                    <Image source={require('../assets/family.png')} style={styles.image} />
                    <MainText>  
                        When my wife, Tina, had a stroke,
                          it hit our whole family, we each had 
                          a job to do– even the kids.
                          	Javier
                    </MainText>
                    <HeadingText>
                     Questions Families Ask Themselves
                    </HeadingText>
                    <Button color="#0773B9" textColor="white" onPress={this.learnMoreHandler}>Learn More >></Button>  
                    <MainText><HeadingText>
                    Interactive Help Needed Toolkit 
                    </HeadingText></MainText>
                    <Image source={require('../assets/help-needed.jpg')} style={styles.image} />
             
            </BodyScroll>                

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

  

export default SharingHomeCareScreen;