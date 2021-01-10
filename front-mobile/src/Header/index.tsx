import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'


export default function Header() {
  return (
    <View style={styles.container}>
        <Image source={require('../assets/logo.png')} />
      <Text style={styles.text}> DS Delivery</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#DA5c5c',
        height: 90,
        paddingTop: 50,
        flexDirection:'row',
        justifyContent: 'center'

  },
  text: {
      fontWeight: 'bold',
      fontSize: 18,
      lineHeight: 25,
      letterSpacing: -0.24,
      color: '#fff',
      marginLeft:15,
      fontFamily: 'OpenSans_700Bold'
  }
})
