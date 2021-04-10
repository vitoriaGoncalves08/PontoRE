import React from 'react';
import {Text, View, Button} from 'react-native';

export default function Rastreio({navigation}){/*propiedades que vem do navigationContainer*/
    return(
        <View>
            <Text>ESSE É O RASTREIO DESGRAÇA</Text>
            <Button title="Ir para Login" onPress={()=>navigation.navigate('Login',{id:30})}/>
        </View>
    );
}