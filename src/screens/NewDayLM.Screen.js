import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Image,
  } from 'react-native';

import Footer from '../components/Footer';
import MainText from "../components/UI/MainText";
import BodyScroll from "../components/UI/BodyScroll";

class NewDayLMScreen extends Component {

    render() {
        return (
          <View style={styles.container}>
            <BodyScroll>
                <Image source={require('../assets/newDay.png')} style={styles.image} />
                <MainText>
                By moving slowly, not making abrupt changes in your position, you are less likely to become dizzy. 
                </MainText>
                <MainText>
                • To get started in the morning, you may want to do slow stretches, range-of-motion exercises, and other prescribed exercises in bed, to ease away some of the stiffness experienced after sleep. 
                </MainText>
                <MainText>
                •  Before sitting up in bed, prepare first by rolling from side to side. This will involve both sides of the body. Before moving out of bed, take your time, plan ahead before going, or transferring out of bed into a wheelchair or standing up, in and out of the bathtub or into a car.                     
                </MainText>
                <MainText>
                •Moving slowly, not making abrupt changes, you are less likely to become dizzy.                    
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

  

export default NewDayLMScreen;