import React from 'react';
import {Text, View, Image, TouchableOpacity} from 'react-native';
import Background from './Background';
import {Button} from 'react-native-elements';
import {Icon} from 'react-native-vector-icons';

export default WelcomeScreen = (props) =>{
    return(
        <Background>
            <View style={{flex:1, flexDirection:"column", justifyContent:"center", alignItems:"center"}}>
                <Text style={{color:"white", fontSize:30}}>Risk Master</Text>
                <Text style={{color:"white", fontSize:12}}>Calculate your construction joint venture risk</Text>
                <TouchableOpacity style={{marginTop:160}} onPress={() => props.navigation.navigate('Screen1')}>
                    <Text style={{color:"white", fontSize:23}}>Start</Text>
                </TouchableOpacity>
                <View style={{flexDirection:"column", justifyContent:"center", alignItems:"center", marginTop:100}}>
                    <Text style={{color:"white", fontSize:12}}>All values are measured by a research</Text>
                </View>
            </View>
        </Background>
    );
}