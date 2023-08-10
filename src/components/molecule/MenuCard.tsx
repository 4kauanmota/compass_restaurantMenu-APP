import {
  Text,
  View,
  Image,
  StyleSheet
} from "react-native";

function MenuCard({image, text}: {image: string, text: string}) {
  return (
    <View style={styles.container}>
      <View style={styles.cardImage}>
        <Image source={require(image)}></Image>
      </View>
      <View>
        <Text style={styles.cardText}>{ text }</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: 170,
    height: 152,
    overflow: "hidden",
    backgroundColor: "#999999",
    borderRadius: 12,
    margin: 6,
  },

  cardImage: {
    overflow: "hidden",
    width: "100%",
    borderRadius: 5,
  },

  cardText: {
    color: "#ffffff",
    paddingLeft: 10,
    fontSize: 15,
    fontWeight: "bold",
  }
})

export default MenuCard;