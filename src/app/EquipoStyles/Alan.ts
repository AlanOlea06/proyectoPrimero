import { StyleSheet } from 'react-native';


export const Styles = StyleSheet.create({
    content: {
        flex: 1,
        paddingTop: 0,
        padding: 20,
    },
    imagen: {
        width: 400,
        height: 200,
        margin: '2%',
        borderRadius: 5
    },
    DescripcionLarga: {
        marginTop: 20,
        fontSize: 16,
    },
    habilidades: {
        color: '#0b9387',
        backgroundColor: '#3a888362',
        borderRadius: 5,
        fontWeight: 'bold',
        overflow: 'hidden',
        alignSelf: 'flex-start', // Hace que el ancho sea solo el del contenido
        paddingHorizontal: 10,   // Da espacio a los lados del texto
        paddingVertical: 2,      // Da espacio arriba y abajo
        marginBottom: 5,
        marginRight: 10,
    },
    parrafo: {
        marginTop: 10,
        fontSize: 16,
    },
    contenedorParrafo: {
        width: '100%',
        backgroundColor: '#3a888362',
        padding: 10,
        borderRadius: 5,
        marginTop: 10 
    },
    constant: {
        marginBottom: 5,
        width: '100%',
        backgroundColor: '#0b9387',
        flexDirection: 'row',
        color: '#ffffff',
        fontSize: 18,
    },
    textConstant: {
        flex: 1,
        justifyContent: 'space-around',
        alignSelf: 'center',
        paddingLeft: 10,
        width: '80%',
        height: '80%',

    },
    text: {
        color: '#ffffff',
        fontSize: 18,
        fontWeight: 'bold',
    },

    button: {
  backgroundColor: '#0b9387',  // or whatever color you use
  paddingVertical: 10,
  paddingHorizontal: 16,
  borderRadius: 8,
  marginBottom: 10,
},
buttonText: {
  color: '#fff',
  fontSize: 14,
  fontWeight: '600',
  flexShrink: 1,           // key: lets text shrink instead of overflow
    textAlign: 'center',    // center text if it wraps to multiple lines
},


});

export default Styles;
{/*button: {
        backgroundColor: '#0b9387',
        padding: 10,
        borderRadius: 5,
        marginTop: 10,
        height: 10,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',

    },*/}