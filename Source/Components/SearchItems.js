import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image
} from 'react-native';

export default function BasketItems (props) {
  return (
    <TouchableOpacity onPress={props.onViewDetails}>  
      <View style={styles.cartItem}>
        <View style={styles.itemData}>
          <Image source={{ uri: props.image }} style={{height: 50, width: 50}}/>
          <Text style={styles.mainText}>  {props.title.substring(0, 25)}</Text>  
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  cartItem: {
    flex: 1,
    padding: 5,
    backgroundColor: 'white',
    flexDirection: 'row',
    marginHorizontal: 5,
    borderBottomColor: 'black',
    borderBottomWidth: 0.5,
    borderRightWidth: 0.5,
    borderLeftWidth: 0.5
  },
  itemData: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  mainText: {
    fontSize: 16
  },
});
