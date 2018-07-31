import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Image,
    ActivityIndicator,
    AsyncStorage
  } from 'react-native';

import HeadingText from '../../components/UI/HeadingText';
import MainText from "../../components/UI/MainText";
import BodyScroll from "../../components/UI/BodyScroll";

import MedicationRow from "../../components/Toolkits/Medications/MedicationRow";
import MedicationDetail from "../../components/Toolkits/Medications/MedicationDetail"

import SubHeadingText from '../../components/UI/SubHeadingText';

import jsonData from '../../assets/json/medicationsToolkit.json'; //json used for first time toolkit.
import ajax from '../../ajax/ajax';

const logoImage = require('../../assets/logo-header.jpg');

class MedicationsToolkit extends Component {

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
          const data = await ajax.getToolkit(this.state.user.id, 'medication');
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
                labelMedicine: item.labelMedication,
                nameMedicine: item.medication,
                labelDose: item.labelDose,
                dose: item.dose,
                labelMorning: (item.labelMorning) ? item.labelMorning : '',
                morning: (item.morning) ? item.morning : '',
                labelNoon: (item.labelNoon) ? item.labelNoon : '',
                noon: (item.noon) ? item.noon : '',
                labelAfternoon: (item.labelAfternoon) ? item.labelAfternoon : '',
                afternoon: (item.afternoon) ? item.afternoon : '',
                labelEvening: (item.labelEvening) ? item.labelEvening : '',
                evening: (item.evening) ? item.evening : '',
                labelBedtime: (item.labelBedtime) ? item.labelBedtime : '',
                bedtime: (item.bedtime) ? item.bedtime : '',                                
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

    //loop for rendering the medicines row of the toolkits using MedicationRow component
    renderMedications(times,labelDay) {
      const medicines = [];
      let background = '';
      for (let i=1; i <= times; i++) {
          background = (i%2 == 0) ? 'white' : 'yellow';
          medicines.push(<MedicationRow 
                            labelMedication='Medicine'
                            medication={this.state.data['medicine' + labelDay + i]} 
                            labelDose='Dose'
                            dose={this.state.data['dose' + labelDay + i]} 
                            labelMorning='morning'
                            morning={this.state.data['morning' + labelDay + i]} 
                            labelNoon='noon'
                            noon={this.state.data['noon' + labelDay + i]} 
                            labelAfternoon='afternoon'
                            afternoon={this.state.data['afternoon' + labelDay + i]} 
                            labelEvening='evening'
                            evening={this.state.data['evening' + labelDay + i]} 
                            labelBedtime='bedtime'
                            bedtime={this.state.data['bedtime' + labelDay + i]} 

                            keyId={['medicine' + labelDay + i ,
                                    'dose' + labelDay + i, 
                                    'morning' + labelDay + i,
                                    'noon' + labelDay + i,
                                    'afternoon' + labelDay + i,
                                    'evening' + labelDay + i,
                                    'bedtime' + labelDay + i
                                  ]}
                            onItemPress={this.setCurrentItem}
                            backgroundColor={background}/>);
      }
      return medicines;
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
               <MedicationDetail item={this.state.currentItem} 
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
            <View >
                <Image source={logoImage} style={styles.logoImage} resizeMode='contain'/>
                <MainText><HeadingText>MEDICATIONS TOOLKIT</HeadingText></MainText>
                <View style={styles.titleWrap}> 
                  <MainText><SubHeadingText style={styles.titleDay}>MONDAY</SubHeadingText></MainText>
                </View>
            </View>

            <View style={{flex: 1}}>
                    
                    {this.renderMedications(5, 'Monday')}

                  <View style={styles.titleWrap}>
                      <MainText><SubHeadingText style={styles.titleDay}>TUESDAY</SubHeadingText></MainText>
                  </View>

                    {this.renderMedications(5, 'Tuesday')}

                  <View style={styles.titleWrap}>
                      <MainText><SubHeadingText style={styles.titleDay}>WEDNESDAY</SubHeadingText></MainText>
                  </View>

                    {this.renderMedications(5, 'Wednesday')}

                  <View style={styles.titleWrap}>
                      <MainText><SubHeadingText style={styles.titleDay}>THURSDAY</SubHeadingText></MainText>
                  </View>

                    {this.renderMedications(5, 'Thursday')}

                  <View style={styles.titleWrap}>
                      <MainText><SubHeadingText style={styles.titleDay}>FRIDAY</SubHeadingText></MainText>
                  </View>
                    
                    {this.renderMedications(5, 'Friday')}

                  <View style={styles.titleWrap}>
                      <MainText><SubHeadingText style={styles.titleDay}>SATURDAY</SubHeadingText></MainText>
                  </View>

                    {this.renderMedications(5, 'Saturday')}

                  <View style={styles.titleWrap}>
                      <MainText><SubHeadingText style={styles.titleDay}>SUNDAY</SubHeadingText></MainText>
                  </View>

                    {this.renderMedications(5, 'Sunday')}
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
     titleWrap: {
       backgroundColor: '#1749FF',
     },
     titleDay: {
       color: 'white',
     }

 });

  

export default MedicationsToolkit;