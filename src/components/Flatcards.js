import { Text, StyleSheet, View, SafeAreaView } from 'react-native'
import React from 'react'

export default function Flatcards() {
  return (
    <SafeAreaView>
        <Text style={styles.headingText}>Flatcards</Text>
        <View style={styles.container}>
            <View style={[styles.card,styles.cardOne]}>
                <Text style={styles.cardText}>red</Text>
            </View>
            <View style={[styles.card,styles.cardTwo]}>
                <Text style={styles.cardText}>green</Text>
            </View>
            <View style={[styles.card,styles.cardThree]}>
                <Text style={styles.cardText}>blue</Text>
            </View>
            <View style={[styles.card,styles.cardOne]}>
                <Text style={styles.cardText}>red</Text>
            </View>
        </View>
      </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    
    headingText:{
        fontSize:24,
        fontWeight:'bold',
        marginHorizontal:8
    },
    cardText:{
        fontSize:12,
        fontWeight:'400',
    },
    container:{
        flex:1,
        flexDirection:'row',
        padding:8
    },
    card:{
        height:100,
        width:100,
        borderRadius:4,
        margin:4,
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    cardOne:{
        backgroundColor:'#e65a6f',
    },
    cardTwo:{
        backgroundColor:'#75e6cf',
    },
    cardThree:{
        backgroundColor:'#66b3e3'
    }
})