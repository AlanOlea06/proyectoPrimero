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
        backgroundColor: "#0b9387",
        width: '30%',
        height: '50%',
        borderRadius: 20,
        margin: 10,
        overflow: 'hidden',
        fontFamily: 'Odor Mean Chey, serif',
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
        margin: 'auto',
        fontFamily: 'Odor Mean Chey, serif',
        fontSize: 20,
    },
    imagen:{
        width: 100,
        height: '100%',
    },

});