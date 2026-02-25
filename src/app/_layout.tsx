import { useFonts } from "expo-font";
import { Stack, useRouter } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { Pressable } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import FinbalanceLogo from "../components/FinbalanceLogo";

export default function RootLayout() {
  const router = useRouter();
  const [loaded] = useFonts({ 
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
    OdorMeanChey: require("../assets/fonts/OdorMeanChey-Regular.ttf")
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
          headerBackTitleStyle: { fontFamily: "OdorMeanChey" },
          headerStyle: {
            backgroundColor: "#0b9387"
          },
          headerTintColor: "#ffffff"
        }}
      >
        <Stack.Screen 
          name="index" 
          options={{
            headerTitle: () => <FinbalanceLogo variant="light" />,
            headerTitleAlign: "center",
            title: ""
          }} 
        />
        <Stack.Screen 
          name="Equipo/[nombre]" 
          options={{
            headerTitle: () => (
              <Pressable onPress={() => router.push("/")}>
                <FinbalanceLogo variant="light" />
              </Pressable>
            ),
            headerTitleAlign: "center",
            title: ""
          }} 
        />
      </Stack>
    </SafeAreaProvider>
  );
}
