import { StyleSheet } from 'react-native';

export const Styles = StyleSheet.create({
    // --- MAIN LAYOUT ---
    mainContainer: {
        flex: 1,
        backgroundColor: '#ffffff', // Clean white background
    },
    scrollContent: {
        padding: 25,
        paddingBottom: 100, // Extra space at bottom so Navigation Bar doesn't cover content
    },
    section: {
        marginBottom: 25,
    },

    // --- HEADER HERO (The Dark Teal Top) ---
    headerContainer: {
        backgroundColor: '#004d40', // Professional Dark Teal
        paddingTop: 10,
        paddingBottom: 5,
        paddingHorizontal: 50,
        alignItems: 'center',
        elevation: 10,               // Shadow for Android
        shadowColor: "#000",         // Shadow for iOS
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 5,
    },
    avatar: {
        width: 120,
        height: 120,
        borderRadius: 60, // Perfect circle
        borderWidth: 4,
        borderColor: '#ffffff',
        marginBottom: 15,
    },
    headerName: {
        fontSize: 32,
        fontWeight: 'bold',
        color: '#ffffff',
        marginBottom: 5,
        // fontFamily: 'OdorMeanChey', // Uncomment if you want the custom font
    },
    headerBio: {
        color: '#b2dfdb', // Light mint text
        textAlign: 'center',
        fontSize: 14,
        lineHeight: 20,
        maxWidth: '85%',
    },

    // --- TYPOGRAPHY ---
    subHeader: {
        color: '#00796b', // Teal accent color
        fontSize: 12,
        fontWeight: 'bold',
        letterSpacing: 1.5,
        textTransform: 'uppercase',
        marginBottom: 8,
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#102027', // Dark gray/black
        marginBottom: 15,
    },

    // --- CARDS (The Beige Box) ---
    cardBeige: {
        backgroundColor: '#fff3e0', // Soft Beige
        padding: 20,
        borderRadius: 15,
        marginBottom: 20,
        borderLeftWidth: 5,
        borderLeftColor: '#ff6f00', // Orange accent line
    },
    cardTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#e65100',
        marginBottom: 5,
    },
    cardText: {
        color: '#5d4037',
        fontSize: 15,
        fontStyle: 'italic',
        lineHeight: 22,
    },

    // --- LIST ITEMS (The Rows) ---
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
        fontSize: 16,
        fontWeight: 'bold',
        color: '#37474f',
    },
    listText: {
        color: '#78909c',
        fontSize: 14,
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

    // --- GALLERY GRID (Updated for your 17+ Photos) ---
    galleryGrid: {
        flexDirection: 'row',
        flexWrap: 'wrap',            // This makes them wrap to new lines
        justifyContent: 'space-between', // Pushes images to left and right edges
        width: '100%',
    },
    galleryImage: {
        width: 200,   // Two images per row (48% + 48% + space = 100%)
        height: 200,    // Fixed height for uniformity
        borderRadius: 15,
        marginBottom: 20,
        marginHorizontal: 20, // Space between rows
        resizeMode: 'cover', // Ensures image fills the square without distortion
    },
    // ... (el resto de tus estilos anteriores)

    // --- SOCIAL MEDIA ---
    socialRow: {
        flexDirection: 'row',
        gap: 15, // Espacio entre botones
        marginTop: 10,
        marginBottom: 20,
    },
    socialButton: {
        backgroundColor: '#263238', // Color oscuro elegante
        paddingVertical: 12,
        paddingHorizontal: 20,
        borderRadius: 25,
        flexDirection: 'row',
        alignItems: 'center',
        elevation: 3, // Sombra suave
    },
    socialText: {
        color: '#ffffff',
        fontWeight: 'bold',
        fontSize: 14,
        marginLeft: 8, // Espacio entre el icono y el texto
    }
});


export default Styles;