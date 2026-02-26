import { useLocalSearchParams, useRouter } from "expo-router";
import React, { useEffect, useRef } from "react";
import { Animated, Pressable, StyleSheet, Text, View } from "react-native";

const getBarColorForPerson = (nombre?: string) => {
  const colorMap: {[key: string]: string} = {
    'Ivan': '#000000',
    'Alan': '#1a4d42',
    'Tony': '#ffffff',
    'Diego': '#ffffff',
    'Paul': '#ffffff',
  };
  return nombre && colorMap[nombre] ? colorMap[nombre] : '#00897b';
};

// Creamos un componente separado para el botón para manejar su propia animación
const AnimatedTab = ({ title, onPress }: { title: string, onPress: () => void }) => {
  const scale = useRef(new Animated.Value(1)).current;

  const handlePressIn = () => {
    Animated.spring(scale, {
      toValue: 0.85, 
      useNativeDriver: true,
    }).start();
  };

  const handlePressOut = () => {
    Animated.spring(scale, {
      toValue: 1, 
      friction: 4, 
      tension: 50,
      useNativeDriver: true,
    }).start();
  };

  return (
    <Pressable 
      onPressIn={handlePressIn} 
      onPressOut={handlePressOut} 
      onPress={onPress}
      style={styles.buttonWrapper}
    >
      {/* Ya no condicionamos el estilo, solo le pasamos styles.button */}
      <Animated.View style={[styles.button, { transform: [{ scale }] }]}>
        <Text style={styles.text}>{title}</Text>
      </Animated.View>
    </Pressable>
  );
};

export const NavegationBar = () => {
  const router = useRouter();
  
  // Obtenemos el 'mode' de la URL para saber qué botón resaltar
  const { mode, nombre } = useLocalSearchParams(); 
  // Si no hay mode en la URL, asumimos que 'personal' es el default
  const currentMode = mode || 'personal'; 

  // 2. Animación de entrada de la barra (aparece desde abajo)
  const translateY = useRef(new Animated.Value(100)).current;

  useEffect(() => {
    Animated.spring(translateY, {
      toValue: 0, // Sube hasta su posición original
      tension: 20,
      friction: 6,
      useNativeDriver: true,
    }).start();
  }, []);

  const changeMode = (newMode: string) => {
    router.setParams({ mode: newMode });
  };

  return (
    <View style={[styles.container, { backgroundColor: getBarColorForPerson(nombre as string) }]}>
      {/* Aplicamos la animación de entrada al contenedor principal de la barra */}
      <Animated.View style={[styles.bar, { transform: [{ translateY }] }]}>
        
        <AnimatedTab 
          title="Profile" 
          onPress={() => changeMode('personal')} 
        />
        
        <AnimatedTab 
          title="Professional" 
          onPress={() => changeMode('professional')} 
        />
        
        <AnimatedTab 
          title="Pictures" 
          onPress={() => changeMode('pictures')} 
        />

      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'center',
    backgroundColor: 'transparent',
    paddingBottom: 20,
    paddingTop: 10,
  },
  bar: {
    flexDirection: 'row',
    backgroundColor: '#00897b',
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 30,
    width: '95%',
    justifyContent: 'space-around',
    alignItems: 'center',
    elevation: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
  },
  buttonWrapper: {
    flex: 1, // Hace que los botones tengan un área táctil más pareja
    alignItems: 'center',
  },
  button: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.25)', // El sombreado ahora es fijo para todos
  },
  text: {
    color: 'white', // Texto blanco siempre
    fontSize: 13,
    fontWeight: 'bold',
  }
});

export default NavegationBar;