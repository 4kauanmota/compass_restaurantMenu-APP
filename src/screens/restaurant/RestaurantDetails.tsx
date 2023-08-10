import React from "react";
import {
  Text,
  View,
  Image,
  ScrollView,
  ImageBackground,
  TouchableWithoutFeedback,
  StyleSheet
} from "react-native";


export default function RestaurantDetails({ navigation }: { navigation: any }) {
  const handlePress = () => {
    navigation.navigate("Restaurant");
  };

  return (
    <ScrollView style={styles.container}>
      <ImageBackground
        style={styles.backgroundImage}
        resizeMode="cover"
        source={require("../../img/fotoPerfil.png")}
      >
        <View style={styles.goBackButton}>
          <TouchableWithoutFeedback onPress={handlePress}>
            <Image source={require("../../img/Vector.png")} />
          </TouchableWithoutFeedback>
        </View>

        <View style={styles.informationsContainer}>
          <Text style={styles.restaurantName}>
            Churrascaria Barranco
          </Text>
          
          <View style={styles.stars}>
            <Image id="star1" source={require("../../img/star.png")} />
            <Image id="star2" source={require("../../img/star.png")} />
            <Image id="star3" source={require("../../img/star.png")} />
            <Image id="star4" source={require("../../img/star.png")} />
            <Image id="star5" source={require("../../img/star.png")} />
          </View>
        </View>
      </ImageBackground>

      <View style={styles.descriptionContainer}>
        <Text style={styles.title}>Sobre o restaurante</Text>

        <Text style={styles.description}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus
          eum impedit, voluptate dolorum veniam magnam quibusdam quia
          consequatur perferendis modi molestiae excepturi, error tenetur
          minima aperiam accusantium similique hic qui.
        </Text>
      </View>

      <View style={styles.menuContainer}>
        <Text style={styles.title}>Menu</Text>

        <View style={styles.menuList}>

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
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#2c2c2e",
  },

  backgroundImage: {
    overflow: "hidden",
    width: "100%",
    height: 300,
    borderBottomEndRadius: 20,
    borderBottomStartRadius: 20,
  },

  goBackButton: {
    marginTop: 60,
    paddingLeft: 30,
  },

  informationsContainer: {
    height: "70%",
    marginLeft: 30,
    justifyContent: "flex-end",
  },

  restaurantName: {
    color: "#ffffff",
    fontSize: 25,
    fontWeight: "bold",
    width: "50%",
  },

  stars: {
    marginTop: 10,
    gap: 10,
    flexDirection: "row",
  },

  descriptionContainer: {
    width: "100%",
    padding: 10,
    margin: 10,
    marginBottom: 50,
  },

  menuContainer: {
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

  menuList: {
    flex: 1,
    width: "100%",
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

  title: {
    color: "#ffffff",
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },

  description: {
    color: "#ffffff",
  },
});
