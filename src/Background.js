import React from 'react';
import {Text, ImageBackground , View} from 'react-native';

export default Background = (props) =>{
    return(
        <ImageBackground source={require('./back.png')} style={{width: '100%', height: '100%'}}>
            {props.children}
        </ImageBackground>
    );
}