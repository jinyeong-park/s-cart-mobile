import React from 'react'
import { StyleSheet, Text, View, Button, ImageBackground, Image } from 'react-native';
import AppButton from '../components/AppButton';

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
        <Text style={styles.tagline}>Find your taste</Text>

      </View>

      <View style={styles.buttonContainer}>
        <AppButton title="Login" />
        <AppButton title="Register" color="secondary" />
      </View>
    </ImageBackground>

  )
}


const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    opacity: 0.7
  },
  buttonContainer: {
    padding: 20,
    width: '100%'
  },
  // loginButton: {
  //   width: '100%',
  //   height: 70,
  //   backgroundColor: "#fc5c65",
  //   borderRadius: 30,
  // },
  // registerButton: {
  //   width: '100%',
  //   height: 70,
  //   backgroundColor: "#383E56"
  // },
  logoContainer: {
    flexDirection: "row",
    paddingRight: 100,
    alignItems: "center",
    bottom: 280,
  },
  logo: {
    width: 140,
    height: 100,
    top: 0,
  },
  tagline: {
    fontWeight: "600",

  }

})