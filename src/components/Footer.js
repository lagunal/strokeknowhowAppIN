import React, { Component } from 'react';

import {
    StyleSheet, Text, View, TouchableOpacity,
  } from 'react-native';
import Icon from "react-native-vector-icons/Ionicons";

class Footer extends Component {

    forwardHandler = () => {
      this.props.navigator.push({
        screen: this.props.navFdAction,
        title: this.props.navFdText,
        backButtonHidden: true,
      });  
    }

    backHandler = () => {
      this.props.navigator.push({
        screen: this.props.navBkAction,
        title: this.props.navBkText,
        backButtonHidden: true,
      });  
    }

    render() {
        return (
          <View style={[styles.footer]}> 

            <TouchableOpacity style={[styles.buttonFooter, {backgroundColor: '#001E38'}]} onPress={this.backHandler}>
              
                  <Icon size={40} name="ios-arrow-dropleft" color="white" />
                  <Text style={styles.text}>{this.props.navBkText}</Text>
            
            </TouchableOpacity>
            <TouchableOpacity style={[styles.buttonFooter, {backgroundColor: '#ED7030'}]} onPress={this.forwardHandler}>
         
                  <Text style={styles.text}>{this.props.navFdText}</Text>
                  <Icon size={40} name="ios-arrow-dropright" color="white" />
             
            </TouchableOpacity>

          </View>  
        );
    }
}


const styles = StyleSheet.create({
    footer: {
      flexGrow: 15,
      //width: '100%',
      flex: 1,
      flexDirection: 'row',
      //justifyContent: 'flex-start',
      alignItems: 'center',
    },
    buttonFooter: {
      flex: 1,
      height: 80,
      //width: 300,
      //padding: 40,
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center'      
    },
    text: {
      fontSize: 20,
      color: 'white',
      fontWeight: 'bold',
    }, 
  });

export default Footer;