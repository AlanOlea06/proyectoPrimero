import { useLocalSearchParams } from "expo-router";
import React from "react";
import { Text, View } from "react-native";

export const Persona = () => {
    const params = useLocalSearchParams();
    console.log(params);
    return ( 
        <View>
            <Text>{params.nombre}</Text>   
           
            <Text>{params.descripcion}</Text>
        </View>
    )
}

export default Persona;