import React from 'react';
import {Text, View, TouchableOpacity, Image} from 'react-native';
import {css} from '../assets/css/css';

export default function Home({navigation}){/*propiedades que vem do navigationContainer*/
    return(
        <View style={css.container2}>
            <TouchableOpacity style={css.button_home}onPress={()=>navigation.navigate('Login')}>
                <Image style={css.img_home}source={require('../assets/img/icon_login.png')}/>
            </TouchableOpacity>

            <TouchableOpacity style={css.button_home} onPress={()=>navigation.navigate('Rastreio')}>
                <Image style={css.img_home}source={require('../assets/img/icon_rastreio.png')}/>
            </TouchableOpacity>
        </View>
    );
}