import React, { useEffect, useState } from 'react';
import {Text, View, Image, TouchableOpacity} from 'react-native';
import Background2 from './Background2';
import {Button, Input} from 'react-native-elements';
import Icon from 'react-native-vector-icons';
import AsyncStorage from '@react-native-community/async-storage';


export default Screen2 = (props) =>{

    const [ inter, setInter ] = useState(false);
    const [ exter, setExter ] = useState(true);
    const [ proje, setProje ] = useState(true);
    const [ go, setGo ] = useState(true);

    useEffect(() => {
      getData();
    }, []);

    getData = async () => {
      try {
        const internal = await AsyncStorage.getItem('internal')
        const project = await AsyncStorage.getItem('project')
        const external = await AsyncStorage.getItem('external')
      if(internal !== 'null') {
          setInter(true);
          setProje(false);
      }
      if(project !== 'null') {
          setProje(true);
          setExter(false);
      }
      if(external !== 'null') {
          setExter(true);
          setGo(false);
      }
      } catch(e) {
      console.log('Something went wrong in data fetching');
      }
    }

    return(
        <Background2>
            <View style={{flex:1,flexDirection:"column", justifyContent:"center", alignItems:"center"}}>
                <Text style={{color:"black", fontSize:20}}>Please Select your Risks</Text>
            </View>
            <View style={{flex:2,flexDirection:"column", justifyContent:"space-between", alignItems:"center"}}>
                <Button onPress={() => props.navigation.navigate('Internal')} disabled={inter} title="Internal Risks"></Button>
                <Button onPress={() => props.navigation.navigate('ProjectSpecified')} disabled={proje} title="Project Specified Risks"></Button>
                <Button onPress={() => props.navigation.navigate('External')} disabled={exter} title="External Risks"></Button>
            </View>
            <View style={{flex:4,flexDirection:"column", justifyContent:"center", alignItems:"center"}}>
                <Button onPress={() => props.navigation.navigate('Report')} disabled={go} title="Report"></Button>
            </View>
            <View style={{flex:2,flexDirection:"column", justifyContent:"center", alignItems:"center"}}>
                <Button onPress={() => props.navigation.navigate('Screen1')} title="New Calculation"></Button>
            </View>
        </Background2>
    );
}