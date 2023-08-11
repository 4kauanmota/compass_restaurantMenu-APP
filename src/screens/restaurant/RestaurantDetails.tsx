import { StyleSheet, View } from "react-native";
import { useEffect, useState } from "react";

import RestaurantBanner from "@/components/molecule/RestaurantBanner";
import MenuList from "@/components/organism/MenuList";
import RestaurantDescription from "@/components/molecule/RestaurantDescription";
import { fetchRestaurant } from "@/api/server";
import Restaurant from "@/models/Restaurant";
import VirtualizedList from "@/components/organism/VirtualizedList";

function RestaurantDetails({ route }: { route: any }) {
  const [restaurant, setRestaurant] = useState<Restaurant>();

  useEffect(() => {
    async function restaurantHandler() {
      const restaurantId = route.params.id;
      const restaurant: Restaurant = await fetchRestaurant(restaurantId);

      setRestaurant(restaurant);
    }

    restaurantHandler();
  }, []);

  return (
    <VirtualizedList style={styles.container}>
      <RestaurantBanner
        image={restaurant?.coverImageUrl}
        title={restaurant?.name}
        rating={restaurant?.rating}
      />

      <View style={styles.detailsContainer}>
        <View style={styles.detailsArea}>
          <RestaurantDescription
            subTitle="Sobre o restaurante"
            description={restaurant?.description}
          />

          <MenuList menu={restaurant?.menu} />
        </View>
      </View>
    </VirtualizedList>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  detailsContainer: {
    width: "100%",
    alignItems: "center",
  },

  detailsArea: {
    width: "91%",
  },
});

export default RestaurantDetails;
