import { useLocalSearchParams } from "expo-router";
import React, { useState } from "react";
import { Image, Pressable, ScrollView, Text, View } from "react-native";
import { Styles } from "../EquipoStyles/PaStyles";
interface HoverImageProps {
    source: any;
    description: string;
}

const HoverImage = ({ source, description }: HoverImageProps) => {
    const [hovered, setHovered] = useState(false);

    return (
        <Pressable
            onHoverIn={() => setHovered(true)}
            onHoverOut={() => setHovered(false)}
            style={Styles.imageWrapper}
        >
            <Image source={source} style={Styles.imagen} />
            {hovered && (
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

                <View style={{ marginTop: 20, padding: 10 }}>

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
                        <View>


                            <View style={Styles.headerContainer}>
                                <Text style={Styles.headerName}>{"Paul Morales"}</Text>
                                <Text style={Styles.headerBio}>Gym Rat {'\n'}Baterista</Text>
                                <Image
                                    source={require('../../assets/image/Paul.jpeg')}
                                    style={Styles.avatar}
                                />


                            </View>
                            <View style={Styles.listItem}>
                                <Text style={Styles.listIcon}></Text>
                                <View>
                                    <Text style={Styles.listTitle}>Soy alergico al aguacate</Text>
                                    <Text style={Styles.listText}>pero aun asi lo como</Text>
                                </View>
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
                                    <Text style={Styles.listTitle}>English Level</Text>
                                    <Text style={Styles.listText}>B2 (In Progress)</Text>
                                </View>
                            </View>
                        </View>
                    )}

                    {mode === 'pictures' && (
                        <View>
                            <Text style={{ fontSize: 22, fontWeight: 'bold' }}>Gallery 📸</Text>
                            <Text>No photos yet...</Text>
                        </View>
                    )}
                </View>
            </View>
        </ScrollView>

    );
};

export default Paul;