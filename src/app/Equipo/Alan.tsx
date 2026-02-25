import React from "react";
import { Image, ScrollView, Text, View } from "react-native";
import { diccionarioEquipo } from "../../components/shared/datosEquipo";
//import { NavegationBar } from "../../components/shared/NavegationBar";
import { useLocalSearchParams } from "expo-router";
import { Styles } from "../EquipoStyles/Alan";

export const Alan = () => {
    const Alan = diccionarioEquipo.Alan;
    const { mode = 'personal' } = useLocalSearchParams(); // Aquí puedes cambiar el modo para probar diferentes vistas

    return (
        <ScrollView style={Styles.content}>
            <View style={{ marginTop: 20, padding: 10 }}>

                {mode === 'personal' && (
                    <View>
                        <Image source={Alan.imagen} style={Styles.imagen} />
                        <Text style={Styles.DescripcionLarga}>{Alan.DescripcionLarga}</Text>
                    </View>
                )}

                {mode === 'professional' && (
                    <View>
                        <Text style={{ fontSize: 22, fontWeight: 'bold' }}>Professional Skills </Text>
                        <Text>• React Native </Text>
                        <Text>• Python </Text>
                        <Text>• C# Developer </Text>
                        <Text>• English Level: B2 (In Progress)</Text>
                    </View>
                )}

                {mode === 'pictures' && (
                    <View>
                        <Text style={{ fontSize: 22, fontWeight: 'bold' }}>Gallery 📸</Text>
                        <Text>No photos yet...</Text>
                    </View>
                )}
            </View>
        </ScrollView>
    )
}

export default Alan;
