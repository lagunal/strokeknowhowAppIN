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

import PhysicalRow from "../../components/Toolkits/Physical/PhysicalRow";
import PhysicalDetail from "../../components/Toolkits/Physical/PhysicalDetail";

import SubHeadingText from '../../components/UI/SubHeadingText';

import jsonData from '../../assets/json/physicalToolkit.json'; //json used for first time toolkit.
import ajax from '../../ajax/ajax';

class PhysicalToolkit extends Component {

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
          const data = await ajax.getToolkit(this.state.user.id, 'physical');
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
                labelExercise: item.labelExercise,
                exercise: item.exercise,
                labelTime: item.labelTime,
                time1: item.time1,
                time2: item.time2,
                labelPulse1: item.labelPulse1,
                labelPulse2: item.labelPulse2,
                pulse1: item.pulse1,
                pulse2: item.pulse2,
                labelGoals: item.labelGoals,
                goals1: item.goals1,
                goals2: item.goals2,
                goals3: item.goals3                            
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
    renderItem(labelDay) {
      const item = [];
          item.push(<PhysicalRow 
                            labelExercise='Exercise' 
                            exercise={this.state.data[labelDay + '_exercise']} 
                            labelTime='Time'
                            time1={this.state.data[labelDay + '_time1']} 
                            time2={this.state.data[labelDay + '_time2']} 
                            labelPulse1={'Pulse during exercise'} 
                            labelPulse2={'Pulse after exercise'}
                            pulse1={this.state.data[labelDay + '_pulse_during']} 
                            pulse2={this.state.data[labelDay + '_pulse_after']}
                            labelGoals={'Personal goals'}
                            goals1={this.state.data[labelDay + '_goals1']}
                            goals2={this.state.data[labelDay + '_goals2']}
                            goals3={this.state.data[labelDay + '_goals3']}

                            keyId={[labelDay + '_exercise',
                                    labelDay + '_time1',
                                    labelDay + '_time2',
                                    labelDay + '_pulse_during',
                                    labelDay + '_pulse_after',
                                    labelDay + '_goals1',
                                    labelDay + '_goals2',
                                    labelDay + '_goals3'
                                ]}
                            onItemPress={this.setCurrentItem}
                            backgroundColor={'lightgrey'}/>);
      return item;
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
               <PhysicalDetail item={this.state.currentItem} 
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
                <MainText><HeadingText>PHYSICAL THERAPY</HeadingText></MainText>
                <MainText><SubHeadingText>MONDAY</SubHeadingText></MainText>
            </View>

            <View style={{flex: 1}}>
                    
                    {this.renderItem('monday')}

                  <View >
                      <MainText><SubHeadingText>TUESDAY</SubHeadingText></MainText>
                  </View>
                    
                    {this.renderItem('tuesday')}

                  <View>
                      <MainText><SubHeadingText>WEDNESDAY</SubHeadingText></MainText>
                  </View>

                    {this.renderItem('wednesday')}

                  <View>
                      <MainText><SubHeadingText>THURSDAY</SubHeadingText></MainText>
                  </View>

                    {this.renderItem('thursday')}

                  <View>
                      <MainText><SubHeadingText>FRIDAY</SubHeadingText></MainText>
                  </View>
                    
                    {this.renderItem('friday')}

                  <View>
                      <MainText><SubHeadingText>SATURDAY</SubHeadingText></MainText>
                  </View>

                    {this.renderItem('saturday')}

                  <View>
                      <MainText><SubHeadingText>SUNDAY</SubHeadingText></MainText>
                  </View>

                    {this.renderItem('sunday')}
                   
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

 });

  

export default PhysicalToolkit;