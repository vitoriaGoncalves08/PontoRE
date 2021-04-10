import React,{useState, useEffect} from 'react';
import {KeyboardAvoidingView,Image, Text, TouchableOpacity, View, Platform} from 'react-native';
import {css} from '../assets/css/css';
import {  DefaultTheme, Provider as PaperProvider, TextInput } from 'react-native-paper';

const theme = {
    ...DefaultTheme,
    roundness: 2,
    colors: {
      ...DefaultTheme.colors,
      primary: '#649597',
      accent: '#f1c40f',
    },
  };

export default function Login(){
    
    const[display, setDisplay] = useState('none');

    return(

        <PaperProvider theme={theme}> 
        <KeyboardAvoidingView behavior={Platform.OS == "ios" ? "padding" : "height"} style={[css.container, css.darkbg]}>
            <View style={css.login__logomarca}>
                <Image source={require('../assets/img/logosemfundo1.png')}/>
            </View>

            <View>
                <Text style={css.login__msg(display)/*função no css*/}>Usuário ou Senha inválidos</Text>
            </View>

            <View style={css.login__form}>
                <TextInput style={css.login__input}label="Usuário" type='outlined'/>
                <TextInput style={css.login__input} label="Senha" type='outlined' secureTextEntry={true}/>

                <TouchableOpacity style={css.login__button} onPress={()=>setDisplay('flex')}>
                    <Text style={css.login__buttonText}>Entrar</Text>
                </TouchableOpacity>

            </View>
        </KeyboardAvoidingView>
        </PaperProvider>
    );
}