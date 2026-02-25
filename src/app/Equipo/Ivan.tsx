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
                    Desarrollador de Finbalance en Front-end, Back-end, Base de Datos, Diseño Grafico y Ciberseguridad.{'\n'}
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
                            <Text style={Styles.listTitle}>Pongan atencion:</Text>
                            <Text style={Styles.listText}>Al chile uno tiene que ser bien mandilon con su mujer, sin renegarle cabrones
                            </Text>
                                </View>
                            </View>

                            <Text style={Styles.subHeader}>Ivanqsadilla core:</Text>

                            <View style={Styles.galleryGrid}>
                                <Image source={require('../../assets/image/IMAGEN1.jpeg')} style={Styles.galleryImage} />
                                <Image source={require('../../assets/image/IMAGEN2.jpeg')} style={Styles.galleryImage} />
                                <Image source={require('../../assets/image/IMAGEN3.jpeg')} style={Styles.galleryImage} />
                                <Image source={require('../../assets/image/IMAGEN4.jpeg')} style={Styles.galleryImage} />
                                <Image source={require('../../assets/image/IMAGEN5.jpeg')} style={Styles.galleryImage} />
                                <Image source={require('../../assets/image/IMAGEN6.jpeg')} style={Styles.galleryImage} />
                                <Image source={require('../../assets/image/IMAGEN7.jpeg')} style={Styles.galleryImage} />
                                <Image source={require('../../assets/image/IMAGEN8.jpeg')} style={Styles.galleryImage} />
                                <Image source={require('../../assets/image/IMAGEN9.jpeg')} style={Styles.galleryImage} />
                                <Image source={require('../../assets/image/IMAGEN10.jpeg')} style={Styles.galleryImage} />
                                </View>
                        

                            {/* Redes Sociales */}
                        <View style={{marginTop: 20}}>
                             <Text style={Styles.subHeader}>No me sigan, tengo mujer.</Text>
                             
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
                            <Text style={Styles.title}>Habilidades Destacadas</Text>
                            
                            <View style={Styles.skillRow}>
                                <Text style={Styles.skillTag}>JavaScript</Text>
                                <Text style={Styles.skillTag}>Next.js</Text>
                                <Text style={Styles.skillTag}>Fortnite</Text>
                                <Text style={Styles.skillTag}>Typescript</Text>
                                <Text style={Styles.skillTag}>c#</Text>
                                <Text style={Styles.skillTag}>Analista de futbol</Text>
                                <Text style={Styles.skillTag}>.NET</Text>
                            </View>

                            <View style={Styles.listItem}>
                                <Text style={Styles.listIcon}></Text>
                                <View>
                                    <Text style={Styles.listTitle}>Nivel de Ingles</Text>
                                    <Text style={Styles.listText}>C1 (Sometimes)</Text>
                                </View>
                            </View>

                            <View style={Styles.listItem}>
                                <Text style={Styles.listIcon}></Text>
                                <View>
                                    <Text style={Styles.listTitle}>Mr. Worldwide</Text>
                                    <Text style={Styles.listText}>La mejor voz de Pitbull de todo CUU</Text>
                                </View>
                            </View>

                             <View style={Styles.listItem}>
                                <Text style={Styles.listIcon}></Text>
                                <View>
                                    <Text style={Styles.listTitle}>Nivel de Edicion de video</Text>
                                    <Text style={Styles.listText}>La mera paipa pal Sony Vegas y el Ae</Text>
                                </View>
                            </View>
                        </View>
                    )}

                    {mode === 'pictures' && (
                        <View style={Styles.section}>
                            <Text style={Styles.title}>Yo y la gente que amo</Text>
                            
                            <View style={Styles.galleryGrid}>
                                <Image source={require('../../assets/image/IvanPics/pic1.jpeg')} style={Styles.galleryImage} />
                                <Image source={require('../../assets/image/IvanPics/pic2.jpeg')} style={Styles.galleryImage} />
                                <Image source={require('../../assets/image/IvanPics/pic3.jpeg')} style={Styles.galleryImage} />
                                <Image source={require('../../assets/image/IvanPics/pic4.jpeg')} style={Styles.galleryImage} />
                                <Image source={require('../../assets/image/IvanPics/pic5.jpeg')} style={Styles.galleryImage} />
                                <Image source={require('../../assets/image/IvanPics/pic6.jpeg')} style={Styles.galleryImage} />
                                <Image source={require('../../assets/image/IvanPics/pic7.jpeg')} style={Styles.galleryImage} />
                                <Image source={require('../../assets/image/IvanPics/pic8.jpeg')} style={Styles.galleryImage} />
                                <Image source={require('../../assets/image/IvanPics/pic9.jpeg')} style={Styles.galleryImage} />
                                <Image source={require('../../assets/image/IvanPics/pic10.jpeg')} style={Styles.galleryImage} />
                            </View>
                        </View>
                    )}
                </View>

            </ScrollView>
        </View>
    );
}