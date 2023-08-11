import colors from "@/constants/colors";
import { Text, View, StyleSheet } from "react-native";

function SubTitle({ children }: { children: any }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{children}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 15,
  },

  text: {
    fontSize: 20,
    fontWeight: "700",
    fontFamily: "Poppins",
    color: colors.white,
  },
});

export default SubTitle;
