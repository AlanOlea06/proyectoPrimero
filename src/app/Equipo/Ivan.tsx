import { useLocalSearchParams } from "expo-router";
import React from "react";
import { Image, Text, View } from "react-native";
import { Styles } from "../../styles/Styles";

export const Persona = () => {
    const params = useLocalSearchParams();
    console.log(params);
    return ( 
        <View style={{flex: 1, justifyContent: 'flex-start', alignItems: 'flex-start', padding: 16}}>
            <Text style={Styles.nameLarge}>{params.nombre}</Text>
            <Image source={require(`../../assets/image/ivan.jpeg`)} style={{width: 250, height: 250, alignSelf:"flex-start"}} />
            <Text>{params.descripcion}</Text>
        </View>
    )
}

export default Persona;