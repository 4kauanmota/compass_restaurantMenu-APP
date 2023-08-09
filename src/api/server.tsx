import Restaurant from "@/models/Restaurant";
import axios from "axios";

const API = "https://8jcox47hg2.execute-api.us-east-2.amazonaws.com/dev";

export async function fetchData() {
  const response = await axios.get(API);

  return response;
}

export async function fetchRestaurants(): Promise<Array<object>> {
  const response = await axios.get(API);
  const data = response.data.body.restaurants;

  const restaurants: Array<object> = [];

  data.map((restaurant: Restaurant) => {
    const restaurantObj = {
      name: restaurant.name,
      coverImageUrl: restaurant.coverImageUrl,
    };

    restaurants.push(restaurantObj);
  });

  return restaurants;
}

export async function fetchRestaurant(id: number): Promise<Restaurant> {
  const response = await axios.get(API);
  const data = await response.data.body.restaurants;

  const restaurant: Restaurant = data.filter((restaurant: Restaurant) => restaurant.id === id);

  return restaurant;
}
