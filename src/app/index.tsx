import { View } from "react-native";
import { Tarjeta } from "../components/Tarjeta";
import { Styles } from "../styles/Styles";

export default function Index() {
  // Había que agregar la propiedad 'descripcion' a cada integrante del equipo o si no todos ibamos
  // a tener el mismo texto mmmmmmmmmmeeeeeeeekkkouuuus
  const tarjetas = [
    { 
      nombre: 'Alan', 
      imagen: require('../assets/image/alan.jpeg'),
      descripcion: 'el groupleader, el que se encarga de conquistar a las nenas y hacer back-end del bueno'
    },
    { 
      nombre: 'Ivan', 
      imagen: require('../assets/image/ivan.jpeg'),
      descripcion: 'desarrollador de Finbalance en back-end, front-end, diseño, base de datos y catador de cheves profesional' 
    },
    { 
      nombre: 'Diego', 
      imagen: require('../assets/image/prueba.png'),
      descripcion: 'es la definicion de Lo Sano' 
    },
    { 
      nombre: 'Tony', 
      imagen: require('../assets/image/prueba.png'),
      descripcion: 'te va a preguntar si andas wixi wixi' 
    },
    { 
      nombre: 'Paul', 
      imagen: require('../assets/image/prueba.png'),
      descripcion: 'actor sexy e inspiracion para la creacion del superheroe Miles Morales' 
    }
  ];

  return (
    <View style={Styles.inicio}>
      {/*Ahora leemos item.descripcion pa que cada quien tenga la suya */}
      {tarjetas.map((item, index) => (
        <Tarjeta 
          key={index} 
          nombre={item.nombre} 
          descripcion={item.descripcion}
          imagen={item.imagen} 
        />
      ))}
    </View>
  );
}