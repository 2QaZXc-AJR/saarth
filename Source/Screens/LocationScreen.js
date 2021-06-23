import React, { useState, useEffect } from 'react';
import { View, Modal, StyleSheet, Text, Image, Button } from 'react-native';

export default function LocationScreen({ route, navigation }) {
    const [ loading, setLoading ] = useState(false)
    return(
        <Modal>
            <View style={styles.location}>
                <Image source={require('../../assets/map-pin.png')} style={styles.frame} resizeMode='contain' />
                <Text style={styles.area}> 
                    We Currently Serve Only In Neem Ka Thana Area.
                </Text>
                <Button title="OK" onPress={() => (console.log("Nothing"))}/>
            </View>
        </Modal>
    );
}

const styles = StyleSheet.create({
    frame: {
        height: 500,
        width: '100%'
    },
    area: {
        marginTop: 10,
        marginBottom: 10,
        fontWeight: 'bold',
        color: '#5166A9'
    },
    location:{
        margin: 20,
        alignItems: 'center',
        justifyContent: 'center',
    }
});