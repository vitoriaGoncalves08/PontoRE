import { StatusBar } from 'expo-status-bar';
import React,{} from 'react';
import {Text, View} from 'react-native';
import {css} from './assets/css/css';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {Home,Login, Rastreio} from './views'; 

export default function App() {

  const Stack = createStackNavigator();

  return(
    <NavigationContainer>
      <Stack.Navigator>
        {/* Quantas telas/ Navegação aqui */}
        <Stack.Screen
         name="Home"
          component={Home}
          options={{
            title:"Bem Vindo",
            headerStyle:{backgroundColor:'#649597'},
            headerTintColor:'#333',
            headerTitleStyle:{
              fontWeight:'bold', alignSelf:'center'}
          }}/>
        <Stack.Screen name="Login" options={{headerShown:false}}/*tira a barra superior*/ component={Login}/>
        <Stack.Screen name="Rastreio" component={Rastreio}/>
      {/*   <Stack.Screen name="AreaRestrita" component={AreaRestrita}/> */}
      </Stack.Navigator>
    </NavigationContainer>

  );
}

