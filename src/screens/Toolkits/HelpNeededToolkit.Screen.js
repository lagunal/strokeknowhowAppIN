import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Image,
    Text,
    ActivityIndicator,
    AsyncStorage,
    TouchableOpacity,
  } from 'react-native';

import HeadingText from '../../components/UI/HeadingText';
import MainText from "../../components/UI/MainText";
import BodyScroll from "../../components/UI/BodyScroll";

import HelpNeededRow from "../../components/Toolkits/HelpNeeded/HelpNeededRow";
import HelpNeededDetail from "../../components/Toolkits/HelpNeeded/HelpNeededDetail"

import SubHeadingText from '../../components/UI/SubHeadingText';

import jsonData from '../../assets/json/helpNeededToolkit.json'; //json used for first time toolkit.
import ajax from '../../ajax/ajax';

const logoImage = require('../../assets/logo-header.jpg');

class HelpNeedeToolkit extends Component {

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
          const data = await ajax.getToolkit(this.state.user.id, 'help_needed');
          var dataToolkit = [];
          if (Object.keys(data).length === 0) {//if toolkit is new (no data from fetch)
             dataToolkit = jsonData; //assign "empty" json to data for toolkit
          } else {
            dataToolkit = data; //assign existing data from toolkit
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
                title: item.title,
                label1: item.label1,
                name1: item.name1,
                label2: item.label2,
                name2: item.name2,
                label3: item.label3,
                name3: item.name3,
                label4: item.label4,
                name4: item.label4,                           
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

    //function for rendering the rows of the toolkits using HelpNeededRow component
    renderItems(day) {
        const items = [];
        items.push(
        <HelpNeededRow 
            title={'Personal Care'}
            label1={'Nursing Care'} name1={this.state.data['personal-care-' + day + '1']}
            label2={'Medications'} name2={this.state.data['personal-care-' + day + '2']}
            label3={'Physical Therapy'} name3={this.state.data['personal-care-' + day + '3']}
            keyId={['personal-care-' + day + '1', 'personal-care-' + day + '2','personal-care-' + day + '3']}
            onItemPress={this.setCurrentItem}
            backgroundColor={'lightgray'} backgroundColorTitle={'#1749FF'}
        />);
        items.push(
        <HelpNeededRow 
            title={'House Hold'}
            label1={'Shopping'} name1={this.state.data['household-' + day + '1']}
            label2={'Cooking'} name2={this.state.data['household-' + day + '2']}
            label3={'Housekeeping'} name3={this.state.data['household-' + day + '3']}
            label4={'Laundry'} name4={this.state.data['household-' + day + '4']}
            keyId={['household-' + day + '1', 'household-' + day + '2','household-' + day + '3','household-' + day + '4']}
            onItemPress={this.setCurrentItem}
            backgroundColor={'white'} backgroundColorTitle={'#ED7030'}
        />);               
        items.push(    
        <HelpNeededRow 
            title={'Schedule'}
            label1={'Doctor Visits'} name1={this.state.data['schedule-' + day + '1']}
            label2={'Therapist Visits'} name2={this.state.data['schedule-' + day + '2']}
            keyId={['schedule-' + day + '1', 'schedule-' + day + '2']}
            onItemPress={this.setCurrentItem}
            backgroundColor={'lightgray'} backgroundColorTitle={'yellow'}
        />);
        
        return items;
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
                                 />
            </View>
          )
        }

        return (
          <View style={styles.container}>
          <BodyScroll>
            <View>
                <Image source={logoImage} style={styles.logoImage} resizeMode='contain'/>
                <MainText><HeadingText>HELP NEEDED TOOLKIT</HeadingText></MainText>
            </View>

            <View style={{flex: 1}}>
                  <View>
                      <MainText style={styles.titleDay}>MONDAY</MainText>
                  </View>
                  
                      {this.renderItems('monday')}

                  <View >
                      <MainText><SubHeadingText>TUESDAY</SubHeadingText></MainText>
                  </View>

                      {this.renderItems('tuesday')}

                  <View>
                      <MainText><SubHeadingText>WEDNESDAY</SubHeadingText></MainText>
                  </View>

                      {this.renderItems('wednesday')}

                  <View>
                      <MainText><SubHeadingText>THURSDAY</SubHeadingText></MainText>
                  </View>

                      {this.renderItems('thursday')}

                  <View>
                      <MainText><SubHeadingText>FRIDAY</SubHeadingText></MainText>
                  </View>
                    
                      {this.renderItems('friday')}

                  <View>
                      <MainText><SubHeadingText>SATURDAY</SubHeadingText></MainText>
                  </View>

                      {this.renderItems('saturday')}

                  <View>
                      <MainText><SubHeadingText>SUNDAY</SubHeadingText></MainText>
                  </View>

                      {this.renderItems('sunday')}

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
     titleDay: {
       fontWeight: 'bold',
       alignSelf: 'center',
     },
     label: {
       fontWeight: 'bold',
     },
     logoImage: {
        width: '100%',
     },
 });

  

export default HelpNeedeToolkit;