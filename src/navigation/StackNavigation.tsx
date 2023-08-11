import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../screens/Home";
import Restaurant from "@/screens/restaurant/Restaurants";
import RestaurantDetails from "@/screens/restaurant/RestaurantDetails";

const Stack = createNativeStackNavigator();

function StackNavigation() {
  return (
    <Stack.Navigator
      screenOptions={{
        contentStyle: { backgroundColor: "#2c2c2e" },
      }}
    >
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Restaurant" component={Restaurant} />
      <Stack.Screen
        options={{
          title: "",
          headerTransparent: true,
        }}
        name="RestaurantDetails"
        component={RestaurantDetails}
      />
    </Stack.Navigator>
  );
}

export default StackNavigation;
