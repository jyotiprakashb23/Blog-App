import React from 'react';
import Button from './Button';
import {
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  TextInput,
  Image,
} from 'react-native';
import Home from './src/pages/Home';
import YellowCurvyFrame from './src/components/YellowCurvyFrame';
import Login from './src/pages/Login';
// import logo from "./logo/Frame 334.png"
const App = () => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'lightblue'}}>
      {/* <View
        style={[
          styles.container,
          {
            flexDirection: 'column',
            backgroundColor: '#FEFAE4',
            alignItems: 'center',
          },
        ]}>
        <Image
          source={require('./src/assets/images/logo.png')}
          style={styles.logo}
        />
        <Text style={styles.label}>Email Address:</Text>
        <TextInput style={styles.input}></TextInput>
        <Text style={styles.label}>Password:</Text>
        <TextInput style={styles.input}></TextInput>
        <Button title={'Login'} textColor={'#642315'} buttonColor={'#C99F62'} />
      </View> */}
      {/* <Home /> */}
      <Login />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20, // Add padding to create margin around the container
    justifyContent: 'center', // Align content vertically center
  },
  label: {
    fontSize: 16,
    marginBottom: 10, // Add margin bottom to the label
    fontSize: 16,
    textAlign: 'left',
    width: '100%',
    fontWeight: 'bold',
    marginLeft: 90,
    // textAlign:'left'
  },
  input: {
    width: 300,
    height: 40,
    borderWidth: 1.5,
    borderColor: 'gray',
    paddingHorizontal: 10,
    borderRadius: 5,
    backgroundColor: '#E4CDAA',
    marginBottom: 10,
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
});

export default App;
