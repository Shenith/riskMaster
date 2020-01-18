import React, { useState } from 'react';
import {Text, View, Image, TouchableOpacity} from 'react-native';
import Background2 from './Background2';
import {Button, Input} from 'react-native-elements';
import Icon from 'react-native-vector-icons';
import AsyncStorage from '@react-native-community/async-storage';

import ToggleSwitch from 'toggle-switch-react-native';

export default External = (props) =>{

    const [ e1, setE1 ] = useState(false);
    const [ e2, setE2 ] = useState(false);
    const [ e3, setE3 ] = useState(false);
    const [ e4, setE4 ] = useState(false);
    const [ e5, setE5 ] = useState(false);
    const [ e6, setE6 ] = useState(false);
    const [ e7, setE7 ] = useState(false);

    const handleInputs = () => {
        calculate();
    }

    const calculate = () => {
        const sum = (0.36*e1) + (0.25*e2) + (0.18*e3) + (0.10*e4) + (0.05*e5) + (0.04*e6) + (0.03*e7);
        const total = 0.28 * sum;
        const final = total.toFixed(2);
        const sumS = final.toString();
        storeData(sumS)
        .then(()=>props.navigation.navigate('Screen2'));
    }

    const storeData = async (x) => {
        try {
            await AsyncStorage.setItem('external', x)
        } catch (e) {
            alert('Sorry something went wrong in saving data');
        }
    }

    return(
        <Background2>
            <View style={{flex:1,flexDirection:"column", justifyContent:"center", alignItems:"center"}}>
                
                <View style={{flex:2,flexDirection:"column", justifyContent:"center", alignItems:"center"}}>
                    <Text style={{color:"black", fontSize:20}}>External Risks</Text>
                </View>
                <View style={{flex:3,flexDirection:"column", justifyContent:"space-between", alignItems:"baseline"}}>
                    <ToggleSwitch
                        isOn={e1}
                        onColor="#4270D1"
                        offColor="black"
                        label="Security problems"
                        labelStyle={{ color: "black", fontWeight: "900" }}
                        size="small"
                        onToggle={() => setE1(!e1)}
                    />
                    <ToggleSwitch
                        isOn={e2}
                        onColor="#4270D1"
                        offColor="black"
                        label="Fund repartriation"
                        labelStyle={{ color: "black", fontWeight: "900" }}
                        size="small"
                        onToggle={() => setE2(!e2)}
                    />
                    <ToggleSwitch
                        isOn={e3}
                        onColor="#4270D1"
                        offColor="black"
                        label="Restriction on importation"
                        labelStyle={{ color: "black", fontWeight: "900" }}
                        size="small"
                        onToggle={() => setE3(!e3)}
                    />
                    <ToggleSwitch
                        isOn={e4}
                        onColor="#4270D1"
                        offColor="black"
                        label="Adverse weather condition and pollution"
                        labelStyle={{ color: "black", fontWeight: "900" }}
                        size="small"
                        onToggle={() => setE4(!e4)}
                    />
                    <ToggleSwitch
                        isOn={e5}
                        onColor="#4270D1"
                        offColor="black"
                        label="Exchange rate"
                        labelStyle={{ color: "black", fontWeight: "900" }}
                        size="small"
                        onToggle={() => setE5(!e5)}
                    />
                    <ToggleSwitch
                        isOn={e6}
                        onColor="#4270D1"
                        offColor="black"
                        label="Gov. law, regulations and policies changes"
                        labelStyle={{ color: "black", fontWeight: "900" }}
                        size="small"
                        onToggle={() => setE6(!e6)}
                    />
                    <ToggleSwitch
                        isOn={e7}
                        onColor="#4270D1"
                        offColor="black"
                        label="Fluctuation in economy / inflation"
                        labelStyle={{ color: "black", fontWeight: "900" }}
                        size="small"
                        onToggle={() => setE7(!e7)}
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