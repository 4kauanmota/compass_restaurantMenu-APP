import {
  ScrollView,
  StyleSheet
} from "react-native";

import RestaurantBanner from "@/components/molecule/RestaurantBanner";
import MenuList from "@/components/organism/MenuList";
import RestaurantDescription from "@/components/molecule/RestaurantDescription";


export default function RestaurantDetails() {
  return (
    <ScrollView style={styles.container}>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});
