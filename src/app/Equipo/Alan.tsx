import Terminal from "@/src/components/TerminalAlan";
import { useLocalSearchParams } from "expo-router";
import React, { useState } from "react";
import { Image, ScrollView, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { diccionarioEquipo } from "../../components/shared/datosEquipo";
import { Styles } from "../EquipoStyles/Alan";

export const Alan = () => {
	const Alan = diccionarioEquipo.Alan;
	const { mode = 'personal' } = useLocalSearchParams(); // Aquí puedes cambiar el modo para probar diferentes vistas
	const [showTerminal, setShowTerminal] = useState(false);

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
							<Text style={{ fontWeight: 'bold', fontSize: 18 }}>Perfil Técnico y Profesional</Text>
							<View style={Styles.contenedorParrafo}>
								<Text style={{ ...Styles.text, color: '#0b9387' }}>Desarrollo Full-Stack</Text>
								<Text style={Styles.parrafo}>Dominio de Next.js y React para aplicaciones web de alto rendimiento, junto con experiencia activa en el desarrollo de aplicaciones móviles.	</Text>
							</View>

							<View style={Styles.contenedorParrafo}>
								<Text style={{ ...Styles.text, color: '#0b9387' }}>Lógica de Programación</Text>
								<Text style={Styles.parrafo}>Capacidad sólida para resolver problemas complejos, diseñar algoritmos y estructurar bases de código eficientes.	</Text>
							</View>

							<View style={Styles.contenedorParrafo}>
								<Text style={{ ...Styles.text, color: '#0b9387' }}>Perfil Bilingüe</Text>
								<Text style={Styles.parrafo}>Formación académica en el modelo BIS, lo que me permite desenvolverme con fluidez en entornos técnicos en inglés.	</Text>
							</View>

							<View style={Styles.contenedorParrafo}>
								<Text style={{ ...Styles.text, color: '#0b9387' }}>Gestión de Proyectos</Text>
								<Text style={Styles.parrafo}>Disciplina para equilibrar mi formación en el cuarto cuatrimestre de la carrera con el desarrollo de proyectos personales y aplicaciones reales.</Text>
							</View>

							<View style={Styles.contenedorParrafo}>
								<Text style={{ ...Styles.text, color: '#0b9387' }}>Adaptabilidad</Text>
								<Text style={Styles.parrafo}>Facilidad para aprender nuevas tecnologías y aplicarlas rápidamente a soluciones prácticas.</Text>
							</View>
						</View>
					</View>
				)}

				{mode === 'pictures' && (
					<View style={{ justifyContent: 'space-between' }}>
						{showTerminal ? (
							<>
								<TouchableOpacity
									style={Styles.button}
									onPress={() => setShowTerminal(false)}
								>
									<Text style={Styles.buttonText} numberOfLines={1} adjustsFontSizeToFit>
										Cerrar Terminal
									</Text>
								</TouchableOpacity>

								<View style={{ height: 400, width: '100%' }}>
									<Terminal />
								</View>
							</>
						) : (
							<>
								<TouchableOpacity
									style={Styles.button}
									onPress={() => setShowTerminal(true)}
								>
									<Text style={Styles.buttonText} numberOfLines={1} adjustsFontSizeToFit>
										No presionar este botón
									</Text>
								</TouchableOpacity>

								<Image
									source={Alan.imagen}
									style={{ width: 200, height: 200, borderRadius: 5 }}
								/>
							</>
						)}
					</View>
				)}
			</View>
		</ScrollView>
	)
}

export default Alan;
