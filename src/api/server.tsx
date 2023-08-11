import Restaurant from "@/models/Restaurant";
import ICardDetails from "@/models/ICardDetails";
import axios from "axios";

const API = "https://8jcox47hg2.execute-api.us-east-2.amazonaws.com/dev";

export async function fetchData() {
  const response = await axios.get(API);

  return response;
}

export async function fetchRestaurants(): Promise<Array<ICardDetails>> {
  const response = await axios.get(API);
  const data = response.data.body.restaurants;

  const restaurants: Array<ICardDetails> = [];

  data.map((restaurant: Restaurant) => {
    const restaurantObj = {
      id: restaurant.id,
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

  const restaurant: Array<Restaurant> = data.filter((restaurant: Restaurant) => restaurant.id === id);

  return restaurant[0];
}
