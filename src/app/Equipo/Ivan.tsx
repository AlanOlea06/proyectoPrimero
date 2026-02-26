import { useLocalSearchParams } from "expo-router";
import React, { useEffect, useRef } from "react";
import {
    Animated,
    Image,
    Linking,
    Pressable,
    ScrollView,
    Text,
    View,
} from "react-native";
import { C, Styles } from "../EquipoStyles/IvanStyles";

// Animación de entrada escalonada
const useFadeSlide = (delay: number = 0) => {
  const opacity    = useRef(new Animated.Value(0)).current;
  const translateY = useRef(new Animated.Value(24)).current;

  useEffect(() => {
    Animated.parallel([
      Animated.timing(opacity, {
        toValue: 1, duration: 500, delay, useNativeDriver: true,
      }),
      Animated.spring(translateY, {
        toValue: 0, tension: 60, friction: 10, delay, useNativeDriver: true,
      } as any),
    ]).start();
  }, []);

  return { opacity, transform: [{ translateY }] };
};

// Componente: Sección con línea decorativa 
const SectionTitle = ({ title }: { title: string }) => (
  <View style={Styles.sectionHeader}>
    <Text style={Styles.subHeader}>{title}</Text>
    <View style={Styles.sectionLine} />
  </View>
);

//  Componente: Skill tag 
const Skill = ({ label }: { label: string }) => (
  <Text style={Styles.skillTag}>{label}</Text>
);

//  Punto decorativo 
const Dot = () => (
  <View style={{
    width: 6, height: 6, borderRadius: 3,
    backgroundColor: C.accent,
    marginRight: 14, marginTop: 2,
    alignSelf: 'flex-start',
  }} />
);

// Componente: List item
const ListCard = ({ title, text }: { title: string; text: string }) => (
  <View style={Styles.listItem}>
    <Dot />
    <View style={{ flex: 1 }}>
      <Text style={Styles.listTitle}>{title}</Text>
      <Text style={Styles.listText}>{text}</Text>
    </View>
  </View>
);

// Galería con primer elemento destacado 
const Gallery = ({ images }: { images: any[] }) => (
  <View style={Styles.galleryGrid}>
    {images.map((src, i) => (
      <Image
        key={i}
        source={src}
        style={i === 0 ? Styles.galleryImage : Styles.galleryImage}
      />
    ))}
  </View>
);

