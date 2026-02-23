import { useLocalSearchParams } from "expo-router";
import { Image, Text, View, } from "react-native";
import { Styles } from "../EquipoStyles/PaStyles";
export const Persona = () => {
    const params = useLocalSearchParams();
    console.log(params);
    return ( 
        <View style={Styles.ines}>
            <Text style= {{color: "white", fontSize: 20}}>{params.nombre}
                
            </Text>

            <Image source={require(`../../assets/image/maya.png`)} style={Styles.imagen} />
            <Image source={require(`../../assets/image/PINTA.png`)} style={Styles.imagen} />
            <Image source={require(`../../assets/image/Rayitas (1).png`)} style={Styles.imagen} />
            <Image source={require(`../../assets/image/Flora.png`)} style={Styles.imagen} />
            <Image source={require(`../../assets/image/boris.png`)} style={Styles.imagen} />
            <Image source={require(`../../assets/image/lola.png`)} style={Styles.imagen} />
            <Text>{params.descripcion}</Text>
        </View>
    )
}

export default Persona;