import { View } from "react-native";
import { Tarjeta } from "../components/Tarjeta";

export default function Index() {
  return (
    <View style={{flex: 1, flexDirection: 'row'}}>
      <Tarjeta nombre="Tarjeta 1" descripcion="Esta es la descripción de la tarjeta 1" />
      <Tarjeta nombre="Tarjeta 2" descripcion="Esta es la descripción de la tarjeta 2" />
      <Tarjeta nombre="Tarjeta 3" descripcion="Esta es la descripción de la tarjeta 3" />
      <Tarjeta nombre="Tarjeta 4" descripcion="Esta es la descripción de la tarjeta 4" />
    </View>
  );
}
