import { useLocalSearchParams } from "expo-router";
import React from "react";
import { Linking, Pressable, Image, ScrollView, Text, View } from "react-native";
import { Styles } from "../EquipoStyles/Diego";



export default function Diego() {
    const { nombre, mode = 'personal' } = useLocalSearchParams();

    return (
        <View style={Styles.mainContainer}>
            
            {/* CHANGE: We removed the Header from here. 
               Now the only direct child is the ScrollView.
            */}
            
            <ScrollView 
                style={{ flex: 1 }} 
                contentContainerStyle={{ paddingBottom: 100 }} // Space for nav bar
            >
                
                {/* 1. HEADER (Now inside the ScrollView) 
                   Since it is inside, it will scroll up and disappear 
                   when you move down.
                */}
                <View style={Styles.headerContainer}>
                    <Image 
                        source={require('../../assets/image/Diego.jpeg')} 
                        style={Styles.avatar} 
                    />
                    <Text style={Styles.headerName}>{nombre || "Diego"}</Text>
                    <Text style={Styles.headerBio}>
                        Soy Un Ticsito no tan Ticsito{'\n'}
                        
                    </Text>
                </View>

                {/* 2. THE CONTENT SECTIONS */}
                <View style={{ padding: 25 }}> 
                
                    {mode === 'personal' && (
                        <View style={Styles.section}>
                            <Text style={Styles.subHeader}>LIFESTYLE</Text>
                            <Text style={Styles.title}>Personal Tastes</Text>
                            
                            <View style={Styles.cardBeige}>
                                <Text style={Styles.cardTitle}>Soy el Rayo Mc Queen</Text>
                                <Text style={Styles.cardText}>
                                    "Soy Veloz"
                                </Text>
                            </View>

                            <View style={Styles.listItem}>
                                
                                <View>
                                    <Text style={Styles.listTitle}>Mi Animal Favorito</Text>
                                    <Text style={Styles.listText}>Mapache</Text>
                                </View>
                            </View>

                            <View style={Styles.listItem}>
                                
                                <View>
                                    <Text style={Styles.listTitle}>La mejor Pelicula del mundo</Text>
                                    <Text style={Styles.listText}>Cars</Text>
                                </View>
                            </View>
                            
                            <View style={Styles.listItem}>
                                
                                <View>
                                    <Text style={Styles.listTitle}>Mi artista fav</Text>
                                    <Text style={Styles.listText}>Paulo Londra</Text>
                                </View>
                            </View>

                             <View style={Styles.listItem}>
                                
                                <View>
                                    <Text style={Styles.listTitle}>Mi comida Fav</Text>
                                    <Text style={Styles.listText}>Hamburguesas</Text>
                                </View>
                            </View>

                             <View style={Styles.listItem}>
                                
                                <View>
                                    <Text style={Styles.listTitle}>Mascotas </Text>
                                    <Text style={Styles.listText}>Tengo uno perrito French Poodle</Text>
                                </View>
                            </View>

                             <View style={Styles.listItem}>
                                
                                <View>
                                    <Text style={Styles.listTitle}>Hobbies</Text>
                                    <Text style={Styles.listText}>Natacion, Futbol, videojuegos</Text>
                                </View>
                            </View>
                                <View style={Styles.listItem}>
            
                                <View>
                                    <Text style={Styles.listTitle}>Siempre del mejor Equipo</Text>
                                    <Text style={Styles.listText}>FC Barcelona</Text>
                                </View>
                            </View>

                            
                            

                            {/* --- NUEVA SECCIÓN: REDES SOCIALES --- */}
                        <View style={{marginTop: 20}}>
                             <Text style={Styles.subHeader}>CONNECT</Text>
                             <Text style={Styles.cardTitle}>Sigueme si quieres</Text>
                             
                             <View style={Styles.socialRow}>
                                {/* Botón de Instagram */}
                                <View style={Styles.galleryGrid}>
                                <Image source={require('../../assets/image/Insta.jpeg')} style={Styles.galleryImage} />
                                
                            </View>
                                    <Text style={{fontSize: 18}}>📸</Text>
                                    <Text style={Styles.socialText}>Instagram</Text>
                                
                             </View>
                        </View>
                        </View>
                    )}

                    {mode === 'professional' && (
                        <View style={Styles.section}>
                            <Text style={Styles.subHeader}>CAREER</Text>
                            <Text style={Styles.title}>Professional Skills</Text>
                            
                            <View style={Styles.skillRow}>
                                <Text style={Styles.skillTag}>React Native</Text>
                                <Text style={Styles.skillTag}>Python</Text>
                                <Text style={Styles.skillTag}>Diseño</Text>
                                <Text style={Styles.skillTag}>Animate</Text>
                                <Text style={Styles.skillTag}>Figma</Text>
                                <Text style={Styles.skillTag}>Photoshop</Text>
                                <Text style={Styles.skillTag}>Adobe Ilustrator</Text>
                            </View>

                            <View style={Styles.listItem}>
                                <Text style={Styles.listIcon}>🇺🇸</Text>
                                <View>
                                    <Text style={Styles.listTitle}>English Level</Text>
                                    <Text style={Styles.listText}> A2+ (Maybe)</Text>
                                </View>
                            </View>

                             <View style={Styles.listItem}>
                                <Text style={Styles.listIcon}>🇺🇸</Text>
                                <View>
                                    <Text style={Styles.listTitle}>Diseñador</Text>
                                    <Text style={Styles.listText}>Diseño del cualquier cosa</Text>
                                </View>
                            </View>
                        </View>
                    )}

                    {mode === 'pictures' && (
                        <View style={Styles.section}>
                            <Text style={Styles.title}>Mis Animales Espirituales</Text>
                            
                            <View style={Styles.galleryGrid}>
                                <Image source={require('../../assets/image/Gatos.jpeg')} style={Styles.galleryImage} />
                                <Image source={require('../../assets/image/Gato3.jpeg')} style={Styles.galleryImage} />
                                <Image source={require('../../assets/image/Gato2.jpeg')} style={Styles.galleryImage} />
                                <Image source={require('../../assets/image/mapache.jpeg')} style={Styles.galleryImage} />
                                <Image source={require('../../assets/image/mapache1.jpeg')} style={Styles.galleryImage} />
                                <Image source={require('../../assets/image/Gato4.jpeg')} style={Styles.galleryImage} />
                                <Image source={require('../../assets/image/Gato5.jpeg')} style={Styles.galleryImage} />
                                <Image source={require('../../assets/image/Gato6.jpeg')} style={Styles.galleryImage} />
                                <Image source={require('../../assets/image/Gato7.jpeg')} style={Styles.galleryImage} />
                                <Image source={require('../../assets/image/mapache3.jpeg')} style={Styles.galleryImage} />
                                
                            </View>
                        </View>
                    )}
                </View>

            </ScrollView>
        </View>
    );
}