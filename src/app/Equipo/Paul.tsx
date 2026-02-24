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

export const Persona = () => {
    const params = useLocalSearchParams();
    console.log(params);
    return (
        //la scrollbar
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
          <View style={Styles.ines}>
              <View style={Styles.parrafo}> 
              
              <Text style={Styles.fuente}>
              Hola me llamo {params.nombre}, me gustan los animales{params.descripcion}{'\n'}
              Estas son mis increíbles y bellas mascotas
              </Text>
              </View>
  
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
        </ScrollView>
    );
};

export default Persona;