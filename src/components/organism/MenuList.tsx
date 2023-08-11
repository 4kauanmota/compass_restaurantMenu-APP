import SubTitle from "../atoms/SubTitle";
import {
  View,
  FlatList
} from "react-native";
import MenuCard from "../molecule/MenuCard";

function MenuList({menu}: {menu: any}) {
  return (
    <View>
      <SubTitle>Menu</SubTitle>
      <FlatList 
        data={menu}
        renderItem={({item}) => <MenuCard image={item.imageUrl} text={item.title} />}
      />
    </View>
  )
}

export default MenuList;