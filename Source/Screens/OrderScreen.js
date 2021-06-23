import React from 'react';
import { useSelector } from 'react-redux';
import { StyleSheet, Text, FlatList} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function OrderScreen() {
    const orders = useSelector(state => state.orders.orders);
    return(
        <FlatList
            data={orders}
            keyExtractor={item => item.id}
            renderItem={itemData => <Text>{itemData.item.totalAmount}</Text>}
        />
    );
}

const style = StyleSheet.create({
    
});

export const orderScreenOptions = navData => {
    return {
        title: "Your Orders", 
        headerTitleAlign: 'center', 
        headerTitleStyle: {fontWeight: 'bold'},
        headerLeft: () => (
            <Ionicons name={'menu'} size={25} style={{marginLeft: 10}}
            onPress={() => {navData.navigation.toggleDrawer();}}/>
        )
    };
  };