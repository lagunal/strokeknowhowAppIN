import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

import MainText from "../../UI/MainText";

const MedicationRow = (props) => {

    handlePress = () => {
        props.onItemPress(props, props.keyId);
    }

    return(
        <TouchableOpacity onPress={this.handlePress}>
            <View style={{backgroundColor: props.backgroundColorTitle}}>
                <MainText style={styles.label}>{props.title}</MainText>
            </View>
            <View style={{backgroundColor: props.backgroundColor}}>    

                  <View style={styles.item}>    
                      <MainText>{props.label1}</MainText>
                      <MainText style={styles.label}>{props.name1}</MainText>
                  </View>
                  <View style={styles.item}>    
                      <MainText>{props.label2}</MainText>
                      <MainText style={styles.label}>{props.name2}</MainText>
                  </View>
                  {props.label3 &&
                  <View style={styles.item}>    
                      <MainText>{props.label3}</MainText>
                      <MainText style={styles.label}>{props.name3}</MainText>
                  </View>}
                  
                  {props.label4 &&
                  <View style={styles.item}>    
                    <MainText>{props.label4}</MainText>
                    <MainText style={styles.label}>{props.name4}</MainText>
                  </View>}
                
            </View>
        </TouchableOpacity>
    )

}

const styles = StyleSheet.create({

    label: {
        fontWeight: 'bold',
        
    },
    item: {
        flex: 1,
        flexDirection: 'row',
    }
});

export default MedicationRow;

