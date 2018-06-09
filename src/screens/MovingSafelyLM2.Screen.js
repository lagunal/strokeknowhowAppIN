import React, { Component } from 'react';
import {
    StyleSheet,
    View,
  } from 'react-native';

import Footer from '../components/Footer';
import MainText from "../components/UI/MainText";
import HeadingText from "../components/UI/HeadingText";
import BodyScroll from "../components/UI/BodyScroll";

class MovingSafelyLM2Screen extends Component {

    render() {  
        return (
            <View style={styles.container}>
                <BodyScroll style={{flexGrow: 50}}>
                    <HeadingText>
                        Assisted Transfer to the Bathtub
                    </HeadingText>
                    <MainText> 
                    • Transfer is made toward weaker side, so when you return from the tub, you move with your stronger side first. A sliding board may help lessen risk of falling.
                        Abledata.com lists largest collection of adaptable equipment – offering information, but do not sell products.  
                    • Use a chair, same height as bath chair, outside tub. Grab hold of a safety bar to lift to a sitting position in the tub, or a helper places you on bath chair.
                    • If you are a wheelchair user, lock both brakes, placed close as possible to bath chair, while a helper holds the chair.     
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

export default MovingSafelyLM2Screen;