import { Button } from "react-native";

function Restaurant({navigation}: {navigation: any}) {
  return(
    <Button title="Details" onPress={ () => navigation.navigate('RestaurantDetails') } />
  )
}

export default Restaurant;