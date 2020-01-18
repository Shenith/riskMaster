import React, { useState, useEffect } from 'react';
import {Text, View, Image, TouchableOpacity} from 'react-native';
import Background2 from './Background2';
import {Button, Input} from 'react-native-elements';
import Icon from 'react-native-vector-icons';
import AsyncStorage from '@react-native-community/async-storage';

export default Screen2 = (props) =>{

    const [ companyName, setCompanyName ] = useState('');
    const [ projectName, setProjectName ] = useState('');

    useEffect(() => {
        storeData();
    }, []);

    const storeData = async () => {
        try {
            await AsyncStorage.setItem('internal', 'null');
            await AsyncStorage.setItem('external', 'null');
            await AsyncStorage.setItem('project', 'null');
        } catch (e) {
            alert('Sorry something went wrong in saving data');
        }
    }

    const handleInputs = () => {
        // props.navigation.navigate('Screen2')
        storeCompanyName();
        storeProjectName();
        props.navigation.navigate('Screen2');
    }

    storeCompanyName = async () => {
        try {
            await AsyncStorage.setItem('companyName', companyName);
        } catch (e) {
            console.log('saving error');
        }
    }

    storeProjectName = async () => {
        try {
            await AsyncStorage.setItem('projectName', projectName)
        } catch (e) {
            console.log('saving error');
        }
    }

    return(
        <Background2>
            <View style={{flex:4, flexDirection:"column", justifyContent:"flex-start", alignItems:"center", marginTop:40}}>
                <Input placeholder='Your Company Name' value={companyName} onChangeText={setCompanyName}/>
                <Input placeholder='Your Project Name' value={projectName} onChangeText={setProjectName}/>
                
            </View>
            <View style={{flex:1, flexDirection:"column", paddingBottom:20,justifyContent:"space-between", alignItems:"center"}}>
                <Button onPress={handleInputs} Buttonstyle={{marginTop:10}} title="Save and Calculate Risk" />
            </View>
            
        </Background2>
    );
}