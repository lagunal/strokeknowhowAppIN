import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import MainText from "../../UI/MainText";

const ScheduleRow = (props) => {

    handlePress = () => {
        props.onItemPress(props, props.keyId);
    }

    return(
        <TouchableOpacity onPress={this.handlePress}>
            
            <View style={{backgroundColor: props.backgroundColor}}>    

                  <View>    
                      <MainText>{props.name}</MainText>
                  </View>
                
            </View>
        </TouchableOpacity>
    )

}

export default ScheduleRow;

