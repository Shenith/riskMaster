import React, {useEffect, useState} from 'react';
import {Text, View, Image, TouchableOpacity} from 'react-native';
import Background2 from './Background2';
import {Button, Input} from 'react-native-elements';
import Icon from 'react-native-vector-icons';
import AsyncStorage from '@react-native-community/async-storage';

export default Report = (props) =>{

    const [ companyName, setCompanyName ] = useState('');
    const [ projectName, setProjectName ] = useState('');

    const [ inter, setInter ] = useState(0.0);
    const [ exter, setExter ] = useState(0.0);
    const [ proje, setProje ] = useState(0.0);

    const [total, setTotal] = useState(0.0);

    useEffect(() => {
        getData();
    }, []);

    useEffect(() => {

    calculate();

    }, [inter,exter,proje]);

    getData = async () => {
        try {
          const value1 = await AsyncStorage.getItem('companyName')
          const value2 = await AsyncStorage.getItem('projectName')
          const internal = await AsyncStorage.getItem('internal')
          const project = await AsyncStorage.getItem('project')
          const external = await AsyncStorage.getItem('external')
        if(value1 !== null) {
            setCompanyName(value1);
            setProjectName(value2);
        }
        if(internal !== null) {
            const internalI = parseFloat(internal);
            // console.log('internalI',internalI);
            setInter(internalI*100);
        }
        if(project !== null) {
            const projectI = parseFloat(project);
            // console.log('projectI',projectI);
            setProje(projectI*100);
        }
        if(external !== null) {
            const externalI = parseFloat(external);
            // console.log('externalI',externalI);
            setExter(externalI*100);
        }
        } catch(e) {
          // error reading value
        //   console.log('getting error');
        console.log('Something went wrong in data fetching');
        }
      }

    const calculate = () => {
        const sum = inter + exter + proje;
        setTotal(sum);
    }

    return(
        <Background2>
            <View style={{flex:1,flexDirection:"column", justifyContent:"center", alignItems:"center"}}>
                
                <View style={{flex:1,flexDirection:"column", justifyContent:"center", alignItems:"center"}}>
                    <Text style={{color:"black", fontSize:25}}>Your Risk Report</Text>
                </View>
                <View style={{flex:1,flexDirection:"column", justifyContent:"flex-start", alignItems:"center"}}>
                    <Text style={{color:"black", fontSize:22}}>{companyName}</Text>
                    <Text style={{color:"#676869", fontSize:18}}>{projectName}</Text>
                </View>
                <View style={{flex:8,flexDirection:"column", justifyContent:"space-between", alignItems:"flex-start"}}>

                <View style={{flex:2,flexDirection:"column", justifyContent:"center", alignItems:"flex-start"}}>
                    <Text style={{color:"black", fontSize:20}}>Internal risks: </Text>
                    <Text style={{color:"red", fontSize:25}}>{inter}%</Text>
                </View>
                <View style={{flex:2,flexDirection:"column", justifyContent:"center", alignItems:"flex-start"}}>
                    <Text style={{color:"black", fontSize:20}}>Project specified risks: </Text>
                    <Text style={{color:"red", fontSize:25}}>{proje}%</Text>
                </View>
                <View style={{flex:2,flexDirection:"column", justifyContent:"center", alignItems:"flex-start"}}>
                    <Text style={{color:"black", fontSize:20}}>External risks: </Text>
                    <Text style={{color:"red", fontSize:25}}>{exter}%</Text>
                </View>
                </View>
                
                <View style={{flex:2,flexDirection:"column", justifyContent:"space-around", alignItems:"center" , backgroundColor:"#E97C8260", borderRadius:8}}>
                    <Text style={{color:"#A10C14", fontSize:30}}>Total risk: {total}%</Text>
                </View>
                <View style={{flex:2,flexDirection:"column", justifyContent:"space-around", alignItems:"center"}}>
                    <Button onPress={() => props.navigation.navigate('Screen2')} title="Go to Menu"></Button>
                </View>
                
            </View>
        </Background2>
    );
}