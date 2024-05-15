import {Image, SafeAreaView, StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';

export default function Login() {
  return (
    <SafeAreaView>
    <View style={styles.loginContainer}>
      <Image
        source={require('../assets/images/loginFrame.png')}
        style={styles.loginFrame}
      />
      <Image source={require('../assets/images/logo.png')} style={styles.logo}/>
    </View>
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.signText}>Sign</Text>
        <View style={styles.underline} />
      </View>
      <Text style={styles.inText}> in</Text>
    </View>

    <View style={styles.inputContainer}>
      <Text style={styles.label} >Phone No.</Text>
      <TextInput style={styles.input} placeholder='012323434'></TextInput>
      <Text style={[styles.label,styles.password]}>Password</Text>
      <TextInput style={styles.input} placeholder='DemoPassword123'></TextInput>
    </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  loginFrame: {
    height: 350,
    width: '100%',
  },
  loginContainer:{
    position:'relative'
  }, 
  logo:{
    position:'absolute',
    top:'15%',
    height:180,
    width:180,
    left:'25%'
  },
  loginTitle:{
     fontSize:50,
     marginHorizontal:20,
     color:'#000'
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal:25
  },
  textContainer: {
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  signText: {
    color: '#000', // Black text color
    fontSize: 60, // Adjust font size as needed
  },
  underline: {
    height: 6, 
    backgroundColor: '#642315', 
    alignSelf: 'stretch', 
    marginTop: -2,
  },
  inText: {
    color: '#000', // Black text color
    fontSize: 60, // Adjust font size as needed
  },
  inputContainer:{
    marginHorizontal:25,
    marginVertical:35
  },
  label:{
    fontSize:24,
    color:'#000'
  },
  input:{
    borderBottomWidth:1,
    borderBottomColor:'#000',
    marginBottom:10
  },
  password:{
    marginTop:15
  }
});
