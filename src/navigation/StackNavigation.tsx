import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Feather } from "@expo/vector-icons";

import Home from "../screens/Home";
import Restaurant from "@/screens/restaurant/Restaurants";
import RestaurantDetails from "@/screens/restaurant/RestaurantDetails";
import PressArea from "@/components/molecule/PressArea";

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
        options={({ navigation }: { navigation: any }) => ({
          title: "",
          headerTransparent: true,
          headerLeft: () => (
            <PressArea
              onPress={() => navigation.goBack()}
              style={{ borderRadius: 50 }}
            >
              <Feather name="chevron-left" size={30} color="white" />
            </PressArea>
          ),
        })}
        name="RestaurantDetails"
        component={RestaurantDetails}
      />
    </Stack.Navigator>
  );
}

export default StackNavigation;
