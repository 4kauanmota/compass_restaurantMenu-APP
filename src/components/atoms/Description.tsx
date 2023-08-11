import { useCallback } from "react";
import { Text, View, StyleSheet } from "react-native";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import colors from "@/constants/colors";

function Description({ children }: { children: any }) {
  const [fontsLoaded] = useFonts({
    Poppins: require("../../../assets/font/Poppins-Regular.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  return (
    <View>
      <Text style={styles.text}>{children}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},

  text: {
    fontSize: 14,
    fontWeight: "400",
    color: colors.white,
    fontFamily: "Poppins",
  },
});

export default Description;
