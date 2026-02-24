import { View } from "react-native";
import { diccionarioEquipo } from "../components/shared/datosEquipo";
import { Tarjeta } from "../components/Tarjeta";
import { Styles } from "../styles/Styles";


export default function Index() {
  // Aquí es donde Metro Bundler verá los require() y empaquetará las imágenes
  const tarjetas = Object.values(diccionarioEquipo);

  return (
    <View style={Styles.inicio}>
      {/* 2. Ahora iteramos sobre los objetos ("persona") en lugar de solo strings */}
      {tarjetas.map((persona, index) => (
        <Tarjeta 
          key={index} 
          nombre={persona.nombre} // Sacamos el nombre del objeto
          descripcion={persona.descripcion} 
          imagen={persona.imagen} // Le pasamos la imagen ya requerida a tu componente
        />
      ))}
    </View>
  );
}

