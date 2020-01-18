import React,{useState} from 'react';
import {Text, View, Image, TouchableOpacity} from 'react-native';
import Background2 from './Background2';
import {Button, Input} from 'react-native-elements';
import Icon from 'react-native-vector-icons';
import AsyncStorage from '@react-native-community/async-storage';

import ToggleSwitch from 'toggle-switch-react-native';

export default ProjectSpecified = (props) =>{

    const [ p1, setP1 ] = useState(false);
    const [ p2, setP2 ] = useState(false);
    const [ p3, setP3 ] = useState(false);
    const [ p4, setP4 ] = useState(false);
    const [ p5, setP5 ] = useState(false);

    const handleInputs = () => {
        calculate();
    }

    const calculate = () => {
        const sum = (0.47*p1) + (0.23*p2) + (0.15*p3) + (0.11*p4) + (0.05*p5);
        const total = 0.64 * sum;
        const final = total.toFixed(2);
        const sumS = final.toString();
        storeData(sumS)
        .then(()=>props.navigation.navigate('Screen2'));
    }

    const storeData = async (x) => {
        try {
            await AsyncStorage.setItem('project', x)
        } catch (e) {
            alert('Sorry something went wrong in saving data');
        }
    }

    return(
        <Background2>
            <View style={{flex:1,flexDirection:"column", justifyContent:"center", alignItems:"center"}}>
                
                <View style={{flex:2,flexDirection:"column", justifyContent:"center", alignItems:"center"}}>
                    <Text style={{color:"black", fontSize:20}}>Project Specified Risks</Text>
                </View>
                <View style={{flex:3,flexDirection:"column", justifyContent:"space-between", alignItems:"baseline"}}>
                    <ToggleSwitch
                        isOn={p1}
                        onColor="#4270D1"
                        offColor="black"
                        label="Client's cash flow problems"
                        labelStyle={{ color: "black", fontWeight: "900" }}
                        size="small"
                        onToggle={() => setP1(!p1)}
                    />
                    <ToggleSwitch
                        isOn={p2}
                        onColor="#4270D1"
                        offColor="black"
                        label="Disagreement of conditions of contract"
                        labelStyle={{ color: "black", fontWeight: "900" }}
                        size="small"
                        onToggle={() => setP2(!p2)}
                    />
                    <ToggleSwitch
                        isOn={p3}
                        onColor="#4270D1"
                        offColor="black"
                        label="Delay and intervention caused by clients"
                        labelStyle={{ color: "black", fontWeight: "900" }}
                        size="small"
                        onToggle={() => setP3(!p3)}
                    />
                    <ToggleSwitch
                        isOn={p4}
                        onColor="#4270D1"
                        offColor="black"
                        label="Poor relationship with stakeholders"
                        labelStyle={{ color: "black", fontWeight: "900" }}
                        size="small"
                        onToggle={() => setP4(!p4)}
                    />
                    <ToggleSwitch
                        isOn={p5}
                        onColor="#4270D1"
                        offColor="black"
                        label="Incompetance of suppliers and sub contractors"
                        labelStyle={{ color: "black", fontWeight: "900" }}
                        size="small"
                        onToggle={() => setP5(!p5)}
                    />
                </View>
                <View style={{flex:2,flexDirection:"column", justifyContent:"center", alignItems:"center"}}>
                    <Text style={{color:"red", fontSize:15}}>You cannot edit this after submit</Text>
                    <Button onPress={() => handleInputs()} title="Save and go to Menu"></Button>
                </View>
                
            </View>
        </Background2>
    );
}