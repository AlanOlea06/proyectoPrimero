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
     opacity: 0.8,
        borderRadius: 20,
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
        
        backgroundColor: '#00404d',
        margin : 15,

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
        flexWrap: 'wrap',
        flexDirection: 'row',
        elevation: 10,               // Shadow for Android
        shadowColor: "#36373b",         // Shadow for iOS
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 5,
        height: 200,

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
    }, socialButton: {
        backgroundColor: '#ffffff', // Color oscuro elegante
        paddingVertical: 12,
        paddingHorizontal: 10,
        width: 90,
        height: 50,
        borderRadius: 25,
        flexDirection: 'row',
        alignItems: 'center',
        elevation: 3, // Sombra suave
    },
    socialText: {
        color: '#000000',
        fontWeight: 'bold',
        fontSize: 14,
    },
    cardChivas: {
        backgroundColor: '#ffffff',
        padding: 20,
        borderRadius: 15,
        marginBottom: 20,
        borderLeftWidth: 5,
        borderLeftColor: '#0e0cb4',
    },
    cardTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#08002c',
        marginBottom: 5,
    },
    cardText: {
        color: '#5d4037',
        fontSize: 18,
        fontStyle: 'italic',
        lineHeight: 22,
    },
    section: {
        marginBottom: 25,
    },
    galleryGrid: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        width: '100%',
        height: '100%',
    },
    galleryImage: {
        width: 200,   // Two images per row (48% + 48% + space = 100%)
        height: 200,    // Fixed height for uniformity
        borderRadius: 15,
        marginBottom: 20,
        marginHorizontal: 20, 
        resizeMode: 'cover', 
    },
});