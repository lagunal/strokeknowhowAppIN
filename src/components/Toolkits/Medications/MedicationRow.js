import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

import MainText from "../../UI/MainText";

const MedicationRow = (props) => {

    handlePress = () => {
        props.onItemPress(props, props.keyId);
    }

    return(
        <TouchableOpacity onPress={this.handlePress}>
            <View style={{backgroundColor: props.backgroundColor}}>    
                <View style={styles.containerColumm}>    
                    <View style={styles.containerSubRow}>
                            <View style={styles.item}>   
                                <MainText style={styles.label}>{props.labelMedication}</MainText>
                                <Text>{props.medication}</Text>
                            </View>

                            <View style={styles.item}>   
                                <MainText style={styles.label}>{props.labelDose}</MainText>
                                <Text>{props.dose}</Text>
                            </View>
                    </View>

                    <View style={[styles.containerSubRow]}>
                            <View style={styles.item}>   
                                <Text style={styles.label}>{props.labelMorning}</Text>
                                <Text>{props.morning}</Text>
                            </View>

                            <View style={styles.item}>   
                                <Text style={styles.label}>{props.labelNoon}</Text>
                                <Text>{props.noon}</Text>
                            </View>

                            <View style={styles.item}>   
                                <Text style={styles.label}>{props.labelAfternoon}</Text>
                                <Text>{props.afternoon}</Text>
                            </View>

                            <View style={styles.item}>   
                                <Text style={styles.label}>{props.labelEvening}</Text>
                                <Text>{props.evening}</Text>
                            </View>

                            <View style={styles.item}>   
                                <Text style={styles.label}>{props.labelBedtime}</Text>
                                <Text>{props.bedtime}</Text>
                            </View>
                    </View>
                </View>    
            </View>
        </TouchableOpacity>
    )

}

const styles = StyleSheet.create({

    containerColumm: {
        flex: 1,
        flexDirection: 'column',
    },
    containerSubRow: {
        flex: 1, 
        flexDirection: 'row', 
    },
    label: {
        fontWeight: 'bold',
    },
    item: {
        flex: 1,
        alignItems: 'center',
        paddingVertical: 6,
    }
});

export default MedicationRow;

