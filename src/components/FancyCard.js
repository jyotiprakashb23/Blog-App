import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function FancyCard() {
  return (
    <View style={styles.container}>
      <Text style={styles.headingText}>Trending Places</Text>
      <View style={[styles.card,styles.cardElevated]}>
        <Image
          source={{
            uri: 'https://www.holidify.com/images/cmsuploads/compressed/h4_20170822181427.PNG',
          }}
          style={styles.cardImage}></Image>
        <View style={styles.cardBody}>
          <Text style={styles.cardTitle}>Hawa Mahal</Text>
          <Text style={styles.cardLabel}>Pinkcity, Jaiput</Text>
          <Text style={styles.cardDescription}>
            The Hawa Mahal is palace in the city of Jaipur, India.Built from red
            and pink sandstone , it is on the edge of the City Place.
          </Text>
          <Text style={styles.cardFooter}>12 mins</Text>
        </View>
      </View>
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
  card: {
    height:450,
    width:395,
    marginVertical:8,
    borderRadius:5,
    marginRight:5
  },
  cardElevated:{
    backgroundColor:"#FFFFFF"
  },
  cardImage: {
    height: 250,
    marginBottom:8,
    borderTopLeftRadius:5,
    borderTopRightRadius:5
  },
  cardBody: {
    paddingHorizontal:12
  },
  cardTitle:{
    color:'black',
    fontSize:20,
    fontWeight:'bold',
    marginBottom:3
  },
  cardLabel:{
    color:'black',
    fontSize:18,
    fontWeight:'600',
    marginBottom:8
  },
  cardDescription:{
        color:'#545352',
        fontSize:16,
        fontWeight:'500',
        marginBottom:8
  },
  cardFooter: {
    color:'black',
    fontSize:16,
    fontWeight:'400',
    marginBottom:8
  },
});
