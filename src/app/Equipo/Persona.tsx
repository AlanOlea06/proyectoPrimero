import { useLocalSearchParams } from "expo-router";
import React from "react";
import { Image, Text, View } from "react-native";

export const Persona = () => {
    const params = useLocalSearchParams();
    console.log(params);
    return ( 
        <View>
            <Text>{params.nombre}</Text>
           
            <Image source={require(`../../assets/image/alan.jpeg`)} style={{width: 100, height: 100}} />
            <Text>{params.descripcion}</Text>
        </View>
    )
}

export default Persona;