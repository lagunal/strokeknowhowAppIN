import React, { Component } from 'react';
import {
    StyleSheet,
    View,
  } from 'react-native';


import MainText from "../components/UI/MainText";
import BodyScroll from "../components/UI/BodyScroll";
import HeadingText from '../components/UI/HeadingText';

class GettingOrganizedScreen extends Component {
    constructor(props) {
        super(props);
        this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent);
    }

    static navigatorButtons = {
      rightButtons: [
        {
            icon:  require('../assets/baseline_chevron_right_black_24pt_2x.png'),
            title: "Forward",
            label: "Forward",
            id: "forwardButton"
        }
      ]
    }

    onNavigatorEvent = event => {
      if (event.type === "NavBarButtonPress") {
        if (event.id === "forwardButton") {
          this.props.navigator.push({
              screen: "StrokeApp.BioScreen",
              title: "Florence Weiner Bio",
          });
        }
      }  
    }
    
    render() {
        return (
          <View style={styles.container}>
            <BodyScroll>

            <MainText><HeadingText>Getting Organized</HeadingText></MainText>

            <MainText>
                {`\u2022`} Consider  using  a  school  notebook,  loose-leaf  book,  cell  phone 
                or  computer  –whatever  works  for  you.  Choose  subjects  –  medications,  
                physical  therapy,  speech,  diet,  notes  from  doctors,  therapists. 
                List  names,  phone  numbers,  addresses  of  doctors,  therapists,  helpers,  
                family,  neighbors.  Keep  it  up  on  the  wall  so  it’s  handy.  Save  bills.  
                Organized  into  two  categories:  Paid  and  Unpaid.  
                Keep  receipts  from  health-care-related  purchases,  save  papers  for  insurance  and  tax  purposes.        
            </MainText>

            </BodyScroll>                
          </View>           
        );
    }
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      backgroundColor: 'white',
    },

  });

  

export default GettingOrganizedScreen;