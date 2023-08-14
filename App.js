import React, {useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import SplashScreen from 'react-native-splash-screen';

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Helloo everyone</Text>
      <Text style={styles.text1}>This App is used for</Text>
      <Text style={styles.text2}>Checking about the</Text>
      <Text style={styles.text3}>Custom fonts!!!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'black',
    fontSize: 20,
    margin: 5,
    fontFamily: 'Oswald-Bold',
  },
  text1: {
    color: 'black',
    fontSize: 20,
    margin: 5,
    fontFamily: 'Oswald-Regular',
  },
  text2: {
    color: 'black',
    fontSize: 20,
    margin: 5,
    fontFamily: 'Roboto-BlackItalic',
  },
  text3: {
    color: 'black',
    fontSize: 20,
    margin: 5,
    fontFamily: 'Roboto-BoldItalic',
  },
});

export default App;
