import React,{useState } from 'react';
import {View,Text,StyleSheet,TextInput,Button, Image} from 'react-native';


const LoginScreen =()=>{
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    return <>
    <View>

        <Text style={{backgroundColor:'lightskyblue',alignSelf:'center',width:200,height:30}} >  WELCOME TO LOGIN SCREEN</Text>
        <Image style={{alignSelf:'center',width:200,height:200}} source={require('../../assets/login.png')}/>
        <Text >Enter your Name:</Text>
        <TextInput
            autoCapitalize="none" 
            autoCorrect={false}
            style={styles.input}
            onChangeText={
                (newText)=>{
                    setName(newText);
            }}
            value={name}></TextInput>
        <Text>Enter your password :</Text>
        <TextInput
            autoCapitalize="none" 
            secureTextEntry={true}
            autoCorrect={false}
            style={styles.input}
            onChangeText={
                (newText)=>{
                    setPassword(newText);
            }}
            value={password}></TextInput>
            {password.length < 5 ?<Text></Text>:null}
            <Button title = 'LOGIN' onPress={()=>{window.location.href='HomeScreen.js'}}></Button>
      </View>
      </>
};
const styles = StyleSheet.create({
    input:{
        margin:15,
        borderColor:'black',
        borderWidth : 2,
    }  
});
export default LoginScreen;
