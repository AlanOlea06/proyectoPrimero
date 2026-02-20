import { useLocalSearchParams } from "expo-router";
import React from "react";
import { Text, View } from "react-native";

export const Persona = () => {
    const params = useLocalSearchParams();
    console.log(params);
    return ( 
        <View>
            <Text>dsa</Text>   
            <Text>dsdasda</Text>
        </View>
    )
}

export default Persona;