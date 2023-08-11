import React, { useEffect, useState } from "react";
import { View, FlatList } from "react-native";
import { fetchRestaurants } from "@/api/server";
import RestaurantsComponents from "@/components/RestaurantsComponents";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "@/navigation/StackNavigation";
import ICardDetails from "@/models/ICardDetails";

type DetailScreenRouteProp = NativeStackScreenProps<RootStackParamList, 'Restaurant'>;

const RestaurantsScreen = ({navigation}:DetailScreenRouteProp) => {
  const [restaurants, setRestaurants] = useState<ICardDetails[]>([]);


  useEffect(() => {
    async function loadRestaurants() {
      const fetchedRestaurants = await fetchRestaurants();
      setRestaurants(fetchedRestaurants);
    }

    loadRestaurants();
  }, []);

  return (
    <View>
      <FlatList
        data={restaurants}
        renderItem={({ item }: { item: ICardDetails }) => (
          <RestaurantsComponents restaurant={item} navigation={navigation} />
        )}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={{ alignItems: "center" }}
      />
    </View>
  );
};

export default RestaurantsScreen;
