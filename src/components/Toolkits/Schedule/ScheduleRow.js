import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

import { heightPercentageToDP as hp, widthPercentageToDP as wp} from 'react-native-responsive-screen';

import MainText from "../../UI/MainText";

const ScheduleRow = (props) => {

    handlePress =() => {
        props.onItemPress(props, props.keyId);
    };

    return(
                <TouchableOpacity style={styles.cell} onPress={this.handlePress}>
                
                        <Text style={[styles.titleHour, {fontWeight: 'bold'}]}>{props.time} </Text>
                        <Text style={styles.titleHour}>{props.activity}</Text>

                </TouchableOpacity>
    );

}

const styles = StyleSheet.create({

    titleHour: {
      fontSize: hp('2%'),

    },
    cell: {
      flex: 1,
      //borderColor: '#ccc',
      borderColor: 'black',
      borderWidth: 1,
      height: hp('20%'),
    },

});


export default ScheduleRow;

