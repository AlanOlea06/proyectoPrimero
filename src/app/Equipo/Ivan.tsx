import { useLocalSearchParams } from "expo-router";
import React from "react";
import { Image, Linking, Pressable, ScrollView, Text, View } from "react-native";
import { Styles } from "../EquipoStyles/IvanStyles";


export default function Ivan() {
    const { nombre, mode = 'personal' } = useLocalSearchParams();

    return (
        <View style={Styles.mainContainer}>
            
            <ScrollView 
                style={{ flex: 1 }} 
                contentContainerStyle={{ paddingBottom: 100 }} // Space for nav bar
            >
                
                {/* Header Principal*/}
            <View style={Styles.headerContainer}>
    
            <Image 
                source={require('../../assets/image/ivan.jpeg')} 
                style={Styles.image} 
            />

    
            <View style={Styles.textContainer}>
                <Text style={Styles.headerName}>{nombre || "Ivan"}</Text>
                <Text style={Styles.headerBio}>"El maestro del za" {'\n'}
                </Text>
                <Text style={Styles.headerBio}>
                    Desarrollador de Finbalance en Front-end, Back-end, Base de Datos, Diseño Grafico,{'\n'}
                    Ciberseguridad.{'\n'}
                    Tambien soy catador de cheves profesional{'\n'}
                </Text>
            </View>
        </View>

                {/* Contenido */}
                <View style={{ padding: 25 }}> 
                
                    {mode === 'personal' && (
                        <View style={Styles.section}>
                            <Text style={Styles.subHeader}>Asi Nomas Viejon</Text>
                            
                            <View style={Styles.cardChivas}>
                                <Text style={Styles.cardTitle}>Mi abuelito siempre me decía</Text>
                                <Text style={Styles.cardText}>
                                    "Arriba las Chivas rayadas del Guadalajara y que la cuenten como quieran"
                                </Text>
                            </View>

                            <View style={Styles.listItem}>
                                <Text style={Styles.listIcon}></Text>
                                <View>
                            <Text style={Styles.listTitle}>Ponga atencion:</Text>
                            <Text style={Styles.listText}>Al chile uno tiene que ser bien mandilon con su mujer, no reniegue</Text>
                                </View>
                            </View>

                            <View style={Styles.galleryGrid}>
                                <Image source={require('../../assets/image/IMAGEN1.jpeg')} style={Styles.galleryImage} />
                                <Image source={require('../../assets/image/IMAGEN2.jpeg')} style={Styles.galleryImage} />
                                <Image source={require('../../assets/image/IMAGEN3.jpeg')} style={Styles.galleryImage} />
                                </View>
                        

                            {/* Redes Sociales */}
                        <View style={{marginTop: 20}}>
                             <Text style={Styles.subHeader}>No me sigan, tengo mujer</Text>
                             
                             <View style={Styles.socialButton}>
                                {/* Botón de Instagram */}
                                <Pressable 
                                    style={Styles.socialButton} 
                                    onPress={() => Linking.openURL('https://www.instagram.com/ivanqsadilla')}
                                >
                                <Text style={Styles.socialText}>Mi Insta</Text>
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