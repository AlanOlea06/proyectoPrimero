import { useLocalSearchParams } from "expo-router";
import { Image, Text, View, } from "react-native";
import { Styles } from "../EquipoStyles/PaStyles";
export const Paul = () => {
    const params = useLocalSearchParams();
    console.log(params);
    return ( 
        <View>
            <Text>{params.nombre}</Text>   
            <Image source={require(`../../assets/image/maya.png`)} style={Styles.imagen} />
            <Image source={require(`../../assets/image/maya.png`)} style={Styles.imagen} />
            <Image source={require(`../../assets/image/maya.png`)} style={Styles.imagen} />
            <Image source={require(`../../assets/image/maya.png`)} style={Styles.imagen} />
            <Image source={require(`../../assets/image/maya.png`)} style={Styles.imagen} />
            <Image source={require(`../../assets/image/maya.png`)} style={Styles.imagen} />
            <Text>{params.descripcion}</Text>
        </View>
    )
}

export default Paul;