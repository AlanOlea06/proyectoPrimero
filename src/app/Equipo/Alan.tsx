import { useLocalSearchParams } from "expo-router";
import React from "react";
import { Image, ScrollView, Text, View } from "react-native";
import { diccionarioEquipo } from "../../components/shared/datosEquipo";
import { Styles } from "../EquipoStyles/Alan";

export const Alan = () => {
	const Alan = diccionarioEquipo.Alan;
	const { mode = 'personal' } = useLocalSearchParams(); // Aquí puedes cambiar el modo para probar diferentes vistas

	return (
		<ScrollView>
			<View style={Styles.constant}>
				<Image source={Alan.imagen} style={Styles.imagen} />
				<View style={Styles.textConstant}>
					<Text style={{ ...Styles.text, fontSize: 24 }}>Alan Olea Batres</Text>
					<Text style={Styles.text}>Grupo: DSBIS41M</Text>
					<Text style={Styles.text}>Carrera: Tecnologias de la informacion</Text>
				</View>
			</View>

			<View style={Styles.content}>
				{mode === 'personal' && (
					<View>
						<Text style={{ fontSize: 22, fontWeight: 'bold' }}>Personal Description</Text>
						<Text style={Styles.DescripcionLarga}>{Alan.DescripcionLarga}</Text>
					</View>
				)}

				{mode === 'professional' && (
					<View>
						<Text style={{ fontSize: 22, fontWeight: 'bold' }}>Professional Skills </Text>
						<View style={{ flexDirection: 'row', flexWrap: 'wrap', marginTop: 10 }}>
							<Text style={Styles.habilidades}>React Native </Text>
							<Text style={Styles.habilidades}>Python </Text>
							<Text style={Styles.habilidades}>C# </Text>
							<Text style={Styles.habilidades}>English Level: B1</Text>
						</View>
						<View style={{ marginTop: 20 }}>
							<Text>Perfil Técnico y Profesional</Text>
							<View>
								<Text>Desarrollo Full-Stack</Text>
								<Text style={Styles.parrafo}>Dominio de Next.js y React para aplicaciones web de alto rendimiento, junto con experiencia activa en el desarrollo de aplicaciones móviles.	</Text>
							</View>

							<View>
								<Text>Lógica de Programación</Text>
								<Text style={Styles.parrafo}>Capacidad sólida para resolver problemas complejos, diseñar algoritmos y estructurar bases de código eficientes.	</Text>
							</View>
							
							<View>
								<Text>Perfil Bilingüe</Text>
								<Text style={Styles.parrafo}>Formación académica en el modelo BIS, lo que me permite desenvolverme con fluidez en entornos técnicos en inglés.	</Text>
							</View>
							
							<View>
								<Text>Gestión de Proyectos</Text>
								<Text style={Styles.parrafo}>Disciplina para equilibrar mi formación en el cuarto cuatrimestre de la carrera con el desarrollo de proyectos personales y aplicaciones reales.</Text>
							</View>
							
							<View>
								<Text>Adaptabilidad</Text>
								<Text style={Styles.parrafo}>Facilidad para aprender nuevas tecnologías y aplicarlas rápidamente a soluciones prácticas.</Text>
							</View>
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
