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

import HeadingText from '../../components/UI/HeadingText';
import MainText from "../../components/UI/MainText";
import BodyScroll from "../../components/UI/BodyScroll";

import ScheduleRow from "../../components/Toolkits/Schedule/ScheduleRow";
import ScheduleDetail from "../../components/Toolkits/Schedule/ScheduleDetail"

import jsonData from '../../assets/json/scheduleToolkit.json'; //json used for first time toolkit.
import ajax from '../../ajax/ajax';

const logoImage = require('../../assets/logo-header.jpg');

class ScheduleToolkit extends Component {

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
                label: item.label,  
                name: item.name,   
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
    renderItems(times, day, label) {
        const items = [];
        let background = '';
        for (let i=1; i <= times; i++) {
            background = (i%2 == 0) ? 'white' : 'lightgrey';
            items.push(
                <ScheduleRow
                    label={label} 
                    name={this.state.data[day + i]}
                    keyId={[day + i]}
                    onItemPress={this.setCurrentItem}
                    backgroundColor={background}
                />
            );
        }
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
               <ScheduleDetail item={this.state.currentItem} 
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
                <MainText><HeadingText>WEEKLY SCHEDULE</HeadingText></MainText>
            </View>

            <View style={{flex: 1}}>
                  <View>
                      <MainText style={styles.titleDay}>MONDAY</MainText>
                  </View>

                        <View style={style=styles.labelMorning}>
                                <MainText style={styles.label}>MORNING</MainText>
                        </View>
                            {this.renderItems(5,'morning_monday','Monday morning')}

                        <View style={style=styles.labelAfternoon}>
                                <MainText style={styles.label}>AFTERNOON</MainText>
                        </View>
                            {this.renderItems(5,'afternoon_monday','Monday afternoon')}

                        <View style={style=styles.labelEvening}>
                                <MainText style={styles.label}>EVENING</MainText>
                        </View>
                            {this.renderItems(5,'evening_monday','Monday evening')}

                  <View >
                        <MainText style={styles.titleDay}>TUESDAY</MainText>
                  </View>

                        <View style={style=styles.labelMorning}>
                                <MainText style={styles.label}>MORNING</MainText>
                        </View>
                            {this.renderItems(5,'morning_tuesday','Tuesday morning')}

                        <View style={style=styles.labelAfternoon}>
                                <MainText style={styles.label}>AFTERNOON</MainText>
                        </View>
                            {this.renderItems(5,'afternoon_tuesday','Tuesday afternoon')}

                        <View style={style=styles.labelEvening}>
                                <MainText style={styles.label}>EVENING</MainText>
                        </View>
                            {this.renderItems(5,'evening_tuesday','Tuesday evening')}

                  <View>
                        <MainText style={styles.titleDay}>WEDNESDAY</MainText>
                  </View>

                         <View style={style=styles.labelMorning}>
                                <MainText style={styles.label}>MORNING</MainText>
                        </View>
                            {this.renderItems(5,'morning_wednesday','Wednesday morning')}

                        <View style={style=styles.labelAfternoon}>
                                <MainText style={styles.label}>AFTERNOON</MainText>
                        </View>
                            {this.renderItems(5,'afternoon_wednesday','Wednesday afternoon')}

                        <View style={style=styles.labelEvening}>
                                <MainText style={styles.label}>EVENING</MainText>
                        </View>
                            {this.renderItems(5,'evening_wednesday','Wednesday evening')}

                  <View>
                        <MainText style={styles.titleDay}>THURSDAY</MainText>
                  </View>

                        <View style={style=styles.labelMorning}>
                                <MainText style={styles.label}>MORNING</MainText>
                        </View>
                            {this.renderItems(5,'morning_thursday','Thursday morning')}

                        <View style={style=styles.labelAfternoon}>
                                <MainText style={styles.label}>AFTERNOON</MainText>
                        </View>
                            {this.renderItems(5,'afternoon_thursday','Thursday afternoon')}

                        <View style={style=styles.labelEvening}>
                                <MainText style={styles.label}>EVENING</MainText>
                        </View>
                            {this.renderItems(5,'evening_thursday','Thursday evening')}

                  <View>
                        <MainText style={styles.titleDay}>FRIDAY</MainText>
                  </View>
                    
                  <View style={style=styles.labelMorning}>
                                <MainText style={styles.label}>MORNING</MainText>
                        </View>
                            {this.renderItems(5,'morning_friday','Friday morning')}

                        <View style={style=styles.labelAfternoon}>
                                <MainText style={styles.label}>AFTERNOON</MainText>
                        </View>
                            {this.renderItems(5,'afternoon_friday','Friday afternoon')}

                        <View style={style=styles.labelEvening}>
                                <MainText style={styles.label}>EVENING</MainText>
                        </View>
                            {this.renderItems(5,'evening_friday','Friday evening')}

                  <View>
                        <MainText style={styles.titleDay}>SATURDAY</MainText>
                  </View>

                        <View style={style=styles.labelMorning}>
                                <MainText style={styles.label}>MORNING</MainText>
                        </View>
                            {this.renderItems(5,'morning_saturday','Saturday morning')}

                        <View style={style=styles.labelAfternoon}>
                                <MainText style={styles.label}>AFTERNOON</MainText>
                        </View>
                            {this.renderItems(5,'afternoon_saturday','Saturday afternoon')}

                        <View style={style=styles.labelEvening}>
                                <MainText style={styles.label}>EVENING</MainText>
                        </View>
                            {this.renderItems(5,'evening_saturday','Saturday evening')}

                  <View>
                        <MainText style={styles.titleDay}>SUNDAY</MainText>
                  </View>

                         <View style={style=styles.labelMorning}>
                                <MainText style={styles.label}>MORNING</MainText>
                        </View>
                            {this.renderItems(5,'morning_sunday','Sunday morning')}

                        <View style={style=styles.labelAfternoon}>
                                <MainText style={styles.label}>AFTERNOON</MainText>
                        </View>
                            {this.renderItems(5,'afternoon_sunday','Sunday afternoon')}

                        <View style={style=styles.labelEvening}>
                                <MainText style={styles.label}>EVENING</MainText>
                        </View>
                            {this.renderItems(5,'evening_sunday','Sunday evening')}

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
       fontSize: 14,
     },
     labelMorning: {
        backgroundColor: 'yellow',
     },
     labelAfternoon: {
        backgroundColor: '#ED7030',
     },
     labelEvening: {
        backgroundColor: '#1749FF',
     },
     logoImage: {
        width: '100%',
     },
 });

  

export default ScheduleToolkit;