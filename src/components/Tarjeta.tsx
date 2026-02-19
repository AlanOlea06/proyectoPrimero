import React from "react";
import { Text, View } from "react-native";
import { Styles } from "../styles/Styles";

interface TarjetaProps {
	nombre: string;
	descripcion: string;
}

export const Tarjeta = (props: TarjetaProps) => {
	return (
		<View style={Styles.tarjeta}>
			<Text>
				{props.nombre}: {props.descripcion}
			</Text>
		</View>
	)
}