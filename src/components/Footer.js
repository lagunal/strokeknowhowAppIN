import React, { Component } from 'react';

import {
    StyleSheet, Text, View, TouchableOpacity,
  } from 'react-native';
import Icon from "react-native-vector-icons/Ionicons";

class Footer extends Component {

    forwardHandler = () => {
          Promise.all([
            Icon.getImageSource("ios-menu", 30)
          ]).then(sources => {     
              this.props.navigator.push({
                screen: this.props.navFdAction,
                title: this.props.navFdText,
                backButtonHidden: true,
                navigatorButtons: {
                    leftButtons: [
                        {
                            icon: sources[0],
                            title: "Menu",
                            id: "sideDrawerToggle"
                        }
                    ]
                },
              });
        });  
    }
  
    backHandler = () => {
        Promise.all([
          Icon.getImageSource("ios-menu", 30)
        ]).then(sources => {   
            this.props.navigator.push({
              screen: this.props.navBkAction,
              title: this.props.navBkText,
              backButtonHidden: true,
              navigatorButtons: {
                  leftButtons: [
                      {
                          icon: sources[0],
                          title: "Menu",
                          id: "sideDrawerToggle"
                      }
                  ]
              },
            });  
        });  
        //this.props.navigator.pop();
    }

    render() {
        return (
          <View style={[styles.footer, this.props.style]}> 

            <TouchableOpacity style={[styles.buttonFooter, {backgroundColor: '#001E38'}]} onPress={this.backHandler}>
              
                  <Icon size={40} name="ios-arrow-back" color="white" />
                  <Text style={styles.text}>{this.props.navBkText}</Text>

            </TouchableOpacity>
            <TouchableOpacity style={[styles.buttonFooter, {backgroundColor: '#ED7030'}]} onPress={this.forwardHandler}>
         
                  <Text style={styles.text}>{this.props.navFdText}</Text>
                  <Icon size={40} name="ios-arrow-forward" color="white" />
             
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