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
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.6,
        shadowRadius: 15,
        elevation: 18,
    },

    mainContainer: {
        flex: 1,
        backgroundColor: '#ffffff', // Clean white background
    },

    tarjetaName: {
        fontSize: 35,
        fontWeight: 'bold',
        color: 'black',
        fontFamily: 'OdorMeanChey',
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
        padding: 35,
        height: "100%",
        margin: 'auto',
        fontFamily: 'OdorMeanChey',
        fontSize: 25,
    },
    imagen:{
        width: 100,
        height: '100%',
    },
}
);