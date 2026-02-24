import React from "react";
import { Image, Text, View } from "react-native";
import { diccionarioEquipo } from "../../components/shared/datosEquipo";
import { Styles } from "../EquipoStyles/Alan";

export const Alan = () => {
    const Alan = diccionarioEquipo.Alan;

    return (
        <View style={Styles.content}>
            <Image source={Alan.imagen} style={Styles.imagen} />
            <Text style={Styles.DescripcionLarga}>{Alan.DescripcionLarga}</Text>
        </View>
    )
}

export default Alan;