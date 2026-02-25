import { StyleSheet } from 'react-native';

export const Styles = StyleSheet.create({

    ines: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
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
        backgroundColor: '#333444',
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
        fontFamily: 'OdorMeanChey',
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
    },
    avatar: {
        width: 180,
        height: 180,
        marginBottom: 30,

        
        borderRadius: 90, // Perfect circle
        borderWidth: 1,
        borderColor: '#ffffff',
    },
     headerName: {
        fontSize: 32,
        textOverflow: 'ellipsis',
        textAlign: 'center',
        fontWeight: 'bold',
        color: '#ffffff',
        marginBottom: 5,
       

        // fontFamily: 'OdorMeanChey', // Uncomment if you want the custom font
    },
    headerBio: {
        color: '#b2dfdb', // Light mint text

    },
    headerContainer: {
        backgroundColor: '#00404d', // Professional Dark Tea
        paddingTop: 10,
        paddingBottom: 5,
        paddingHorizontal: 50,
        flexWrap: 'wrap',
        elevation: 10,               // Shadow for Android
        shadowColor: "#36373b",         // Shadow for iOS
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 5,
},
 subHeader: {
        color: '#00796b', // Teal accent color
        fontSize: 12,
        fontWeight: 'bold',
        letterSpacing: 1.5,
        textTransform: 'uppercase',
        marginBottom: 8,
    },listIcon: {
        fontSize: 24,
        marginRight: 15,
    },
    listTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#37474f',
    },
    listText: {
        color: '#78909c',
        fontSize: 14,
        marginTop: 2,
    },
    listItem: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 15,
        backgroundColor: '#cff0ea', // Light gray bubble
        padding: 15,
        borderRadius: 12,
    },
});