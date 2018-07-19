import React, { Component } from 'react';
import {
    StyleSheet,
    View,
  } from 'react-native';


import MainText from "../components/UI/MainText";
import BodyScroll from "../components/UI/BodyScroll";
import ImageContainer from "../components/UI/ImageContainer";

class BioScreen extends Component {
    constructor(props) {
        super(props);
    }


    render() {
        return (
          <View style={styles.container}>
            <BodyScroll>

            <ImageContainer src={require('../assets/bio.jpg')} />    

            <MainText>
                A long-time activist in the disability rights movement, and author of more than a dozen books, Florence Weiner has interviewed hundreds of men and women and their families touched by stroke. 
                She shares their advice here, and at StrokeKnowHow.org: A worldwide stroke community based on the belief that we learn best from one another.    
            </MainText>

            <MainText>
                Every stroke is unique. So is the path we choose to find our way back. 
                If you find answers, motivation, inspiration and hope, this work will have fulfilled its purpose.        
            </MainText>

            <MainText>
                It is dedicated to Richard, brightest light of all.
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

  

export default BioScreen;