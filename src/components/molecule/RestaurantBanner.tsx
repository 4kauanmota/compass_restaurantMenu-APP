import { View, Image, ImageBackground, StyleSheet } from "react-native";
import Title from "@/components/atoms/Title";

function RestaurantBanner({
  image,
  title,
  rating,
}: {
  image: any;
  title: any;
  rating: any;
}) {
  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.backgroundImage}
        resizeMode="cover"
        source={{ uri: image }}
      >
        <View style={styles.informationsContainer}>
          <View style={styles.restaurantName}>
            <Title>{title}</Title>
          </View>

          <View style={styles.stars}></View>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 300,
  },

  backgroundImage: {
    overflow: "hidden",
    width: "100%",
    height: "100%",
    borderBottomEndRadius: 20,
    borderBottomStartRadius: 20,
  },

  informationsContainer: {
    height: "100%",
    paddingLeft: 30,
    paddingBottom: 12,
    justifyContent: "flex-end",
  },

  restaurantName: {
    width: "90%",
  },

  stars: {
    marginTop: 10,
    gap: 10,
    flexDirection: "row",
  },
});

export default RestaurantBanner;
