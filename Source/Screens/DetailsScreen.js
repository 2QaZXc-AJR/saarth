import React, { useState } from 'react';
import { ScrollView, Image, Button, View, Text, StyleSheet, ToastAndroid } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import * as cartActions from '../Actions/Basket';

export default function DetailsScreen( {route, navigation} ) {
    const { productId } = route.params;
    const selectedProduct = useSelector(state => 
        state.Products.availableProducts.find(prod => prod.id === productId));
    
    const [quantity, setQuantity] = useState(1);

    const dispatch = useDispatch();
    return(
        <ScrollView>
            <View style={{margin: 5}}>
                <Image style={styles.image} source={{ uri: selectedProduct.imageUrl }} />
                <Text style={styles.title}>
                    {selectedProduct.title}
                </Text>
                {selectedProduct.mrp != selectedProduct.price 
                ?<Text style={styles.mrp}>MRP: ₹ {selectedProduct.mrp}</Text>: null}
                {((selectedProduct.mrp - selectedProduct.price) / selectedProduct.mrp) * 100 > 0
                ? <Text style={styles.price}>
                    Discount: {(((selectedProduct.mrp - selectedProduct.price) / selectedProduct.mrp) * 100)
                    .toFixed(2)} %</Text> 
                : <Text style={styles.price}> No Discount Available </Text>}
                <Text style={styles.payable}>Price: ₹ {selectedProduct.price} </Text>
                <Text style={styles.quant}>Select quantity</Text>
                <View style={styles.select}>
                    <Button color='red' title='  -  ' 
                    onPress={() => {if(quantity > 1){setQuantity(quantity - 1)}else{setQuantity(1)}}}/>
                    <Text style={{marginHorizontal: 10}}>{quantity}</Text>
                    <Button color='green' title='  +  ' 
                    onPress={() => {setQuantity(quantity + 1)}}/>
                </View>
                <View style={styles.actions}>       
                    <Button title="Add to Basket" 
                    onPress={() => {
                        dispatch(cartActions.addToCart(selectedProduct, quantity));
                        ToastAndroid.show("Added To Basket", ToastAndroid.SHORT, ToastAndroid.CENTER);
                    }} />
                </View>
            </View>
    </ScrollView>
    );
}

const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: 400
    },
    actions: {
        marginVertical: 10,
        alignItems: 'center'
    },
    mrp: {
        textDecorationLine: 'line-through', 
        textDecorationStyle: 'solid',
        fontSize: 15,
        color: '#888',
        textAlign: 'center',
        marginVertical: 5
    },
    price: {
        fontSize: 15,
        color: '#888',
        textAlign: 'center',
        marginVertical: 5
    },
    select: {
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'center',
        alignContent: 'center',
        marginVertical: 5
    },
    quant: {
        fontSize: 15,
        color: 'black',
        textAlign: 'center',
        marginVertical: 5
    },
    payable: {
        fontSize: 20,
        color: 'green',
        textAlign: 'center',
        marginVertical: 5
    },
    title: {
        fontSize: 25,
        color: '#006994',
        fontWeight: 'bold'
    },
});