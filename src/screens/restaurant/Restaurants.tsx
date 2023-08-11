import { Button } from "react-native";

function Restaurant({ navigation }: { navigation: any }) {
  return (
    <Button
      title="Details"
      onPress={() => navigation.navigate("RestaurantDetails", { id: 2 })}
    />
  );
}

export default Restaurant;
