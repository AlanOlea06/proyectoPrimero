import { StyleSheet } from 'react-native';


export const Styles = StyleSheet.create({
    inicio:{
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center'
    },
    tarjeta: {
        backgroundColor: '#4da36e',
        width: '30%',
        height: '50%',
        borderRadius: 20,
        margin: 10,
        overflow: 'hidden',
        fontFamily: 'Open Sans',
    },
    topBarTarjeta: {
        display: 'flex',
        flexDirection: 'row',
        backgroundColor: '#ffffff',
        width: '100%',
        height: '40%',
    },
    tarjetaBottom: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
        height: "100%",
        margin: 'auto'
    },
    imagen:{
        width: 500,
        height: 300,
        borderRadius: 20,
    },

});