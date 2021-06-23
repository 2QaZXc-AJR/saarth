import React, {useEffect, useState} from 'react';
import { StyleSheet, FlatList, ToastAndroid, View, Text, ActivityIndicator } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import ProductItem from '../Components/ProductItem';
import * as cartActions from '../Actions/Basket';
import * as productActions from '../Actions/Products';

export default function PersonalCareScreen( {route, navigation} ) {
    function filterByType(obj) {
        if(obj.subType.toLowerCase() == 'personal care') {
            return true;
        }
    }
    const [isLoading, setIsLoading] = useState(false);
    const Products = useSelector(state => state.Products.availableProducts.filter(filterByType));
    const dispatch = useDispatch();

    useEffect(() => { 
        const loadProducts = async () => {
            setIsLoading(true);
            await dispatch(productActions.fetchProducts());
            setIsLoading(false);
        }
        loadProducts(); 
    }, [dispatch]);

    if (isLoading) {
        return (
          <View style={styles.loader}>
            <ActivityIndicator size="large" color="#5500dc" />
          </View>
        );
    }

    if(!isLoading && Products.length == 0) {
        return (
            <View style={styles.loader}>
                <Text>
                    Nothing Here Today.
                </Text>
            </View>
        )
    }
    return(
        <FlatList 
            style={styles.listDesign}
            numColumns={2}
            data={Products} 
            key={itemData => itemData.item.id}
            renderItem={itemData => 
                (<ProductItem 
                    image={itemData.item.imageUrl} 
                    title={itemData.item.title} 
                    price={itemData.item.price} 
                    mrp={itemData.item.mrp}
                    onViewDetails={() => {
                            navigation.navigate('Details', 
                            {productId: itemData.item.id})
                        }
                    }
                    toBasket={() => {
                        dispatch(cartActions.addToCart(itemData.item, 1)); 
                        ToastAndroid.show("Added To Basket", ToastAndroid.SHORT, ToastAndroid.CENTER);
                    }}/> 
                )
            }
        /> 
    );
}

const styles = StyleSheet.create({
    listDesign: {
        backgroundColor: '#add8e6'
    },
    loader: {
        flex: 1, 
        justifyContent: 'center', 
        alignItems: 'center', 
        backgroundColor: '#add8e6'
    }
});