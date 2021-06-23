import React from 'react';
import { View, 
        Text, 
        Image, 
        StyleSheet, 
        TouchableOpacity} 
from 'react-native';

export default function HomeItems(props) {
    return(
        <View style={styles.product}>
          <TouchableOpacity onPress={props.onViewDetails}>
            <View style={styles.imageContainer}>
                <Image style={styles.image} source={{ uri: props.image }} />
            </View>
            <View style={styles.details}>
                <Text style={styles.title}>{props.title.substring(0, 15)}</Text>
            </View>
          </TouchableOpacity> 
        </View>
    );
}

const styles = StyleSheet.create({
    product: {
      shadowColor: 'black',
      shadowOpacity: 0.26,
      shadowOffset: { width: 0, height: 2 },
      shadowRadius: 0,
      elevation: 5,
      borderRadius: 1,
      backgroundColor: 'white',
      height: 200,
      width: '49.4%',
      marginBottom: 20,
      marginTop: 5,
      marginHorizontal: 1
    },
    imageContainer: {
      width: '100%',
      height: '80%',
      borderTopLeftRadius: 1,
      borderTopRightRadius: 1,
      overflow: 'hidden'
    },
    image: {
      width: '100%',
      height: '100%'
    },
    details: {
      alignItems: 'center',
      height: '15%',
      padding: 10
    },
    title: {
      fontSize: 15,
      marginVertical: 4
    },
});
  