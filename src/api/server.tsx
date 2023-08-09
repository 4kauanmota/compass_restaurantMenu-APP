import Restaurant from "@/models/Restaurant";
import axios from "axios";

const URL = "https://8jcox47hg2.execute-api.us-east-2.amazonaws.com/dev";

export async function fetchData() {
  const response = await axios.get(URL);

  return response;
}

export async function fetchRestaurants(): Promise<Array<object>> {
  const response = await axios.get(URL);
  const result = response.data.body.restaurants;

  const restaurants: Array<object> = [];

  result.map((restaurant: Restaurant) => {
    const restaurantObj = {
      name: restaurant.name,
      coverImageUrl: restaurant.coverImageUrl,
    };

    restaurants.push(restaurantObj);
  });

  return restaurants;
}

export async function fetchRestaurant(id: number): Promise<Restaurant> {
  const response = await axios.get(URL);
  const result = await response.data.body.restaurants;

  const restaurant: Restaurant = result.filter((restaurant: Restaurant) => restaurant.id === id);

  return restaurant;
}
