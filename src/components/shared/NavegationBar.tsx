import { useRouter, useLocalSearchParams } from "expo-router";
import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

export const NavegationBar = () => {
  const router = useRouter();
  
  // Helper function to switch modes
  const changeMode = (newMode: string) => {
    // This updates the URL to look like: /Equipo/Tony?mode=professional
    router.setParams({ mode: newMode });
  };

  return (
    <View style={styles.container}>
      <View style={styles.bar}>
        
        {/* Button 1: Personal Profile */}
        <Pressable style={styles.button} onPress={() => changeMode('personal')}>
          <Text style={styles.text}>👤 My Profile</Text>
        </Pressable>

        {/* Button 2: Professional Profile */}
        <Pressable style={styles.button} onPress={() => changeMode('professional')}>
          <Text style={styles.text}>💼 Professional</Text>
        </Pressable>

        {/* Button 3: Pictures (Gallery) */}
        <Pressable style={styles.button} onPress={() => changeMode('pictures')}>
          <Text style={styles.text}>📷 Pictures</Text>
        </Pressable>

      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // REMOVED 'absolute', 'bottom', 'left', 'right'
    // Now it acts like a normal block at the bottom of the column
    width: '100%',
    alignItems: 'center',
    backgroundColor: 'transparent',
    paddingBottom: 20, // Add some padding from the bottom of the screen
    paddingTop: 10,
  },
  bar: {
    flexDirection: 'row',
    backgroundColor: '#00897b', // Your green color
    paddingVertical: 15,
    paddingHorizontal: 10,
    borderRadius: 30,
    width: '95%',
    justifyContent: 'space-around', // Spread buttons evenly
    alignItems: 'center',
    elevation: 8,
  },
  button: {
    padding: 5,
  },
  text: {
    color: 'white',
    fontSize: 12, // Slightly smaller to fit 3 buttons
    fontWeight: 'bold',
  }
});

export default NavegationBar;