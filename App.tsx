import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import StackNavigation from "@/navigation/StackNavigation";

import { fetchData } from "@/api/server";

export default function App() {
  async function data() {
    const result = await fetchData();
    console.log(result.data);
  }

  data();

  return (
    <>
      <StatusBar style="light" />

      <NavigationContainer>
        <StackNavigation />
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