// Pantalla principal 
export default function Ivan() {
  const { nombre, mode = 'personal' } = useLocalSearchParams();

  const header  = useFadeSlide(0);
  const content = useFadeSlide(150);
  const footer  = useFadeSlide(280);

  const personalImages = [
    require('../../assets/image/IMAGEN1.jpeg'),
    require('../../assets/image/IMAGEN2.jpeg'),
    require('../../assets/image/IMAGEN3.jpeg'),
    require('../../assets/image/IMAGEN4.jpeg'),
    require('../../assets/image/IMAGEN5.jpeg'),
    require('../../assets/image/IMAGEN6.jpeg'),
    require('../../assets/image/IMAGEN7.jpeg'),
    require('../../assets/image/IMAGEN8.jpeg'),
    require('../../assets/image/IMAGEN9.jpeg'),
    require('../../assets/image/IMAGEN10.jpeg'),
  ];

  const picturesImages = [
    require('../../assets/image/IvanPics/pic1.jpeg'),
    require('../../assets/image/IvanPics/pic2.jpeg'),
    require('../../assets/image/IvanPics/pic3.jpeg'),
    require('../../assets/image/IvanPics/pic4.jpeg'),
    require('../../assets/image/IvanPics/pic5.jpeg'),
    require('../../assets/image/IvanPics/pic6.jpeg'),
    require('../../assets/image/IvanPics/pic7.jpeg'),
    require('../../assets/image/IvanPics/pic8.jpeg'),
    require('../../assets/image/IvanPics/pic9.jpeg'),
    require('../../assets/image/IvanPics/pic10.jpeg'),
  ];

  return (
    <View style={Styles.mainContainer}>
      <ScrollView
        style={{ flex: 1 }}
        contentContainerStyle={Styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >

        {/* HEADER*/}
        <Animated.View style={[Styles.headerContainer, header]}>
          <View style={Styles.headerTop}>

            <View style={Styles.imageWrapper}>
              <Image
                source={require('../../assets/image/ivan.jpeg')}
                style={Styles.image}
              />
            </View>

            <View style={Styles.headerTextBlock}>
              <Text style={Styles.headerName}>{nombre || "Ivan"}</Text>
              <Text style={Styles.headerTagline}>"El maestro del za"</Text>
            </View>
          </View>

          <Text style={Styles.headerBio}>
            Futuro Dev Full-Stack, tambien soy catador de cheves 
          </Text>
        </Animated.View>

        <View style={Styles.divider} />

        {/* CONTENIDO POR MODO  */}
        <Animated.View style={content}>

          {/* PERSONAL  */}
          {mode === 'personal' && (
            <View style={Styles.section}>
              <SectionTitle title="Así Nomas Viejón" />

              <ListCard
                title="Mi estilo de liderazgo"
                text="Me gusta guiar y ayudar a los demás a aprender con un estilo informal y amigable."
              />
              <ListCard
                title="Pongan atención"
                text="Al chile uno tiene que ser bien mandilón con su mujer, sin renegarle cabrones."
              />

              <View style={Styles.cardChivas}>
                <View style={Styles.cardChivasAccent}>
                  {/* Línea dorada en lugar de emoji */}
                  <View style={{ width: 3, height: 18, backgroundColor: C.gold, borderRadius: 2, marginRight: 10 }} />
                  <Text style={Styles.cardTitle}>Mi abuelito siempre me decía</Text>
                </View>
                <Text style={Styles.cardText}>
                  "Arriba las Chivas rayadas del Guadalajara y que la cuenten como quieran"
                </Text>
              </View>

              <SectionTitle title="Ivanqsadilla Core" />
              <Gallery images={personalImages} />
            </View>
          )}

          {/*  PROFESSIONAL */}
          {mode === 'professional' && (
            <View style={Styles.section}>
              <SectionTitle title="Stack & Skills" />

              <View style={Styles.skillRow}>
                {['JavaScript','TypeScript','Next.js','.NET','C#','Sony Vegas','After Effects','Fortnite Pro','Analista de Futbol'].map(s => (
                  <Skill key={s} label={s} />
                ))}
              </View>

              <SectionTitle title="Logros Destacados" />

              <ListCard title="Nivel de Inglés"        text="C1 — Advanced (Sometimes)" />
              <ListCard title="Mr. Worldwide"           text="La mejor voz de Pitbull de todo CUU. Dale." />
              <ListCard title="Edición de Video"        text="La mera paipa pal Sony Vegas y el AE." />
              <ListCard title="Finbalance App"          text="Front-end, Back-end, Base de Datos, Diseño Gráfico, Ciberseguridad, o sea basicamente todo" />
            </View>
          )}

          {/* PICTURES */}
          {mode === 'pictures' && (
            <View style={Styles.section}>
              <SectionTitle title="Yo y la gente que amo" />
              <Gallery images={picturesImages} />
            </View>
          )}

        </Animated.View>

        {/* FOOTER  */}
        <Animated.View style={[{ paddingHorizontal: 20, paddingTop: 8 }, footer]}>
          {mode === 'personal' && (
            <>
              <SectionTitle title="No me sigan, tengo mujer" />
              <Pressable
                style={({ pressed }) => [Styles.socialButton, pressed && { opacity: 0.7 }]}
                onPress={() => Linking.openURL('https://www.instagram.com/ivanqsadilla')}
              >
                <View style={{ width: 3, height: 20, backgroundColor: C.accent, borderRadius: 2 }} />
                <Text style={Styles.socialText}>@ivanqsadilla</Text>
              </Pressable>
            </>
          )}
        </Animated.View>

      </ScrollView>
    </View>
  );
}
