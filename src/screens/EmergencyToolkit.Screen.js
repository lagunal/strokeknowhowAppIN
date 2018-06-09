import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Image,
  } from 'react-native';

//import Footer from '../components/Footer';
import HeadingText from '../components/UI/HeadingText';
import MainText from "../components/UI/MainText";
import Button from "../components/UI/Button";
import BodyScroll from "../components/UI/BodyScroll";
import ajax from '../ajax';

class EmergencyToolkit extends Component {
  
    async componentDidMount() {
      const emergency = await ajax.fetchEmergency();
      console.log(emergency.hospital1);
    }

    render() {
        return (
          <View style={styles.container}>
            <BodyScroll> 

                <MainText>
                  <HeadingText>
                  Emergency Toolkit
                  </HeadingText>
                </MainText>  
                              
            </BodyScroll>                    

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

  });

  

export default EmergencyToolkit;