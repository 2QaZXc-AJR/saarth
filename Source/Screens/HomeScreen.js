import React from 'react';
import { StyleSheet, FlatList } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import HomeItems from '../Components/HomeItems';

export default function HomeScreen( {route, navigation} ) {
    const subCategory = [
        {
            id: 0,
            pic: "https://assets.skyfilabs.com/images/blog/online-grocery-recommendation-using-machine-learning.webp",
            goto: "PersonalCare",
            title: "Personal Care" 
        },
        {
            id: 1,
            pic: "https://assets.skyfilabs.com/images/blog/online-grocery-recommendation-using-machine-learning.webp",
            goto: "BabyCare",
            title: "Baby Care" 
        },
        {
            id: 2,
            pic: "https://assets.skyfilabs.com/images/blog/online-grocery-recommendation-using-machine-learning.webp",
            goto: "Household",
            title: "Household Items" 
        },
        {
            id: 3,
            pic: "https://assets.skyfilabs.com/images/blog/online-grocery-recommendation-using-machine-learning.webp",
            goto: "Staples",
            title: "Staples" 
        },
        {
            id: 4,
            pic: "https://assets.skyfilabs.com/images/blog/online-grocery-recommendation-using-machine-learning.webp",
            goto: "Snacks",
            title: "Snacks & Treats" 
        },
        {
            id: 5,
            pic: "https://assets.skyfilabs.com/images/blog/online-grocery-recommendation-using-machine-learning.webp",
            goto: "Tea",
            title: `Tea & Bevrages` 
        },
    ]
    return(
        <FlatList 
            style={styles.listDesign}
            numColumns={2}
            data={subCategory} 
            key={subCat => subCat.item.id}
            renderItem={subCat => 
                (<HomeItems 
                    image={subCat.item.pic}
                    title={subCat.item.title} 
                    onViewDetails={() => {navigation.navigate(subCat.item.goto)}}/> 
                )
            }
        /> 
    );
}

const styles = StyleSheet.create({
    listDesign: {
        backgroundColor: '#add8e6'
    },
});

export const homeScreenOptions = navData => {
    return {
        title: "Saarth", 
        headerTitleAlign: 'center', 
        headerTitleStyle: {fontWeight: 'bold'},
        headerLeft: () => (
            <Ionicons name={'menu'} size={25} style={{marginLeft: 10}}
            onPress={() => {navData.navigation.toggleDrawer();}}/>
        ),
        headerRight: () => (
            <Ionicons name={'search'} size={25} style={{marginRight: 10}}    
            onPress={() => {navData.navigation.navigate("Search");}}/>
        )
    };
  };