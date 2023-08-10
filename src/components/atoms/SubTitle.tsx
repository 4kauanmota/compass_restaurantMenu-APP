import { Text, View, StyleSheet } from "react-native";

function SubTitle({ children }: { children: any }) {
  return (
    <View>
      <Text style={styles.text}>{ children }</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    
  },
  
  text: {
    fontSize: 20,
    color: '#ffffff'
  }
})

export default SubTitle;
