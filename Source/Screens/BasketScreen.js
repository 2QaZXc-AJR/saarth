import React, { useReducer } from 'react';
import { View, Text, StyleSheet, Button, FlatList, ToastAndroid } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { Ionicons } from '@expo/vector-icons';

import BasketItems from '../Components/BasketItems';
import * as cartActions from '../Actions/Basket';
import * as orderActions from '../Actions/Order';

export default function BasketScreen() {
    
  let cartTotalAmount = useSelector(state => state.cart.totalAmount);
  const cartTotalMrp = useSelector(state => state.cart.totalMrp);
  const cartItems = useSelector(state => {
      const transformedCartItems = [];
      for (const key in state.cart.items) {
          transformedCartItems.push({
          productId: key,
          productTitle: state.cart.items[key].productTitle,
          productPrice: state.cart.items[key].productPrice,
          quantity: state.cart.items[key].quantity,
          productType: state.cart.items[key].productType,
          sum: state.cart.items[key].sum
          });
      }
      return transformedCartItems.sort((a, b) =>
          a.productId > b.productId ? 1 : -1
      );
  });


  if(cartTotalAmount < 300 && cartTotalAmount > 0) {
    cartTotalAmount += 13;
  }
    
  const dispatch = useDispatch();

  return(
    <View style={styles.screen}>
      
      {/* rendering total and buttons */}
      <View style={styles.summary}>
        <Text style={styles.summaryText}>
          Total:{' '}<Text style={styles.amount}>₹{cartTotalAmount}</Text>
        </Text>
        <Button color="#4d4dff" title="Pay Now" disabled={cartItems.length === 0} 
        onPress={() => dispatch(orderActions.addOrder(cartItems, cartTotalAmount))}/> 
        <Button color="#4d4dff" title="Order" disabled={cartItems.length === 0} 
        onPress={() => {
          dispatch(orderActions.addOrder(cartItems, cartTotalAmount));
          ToastAndroid.show("Order Placed", ToastAndroid.SHORT, ToastAndroid.CENTER);
        }}/>
      </View>
      

      {//condition
        cartItems.length != 0 ? 
        <View>
          <View style={styles.empty}>
            {
              cartTotalAmount < 300 ? 
              <Text style={styles.warning}> 
                Shop Above 300 To Get Free Delivary
              </Text> : null
            }
          </View>

          <View style={styles.breakDown}>
            <Text style={styles.breakDownText}>
              Price Break Down
            </Text>
            <Text style={{color: 'black'}}>
              Total MRP: ₹ {cartTotalMrp.toFixed(2)}
            </Text>
            {
              (cartTotalMrp - cartTotalAmount).toFixed(2) > 0 ?
              <Text style={{color: 'black'}}>
                You Saved: ₹ {(cartTotalMrp - cartTotalAmount).toFixed(2)}
              </Text> :
              <Text style={{color: 'black'}}>
                You Saved: ₹ 00.00
              </Text>
            }

            {
              cartTotalAmount < 300 ? 
              <Text style={{color: 'black'}}>
                Packing And Delivary Charges: ₹ 13 
              </Text> : null
            }

            {
              cartTotalAmount > 300 ? 
              <Text style={styles.payable}>
                Payable: ₹ {cartTotalAmount.toFixed(2)}
              </Text> : 
              <Text style={styles.payable}>
                Payable: ₹ {(cartTotalAmount).toFixed(2)}
              </Text>
            }
          </View>
        </View> :
        <View style={styles.empty}>
          <Text style={styles.breakDownText}>Your Basket Is Empty</Text>
        </View>
      }
      
      {/* rendering cart items   */}

      <FlatList
        data={cartItems}
        keyExtractor={item => item.productId}
        renderItem={itemData => (
          <BasketItems
            image={`https://saarth-store.herokuapp.com/api/inventory//${itemData.item.productId}/download`}
            quantity={itemData.item.quantity}
            title={itemData.item.productTitle}
            amount={itemData.item.sum}
            onRemove={() => {
              dispatch(cartActions.removeFromCart(itemData.item.productId));
              ToastAndroid.show("Removed From Basket", ToastAndroid.SHORT, ToastAndroid.CENTER);
            }}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        margin: 20
    },
    summary: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginBottom: 20,
      padding: 15,
      shadowColor: 'black',
      shadowOpacity: 0.26,
      shadowOffset: { width: 0, height: 2 },
      shadowRadius: 8,
      elevation: 5,
      borderRadius: 10,
      backgroundColor: 'white'
    },
    breakDown: {
      marginTop: 20,
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: 15,
      borderRadius: 10,
      borderWidth: 1,
      borderColor: 'black',
      backgroundColor: 'white'
    },
    empty: {
      alignItems: 'center',
      justifyContent: 'center',
      padding: 5,
    },
    summaryText: {
      fontSize: 18
    },
    amount: {
      color: '#00ff00'
    },
    breakDown: {
      marginTop: 20,
      marginBottom: 20,
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: 15,
      borderRadius: 10,
      borderWidth: 1,
      borderColor: 'black',
      backgroundColor: 'white'
    },
    breakDownText: {
      borderBottomColor: 'black',
      borderBottomWidth: 1,
      marginBottom: 10,
      fontSize: 18
    },
    warning: {
      marginBottom: 5,
      fontSize: 10
    },
    payable: {
      color: '#00ff00'
    },
});

export const basketScreenOptions = navData => {
  return {
      title: "Basket", 
      headerTitleAlign: 'center', 
      headerTitleStyle: {fontWeight: 'bold'},
      headerLeft: () => (
          <Ionicons name={'menu'} size={25} style={{marginLeft: 10}}
          onPress={() => {navData.navigation.toggleDrawer();}}/>
      )
  };
};