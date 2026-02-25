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
                        Soy Jugador profesional de Obbys en Roblox{'\n'}
                        
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
                                    <Text style={Styles.listText}>Tengo uno perrito French Pool</Text>
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
                                    <Text style={Styles.listTitle}>Mi Profe Fav</Text>
                                    <Text style={Styles.listText}>Javier</Text>
                                </View>
                            </View>

                              <View style={Styles.listItem}>
                                <Text style={Styles.listIcon}>🎤</Text>
                                <View>
                                    <Text style={Styles.listTitle}>My Favourite bands and Singers</Text>
                                    <Text style={Styles.listText}>Linkin Park, Red Hot Chilli Peppers, Kevin Karl, Ed Maveric</Text>
                                </View>
                            </View>

                            {/* --- NUEVA SECCIÓN: REDES SOCIALES --- */}
                        <View style={{marginTop: 20}}>
                             <Text style={Styles.subHeader}>CONNECT</Text>
                             <Text style={Styles.cardTitle}>Follow Me  Please</Text>
                             
                             <View style={Styles.socialRow}>
                                {/* Botón de Instagram */}
                                <Pressable 
                                    style={Styles.socialButton} 
                                    onPress={() => Linking.openURL('https://www.instagram.com/dan_f5018')}
                                >
                                    <Text style={{fontSize: 18}}>📸</Text>
                                    <Text style={Styles.socialText}>Instagram</Text>
                                </Pressable>

                                {/* Botón de GitHub (o lo que quieras) */}
                                <Pressable 
                                    style={Styles.socialButton}
                                    onPress={() => Linking.openURL('https://github.com/DanielFlores235')}
                                >
                                    <Text style={{fontSize: 18}}>🐙</Text>
                                    <Text style={Styles.socialText}>GitHub</Text>
                                </Pressable>
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
                                <Text style={Styles.skillTag}>C#</Text>
                                <Text style={Styles.skillTag}>SQL</Text>
                                <Text style={Styles.skillTag}>Pseint</Text>
                                <Text style={Styles.skillTag}>Figma</Text>
                                <Text style={Styles.skillTag}>Draw.io</Text>
                                <Text style={Styles.skillTag}>Adobe Ilustrator</Text>
                                <Text style={Styles.skillTag}>Adobe After Efects</Text>
                                <Text style={Styles.skillTag}>AutoCad</Text>
                                <Text style={Styles.skillTag}>SolidSworks</Text>
                                <Text style={Styles.skillTag}>Artist</Text>
                            </View>

                            <View style={Styles.listItem}>
                                <Text style={Styles.listIcon}>🇺🇸</Text>
                                <View>
                                    <Text style={Styles.listTitle}>English Level</Text>
                                    <Text style={Styles.listText}>B2 (In Progress)</Text>
                                </View>
                            </View>

                             <View style={Styles.listItem}>
                                <Text style={Styles.listIcon}>🇺🇸</Text>
                                <View>
                                    <Text style={Styles.listTitle}>Graphic Designer</Text>
                                    <Text style={Styles.listText}>Proffesional Designer</Text>
                                </View>
                            </View>
                        </View>
                    )}

                    {mode === 'pictures' && (
                        <View style={Styles.section}>
                            <Text style={Styles.title}>Gallery 📸</Text>
                            
                            <View style={Styles.galleryGrid}>
                                <Image source={require('../../assets/image/Gatos.jpeg')} style={Styles.galleryImage} />
                                <Image source={require('../../assets/image/Gato3.jpeg')} style={Styles.galleryImage} />
                                <Image source={require('../../assets/image/Gato2.jpeg')} style={Styles.galleryImage} />
                                <Image source={require('../../assets/image/mapache.jpeg')} style={Styles.galleryImage} />
                                <Image source={require('../../assets/image/mapache1.jpeg')} style={Styles.galleryImage} />
                                <Image source={require('../../assets/image/Gato4.jpeg')} style={Styles.galleryImage} />
                                
                            </View>
                        </View>
                    )}
                </View>

            </ScrollView>
        </View>
    );
}