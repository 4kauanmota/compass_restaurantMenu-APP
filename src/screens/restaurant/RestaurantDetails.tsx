import {
  FlatList,
  ScrollView,
  StyleSheet
} from "react-native";
import { useEffect, useState } from "react";

import RestaurantBanner from "@/components/molecule/RestaurantBanner";
import MenuList from "@/components/organism/MenuList";
import RestaurantDescription from "@/components/molecule/RestaurantDescription";
import { fetchRestaurant } from "@/api/server";
import Restaurant from "@/models/Restaurant";


function RestaurantDetails({route}: {route: any}) {
  const [restaurant, setRestaurant] = useState<Restaurant>();

  useEffect(() => {
    async function restaurantHandler() {
      const restaurantId = route.params.id;
      const restaurant: Restaurant = await fetchRestaurant(restaurantId);
  
      setRestaurant(restaurant);
    }
    
    restaurantHandler();
  }, [])

  return (
    <FlatList 
      data={[]}
      renderItem={null}
      ListHeaderComponent={
        <>
          <RestaurantBanner image={restaurant?.coverImageUrl} title={restaurant?.name} rating={restaurant?.rating} />
  
          <RestaurantDescription subTitle="Sobre o restaurante" description={restaurant?.description} />
    
          <MenuList menu={restaurant?.menu} />
        </>
      }
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});


export default RestaurantDetails;
