import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

import MainText from "../../UI/MainText";

class ToolkitContactInfo extends Component {

    handlePress = () => {
        this.props.onItemPress(this.props, this.props.keyId);
    }
    
    render(){
        return(
            <TouchableOpacity onPress={this.handlePress}>
                <View style={[styles.container , {backgroundColor: this.props.backgroundColor}]}>    
                                    
                        <View style={[{flex: 5} ]}>   
                            <MainText >{this.props.label}</MainText>
                            <MainText style={styles.label}>{this.props.name}</MainText>
                        </View>

                        <View style={[{flex: 3}]}>   
                            <MainText>{this.props.labelContact}</MainText>
                            <MainText>{this.props.phone}</MainText>
                        </View>

                </View>
            </TouchableOpacity>
        )
    }

}

const styles = StyleSheet.create ({
    container: {
        flex: 1, 
        flexDirection: 'row'
    },
    label: {
        fontWeight: 'bold',
    },

});

export default ToolkitContactInfo;

