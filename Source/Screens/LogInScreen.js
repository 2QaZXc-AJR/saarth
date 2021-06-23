import React, { useState } from 'react'
import { View, StyleSheet, Button, Text } from 'react-native';
import { Input } from 'react-native-elements';



export default function LogInScreen({ navigation }) {
    const logInAction = () => {
        console.log(phone);
        const response = fetch (`http://localhost:8080/api/login/${phone}`);
        console.log(response);
        setPhone('');
    }
    
    const signUpAction = () => {
        navigation.navigate("SignUp", {Screen: "SignUpScreen"});
    }
    const [token, setToken] = useState('');
    const [phone, setPhone] = useState('');
    return(
        <View Style={styles.container}>
            <View style={{marginTop: 70, justifyContent: 'center'}}>
                <Input 
                placeholder='Enter Phone Number' 
                keyboardType="number-pad"
                value={phone}
                onChangeText={text => {setPhone(text)}}/>
                <Button title='Sign Up' onPress={signUpAction} />
                <View style={{marginTop: 10}}>
                    <Button title='Get OTP' onPress={logInAction} />
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        margin: 20,
        justifyContent: 'center',
        alignItems: 'center'
    }
});