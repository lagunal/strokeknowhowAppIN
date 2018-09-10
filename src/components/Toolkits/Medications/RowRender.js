import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity
  } from 'react-native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp} from 'react-native-responsive-screen';
import Icon from "react-native-vector-icons/Ionicons";

IconRender = () => {
    return(
        <Icon style={styles.icon} name="ios-checkbox-outline" size={25} md="ios-checkbox-outline"></Icon>
    );
}


const RowRender = (props) => {
    
    handlePress = () => {
        props.onItemPress(props, props.keyId);
    }
   
    return(
        <TouchableOpacity onPress={this.handlePress}>
            <View style={[styles.containerGrid,{backgroundColor: props.backgroundColor}]}> 

                <View style={[styles.cell, {flex: 2 , backgroundColor: props.backgroundColorMedication}]}>
                    <Text style={styles.titleMed}>{props.medication}</Text>
                </View>

                {props.parent !== 'HelpNeeded' &&
                <View style={[styles.cell, {backgroundColor: props.backgroundColorMedication}]}>
                    <Text style={styles.titleHour}>{props.time}</Text>
                </View>}

                <View style={styles.cell}>
                    {props.monday  &&
                    <IconRender />}
                </View>
                <View style={styles.cell}>
                    {props.tuesday  &&
                    <IconRender />}
                </View>
                <View style={styles.cell}>
                    {props.wednesday &&
                        <IconRender />}
                </View>
                <View style={styles.cell}>
                    {props.thursday &&
                        <IconRender />}
                </View>
                <View style={styles.cell}>
                    {props.friday  &&
                        <IconRender />}
                </View>
                <View style={styles.cell}>
                    {props.saturday  &&
                        <IconRender />}
                </View>
                <View style={styles.cell}>
                    {props.sunday  &&
                        <IconRender />}
                </View>

            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({

    containerGrid: {
      flex: 1,
      flexDirection: 'row',
      flexWrap: 'wrap',
    },

    titleHour: {
      fontSize: hp('2%'),
      alignSelf: 'center',
      marginVertical: hp('1.5%'),
    },
    titleMed: {
        fontSize: hp('2%'),
      },
  
    cell: {
      flex:  1,
      borderColor: '#ccc',
      borderWidth: 1,
      height: hp('6%'),
      //width: wp('9.5%'),
    },
    icon: {
        marginHorizontal: wp('2%'),
        marginVertical: hp('1%'),
    },
});

export default RowRender;
