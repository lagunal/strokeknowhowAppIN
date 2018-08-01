import React, { Component } from 'react';
import { View, TextInput } from 'react-native';

import HeadingText from '../../UI/HeadingText';
import SubHeadingText from '../../UI/SubHeadingText';
import MainText from "../../UI/MainText";
import TextFieldInput from "../../UI/TextInputField";
import Button from "../../UI/Button";
import BodyScroll from "../../UI/BodyScroll";
import styles from '../../../styles/styles';
import ajax from '../../../ajax/ajax';

class PhysicalDetail extends Component {

    constructor(props) {
        super(props);
        this.state = {
            exercise: this.props.item.exercise,
            time1: this.props.item.time1,
            time2: this.props.item.time2,
            pulse1: this.props.item.pulse1,
            pulse2: this.props.item.pulse2,
            goals1: this.props.item.goals1,
            goals2: this.props.item.goals2,
            goals3: this.props.item.goals3
        }
    }
    //updates the data array with the updated info and call function to save 
    handlePress = () => {
        var data = this.props.data;
            for (var key in data){
                if (data.hasOwnProperty(key)) {
                    data[key] = (key === this.props.keyId[0]) ? this.state.exercise : data[key];
                    data[key] = (key === this.props.keyId[1]) ? this.state.time1 : data[key];
                    data[key] = (key === this.props.keyId[2]) ? this.state.time2 : data[key];
                    data[key] = (key === this.props.keyId[3]) ? this.state.pulse1 : data[key];
                    data[key] = (key === this.props.keyId[4]) ? this.state.pulse2 : data[key];
                    data[key] = (key === this.props.keyId[5]) ? this.state.goals1 : data[key];
                    data[key] = (key === this.props.keyId[6]) ? this.state.goals2 : data[key];
                    data[key] = (key === this.props.keyId[7]) ? this.state.goals3 : data[key];
                }
            }
        
        ajax.saveToolkit(data, this.props.userId, this.props.token, 'physical');
        this.props.onPress();//calls the onPress event from parent 
    }
    
    render(){
        const { item } = this.props;

        return(
            <BodyScroll>
            <View style={{flex: 1}}>    
                                
                <MainText><SubHeadingText>{item.labelExercise}</SubHeadingText>  </MainText>
                <TextInput value={this.state.exercise} 
                        style={styles.inputStyleToolkit}
                        onChangeText={exercise => this.setState({ exercise } )} />
                
                <MainText><SubHeadingText>{item.labelTime}</SubHeadingText>  </MainText>
                <TextInput value={this.state.time1} 
                        style={styles.inputStyleToolkit}
                        onChangeText={time1 => this.setState({ time1 } )} />
                <TextInput value={this.state.time2} 
                        style={styles.inputStyleToolkit}
                        onChangeText={time2 => this.setState({ time2 } )} />

                <MainText><SubHeadingText>{item.labelPulse1}</SubHeadingText>  </MainText>
                <TextInput value={this.state.pulse1}
                        style={styles.inputStyleToolkit} 
                        onChangeText={pulse1 => this.setState({ pulse1 } )} />

                <MainText><SubHeadingText>{item.labelPulse2}</SubHeadingText>  </MainText>
                <TextInput value={this.state.pulse2} 
                        style={styles.inputStyleToolkit}
                        onChangeText={pulse2 => this.setState({ pulse2 } )} />

                <MainText><SubHeadingText>{item.labelGoals}</SubHeadingText>  </MainText>
                <TextInput value={this.state.goals1} 
                        style={styles.inputStyleToolkit}
                        onChangeText={goals1 => this.setState({ goals1 } )} />
                <TextInput value={this.state.goals2} 
                        style={styles.inputStyleToolkit}
                        onChangeText={goals2 => this.setState({ goals2 } )} />
                <TextInput value={this.state.goals3} 
                        style={styles.inputStyleToolkit}
                        onChangeText={goals3 => this.setState({ goals3 } )} />

                <Button style={{margin: 50}} color={'#ED7030'} textColor={'white'} onPress={this.handlePress}>
                Save
                </Button>
            </View>
            </BodyScroll>
        )
    }

}

export default PhysicalDetail;

