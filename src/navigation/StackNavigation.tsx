import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Feather } from "@expo/vector-icons";

import Home from "../screens/Home";
import Restaurant from "@/screens/restaurant/Restaurants";
import RestaurantDetails from "@/screens/restaurant/RestaurantDetails";
import PressArea from "@/components/molecule/PressArea";
import colors from "@/constants/colors";

export type RootStackParamList = {
  Home: undefined;
  Restaurant: undefined;
  RestaurantDetails: { id: number };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

function StackNavigation() {
  return (
    <Stack.Navigator
      screenOptions={{
        contentStyle: { backgroundColor: colors.gray },
      }}
    >
      <Stack.Screen name="Home" component={Home} 
      options={{
        headerTitle: '',
        headerTransparent: true,
      }}/>
      <Stack.Screen name="Restaurant" component={Restaurant} 
        options={{
          headerStyle: { backgroundColor: colors.lightBlack },
          headerTintColor: colors.white,
          headerTitleAlign: 'center',
        }}
      />
      <Stack.Screen
        options={({ navigation }: { navigation: any }) => ({
          title: "",
          headerTransparent: true,
          headerLeft: () => (
            <PressArea
              onPress={() => navigation.goBack()}
              style={{ borderRadius: 50 }}
            >
              <Feather name="chevron-left" size={30} color={colors.white} />
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
