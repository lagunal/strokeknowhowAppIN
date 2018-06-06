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
                Men and women and their family touched by stroke share information. Professionals weigh in. 
                </MainText>
            </BodyScroll>
            <Footer 
              navigator={this.props.navigator} 
              navBkText={'Home'} navBkAction={'StrokeApp.HomeScreen'}
              navFdText={'A New Day'} navFdAction={'StrokeApp.NewDayScreen'}
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
      //height: 150,
    },  
  });

  

export default LearnMoreScreen;