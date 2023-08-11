import colors from "@/constants/colors";
import { Text, View, Image, StyleSheet, Platform } from "react-native";

function MenuCard({ image, text }: { image: string; text: string }) {
  return (
    <View style={styles.container}>
      <View style={styles.cardImageContainer}>
        <Image style={styles.cardImage} source={{ uri: image }}></Image>
      </View>

      <View style={styles.cardTextContainer}>
        <Text style={styles.cardText}>{text}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "45%",
    height: 164,
    overflow: "hidden",
    backgroundColor: colors.strongWhite,
    borderRadius: 12,
    marginRight: 18,
    ...Platform.select({
      ios: {
        shadowColor: "black",
        shadowOpacity: 0.25,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 8,
      },
      android: {
        elevation: 4,
      },
    }),
  },

  cardImageContainer: {
    overflow: "hidden",
    height: "67%",
  },

  cardImage: {
    width: "100%",
    height: "100%",

    borderRadius: 12,
  },

  cardTextContainer: {
    height: "23%",
  },

  cardText: {
    paddingLeft: 10,
    paddingTop: 5,
    fontSize: 14,
    fontWeight: "700",
    fontFamily: "Poppins",
    color: colors.white,
  },
});

export default MenuCard;
