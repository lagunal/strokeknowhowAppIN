import React, { Component } from 'react';
import {
    StyleSheet,
    View,
  } from 'react-native';


import MainText from "../components/UI/MainText";
import BodyScroll from "../components/UI/BodyScroll";
import LegendText from '../components/UI/LegendText';
import ImageContainer from "../components/UI/ImageContainer";

class BrainBodyScreen extends Component {
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
              screen: "StrokeApp.EmergencyScreen",
              title: "Emergency",
          });
        }
      }  
    }
    
    render() {
        return (
          <View style={styles.container}>
            <BodyScroll>

            <ImageContainer src={require('../assets/brain-body.png')} />

            <MainText>
                My doctor told me research provesthat after a stroke, when there is injury to an area of the brain, doing tasks helps the healing.  
            </MainText>
            <MainText style={{color: 'red'}}>    
                For six months, I used both my weaker and strong hand, repeated it several times. I washed my kitchen window, set the table, sorted laundry. 
            </MainText>
            <MainText style={{color: 'red'}}>    
                My goal was for my right hand to open and the fingers to move. I saw no difference, but I kept at it. 
                One morning I reached for a cup for my coffee, and suddenly fingers in my right weaker hand, slowly opened. I began to cry, then kept moving my fingers. 
            </MainText>

            <LegendText style={{color: 'red'}}>
                -- Madeline, Stuttgart, Germany 
            </LegendText>

            <MainText>
                Add your ideas of tasks using both hands, repeating several times. 
            </MainText>

            <MainText>
            {`\u2022`} Fold, open, re-fold items: paper napkins, washcloths, clothing. Sort items by color, size.
            </MainText>

            <MainText>
            {`\u2022`} Cut/peel vegetables, fruit. Polish silverware: Wash dishes. Place cans on a shelf.
            </MainText>

            <MainText>
            {`\u2022`} Button/Unbutton shirt. Zip up a jacket. 
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

  

export default BrainBodyScreen;