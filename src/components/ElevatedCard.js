import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function ElevatedCard() {
  return (
    <View>
      <Text style={styles.headingText}>Elevating Cards</Text>
      <ScrollView horizontal style={styles.container}>
        <View style={[styles.card]}>
          <Text style={styles.text}>Scroll</Text>
        </View>
        <View style={[styles.card]}>
          <Text style={styles.text}>me</Text>
        </View>
        <View style={[styles.card]}>
          <Text style={styles.text}>to</Text>
        </View>
        <View style={[styles.card]}>
          <Text style={styles.text}>see</Text>
        </View>
        <View style={[styles.card]}>
          <Text style={styles.text}>more...</Text>
        </View>
        <View style={[styles.card]}>
          <Text style={styles.text}>Hiii</Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginHorizontal: 8,
  },
  container:{
    padding:8
  },
  card:{
    height:100,
    width:100,
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'maroon',
    margin:5,
    borderRadius:4
  },
  text:{
    color:'#ffff'
  }
});
