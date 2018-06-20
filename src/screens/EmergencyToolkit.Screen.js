import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Image,
    ActivityIndicator,
    Text,
    TouchableOpacity
  } from 'react-native';

import HeadingText from '../components/UI/HeadingText';
import MainText from "../components/UI/MainText";
import BodyScroll from "../components/UI/BodyScroll";
import ToolkitMedication from "../components/UI/ToolkitMedication";
import ToolkitContactInfo from "../components/UI/ToolkitContactInfo";

import ajax from '../ajax/ajax';


class EmergencyToolkit extends Component {

    constructor(props){
      super(props);
      this.state ={ 
        isLoading: true,
        data: [],
      }
    };

    async componentDidMount() {
      const data = await ajax.getEmergency();
      this.setState({ 
        isLoading: false, 
        data: data,
      });
    
    }

    //loop for rendering the medicines of the toolkits using ToolkitMedication UI component
    renderMedicines() {
      const medicines = [];
      let background = '';
      let times = 8; //times for repeat the rendering
      for (let i=1; i <= times; i++) {
          background = (i%2 == 0) ? 'white' : 'lightgrey';
          medicines.push(<ToolkitMedication 
                            medication={this.state.data['medication' + i]} 
                            dosage={this.state.data['medication_dosage' + i]} 
                            purpose={this.state.data['medication_purpose' + i]} 
                            backgroundColor={background}/>);
      }
      return medicines;
    }
    //function to navigate to the detail information
    detailHandler() {
      //alert(this.props.navigator);
        // this.props.navigator.push({
        //    screen: "StrokeApp.LearnMoreScreen",
        //    title: "Edit Information",
        // });   
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
          <BodyScroll>
            <View >
                <MainText><HeadingText>MATION STATION</HeadingText></MainText>
                <MainText><HeadingText>ESENTIAL INFORMATION</HeadingText></MainText>
            </View>

            <View style={{flex: 1}}>
                  
                  <ToolkitContactInfo 
                    label='Hospital'
                    name={this.state.data.hospital1}
                    labelContact='Phone' 
                    phone={this.state.data.hospital1_phone} 
                    backgroundColor={'lightgray'}
                    onPress={this.detailHandler}/>

                  <ToolkitContactInfo 
                    label='Doctor'
                    name={this.state.data.doctor1}
                    labelContact='Phone' 
                    phone={this.state.data.doctor1_phone} 
                    backgroundColor={'white'}/>

                  <ToolkitContactInfo 
                    label='Doctor'
                    name={this.state.data.doctor2}
                    labelContact='Phone' 
                    phone={this.state.data.doctor2_phone} 
                    backgroundColor={'lightgray'}/>

                  <ToolkitContactInfo 
                    label='Dentist'
                    name={this.state.data.dentist1}
                    labelContact='Phone' 
                    phone={this.state.data.dentist1_phone} 
                    backgroundColor={'white'}/>

                  <ToolkitContactInfo 
                    label='Pharmacy'
                    name={this.state.data.pharmacy1}
                    labelContact='Phone' 
                    phone={this.state.data.pharmacy1_phone} 
                    backgroundColor={'lightgray'}/>

                  <ToolkitContactInfo 
                    label='Health Insurance Plan'
                    name={this.state.data.insurance1}
                    labelContact='Phone' 
                    phone={this.state.data.insurance1_phone} 
                    backgroundColor={'white'}/>

                  <ToolkitContactInfo 
                    label='Insurance Policy Number'
                    name={this.state.data.insurance2}
                    labelContact='Phone' 
                    phone={this.state.data.insurance2_phone} 
                    backgroundColor={'lightgray'}/>

                  <View style={{flex: 1, flexDirection: 'row', backgroundColor: 'white'}}>    
                    
                    <View style={{flex: 1}}>   
                      <MainText>Medical conditions</MainText>
                      <Text>{this.state.data.condition1}</Text>
                    </View>

                  </View>

                  <View >
                      <MainText><HeadingText>CONTACT PHONE NUMBERS</HeadingText></MainText>
                  </View>

                  <ToolkitContactInfo 
                    label='Contact person'
                    name={this.state.data.contact1}
                    labelContact='Phone' 
                    phone={this.state.data.contact1_phone} 
                    backgroundColor={'lightgray'}/>

                  <ToolkitContactInfo 
                    label='Contact person'
                    name={this.state.data.contact2}
                    labelContact='Phone' 
                    phone={this.state.data.contact2_phone} 
                    backgroundColor={'white'}/>

                  <ToolkitContactInfo 
                    label='Contact person'
                    name={this.state.data.contact3}
                    labelContact='Phone' 
                    phone={this.state.data.contact3_phone} 
                    backgroundColor={'lightgray'}/>


                  <View>
                      <MainText><HeadingText>MEDICINES</HeadingText></MainText>
                  </View>

                    {this.renderMedicines()}

                  <View style={{flex: 1, flexDirection: 'row', backgroundColor: 'lightgray'}}>    
                    
                    <View style={{flex: 1}}>   
                      <MainText>Allergies to Medications</MainText>
                      <Text>{this.state.data.allergies1}</Text>
                    </View>

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
       //alignItems: 'center',
       justifyContent: 'flex-start',
       backgroundColor: 'white',
     },

   });

  

export default EmergencyToolkit;