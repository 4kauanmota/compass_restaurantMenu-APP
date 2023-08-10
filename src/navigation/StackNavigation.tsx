import { createNativeStackNavigator } from "@react-navigation/native-stack"
import Home from "../screens/Home";
import Restaurant from "@/screens/restaurant/Restaurants";
import RestaurantDetails from "@/screens/restaurant/RestaurantDetails";

export type RootStackParamList = {
  Home: undefined;
  Restaurant: undefined;
  RestaurantDetails: { id: number };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

function StackNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Restaurant" component={Restaurant} />
      <Stack.Screen name="RestaurantDetails" component={RestaurantDetails} />
    </Stack.Navigator>
  )
}

export default StackNavigation;