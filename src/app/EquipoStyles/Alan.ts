import { StyleSheet } from 'react-native';


export const Styles = StyleSheet.create({
    content: {
        flex: 1,
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
        //marginBottom: 5,
    },
    constant: {
        marginBottom: 20,
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

    }
});

export default Styles;