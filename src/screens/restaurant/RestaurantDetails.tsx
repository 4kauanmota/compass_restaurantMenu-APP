import { Text } from "react-native";

import {  NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from "@/navigation/StackNavigation";



type DetailScreenRouteProp = NativeStackScreenProps<RootStackParamList, 'RestaurantDetails'>;


function RestaurantDetails({ route }: DetailScreenRouteProp) {
const {params} = route;

  return(
    <Text> Restaurant Details {params.id} </Text>
  );
}

export default RestaurantDetails;