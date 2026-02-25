import { useLocalSearchParams } from "expo-router";
import React from "react";
import { Image, Text, View, ScrollView } from "react-native";
import { Styles } from "../EquipoStyles/Diego";

export default function Tony() {
    // 1. Read the 'mode' from the URL parameters
    // Default to 'personal' if no mode is selected
    const { nombre, descripcion, mode = 'personal' } = useLocalSearchParams();

    return (
        <ScrollView contentContainerStyle={Styles.content}>
            <Text style={Styles.nombre}>{nombre || "Diego"}</Text>
            
            <Image source={require('../../assets/image/Diego.jpeg')} style={Styles.imagen} />

            {/* CONDITIONAL RENDERING AREA */}
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
                        <Text>• React Native </Text>
                        <Text>• Python </Text> 
                        <Text>• C# Developer </Text>
                        <Text>• English Level: B2 (In Progress)</Text>
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