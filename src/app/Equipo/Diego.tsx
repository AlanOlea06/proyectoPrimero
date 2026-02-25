import { useLocalSearchParams } from "expo-router";
import React from "react";
import { Image, Text, View } from "react-native";
import { Styles } from "../EquipoStyles/Diego";

export const Persona = () => {
    const params = useLocalSearchParams();


    console.log(params);
    return ( 
        <View style={Styles.content}>
            <Text style={Styles.nombre}>{params.nombre}</Text>
            <Image source={require('../../assets/image/Diego.jpeg')} style={Styles.imagen} />
            <Text>{params.descripcion}</Text>
        </View>
    )
}

export default Persona;