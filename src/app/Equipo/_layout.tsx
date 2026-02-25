import { Slot } from "expo-router";
import { View } from "react-native";
import NavegationBar from "../../components/shared/NavegationBar";

export default function EquipoLayout() {
  return (
    <View style={{ flex: 1, flexDirection: 'column' }}>
      {/* 1. The 'Slot' (Tony/Alan) gets flex: 1 to take all available space.
         We add a container here to ensure the bar doesn't cover the bottom content.
      */}
      <View style={{ flex: 1,  }}>
        <Slot />
      </View>
      
      {/* 2. The Navigation Bar sits nicely at the bottom. 
         It is no longer absolute, so it has its own dedicated space.
      */}
      <NavegationBar />
    </View>
    
  );
}