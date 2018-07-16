import React from 'react';
import { View, StyleSheet, Image } from 'react-native';

const imageContainer = ({ src }, props) => {

    return(
        <View style={styles.container}>
            <Image 
                {...props}
                source={src}
                style={[styles.image, props.style]}>
            </Image>
        </View>
    );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
    marginHorizontal: 0,
  },
  image: {
    width: '100%',
    //height: 'auto',
  }
});

export default imageContainer;