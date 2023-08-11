import {
  View,
  Image,
  ImageBackground,
  TouchableWithoutFeedback,
  StyleSheet
} from "react-native";
import Title from "@/components/atoms/Title";
import { useNavigation } from "@react-navigation/native";


function RestaurantBanner({image, title, rating}: {image: any, title: any, rating: any}) {
  const navigation = useNavigation();

  const goBackHandler = () => {
    navigation.goBack();
  };

  return (
    <ImageBackground
      style={styles.backgroundImage}
      resizeMode="cover"
      source={{uri: image}}
    >
      <View style={styles.goBackButton}>
        <TouchableWithoutFeedback onPress={goBackHandler}>
          <Image source={require("../../img/Vector.png")} />
        </TouchableWithoutFeedback>
      </View>

      <View style={styles.informationsContainer}>
        <Title>{ title }</Title>
        
        <View style={styles.stars}>
          <Image id="star1" source={require("../../img/star.png")} />
          <Image id="star2" source={require("../../img/star.png")} />
          <Image id="star3" source={require("../../img/star.png")} />
          <Image id="star4" source={require("../../img/star.png")} />
          <Image id="star5" source={require("../../img/star.png")} />
        </View>
      </View>
    </ImageBackground>
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
});

export default RestaurantBanner;