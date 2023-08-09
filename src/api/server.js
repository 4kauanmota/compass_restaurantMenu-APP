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
      id: restaurant.id,
      name: restaurant.name,
      description: restaurant.description,
      coverImageUrl: restaurant.coverImageUrl,
      rating: restaurant.rating,
    };

    restaurants.push(restaurantObj);
  });

  return restaurants;
}
