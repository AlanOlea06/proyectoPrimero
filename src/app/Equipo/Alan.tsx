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
		<ScrollView>
			<View style={Styles.constant}>
				<Image source={Alan.imagen} style={Styles.imagen} />
				<View style={Styles.textConstant}>
					<Text style = {{color: '#ffffff', fontSize: 18}}>Alan Olea Batres</Text>
					<Text style = {{color: '#ffffff', fontSize: 14}}>Grupo: DSBIS41M</Text>
					<Text style = {{color: '#ffffff', fontSize: 14}}>Carrera: Tecnologias de la informacion</Text>
				</View>
			</View>
			<View style={Styles.content}>
				{mode === 'personal' && (
					<View>
						
						<Text style={Styles.DescripcionLarga}>{Alan.DescripcionLarga}</Text>
					</View>
				)}

				{mode === 'professional' && (
					<View>
						<Text style={{ fontSize: 22, fontWeight: 'bold' }}>Professional Skills </Text>
						<View >
							<Text style={Styles.habilidades}>React Native </Text>
							<Text>Python </Text>
							<Text>C# Developer </Text>
							<Text>English Level: B1</Text>
						</View>
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
