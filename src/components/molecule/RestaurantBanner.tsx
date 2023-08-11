import { useEffect, useState } from "react";
import { View, ImageBackground, StyleSheet, Platform } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

import Title from "@/components/atoms/Title";
import colors from "@/constants/colors";

function RestaurantBanner({
  image,
  title,
  rating,
}: {
  image: any;
  title: any;
  rating: any;
}) {
  const completeStars = Math.trunc(rating);
  const [stars, setStars] = useState<Array<number>>(
    new Array(completeStars).fill(1)
  );

  useEffect(() => {
    const incompleteStars: number = rating - completeStars;
    setStars((currentStars) => [...currentStars, incompleteStars]);
  }, []);

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

          <View style={styles.starsContainer}>
            {stars.map((star) => (
              <View key={Math.random()}>
                <View>
                  <View style={[{ width: star * 15, position: "absolute" }]}>
                    <FontAwesome name="star" size={15} color={colors.yellow} />
                  </View>
                  <FontAwesome name="star-o" size={15} color={colors.yellow} />
                </View>
              </View>
            ))}
          </View>
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

  informationsContainer: {
    height: "100%",
    paddingLeft: 20,
    paddingBottom: 13,
    justifyContent: "flex-end",
  },

  restaurantName: {
    width: "90%",
  },

  starsContainer: {
    marginTop: 10,
    gap: 10,
    marginLeft: 3,
    flexDirection: "row",
  },
});

export default RestaurantBanner;
