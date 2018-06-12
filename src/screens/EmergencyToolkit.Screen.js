import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Image,
    ActivityIndicator
  } from 'react-native';

//import Footer from '../components/Footer';
import HeadingText from '../components/UI/HeadingText';
import MainText from "../components/UI/MainText";
import Button from "../components/UI/Button";
import BodyScroll from "../components/UI/BodyScroll";
import ajax from '../ajax';

class EmergencyToolkit extends Component {

    constructor(props){
      super(props);
      this.state ={ 
        isLoading: true,
        data: [],
      }
    };

    async componentDidMount() {
      const emergency = await ajax.getEmergency();
      this.setState({
        isLoading: false,
        data: emergency,
      });
      
    }

    render() {

        if(this.state.isLoading){
          return(
            <View style={{flex: 1, padding: 20}}>
              <ActivityIndicator size='large' />
            </View>
          )
        }

        return (
          <View style={styles.container}>


                <MainText>
                  <HeadingText>
                     {this.state.data.hospital1}
                  </HeadingText>
                </MainText>  
                 

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