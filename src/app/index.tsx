import { ScrollView, View } from "react-native";
import { diccionarioEquipo } from "../components/shared/datosEquipo";
import { Tarjeta } from "../components/Tarjeta";
import { Styles } from "../styles/Styles";


export default function Index() {
  // Aquí es donde Metro Bundler verá los require() y empaquetará las imágenes
  const tarjetas = Object.values(diccionarioEquipo);

  return (
    <View style={Styles.mainContainer}>
      <ScrollView 
        style={{ flex: 1 }} 
        contentContainerStyle={{ paddingBottom: 100 }}
      >
        <View style={Styles.inicio}>
          {/* Iteramos sobre los objetos ("persona") en lugar de solo strings */}
          {tarjetas.map((persona, index) => (
            <Tarjeta 
              key={index} 
              nombre={persona.nombre}
              descripcion={persona.descripcion} 
              imagen={persona.imagen}
            />
          ))}
        </View>
      </ScrollView>
    </View>
  );
}

