import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";
import FinbalanceLogo from "../components/FinbalanceLogo";

export default function RootLayout() {
  const [loaded] = useFonts({ 
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf") 
  });
   
  if (!loaded) {
    return null;
  }

  return (
    <SafeAreaProvider>
      <StatusBar style="auto" />
      <Stack 
        screenOptions={{ 
          headerTitleStyle: { fontFamily: "OdorMeanChey" },
          headerBackTitleStyle: { fontFamily: "OdorMeanChey" }
        }}
      >
        <Stack.Screen 
          name="index" 
          options={{
            headerTitle: () => <FinbalanceLogo variant="dark" />, //Reemplacé "title" por "headerTitle" para usar el componente del Logo
            headerTitleAlign: "center",
            title: ""
          }} 
        />
      </Stack>
    </SafeAreaProvider>
  );
}
