import { StyleSheet } from 'react-native';

export const Styles = StyleSheet.create({

    ines: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',

        backgroundColor : '#333232',
    },
    imagen:{
        width: 400,
        height: 250,
        borderRadius: 20,
        margin: 10,
    },
    // reusable styles for header/subcomponents
    content: {
        flex: 1,
        alignItems: 'center',
    },
    nombre: {
        flex: 1,
        fontSize: 30,
        margin: 20,
    },
    imageWrapper: {
        position: 'relative' as any, 
        margin: 10,
    },
    //el fondo para  el hover
    overlay: {
        position: 'absolute' as any,
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.6)',
        alignItems: 'center',
        justifyContent: 'center',
    },
    overlayText: {
        color: 'white',
        fontSize: 18,
        textAlign: 'center' as any,
        padding: 5,
    },
    fuente:{
        fontFamily: 'Odor Mean Chey, serif',
        color: 'white',
        fontSize: 20,
        textAlign: 'center' ,
        margin: 10,
        textAlignVertical: 'center' ,
        textOverflow: 'ellipsis' ,
        flexWrap: 'wrap',

        
        
    },
    parrafo:{
        width: 420,
        height: 100,
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 10, 
    }

});