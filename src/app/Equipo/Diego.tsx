import { useLocalSearchParams } from "expo-router";
import React from "react";
import { Image, Text, View, ScrollView } from "react-native";
import { Styles } from "../EquipoStyles/Diego";

export default function Diego() {
    // 1. Read the 'mode' from the URL parameters
    // Default to 'personal' if no mode is selected
    const { nombre, descripcion, mode = 'personal' } = useLocalSearchParams();

    return (
                               
                    
        <ScrollView style={Styles.mainContainer}>
            <View style={{ marginTop: 20, padding: 10 }}>
                
                {mode === 'personal' && (
                    <View>
                        <Text style={{fontSize: 22, fontWeight: 'bold'}}>Personal Tastes </Text>
                        <Text>• Me encanta el fornite</Text>
                        <Text>• Lo juego todo el dia</Text>
                        <Text>• Hobby: Gym </Text>
                    </View>
                )}

                {mode === 'professional' && (
                    <View>
                        <Text style={{fontSize: 22, fontWeight: 'bold'}}>Professional Skills </Text>
                        <Text>• Profesional en Obbys de Roblox </Text>
                        <Text>• Ganador de un total de 0 torneos en Fortnite </Text> 
                        <Text>• Desarrollador de FinBalance </Text>
                        <Text>• (In Progress)</Text>
                    </View>
                )}

                {mode === 'pictures' && (
                    <View>
                        <Text style={{fontSize: 22, fontWeight: 'bold'}}>Gallery 📸</Text>
                        <Text>No photos yet...</Text>
                    </View>
                )}

            </View>
        </ScrollView>
   
    );
}