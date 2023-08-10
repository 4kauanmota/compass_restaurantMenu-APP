import React, { useEffect, useState } from "react";
import { View, FlatList } from "react-native";
import { fetchRestaurants } from "@/api/server";
import RestaurantsComponents from "@/Components/RestaurantsComponents";

interface Restaurant {
  id: number;
  name: string;
  coverImageUrl: string;
}

const RestaurantsScreen: React.FC = () => {
  const [restaurants, setRestaurants] = useState<Restaurant[]>([]);

  useEffect(() => {
    async function loadRestaurants() {
      const fetchedRestaurants = await fetchRestaurants();
      setRestaurants(fetchedRestaurants);
    }

    loadRestaurants();
  }, []);

  return (
    <View style={{backgroundColor: '#9e9e9e'}}>
      <FlatList
        data={restaurants}
        renderItem={({ item }) => (
          <RestaurantsComponents title={item.name} imageUrl={item.coverImageUrl} />
        )}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={{ alignItems: "center" }}
      />
    </View>
  );
};

export default RestaurantsScreen;
