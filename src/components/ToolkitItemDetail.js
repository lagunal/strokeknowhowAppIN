import React, { Component } from 'react';
import { View } from 'react-native';

import HeadingText from './UI/HeadingText';
import MainText from "./UI/MainText";
import TextFieldInput from "./UI/TextInputField";
import Button from "./UI/Button";

import ajax from '../ajax/ajax';

class ToolkitItemDetail extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: this.props.item.name,
            phone: this.props.item.phone,
            medication: this.props.item.medication,
            dosage: this.props.item.dosage,
            purpose: this.props.item.purpose,
        }
    }
    //updates the data array with the updated info and call function to save 
    handlePress = () => {
        var data = this.props.data;
        if (this.props.keyId[2]) { //if parent is ToolkitMedication
            for (var key in data){
                if (data.hasOwnProperty(key)) {
                    data[key] = (key === this.props.keyId[0]) ? this.state.medication : data[key];
                    data[key] = (key === this.props.keyId[1]) ? this.state.dosage : data[key];
                    data[key] = (key === this.props.keyId[2]) ? this.state.purpose : data[key];
                }
            }
        } else {
            for (var key in data){
                if (data.hasOwnProperty(key)) {
                    data[key] = (key === this.props.keyId[0]) ? this.state.name : data[key];
                    data[key] = (key === this.props.keyId[1]) ? this.state.phone : data[key];
                    
                }
            }
        }
        ajax.saveToolkit(data);
        this.props.onPress();//calls the onPress event from parent 
    }
    
    render(){
        const { item } = this.props;

        if (this.props.keyId[2]) { //if parent is ToolkitMedication
            return(
                <View style={{flex: 1}}>    
                                    
                    <MainText><HeadingText>{item.labelMedication}</HeadingText>  </MainText>
                    <TextFieldInput value={this.state.medication} 
                            onChangeText={medication => this.setState({ medication } )} />

                    <MainText><HeadingText> {item.labelDosage} </HeadingText> </MainText>
                    <TextFieldInput value={this.state.dosage} 
                            onChangeText={dosage => this.setState({ dosage } )}/>

                    <MainText><HeadingText> {item.labelPurpose} </HeadingText> </MainText>
                    <TextFieldInput value={this.state.purpose} 
                            onChangeText={purpose => this.setState({ purpose } )}/>

                    <Button style={{margin: 50}} color={'#ED7030'} textColor={'white'} onPress={this.handlePress}>
                       Save
                    </Button>
                </View>
            )
        }

        return(
                <View style={{flex: 1}}>    
                                    
                    <MainText><HeadingText>{item.label}</HeadingText>  </MainText>
                    <TextFieldInput value={this.state.name} 
                            onChangeText={name => this.setState({ name } )} />
                    <MainText><HeadingText> {item.labelContact} </HeadingText> </MainText>
                    <TextFieldInput value={this.state.phone} 
                            onChangeText={phone => this.setState({ phone } )}/>

                    <Button style={{margin: 50}} color={'#ED7030'} textColor={'white'} onPress={this.handlePress}>
                       Save
                    </Button>
                </View>
        )
    }

}

export default ToolkitItemDetail;

