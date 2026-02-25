import { useLocalSearchParams } from "expo-router";
import React from "react";
import { Linking, Pressable, Image, ScrollView, Text, View } from "react-native";
import { Styles } from "../EquipoStyles/Tony"; 
import { AntDesign, Entypo } from '@expo/vector-icons';


export default function Tony() {
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
                        source={require('../../assets/image/Tony.jpeg')} 
                        style={Styles.avatar} 
                    />
                    <Text style={Styles.headerName}>{nombre || "Tony"}</Text>
                    <Text style={Styles.headerBio}>
                        Creative Developer & Gym Rat 🏋️‍♂️.{'\n'}
                        "Codes in C#, I'll love you Forever."
                    </Text>
                </View>

                {/* 2. THE CONTENT SECTIONS */}
                <View style={{ padding: 25 }}> 
                
                    {mode === 'personal' && (
                        <View style={Styles.section}>
                            <Text style={Styles.subHeader}>LIFESTYLE</Text>
                            <Text style={Styles.title}>Personal Tastes</Text>
                            
                            <View style={Styles.cardBeige}>
                                <Text style={Styles.cardTitle}>Favorite Quote 🏴‍☠️</Text>
                                <Text style={Styles.cardText}>
                                    "My magic is not giving up"
                                </Text>
                            </View>

                            <View style={Styles.listItem}>
                                <Text style={Styles.listIcon}>📺</Text>
                                <View>
                                    <Text style={Styles.listTitle}>Top Anime</Text>
                                    <Text style={Styles.listText}>One Piece,</Text>
                                </View>
                            </View>

                            <View style={Styles.listItem}>
                                <Text style={Styles.listIcon}>📺</Text>
                                <View>
                                    <Text style={Styles.listTitle}>Top Movie</Text>
                                    <Text style={Styles.listText}>Harry Potter</Text>
                                </View>
                            </View>
                            
                            <View style={Styles.listItem}>
                                <Text style={Styles.listIcon}>📺</Text>
                                <View>
                                    <Text style={Styles.listTitle}>Best Character</Text>
                                    <Text style={Styles.listText}>Severus Snape</Text>
                                </View>
                            </View>

                             <View style={Styles.listItem}>
                                <Text style={Styles.listIcon}>🧑‍🦰</Text>
                                <View>
                                    <Text style={Styles.listTitle}>My Brothers</Text>
                                    <Text style={Styles.listText}>David Flores, Oscar, Andres Soid Flores</Text>
                                </View>
                            </View>

                             <View style={Styles.listItem}>
                                <Text style={Styles.listIcon}>👩‍🦰</Text>
                                <View>
                                    <Text style={Styles.listTitle}>My Sister </Text>
                                    <Text style={Styles.listText}>Pricila</Text>
                                </View>
                            </View>

                             <View style={Styles.listItem}>
                                <Text style={Styles.listIcon}>❤️</Text>
                                <View>
                                    <Text style={Styles.listTitle}>My Friends</Text>
                                    <Text style={Styles.listText}>Alan, Paul, Litzy, Diego, Ivan, Alam Grandote, Brenda, Yahir, Pelon, Jesus, Edu</Text>
                                </View>
                            </View>
                            <View style={Styles.listItem}>
                                <Text style={Styles.listIcon}>🎵</Text>
                                <View>
                                    <Text style={Styles.listTitle}>Canciones Favoritas</Text>
                                    <Text style={Styles.listText}>She don't give a fo, Buscarte Lejos y BZRP de Milo J</Text>
                                </View>
                            </View>

                              <View style={Styles.listItem}>
                                <Text style={Styles.listIcon}>🎤</Text>
                                <View>
                                    <Text style={Styles.listTitle}>My Favourite bands and Singers</Text>
                                    <Text style={Styles.listText}>Duki, Linkin Park, Red Hot Chilli Peppers, Kevin Karl, Ed Maveric</Text>
                                </View>
                            </View>
                            

                            {/* --- NUEVA SECCIÓN: REDES SOCIALES --- */}
                       {/* --- SECCIÓN DE REDES Y MÚSICA --- */}
                        <View style={{marginTop: 20}}>
                             <Text style={Styles.subHeader}>CONNECT</Text>
                             <Text style={Styles.cardTitle}>Follow Me & Vibe 🎧</Text>
                             
                             {/* Fila 1: Redes Sociales */}
                             <View style={Styles.socialRow}>
                                <Pressable 
                                    style={Styles.socialButton} 
                                    onPress={() => Linking.openURL('https://www.instagram.com/dan_f5018')}
                                >
                                    <AntDesign name="instagram" size={24} color="white" />
                                    <Text style={Styles.socialText}>Instagram</Text>
                                </Pressable>

                                <Pressable 
                                    style={Styles.socialButton}
                                    onPress={() => Linking.openURL('https://github.com/DanielFlores235')}
                                >
                                    <AntDesign name="github" size={24} color="white" />
                                    <Text style={Styles.socialText}>GitHub</Text>
                                </Pressable>
                             </View>

                             {/* Fila 2: Spotify (Nuevo Botón) */}
                             <View style={Styles.socialRow}>
                                <Pressable 
                                    // Truco: Usamos un array [] para sobreescribir el color de fondo solo para este botón
                                    style={[Styles.socialButton, { backgroundColor: '#37474f', width: '100%' }]}
                                    onPress={() => Linking.openURL('https://open.spotify.com/track/4PTG3Z6ehGkBFwjybzWkR8')} // Link de "We Are!" (One Piece)
                                >
                                    <Entypo name="spotify" size={24} color="white" />
                                    <Text style={Styles.socialText}>My Favorite Song 🎵</Text>
                                </Pressable>
                             </View>

                             <View style={Styles.socialRow}>
                                <Pressable 
                                    // Truco: Usamos un array [] para sobreescribir el color de fondo solo para este botón
                                    style={[Styles.socialButton, { backgroundColor: '#37474f', width: '100%' }]}
                                    onPress={() => Linking.openURL('https://open.spotify.com/playlist/01yGP2T6zyXimoqWkl33yz?si=Hs7XPFx5ThCGDw9DOK8vhw')} // Link de "We Are!" (One Piece)
                                >
                                    <Entypo name="spotify" size={24} color="white" />
                                    <Text style={Styles.socialText}>Para Recordar A Mi EX 🎵</Text>
                                </Pressable>
                             </View>

                             <View style={Styles.socialRow}>
                                <Pressable 
                                    // Truco: Usamos un array [] para sobreescribir el color de fondo solo para este botón
                                    style={[Styles.socialButton, { backgroundColor: '#37474f', width: '100%' }]}
                                    onPress={() => Linking.openURL('https://open.spotify.com/track/1fLlRApgzxWweF1JTf8yM5?si=k1xB6KJlRHi2iSXIr9Z4mg')} // Link de "We Are!" (One Piece)
                                >
                                    <Entypo name="spotify" size={24} color="white" />
                                    <Text style={Styles.socialText}>Lo Mejor del Rock/Metal 🎵</Text>
                                </Pressable>
                             </View>

                             <View style={Styles.socialRow}>
                                <Pressable 
                                    // Truco: Usamos un array [] para sobreescribir el color de fondo solo para este botón
                                    style={[Styles.socialButton, { backgroundColor: '#37474f', width: '100%' }]}
                                    onPress={() => Linking.openURL('https://open.spotify.com/track/03a359wbiUsjN9h6yzXvmS?si=_bIB-cveTKuh7akUsAnx3g')} // Link de "We Are!" (One Piece)
                                >
                                    <Entypo name="spotify" size={24} color="white" />
                                    <Text style={Styles.socialText}>La Mejor Cancion de Duko 🎵</Text>
                                </Pressable>
                             </View>

                             <View style={Styles.socialRow}>
                                <Pressable 
                                    // Truco: Usamos un array [] para sobreescribir el color de fondo solo para este botón
                                    style={[Styles.socialButton, { backgroundColor: '#37474f', width: '100%' }]}
                                    onPress={() => Linking.openURL('https://open.spotify.com/playlist/3iQCEk1GikogqhCHUuzHds?si=UPuiECnJQW-AIadHoemfZA')} // Link de "We Are!" (One Piece)
                                >
                                    <Entypo name="spotify" size={24} color="white" />
                                    <Text style={Styles.socialText}>Musica Para Entrenar Pesado y al Fallo  🎵</Text>
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
                                <Text style={Styles.skillTag}>Solidworks</Text>
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
                                <Text style={Styles.listIcon}>bis</Text>
                                <View>
                                    <Text style={Styles.listTitle}>Software Developer</Text>
                                    <Text style={Styles.listText}>Carrer and engineer (In Progress)</Text>
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
                            <Text style={Styles.subHeader}>MEMORIES</Text>
                            <Text style={Styles.title}>Gallery 📸</Text>
                            
                            <View style={Styles.galleryGrid}>
                                <Image source={require('../../assets/image/TonyImages/Tony1.jpeg')} style={Styles.galleryImage} />
                                <Image source={require('../../assets/image/TonyImages/Tony2.jpeg')} style={Styles.galleryImage} />
                                <Image source={require('../../assets/image/TonyImages/Tony3.jpeg')} style={Styles.galleryImage} />
                                <Image source={require('../../assets/image/TonyImages/Tony4.jpeg')} style={Styles.galleryImage} />
                                <Image source={require('../../assets/image/TonyImages/Tony5.jpeg')} style={Styles.galleryImage} />
                                <Image source={require('../../assets/image/TonyImages/Tony6.jpeg')} style={Styles.galleryImage} />
                                <Image source={require('../../assets/image/TonyImages/Tony8.jpeg')} style={Styles.galleryImage} />
                                <Image source={require('../../assets/image/TonyImages/Tony10.jpeg')} style={Styles.galleryImage} />
                                <Image source={require('../../assets/image/TonyImages/Tony11.jpeg')} style={Styles.galleryImage} />
                                <Image source={require('../../assets/image/TonyImages/Tony12.jpeg')} style={Styles.galleryImage} />
                                <Image source={require('../../assets/image/TonyImages/Tony13.jpeg')} style={Styles.galleryImage} />
                                <Image source={require('../../assets/image/TonyImages/Tony14.jpeg')} style={Styles.galleryImage} />
                                <Image source={require('../../assets/image/TonyImages/Tony15.jpeg')} style={Styles.galleryImage} />
                                <Image source={require('../../assets/image/TonyImages/Tony17.jpeg')} style={Styles.galleryImage} />
                                <Image source={require('../../assets/image/TonyImages/Tony19.jpeg')} style={Styles.galleryImage} />
                                <Image source={require('../../assets/image/TonyImages/Tony20.jpeg')} style={Styles.galleryImage} />
                                <Image source={require('../../assets/image/TonyImages/Tony21.jpeg')} style={Styles.galleryImage} />
                                <Image source={require('../../assets/image/TonyImages/Eco.jpeg')} style={Styles.galleryImage} />
                                <Image source={require('../../assets/image/TonyImages/Eco2.jpeg')} style={Styles.galleryImage} />
                                <Image source={require('../../assets/image/TonyImages/EsoBrad.jpeg')} style={Styles.galleryImage} />
                                <Image source={require('../../assets/image/TonyImages/Conalep.jpeg')} style={Styles.galleryImage} />
                                <Image source={require('../../assets/image/TonyImages/EsoBrad2.jpeg')} style={Styles.galleryImage} />
                                <Image source={require('../../assets/image/TonyImages/TpDiegue2.jpeg')} style={Styles.galleryImage} />
                                <Image source={require('../../assets/image/TonyImages/DaniFlow2.jpeg')} style={Styles.galleryImage} />
                                <Image source={require('../../assets/image/TonyImages/MyFamili.jpeg')} style={Styles.galleryImage} />
                                <Image source={require('../../assets/image/TonyImages/Chino.jpeg')} style={Styles.galleryImage} />
                                <Image source={require('../../assets/image/TonyImages/Maluma.jpeg')} style={Styles.galleryImage} />
                                <Image source={require('../../assets/image/TonyImages/Priscila.jpeg')} style={Styles.galleryImage} />
                                <Image source={require('../../assets/image/TonyImages/FlowCabron.jpeg')} style={Styles.galleryImage} />
                                <Image source={require('../../assets/image/TonyImages/Concierto.jpeg')} style={Styles.galleryImage} />

                            </View>
                        </View>
                    )}
                </View>

            </ScrollView>
        </View>
    );
}