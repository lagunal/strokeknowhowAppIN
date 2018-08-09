import React from 'react';
import { View, StyleSheet, Image } from 'react-native';

const imageContainer = (props) => {

    return(
        <View style={styles.container}>
            <Image 
                {...props} 
                source={props.src}
                style={[styles.image, props.style]}>
            </Image>
        </View>
    );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 0,
    //backgroundColor: 'yellow'
    
  },
  image: {
    width: '90%',
    resizeMode: 'contain',
    //height: '100%',
  }
});

export default imageContainer;