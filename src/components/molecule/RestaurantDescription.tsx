import {
  View,
  StyleSheet
} from "react-native";
import SubTitle from "@/components/atoms/SubTitle";
import Description from "@/components/atoms/Description";

function RestaurantDescription({subTitle, description}: {subTitle: string, description: any}) {
  return (
    <View style={styles.container}>
      <SubTitle> { subTitle } </SubTitle>

      <Description> { description } </Description>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default RestaurantDescription;