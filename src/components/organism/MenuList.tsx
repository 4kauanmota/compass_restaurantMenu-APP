import SubTitle from "../atoms/SubTitle";
import { View, FlatList, StyleSheet } from "react-native";
import MenuCard from "../molecule/MenuCard";

function MenuList({ menu }: { menu: any }) {
  return (
    <View style={styles.container}>
      <SubTitle>Menu</SubTitle>

      <FlatList
        data={menu}
        keyExtractor={(item) => item.title}
        style={styles.menuList}
        numColumns={2}
        renderItem={({ item }) => (
          <MenuCard image={item.imageUrl} text={item.title} />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  menuList: {
    gap: 20,
    marginBottom: 10,
  },
});

export default MenuList;
