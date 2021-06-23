import React, {useState, useEffect} from 'react';
import { View, StyleSheet, FlatList, ActivityIndicator } from 'react-native';
import { SearchBar } from 'react-native-elements/dist/searchbar/SearchBar';
import { useSelector, useDispatch } from 'react-redux';

import SearchItems from '../Components/SearchItems';
import * as productActions from '../Actions/Products';

export default function SearchScreen( {route, navigation} ) {
    const [query, setQuery] = useState('');

    const [isLoading, setIsLoading] = useState(false);
    const products = useSelector(state => state.Products.availableProducts);
    const dispatch = useDispatch();
    
    // const handleFilter = input => {
    //     dispatch(filteredProduct(products, input));
    // }

    // const filteredProduct = React.useMemo(() => {
    //     return products.filter(product => product.title.includes(input));
    // });

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

    return(
        <View style={styles.listDesign}>
            <View>
                <SearchBar
                    iconColor="#EE578D"
                    placeholder="Search Here..."
                    value={query}
                    onChangeText={text => setQuery(text)}
                />
            </View>
        <FlatList 
            data={products.filter(val => {
                if (query == "") {
                    return val;
                } else if (val.title.toLowerCase().includes(query.toLowerCase())){
                    return val;
                }
            })} 
            key={itemData => itemData.item.id}
            renderItem={itemData => 
                (<SearchItems 
                    image={itemData.item.imageUrl} 
                    title={itemData.item.title} 
                    onViewDetails={() => {
                            navigation.navigate('Details', 
                            {productId: itemData.item.id})
                        }
                    }/> 
                )
            }
        />
        </View>
    );
}

const styles = StyleSheet.create({
    listDesign: {
        backgroundColor: '#add8e6',
        flex: 1,
    },
    loader: {
        flex: 1, 
        justifyContent: 'center', 
        alignItems: 'center', 
        backgroundColor: '#add8e6'
    }
});

// export const searchScreenOptions = navData => {
//     return {
//         title: "Grocery", 
//         headerTitleAlign: 'center', 
//         headerTitleStyle: {fontWeight: 'bold'},
//         headerLeft: () => (
//             <Ionicons name={'menu'} size={25} style={{marginLeft: 10}}
//             onPress={() => {navData.navigation.toggleDrawer();}}/>
//         ),
//         headerRight: () => (
//             <Ionicons name={'search'} size={25} style={{marginRight: 10}}    
//             onPress={() => {navData.navigation.navigate();}}/>
//         )
//     };
//   };