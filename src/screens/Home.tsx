import { Button } from "react-native";

function Home({navigation}: {navigation: any}) {
  return(
    <Button title="Restaurant" onPress={ () => navigation.navigate('Restaurant') } />
  )
}

export default Home;