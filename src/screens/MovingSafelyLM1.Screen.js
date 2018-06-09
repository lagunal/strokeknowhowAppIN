import React, { Component } from 'react';
import {
    StyleSheet,
    View,
  } from 'react-native';

import Footer from '../components/Footer';
import MainText from "../components/UI/MainText";
import HeadingText from "../components/UI/HeadingText";
import BodyScroll from "../components/UI/BodyScroll";

class MovingSafelyLM1Screen extends Component {

    render() {  
        return (
            <View style={styles.container}>
                <BodyScroll style={{flexGrow: 80}}>
                    <HeadingText>
                        Transfer to the Toilet
                    </HeadingText>
                    <MainText> 
                        Have your stronger side nearest the toilet. Your stronger leg, your trunk bent slightly downward, use your stronger arm to grab safety bar to pull up to a standing position, with or without help. 
                    </MainText>
                </BodyScroll>
                <Footer 
                navigator={this.props.navigator} 
                navBkText={'A New Day'} navBkAction={'StrokeApp.NewDayScreen'}
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
      backgroundColor: 'white',
      justifyContent: 'space-between',      
    },
    image: {
      width: '100%',
    },
  });

export default MovingSafelyLM1Screen;