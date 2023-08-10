import Restaurant from "@/models/Restaurant";
import axios from "axios";

const API = "https://8jcox47hg2.execute-api.us-east-2.amazonaws.com/dev";

export async function fetchData() {
  const response = await axios.get(API);

  return response;
}

export async function fetchRestaurants(): Promise<Restaurant[]> {
  const response = await axios.get(API);
  const data = response.data.body.restaurants;

  const restaurants: Restaurant[] = data.map((restaurant: Restaurant) => ({
    id: restaurant.id,
    name: restaurant.name,
    coverImageUrl: restaurant.coverImageUrl,
  }));

  return restaurants;
}

export async function fetchRestaurant(id: number): Promise<Restaurant> {
  const response = await axios.get(API);
  const data = await response.data.body.restaurants;

  const restaurant: Restaurant = data.filter((restaurant: Restaurant) => restaurant.id === id);

  return restaurant;
}
