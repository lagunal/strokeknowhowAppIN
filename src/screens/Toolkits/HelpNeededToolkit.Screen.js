import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Image,
    Text,
    ActivityIndicator,
    AsyncStorage,
  } from 'react-native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp} from 'react-native-responsive-screen';

import HeadingText from '../../components/UI/HeadingText';
import SubHeadingText from '../../components/UI/SubHeadingText';
import MainText from "../../components/UI/MainText";
import BodyScroll from "../../components/UI/BodyScroll";
import HelpNeededRow from "../../components/Toolkits/HelpNeeded/HelpNeededRow";

import HelpNeededDetail from "../../components/Toolkits/HelpNeeded/HelpNeededDetail"

import jsonData from '../../assets/json/helpNeededToolkit.json'; //json used for first time toolkit.
import ajax from '../../ajax/ajax';

const logoImage = require('../../assets/logo-header.jpg');

class HelpNeedeToolkit extends Component {
    static navigatorButtons = {
        rightButtons: [
            {
            title: 'Save', // for a textual button, provide the button title (label)
            id: 'save', // id for this button, given in onNavigatorEvent(event) to help understand which button was clicked
            //testID: 'e2e_rules', // optional, used to locate this view in end-to-end tests
            //disabled: (this.state.currentItem) ? false : true, // optional, used to disable the button (appears faded and doesn't interact)
            //disableIconTint: true, // optional, by default the image colors are overridden and tinted to navBarButtonColor, set to true to keep the original image colors
            //showAsAction: 'ifRoom', // optional, Android only. Control how the button is displayed in the Toolbar. Accepted valued: 'ifRoom' (default) - Show this item as a button in an Action Bar if the system decides there is room for it. 'always' - Always show this item as a button in an Action Bar. 'withText' - When this item is in the action bar, always show it with a text label even if it also has an icon specified. 'never' - Never show this item as a button in an Action Bar.
            buttonColor: 'white', // Optional, iOS only. Set color for the button (can also be used in setButtons function to set different button style programatically)
            buttonFontSize: 18, // Set font size for the button (can also be used in setButtons function to set different button style programatically)
            buttonFontWeight: '600', // Set font weight for the button (can also be used in setButtons function to set different button style programatically)
            //systemItem: 'save',  
          },
        ]
    };

    constructor(props){
      super(props);
      this.state = { 
        isLoading: true,
        data: [],
        currentItem: null,
        user: [],
      }
    };

    
    //get data from rest API
    async componentDidMount() {
      //get the id from logged user
      const userData = await AsyncStorage.getItem('user');
      this.setState({ user: JSON.parse(userData) });
      try {
          const data = await ajax.getToolkit(this.state.user.id, 'helpNeeded');
          const dataValue = data.value;
          var dataToolkit = [];
          if (dataValue === null) {//if toolkit is new (no data from fetch)
             dataToolkit = jsonData; //assign "empty" json to data for toolkit
          } else {
            dataToolkit = dataValue; //assign existing data from toolkit
          }
          this.setState({ 
            isLoading: false, 
            data: dataToolkit,
          });
      } catch(error) {
        console.log(error);
      }
    
    }

    //function to navigate to the detail information
    setCurrentItem = (item, keyId) => {
        this.setState({
              currentItem: {
                medication: item.medication,
                monday: (item.monday) ? item.monday : false,
                tuesday: (item.tuesday) ? item.tuesday : false,
                wednesday: (item.wednesday) ? item.wednesday : false,
                thursday: (item.thursday) ? item.thursday : false,
                friday: (item.friday) ? item.friday : false,   
                saturday: (item.saturday) ? item.saturday : false,  
                sunday: (item.sunday) ? item.sunday : false,                           
              },
              keyId: keyId,
        });
    }

    //function that comes from child component ToolkitItemDetail, to list all items
    saveData = () => {
       this.setState({
          currentItem: null,
        })
    }

