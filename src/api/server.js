import axios from "axios";

const URL = "https://8jcox47hg2.execute-api.us-east-2.amazonaws.com/dev";

export async function fetchData() {
  const response = await axios.get(URL);

  return response;
}

export async function fetchRestaurants() {
  const response = await axios.get(URL);
  const result = response.data.body.restaurants;

  const restaurants = [];

  result.map((restaurant) => {
    const restaurantObj = {
      name: restaurant.name,
      coverImageUrl: restaurant.coverImageUrl,
    };

    restaurants.push(restaurantObj);
  });

  return restaurants;
}

export async function fetchMenu(id) {
  const response = await axios.get(URL);
  const result = await response.data.body.restaurants;

  const restaurant = result.filter((restaurant) => restaurant.id == id);

  return restaurant;
}
