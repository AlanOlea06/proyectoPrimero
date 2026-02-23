import { StyleSheet } from 'react-native';


export const Styles = StyleSheet.create({
    inicio:{
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center'
    },
    ines: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        backgroundColor : '#333232',
    },
    tarjeta: {
        backgroundColor: '#4da36e',
        width: '30%',
        borderRadius: 20,
        margin: 10,
        overflow: 'hidden',
        fontFamily: 'Open Sans',
    },
    topBarTarjeta: {
        display: 'flex',
        flexDirection: 'row',
        backgroundColor: '#d92626e6',
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
        width: 400,
        height: 250,
        borderRadius: 20,
        margin: 10,
    },


});