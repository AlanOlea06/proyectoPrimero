import { useRouter } from "expo-router";
import React from "react";
import { Image, ImageSourcePropType, Pressable, Text, View } from "react-native";
import { Styles } from "../styles/Styles";

interface TarjetaProps {
	nombre: string;
	descripcion?: string;
	imagen: ImageSourcePropType;
}

export const Tarjeta = ({nombre, descripcion, imagen}: TarjetaProps) => {
	const router = useRouter();

	
	//console.log(nombre, descripcion);
	return (
		<Pressable style={Styles.tarjeta} onPress={() => router.push({
		//La ruta se genera con el nombre de la persona iniciando en mayuscula
		//ejemplos: Alan, Ivan, Diego, Tony, Paul si el archivo esta en minusculas
    pathname: `./Equipo/${nombre}`,
    params: {nombre: nombre,descripcion}
})}
>
			<View style={Styles.topBarTarjeta}>
				<Image source={imagen} style={Styles.imagen} />
				<View style={Styles.tarjetaBottom}>
					<Text style={[Styles.tarjetaName, {color: 'black'}]}>{nombre}</Text>
				</View>
			</View>
			<View style={{padding: 10, flex: 1, alignItems: 'center', justifyContent: 'center'}}>
				<Text style={[Styles.tarjetaBottom]} numberOfLines={4} adjustsFontSizeToFit>{descripcion}</Text>
			</View>
		</Pressable>
	)
}