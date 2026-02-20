import { View } from "react-native";
import { Tarjeta } from "../components/Tarjeta";
import { Styles } from "../styles/Styles";

export default function Index() {
  const tarjetas = ['Alan', 'Ivan', 'Diego', 'Tony', 'Paul']

  return (
    <View style={Styles.inicio}>
      {tarjetas.map((nombre, index) => (
        <Tarjeta key={index} nombre={nombre} descripcion={`Esta es la descripción de la tarjeta ${index + 1}`} />
      ))}
    </View>
  );
}
