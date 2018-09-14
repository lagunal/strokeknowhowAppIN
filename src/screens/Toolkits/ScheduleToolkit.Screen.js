import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Image,
    Text,
    ActivityIndicator,
    AsyncStorage,
    TouchableOpacity
  } from 'react-native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp} from 'react-native-responsive-screen';

import HeadingText from '../../components/UI/HeadingText';
import MainText from "../../components/UI/MainText";
import BodyScroll from "../../components/UI/BodyScroll";

import ScheduleRow from "../../components/Toolkits/Schedule/ScheduleRow";
import ScheduleDetail from "../../components/Toolkits/Schedule/ScheduleDetail"

import jsonData from '../../assets/json/scheduleToolkit.json'; //json used for first time toolkit.
import ajax from '../../ajax/ajax';

const logoImage = require('../../assets/logo-header.jpg');

class ScheduleToolkit extends Component {
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
          const data = await ajax.getToolkit(this.state.user.id, 'schedule');
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
    setCurrentItem = (item,  keyId) => {
        this.setState({
              currentItem: {
                time: item.time,  
                activity: item.activity,  
              },
              keyId: keyId
        });
    }

    //function that comes from child component ToolkitItemDetail, to list all items
    saveData = () => {
       this.setState({
          currentItem: null,
        })
    }

    //function for rendering the rows of the toolkits using HelpNeededRow component
    renderItems(times, day) {
        const items = [];
        for (let i=1; i <= times; i++) {
            items.push(
                <ScheduleRow
                    time={this.state.data[day + 'Time' + i]}
                    activity={this.state.data[day + 'Activity' + i]}
                    keyId={[`${day}Time${i}`,
                            `${day}Activity${i}`
                    ]}
                    onItemPress={this.setCurrentItem}
                />
            );
        }
        return items;
    }

    render() {
        const background = '#bad2ef';

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
               <ScheduleDetail item={this.state.currentItem} 
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
                  <MainText><HeadingText>Interactive Weekly Schedule Toolkit</HeadingText></MainText>
                
                    <View style={[styles.containerGrid,{backgroundColor: background}]}> 
                        <View style={[styles.cell, {backgroundColor: 'white'}]}>
                            <Text style={styles.titleMed}>Monday</Text>
                        </View>
                        {this.renderItems(6, 'monday')}
                    </View>

                    <View style={[styles.containerGrid,{backgroundColor: 'white'}]}> 
                        <View style={[styles.cell, {backgroundColor: 'white'}]}>
                            <Text style={styles.titleMed}>Tuesday</Text>
                        </View>
                        {this.renderItems(6, 'tuesday')}
                    </View>

                    <View style={[styles.containerGrid,{backgroundColor: background}]}> 
                        <View style={[styles.cell, {backgroundColor: 'white'}]}>
                            <Text style={styles.titleMed}>Wednesday</Text>
                        </View>
                        {this.renderItems(6, 'wednesday')}
                    </View>

                    <View style={[styles.containerGrid,{backgroundColor: 'white'}]}> 
                        <View style={[styles.cell, {backgroundColor: 'white'}]}>
                            <Text style={styles.titleMed}>Thursday</Text>
                        </View>
                        {this.renderItems(6, 'thursday')}
                    </View>  

                    <View style={[styles.containerGrid,{backgroundColor: background}]}> 
                        <View style={[styles.cell, {backgroundColor: 'white'}]}>
                            <Text style={styles.titleMed}>Friday</Text>
                        </View>
                        {this.renderItems(6, 'friday')}
                    </View>

                    <View style={[styles.containerGrid,{backgroundColor: 'white'}]}> 
                        <View style={[styles.cell, {backgroundColor: 'white'}]}>
                            <Text style={styles.titleMed}>Saturday</Text>
                        </View>
                        {this.renderItems(6, 'saturday')}
                    </View>

                    <View style={[styles.containerGrid,{backgroundColor: background}]}> 
                        <View style={[styles.cell, {backgroundColor: 'white'}]}>
                            <Text style={styles.titleMed}>Sunday</Text>
                        </View>
                        {this.renderItems(6, 'sunday')}
                    </View>

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
    titleMed: {
        fontSize: hp('2%'),
        paddingVertical: hp('9%')
     
    },
    containerGrid: {
      //backgroundColor: '#1749FF',
      flex: 1,
      flexDirection: 'row',
      flexWrap: 'wrap',
    },
    cell: {
      flex: 1,
      borderColor: '#ccc',
      borderWidth: 1,
      height: hp('20%'),
      width: wp('9.5%'),
    },

});

  

export default ScheduleToolkit;