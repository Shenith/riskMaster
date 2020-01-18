import React, {useState} from 'react';
import {Text, View, Image, TouchableOpacity} from 'react-native';
import Background2 from './Background2';
import {Button, Input} from 'react-native-elements';
import Icon from 'react-native-vector-icons';
import AsyncStorage from '@react-native-community/async-storage';

import ToggleSwitch from 'toggle-switch-react-native';

export default Internal = (props) =>{

    const [ i1, setI1 ] = useState(false);
    const [ i2, setI2 ] = useState(false);
    const [ i3, setI3 ] = useState(false);
    const [ i4, setI4 ] = useState(false);
    const [ i5, setI5 ] = useState(false);
    const [ i6, setI6 ] = useState(false);
    const [ i7, setI7 ] = useState(false);
    const [ i8, setI8 ] = useState(false);

    const handleInputs = () => {
        calculate();
    }

    const calculate = () => {
        const sum = (0.31*i1) + (0.19*i2) + (0.121*i3) + (0.12*i4) + (0.118*i5) + (0.06*i6) + (0.05*i7) + (0.04*i8);
        const total = 0.07 * sum;
        const final = total.toFixed(2);
        const sumS = final.toString();
        storeData(sumS)
        .then(()=>props.navigation.navigate('Screen2'));
    }

    const storeData = async (x) => {
        try {
            await AsyncStorage.setItem('internal', x)
        } catch (e) {
            alert('Sorry something went wrong in saving data');
        }
    }

    return(
        <Background2>
            <View style={{flex:1,flexDirection:"column", justifyContent:"center", alignItems:"center"}}>
                
                <View style={{flex:2,flexDirection:"column", justifyContent:"center", alignItems:"center"}}>
                    <Text style={{color:"black", fontSize:20}}>Internal Risks</Text>
                </View>
                <View style={{flex:3,flexDirection:"column", justifyContent:"space-between", alignItems:"baseline"}}>
                    <ToggleSwitch
                        isOn={i1}
                        onColor="#4270D1"
                        offColor="black"
                        label="Parent company financial problems"
                        labelStyle={{ color: "black", fontWeight: "900" }}
                        size="small"
                        onToggle={() => setI1(!i1)}
                    />
                    <ToggleSwitch
                        isOn={i2}
                        onColor="#4270D1"
                        offColor="black"
                        label="Lack of management competance"
                        labelStyle={{ color: "black", fontWeight: "900" }}
                        size="small"
                        onToggle={() => setI2(!i2)}
                    />
                    <ToggleSwitch
                        isOn={i3}
                        onColor="#4270D1"
                        offColor="black"
                        label="Disagreement on staff position"
                        labelStyle={{ color: "black", fontWeight: "900" }}
                        size="small"
                        onToggle={() => setI3(!i3)}
                    />
                    <ToggleSwitch
                        isOn={i4}
                        onColor="#4270D1"
                        offColor="black"
                        label="Policy changes in parent company"
                        labelStyle={{ color: "black", fontWeight: "900" }}
                        size="small"
                        onToggle={() => setI4(!i4)}
                    />
                    <ToggleSwitch
                        isOn={i5}
                        onColor="#4270D1"
                        offColor="black"
                        label="Disagreement of work allocations"
                        labelStyle={{ color: "black", fontWeight: "900" }}
                        size="small"
                        onToggle={() => setI5(!i5)}
                    />
                    <ToggleSwitch
                        isOn={i6}
                        onColor="#4270D1"
                        offColor="black"
                        label="Conflicts in technology transfer"
                        labelStyle={{ color: "black", fontWeight: "900" }}
                        size="small"
                        onToggle={() => setI6(!i6)}
                    />
                    <ToggleSwitch
                        isOn={i7}
                        onColor="#4270D1"
                        offColor="black"
                        label="Over interference of partners"
                        labelStyle={{ color: "black", fontWeight: "900" }}
                        size="small"
                        onToggle={() => setI7(!i7)}
                    />
                    <ToggleSwitch
                        isOn={i8}
                        onColor="#4270D1"
                        offColor="black"
                        label="Disagreement on profit and loss"
                        labelStyle={{ color: "black", fontWeight: "900" }}
                        size="small"
                        onToggle={() => setI8(!i8)}
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