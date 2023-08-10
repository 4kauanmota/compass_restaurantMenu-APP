import React, { useEffect, useState } from "react";
import { View, FlatList } from "react-native";
import { fetchRestaurants } from "@/api/server";
import RestaurantsComponents from "@/Components/RestaurantsComponents";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "@/navigation/StackNavigation";

export interface Restaurant {
  id: number;
  name: string;
  coverImageUrl: string;
}

type DetailScreenRouteProp = NativeStackScreenProps<RootStackParamList, 'Restaurant'>;

const RestaurantsScreen = ({navigation}:DetailScreenRouteProp) => {
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
          <RestaurantsComponents restaurant={item} navigation={navigation} />
        )}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={{ alignItems: "center" }}
      />
    </View>
  );
};

export default RestaurantsScreen;
