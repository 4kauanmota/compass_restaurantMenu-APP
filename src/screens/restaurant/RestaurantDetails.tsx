import React from "react";
import {
  Text,
  View,
  Image,
  ScrollView,
  ImageBackground,
  TouchableWithoutFeedback,
} from "react-native";
import { StyleSheet } from "react-native";

export default function RestaurantDetails({ navigation }: { navigation: any }) {
  const handlePress = () => {
    navigation.navigate("Restaurant");
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.page}>
        <ImageBackground
          style={styles.Image}
          resizeMode="cover"
          source={require("../../img/fotoPerfil.png")}
        >
          <View style={styles.vector}>
            <TouchableWithoutFeedback onPress={handlePress}>
              <Image source={require("../../img/Vector.png")} />
            </TouchableWithoutFeedback>
          </View>

          <View style={styles.infheader}>
            <Text style={styles.TextHeaderinformation}>
              Churrascaria Barranco
            </Text>
            <View style={styles.star}>
            <Image id="star1" source={require("../../img/star.png")} />
            <Image id="star2" source={require("../../img/star.png")} />
            <Image id="star3" source={require("../../img/star.png")} />
            <Image id="star4" source={require("../../img/star.png")} />
            <Image style={styles.star5} id="star5" source={require("../../img/star.png")} />
            </View>
          </View>
        </ImageBackground>

        <View style={styles.infrestaurante}>
          <Text style={styles.Textinfrestaurante}>sobre o restaurante</Text>

          <Text style={styles.textcolor}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus
            eum impedit, voluptate dolorum veniam magnam quibusdam quia
            consequatur perferendis modi molestiae excepturi, error tenetur
            minima aperiam accusantium similique hic qui.
          </Text>
        </View>

        <View style={styles.menu}>
          <Text style={styles.TextMenu}>Menu</Text>

          <View style={styles.cards}>

            <View style={styles.card}>
              <View style={styles.teste}>
                <Image source={require("../../img/restaurant.png")}></Image>
              </View>
              <View>
                <Text style={styles.textCard}>Nome comida</Text>
              </View>
            </View>

            <View style={styles.card}>
              <View style={styles.teste}>
                <Image source={require("../../img/restaurant.png")}></Image>
              </View>
              <View>
                <Text style={styles.textCard}>Nome comida</Text>
              </View>
            </View>

            <View style={styles.card}>
              <View style={styles.teste}>
                <Image source={require("../../img/restaurant.png")}></Image>
              </View>
              <View>
                <Text style={styles.textCard}>Nome comida</Text>
              </View>
            </View>

          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  page: {
    width: "100%",
    height: "100%",
    backgroundColor: "#2c2c2e",
    alignItems: "center",
  },

  Image: {
    overflow: "hidden",
    width: "100%",
    height: 300,
    borderBottomEndRadius: 20,
    borderBottomStartRadius: 20,
  },

  vector: {
    marginTop: 60,
    paddingLeft: 30,
  },

  TextHeaderinformation: {
    color: "#ffffff",
    fontSize: 25,
    fontWeight: "bold",
    width: "50%",
  },

  infheader: {
    height: "70%",
    marginLeft: 30,
    justifyContent: "flex-end",
  },

  star: {
    marginTop: 10,
    gap: 10,
    flexDirection: "row",
  },

  infrestaurante: {
    width: "100%",
    padding: 10,
    margin: 10,
    marginBottom: 50,
  },

  menu: {
    padding: 10,
    flexDirection: "column",
    width: "100%",
    marginBottom: "50%",
  },

  teste: {
    overflow: "hidden",
    width: "100%",
    borderRadius: 5,
  },

  cards: {
    flex: 1,
    width: "100%",
    // borderColor: 'red',
    // borderWidth: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 5,
  },

  card: {
    width: 170,
    height: 152,
    overflow: "hidden",
    backgroundColor: "#999999",
    borderRadius: 12,
    margin: 6,
  },

  textCard: {
    color: "#ffffff",
    paddingLeft: 10,
    fontSize: 15,
    fontWeight: "bold",
  },

  Textinfrestaurante: {
    color: "#ffffff",
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },

  TextMenu: {
    color: "#ffffff",
    fontSize: 20,
    fontWeight: "bold",
  },

  star5:{
    opacity: 0.2,
  },

  textcolor: {
    color: "#ffffff",
  },
});
