import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Platform, 
  Image
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function BasketItems (props) {
  return (
    <View style={styles.cartItem}>
      <View style={styles.itemData}>
        <Image source={{ uri: props.image }} style={{height: 50, width: 50}}/>
      </View>
      <View style={styles.itemData}>
        <Text style={styles.quantity}>
          {props.quantity}
        </Text>
        <Text style={{color:'#4d4dff'}}> X </Text>
        <Text style={styles.mainText}>
          {props.title.substring(0, 9)} 
        </Text>  
      </View>
      <View style={styles.itemData}>
        <Text style={styles.mainText}>
          ₹ {props.amount.toFixed(2)}
        </Text>
        <TouchableOpacity onPress={props.onRemove} style={styles.deleteButton}>
          <Ionicons
            name={Platform.OS === 'android' ? 'md-trash' : 'ios-trash'}
            size={23}
            color="red"
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cartItem: {
    padding: 10,
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 12,
    borderBottomColor: 'black',
    borderBottomWidth: 0.5
  },
  itemData: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  quantity: {
    color: '#4d4dff',
    fontSize: 16
  },
  mainText: {
    fontSize: 16
  },
  deleteButton: {
    marginLeft: 20
  }
});