    //loop for rendering the medicines row of the toolkits using RowRender component
    renderHelpers(times) {
        const helpers = [];
        let background = '';
        for (let i=1; i <= times; i++) {
            background = (i%2 == 0) ? '#bad2ef' : 'white';
            helpers.push(<HelpNeededRow 
                            medication={this.state.data['helper' + i]} 
                            monday={this.state.data['monday' + i]} 
                            tuesday={this.state.data['tuesday' + i]} 
                            wednesday={this.state.data['wednesday' + i]} 
                            thursday={this.state.data['thursday' + i]} 
                            friday={this.state.data['friday' + i]} 
                            saturday={this.state.data['saturday' + i]} 
                            sunday={this.state.data['sunday' + i]} 

                            keyId={['helper' + i ,
                                    'monday' + i,
                                    'tuesday' + i,
                                    'wednesday' + i,
                                    'thursday' + i,
                                    'friday' + i,
                                    'saturday' + i,
                                    'sunday' + i
                                    ]}
                            onItemPress={this.setCurrentItem}
                            backgroundColor={background}
                            backgroundColorMedication={'#bad2ef'}
                            />);
        }
        return helpers;
    }
    
  

    render() {

        if(this.state.isLoading){
          return(
            <View style={{flex: 1, padding: 20}}>
              <ActivityIndicator size='large' />
            </View>
          )
        }

        if(this.state.currentItem){
          return(
            <View style={{flex: 1, padding: 20}}>
               <HelpNeededDetail item={this.state.currentItem} 
                                  keyId={this.state.keyId}
                                  data={this.state.data} 
                                  onPress={this.saveData}
                                  userId={this.state.user.id} 
                                  token={this.state.user.token}
                                  navigator={this.props.navigator}
                                 />
            </View>
          )
        }

        return (
            <View style={styles.container}>
            <BodyScroll>
              <View style={{flex: 1}}>
                  {/* <Image source={logoImage} style={styles.logoImage} resizeMode='contain'/> */}
                  <View style={{margin: 20}}>
                      <MainText><SubHeadingText>INTERACTIVE HELP NEEDED TOOLKIT</SubHeadingText></MainText>
                  </View>
                
                  <View style={styles.containerGrid}> 
  
                    <View style={[styles.cell, {flex: 2}]}>
                      <Text style={styles.titleCol}>Help Needed</Text>
                    </View>
                    <View style={styles.cell}> 
                      <Text style={styles.titleCol}>Mo.</Text>
                    </View>
                    <View style={styles.cell}>
                      <Text style={styles.titleCol}>Tu.</Text>
                    </View>
                    <View style={styles.cell}>
                      <Text style={styles.titleCol}>Wed.</Text>
                    </View>
                    <View style={styles.cell}>
                      <Text style={styles.titleCol}>Thu.</Text>
                    </View>
                    <View style={styles.cell}>
                      <Text style={styles.titleCol}>Fri.</Text>
                    </View>
                    <View style={styles.cell}>
                      <Text style={styles.titleCol}>Sa.</Text>
                    </View> 
                    <View style={styles.cell}>
                      <Text style={styles.titleCol}>Sun.</Text>
                    </View>
  
                  </View>
  
                  {this.renderHelpers(18)}
  
              </View>
  
            </BodyScroll>
            </View>          
        );
    }
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'flex-start',
      backgroundColor: 'white',
    },
    logoImage: {
      width: '100%',
    },
    containerGrid: {
      //backgroundColor: '#1749FF',
      flex: 1,
      flexDirection: 'row',
      flexWrap: 'wrap',
    },

    titleCol: {
      color: 'white',
      fontSize: hp('2%'),
      alignSelf: 'center'
    },

    cell: {
      //flex: 1,
      backgroundColor: '#000099',
      //margin: 1,
      borderColor: '#ccc',
      //borderColor: 'black',
      borderWidth: 1,
      height: hp('6%'),
      width: wp('9.5%'),
    },

});

  

export default HelpNeedeToolkit;