import { Button } from "react-native";

function Restaurant({ navigation }: { navigation: any }) {
  return (
    <Button
      title="Details"
      onPress={() => navigation.navigate("RestaurantDetails", { id: 3 })}
    />
  );
}

export default Restaurant;
