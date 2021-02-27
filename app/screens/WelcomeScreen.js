import React from 'react'
import { StyleSheet, Text, View, Button, ImageBackground, Image } from 'react-native';

export default function WelcomeScreen() {
  return (
    <ImageBackground
      style={styles.background}
      source={require('../assets/background3.png')}
    >
      <View style={styles.logoContainer}>
        <Image
          style={styles.logo}
          source={require('../assets/sCart-logo.png')}
        />
        <Text>Find your taste</Text>

      </View>

      <View style={styles.loginButton}></View>
      <View style={styles.registerButton}></View>
    </ImageBackground>

  )
}


const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    opacity: 0.8
  },
  loginButton: {
    width: '100%',
    height: 70,
    backgroundColor: "#fc5c65"
  },
  registerButton: {
    width: '100%',
    height: 70,
    backgroundColor: "#383E56"
  },
  logoContainer: {
    flexDirection: "row",
    paddingRight: 100,
    alignItems: "center",
    bottom: 300,
  },
  logo: {
    width: 140,
    height: 100,
    top: 0,
  }

})