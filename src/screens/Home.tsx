import { ImageBackground, StyleSheet, Text, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import PressArea from "@/components/molecule/PressArea";
import colors from "@/constants/colors";

function Home({navigation}: {navigation: any}) {
  return(
     
      
        <ImageBackground source={require('../../assets/img/background.png')} resizeMode="cover" style={styles.container}>
          <LinearGradient style={styles.container} colors={gradient}>

            <View style={styles.textContainer}>
              <Text style={styles.homeTitle}>FIND D BEST</Text>
              <Text style={styles.homeSubtitle}>Restaurant</Text>
            </View> 
            
            <PressArea style={styles.button} pressStyle={styles.buttonPress} onPress={() => navigation.replace('Restaurant')}> 
              <Text style={styles.buttonText} > Acessar </Text>  
            </PressArea>
          
          </LinearGradient> 
        </ImageBackground>
  )
}

const gradient = [
  '#090808', 
  '#00000059',
]

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  textContainer: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'flex-start', 
    marginTop: 80
  },
  
  homeTitle: {
    fontSize: 72,
    fontWeight: '400',
    color: 'white',
    fontFamily: 'BebasNeue',
  },

  homeSubtitle: {
    fontSize: 24,
    fontWeight: '400',
    color: 'white',
    fontFamily: 'Poppins',
    transform: [{translateY: -10 }],
  },

  button: { 
    borderRadius: 8,
    marginBottom: 30,
    marginHorizontal: 15,
  },

  buttonPress: {
    paddingTop: 5,
    backgroundColor: colors.red,
  },

  buttonText: {
    textAlign: 'center',
    textAlignVertical: 'center',
    color: colors.white,
    fontSize: 20,
    fontWeight: '400',
    fontFamily: 'Poppins',
    paddingVertical: 5,
  }
})

export default Home;