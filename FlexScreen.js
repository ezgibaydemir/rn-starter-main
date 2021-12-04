import React from 'react';
import {View,Text,StyleSheet} from 'react-native'

const FlexScreen=()=>{
    return <View style={{flexDirection:'row',flex:1}}>
        <View style={{flex:3}}>
            <Text style={{backgroundColor:'red',alignSelf:'flex-start',width:70,height:40}}> </Text>
            <Text style={{backgroundColor:'green',alignSelf:'center',width:70,height:40}}> </Text>
            <Text style={{backgroundColor:'blue',alignSelf:'flex-end',position:'absolute',width:70,height:40}}> </Text>

        </View>
            
    </View>
        

};
const styles=StyleSheet.create({});
export default FlexScreen;