import { StyleSheet } from 'react-native';

export const Styles = StyleSheet.create({
    // Mi Layout
    mainContainer: {
        flex: 1,
        backgroundColor: '#000000', // Clean white background
    },
    scrollContent: {
        padding: 25,
        paddingBottom: 100, // Ponemos espacio extra al final para que la barra no tape nada
    },
    section: {
        marginBottom: 25,
    },

    // Header
    headerContainer: {
        flexDirection: 'row', 
        backgroundColor: '#0b006b', 
        paddingTop: 45,
        paddingBottom: 50,
        paddingHorizontal: 20, 
        alignItems: 'center', 
        elevation: 10,              // Shadow for Android
        shadowColor: "#000",        // Shadow for iOS
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 5,
    },
    image: {
        width: 180,
        height: 180,
        marginRight: 20, 
    },
    textContainer: {
        flex: 1, // Hace que los textos tomen todo el espacio restante
    },
    headerName: {
        fontSize: 40,
        fontWeight: 'bold',
        color: '#ffffff',
        marginBottom: 5,
        fontFamily: 'OdorMeanChey',
    },
    headerBio: {
        color: '#b2dfdb',
        textAlign: 'left',
        fontSize: 20,
        lineHeight: 25,
        paddingBottom: 10,
    },

    // Tipografía
    subHeader: {
        color: '#ffffff', 
        fontSize: 30,
        fontWeight: 'bold',
        letterSpacing: 1.5,
        textTransform: 'uppercase',
        marginBottom: 8,
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#9ddef1', // Dark gray/black
        marginBottom: 15,
    },

    // Cards
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

    // List Items
    listItem: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 15,
        backgroundColor: '#f5f5f5', // Light gray bubble
        padding: 15,
        borderRadius: 12,
    },
    listIcon: {
        fontSize: 24,
        marginRight: 15,
    },
    listTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#37474f',
    },
    listText: {
        color: '#78909c',
        fontSize: 18,
        marginTop: 2,
    },

    // --- SKILLS (The Tags) ---
    skillRow: {
        flexDirection: 'row',
        flexWrap: 'wrap', // Allows skills to drop to next line
        marginBottom: 20,
    },
    skillTag: {
        backgroundColor: '#e0f2f1', // Light Teal bg
        color: '#00695c',           // Dark Teal text
        paddingVertical: 8,
        paddingHorizontal: 16,
        borderRadius: 20,
        fontWeight: 'bold',
        marginRight: 10,
        marginBottom: 10,
        overflow: 'hidden',
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
        marginHorizontal: 20, // Space between rows
        resizeMode: 'cover', // Ensures image fills the square without distortion
    },

    // Boton del Insta
    socialButton: {
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
    }
});