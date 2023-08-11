import { Text, View, StyleSheet } from "react-native";

function Description({ children }: { children: any }) {
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
    color: "#ffffff",
  },
});

export default Description;
