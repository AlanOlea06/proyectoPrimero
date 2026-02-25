import { useLocalSearchParams } from "expo-router";
import React from "react";
import { Linking, Pressable, Image, ScrollView, Text, View } from "react-native";
import { Styles } from "../EquipoStyles/Tony"; 


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
                        "Codes in C#, Dreams in One Piece."
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
                                    "When do you think people die? When they are forgotten!"
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
                                    <Text style={Styles.listText}>Alan, Paul, Litzy, Diego</Text>
                                </View>
                            </View>
                                                         <View style={Styles.listItem}>
                                <Text style={Styles.listIcon}>😎</Text>
                                <View>
                                    <Text style={Styles.listTitle}>Ecotrack</Text>
                                    <Text style={Styles.listText}>Jesus Burciaga, Eduardo Mandujano, Julian Ruizs</Text>
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
                            </View>
                        </View>
                    )}
                </View>

            </ScrollView>
        </View>
    );
}