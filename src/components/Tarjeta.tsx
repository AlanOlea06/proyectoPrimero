import { useRouter } from "expo-router";
import React from "react";
import { Image, Pressable, Text, View } from "react-native";
import { Styles } from "../styles/Styles";

interface TarjetaProps {
	nombre: string;
	descripcion: string;
}

export const Tarjeta = ({nombre, descripcion}: TarjetaProps) => {
	const router = useRouter();
	console.log(nombre, descripcion);
	return (
		<Pressable style={Styles.tarjeta} onPress={() => router.push({
    pathname: `./Equipo/${nombre}`,
    params: {
        nombre: nombre
    }
})}
>
			<View style={Styles.topBarTarjeta}>
				<Image source={require(`../assets/image/prueba.png`)} style={Styles.imagen} />
				<View style={Styles.tarjetaBottom}>
					<Text>{nombre}</Text>
				</View>
			</View>
			<View style={{padding: 10, height: "60%", margin: 'auto'}}>
				<Text style={{fontFamily: 'Open Sans', fontSize: 20}}>Descripcion</Text>
				<Text style={Styles.tarjetaBottom}>{nombre}, {descripcion}</Text>
			</View>
		</Pressable>
	)
}