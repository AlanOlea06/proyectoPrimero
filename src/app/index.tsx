import { View } from "react-native";
import { Tarjeta } from "../components/Tarjeta";
import { Styles } from "../styles/Styles";

export default function Index() {
  // 1. Transformamos el arreglo de strings a un arreglo de objetos
  // Aquí es donde Metro Bundler verá los require() y empaquetará las imágenes
  const tarjetas = [
    { nombre: 'Alan', imagen: require('../assets/image/alan.jpeg') },
    { nombre: 'Ivan', imagen: require('../assets/image/prueba.png') },
    { nombre: 'Diego', imagen: require('../assets/image/prueba.png') },
    { nombre: 'Tony', imagen: require('../assets/image/prueba.png') },
    { nombre: 'Paul', imagen: require('../assets/image/prueba.png') }
  ];

  return (
    <View style={Styles.inicio}>
      {/* 2. Ahora iteramos sobre los objetos ("item") en lugar de solo strings */}
      {tarjetas.map((item, index) => (
        <Tarjeta 
          key={index} 
          nombre={item.nombre} // Sacamos el nombre del objeto
          descripcion={`Esta es la descripción de la tarjeta ${index + 1}`} 
          imagen={item.imagen} // Le pasamos la imagen ya requerida a tu componente
        />
      ))}
    </View>
  );
}