import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import LocationScreen from '../Source/Screens/LocationScreen';
import LogInScreen from '../Source/Screens/LogInScreen';
import SignUpScreen from '../Source/Screens/SignUpScreen';
import HomeScreen, {homeScreenOptions} from '../Source/Screens/HomeScreen';
import FoodScreen, {foodScreenOptions} from '../Source/Screens/FoodScreen';
import GroceryScreen, {groceryScreenOptions} from '../Source/Screens/GroceryScreen';
import VegiScreen, {vegiScreenOptions} from '../Source/Screens/VegiScreen';
import DetailsScreen from '../Source/Screens/DetailsScreen';
import BasketScreen, {basketScreenOptions} from '../Source/Screens/BasketScreen';
import OrderScreen, {orderScreenOptions} from '../Source/Screens/OrderScreen';
import PersonalCareScreen from '../Source/Screens/PersonalCareScreen';
import BabyCareScreen from '../Source/Screens/BabyCareScreen';
import TeaScreen from '../Source/Screens/TeaScreen';
import SnackScreen from '../Source/Screens/SnackScreen';
import StaplesScreen from '../Source/Screens/StaplesScreen';
import HouseholeScreen from '../Source/Screens/HouseholdScreen';
import SearchScreen from '../Source/Screens/SearchScreen';

const AuthStack = createStackNavigator();
const AuthFlow = () => (
    <AuthStack.Navigator>
        <AuthStack.Screen name='LogIn' component={LogInScreen} 
        options={{title: 'Log In', headerTitleAlign: 'center'}}/>
        <AuthStack.Screen name='SignUp' component={SignUpScreen} 
        options={{title: 'Sign Up', headerTitleAlign: 'center'}}/>
    </AuthStack.Navigator>
);

const HomeStack = createStackNavigator();
const HomeFlow = () => (
    <HomeStack.Navigator>
        <HomeStack.Screen name='Home' component={HomeScreen} options={homeScreenOptions}/>
        <HomeStack.Screen name='PersonalCare' component={PersonalCareScreen} 
        options={{title: "Personal Care", headerTitleAlign: 'center', headerTitleStyle: {fontWeight: 'bold'}}} />
        <HomeStack.Screen name='BabyCare' component={BabyCareScreen} 
        options={{title: "Baby Care", headerTitleAlign: 'center', headerTitleStyle: {fontWeight: 'bold'}}} />
        <HomeStack.Screen name='Household' component={HouseholeScreen} 
        options={{title: "Household Items" , headerTitleAlign: 'center', headerTitleStyle: {fontWeight: 'bold'}}} />
        <HomeStack.Screen name='Staples' component={StaplesScreen} 
        options={{title: "Staples" , headerTitleAlign: 'center', headerTitleStyle: {fontWeight: 'bold'}}} />
        <HomeStack.Screen name='Snacks' component={SnackScreen} 
        options={{title: "Snacks",  headerTitleAlign: 'center', headerTitleStyle: {fontWeight: 'bold'}}} />
        <HomeStack.Screen name='Tea' component={TeaScreen} 
        options={{title: `Tea & Bevrages`, headerTitleAlign: 'center', headerTitleStyle: {fontWeight: 'bold'}}} />
        <HomeStack.Screen name='Search' component={SearchScreen} 
        options={{title: "Search", headerTitleAlign: 'center', headerTitleStyle: {fontWeight: 'bold'}}}/>
        <HomeStack.Screen name='Details' component={DetailsScreen} 
        options={{title: "Details", headerTitleAlign: 'center', headerTitleStyle: {fontWeight: 'bold'}}}/>
    </HomeStack.Navigator>
);

const GroceryStack = createStackNavigator();
const GroceryFlow = () => (
    <GroceryStack.Navigator>
        <GroceryStack.Screen name='Grocery' component={GroceryScreen} 
        options={groceryScreenOptions}/>
        <GroceryStack.Screen name='Search' component={SearchScreen} 
        options={{title: "Search", headerTitleAlign: 'center', headerTitleStyle: {fontWeight: 'bold'}}}/>
        <GroceryStack.Screen name='Details' component={DetailsScreen} 
        options={{title: "Details", headerTitleAlign: 'center', headerTitleStyle: {fontWeight: 'bold'}}}/>
    </GroceryStack.Navigator>
);

const FoodStack = createStackNavigator();
const FoodFlow = () => (
    <FoodStack.Navigator>
        <FoodStack.Screen name='Food' component={FoodScreen} 
        options={foodScreenOptions}/>
        <FoodStack.Screen name='Search' component={SearchScreen} 
        options={{title: "Search", headerTitleAlign: 'center', headerTitleStyle: {fontWeight: 'bold'}}}/>
        <FoodStack.Screen name='Details' component={DetailsScreen} 
        options={{title: "Details", headerTitleAlign: 'center', headerTitleStyle: {fontWeight: 'bold'}}}/>
    </FoodStack.Navigator>
);

const VegitableStack = createStackNavigator();
const VegitableFlow = () => (
    <VegitableStack.Navigator>
        <VegitableStack.Screen name='Vegitables' component={VegiScreen} 
        options={vegiScreenOptions}/>
        <VegitableStack.Screen name='Search' component={SearchScreen} 
        options={{title: "Search", headerTitleAlign: 'center', headerTitleStyle: {fontWeight: 'bold'}}}/>
        <VegitableStack.Screen name='Details' component={DetailsScreen} 
        options={{title: "Details", headerTitleAlign: 'center', headerTitleStyle: {fontWeight: 'bold'}}}/>
    </VegitableStack.Navigator>
);

const BasketStack = createStackNavigator();
const BasketFlow = () => (
    <BasketStack.Navigator>
        <BasketStack.Screen name='Basket' component={BasketScreen} 
        options={basketScreenOptions}/>
    </BasketStack.Navigator>
);

const OrderStack = createStackNavigator();
const OrderFlow = () => (
    <OrderStack.Navigator>
        <OrderStack.Screen name='Orders' component={OrderScreen} 
        options={orderScreenOptions}/>
    </OrderStack.Navigator>
);

const Tabs = createBottomTabNavigator();
const TabFlow = () => (
    <Tabs.Navigator tabBarOptions={{activeTintColor: 'tomato', inactiveTintColor: 'gray',}} 
    screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === 'Home') {
                iconName = focused ? 'home' : 'home';
          } else if (route.name === 'Basket') {
                iconName = focused ? 'basket' : 'basket';
          } else if (route.name === 'Food') {
              iconName = focused ? 'fast-food' : 'fast-food';
          } else if (route.name === 'Vegitables') {
              iconName = focused ? 'leaf' : 'leaf';
          } else if (route.name === 'Grocery') {
              iconName = focused ? 'cart' : 'cart';
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}>
        <Tabs.Screen name='Home' component={HomeFlow} />
        <Tabs.Screen name='Grocery' component={GroceryFlow} />
        <Tabs.Screen name='Food' component={FoodFlow} />
        <Tabs.Screen name='Vegitables' component={VegitableFlow} />
        <Tabs.Screen name='Basket' component={BasketFlow} />
    </Tabs.Navigator>
);

const Drawer = createDrawerNavigator();
const DrawerFlow = () => (
    <Drawer.Navigator>
        <Drawer.Screen name='Home' component={TabFlow} />
        <Drawer.Screen name='Orders' component={OrderFlow}/>
        <Drawer.Screen name='Profile' component={AuthFlow}/>
    </Drawer.Navigator>
);

export default function AppNavigation() {
    return(
       <NavigationContainer style={styles.container}>
           <DrawerFlow />
       </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: '#a6f7c7',
    }
});
