import { useLocalSearchParams } from "expo-router";
import React, { useState } from "react";
import { Image, Linking, Pressable, ScrollView, Text, View } from "react-native";
import { Styles } from "../EquipoStyles/PaStyles";
interface HoverImageProps {
    source: any;
    description: string;
}

const HoverImage = ({ source, description }: HoverImageProps) => {
    const [pressed, setPressed] = useState(false);

    return (
        <Pressable
            // use press events so it works on touch devices
            onPressIn={() => setPressed(true)}
            onPressOut={() => setPressed(false)}
            style={Styles.imageWrapper}
        >
            <Image source={source} style={Styles.imagen} />
            {pressed && (
                <View style={Styles.overlay}>
                    <Text style={Styles.overlayText}>{description}</Text>
                </View>
            )}
        </Pressable>
    );
};

export const Paul = () => {
    const params = useLocalSearchParams();
    const { mode = 'personal' } = useLocalSearchParams();
    console.log(params);
    return (
        //la scrollbar
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
            <View >
                {mode === 'professional' && (
                    <View >
                        <Text style={Styles.fuente}>Estas son mis mascotas</Text>
                        <Text style={[Styles.fuente, { fontSize: 15 }]}>(Toca la ine de cada mascota para saber mas)</Text>
                        <View style={Styles.ines}>
                            <HoverImage
                                source={require(`../../assets/image/maya.png`)}
                                description="Maya es muy bonita"
                            />
                            <HoverImage
                                source={require(`../../assets/image/PINTA.png`)}
                                description="Pinta esta loca"
                            />
                            <HoverImage
                                source={require(`../../assets/image/Rayitas (1).png`)}
                                description="Rayitas odia a todos excepto a mi"
                            />

                            <HoverImage
                                source={require(`../../assets/image/Flora.png`)}
                                description="Flora esta loca, es un tornado"
                            />
                            <HoverImage
                                source={require(`../../assets/image/boris.png`)}
                                description="Boris esta mas loco que flora"
                            />
                            <HoverImage
                                source={require(`../../assets/image/lola.png`)}
                                description="Lola, la mas tranquila de todas, probablemente"
                            />
                        </View>
                    </View>
                )}

                {mode === 'personal' && (
                    <View style={Styles.section}>
                        <View style={Styles.headerContainer}>
                            <Image source={require('../../assets/image/Paul.jpeg')} style={Styles.avatar} />

                            <View>
                                <Text style={Styles.headerName}>Paul</Text>
                                <Text style={Styles.headerBio}>GymRat{'\n'}</Text>
                                <Text style={Styles.headerBio}>Baterista </Text>
                            </View>

                        </View>
                        <Text style={Styles.subHeader}>datos curiosos asi para que digas "wow ese dato esta muy curioso"</Text>

                        <View style={Styles.cardChivas}>
                            <Text style={Styles.cardTitle}>Soy alergico al aguacate</Text>
                            <Text style={Styles.cardText}>
                                Pero aun asi lo como
                            </Text>
                        </View>
                        <View style={Styles.cardChivas}>
                            <Text style={Styles.cardTitle}>Me gusta comer</Text>
                            <Text style={Styles.cardText}>
                                comida
                            </Text>
                        </View>

                        <View style={Styles.listItem}>
                            <Text style={Styles.listIcon}></Text>
                            <View>
                                <Text style={Styles.listTitle}>Mi carro</Text>
                                <Text style={Styles.listText}>Tengo un toyota corolla 2008</Text>
                            </View>
                        </View>




                    </View>

                )}

                {mode === 'pictures' && (
                    <View>
                        {/* Redes Sociales */}
                        <View style={{ marginTop: 20, alignItems: 'center' }}>
                            <Text style={Styles.subHeader}>Si me sigues pasa algo super interesante</Text>
                            <Image source={require('../../assets/image/paulInsta.jpeg')} style={{ width: 250, height: 320, marginBottom: 10 }} />
                            <View style={Styles.socialButton}>
                                {/* Botón de Instagram */}
                                <Pressable
                                    style={Styles.socialButton}
                                    onPress={() => Linking.openURL('https://www.instagram.com/paul.moralees?utm_source=qr&igsh=MW00Nmt0YzE0a2NkZw==')}
                                >
                                    <Text style={Styles.socialText}>Mi Insta</Text>
                                </Pressable>
                            </View>
                        </View>
                        <Text style={{ fontSize: 22, fontWeight: 'bold' }}>Gallery 📸</Text>
                        <View style={Styles.galleryGrid}>
                            <Image source={require('../../assets/image/paul1.jpeg')} style={Styles.galleryImage} />
                            <Image source={require('../../assets/image/paul2.jpeg')} style={Styles.galleryImage} />
                            <Image source={require('../../assets/image/paul3.jpeg')} style={Styles.galleryImage} />
                            <Image source={require('../../assets/image/paul4.jpeg')} style={Styles.galleryImage} />
                            <Image source={require('../../assets/image/paul5.jpeg')} style={Styles.galleryImage} />
                            <Image source={require('../../assets/image/paul6.jpeg')} style={Styles.galleryImage} />
                           
\
                        </View>
                    </View>
                )}
            </View>
        </ScrollView>

    );
};

export default Paul;