import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Button, Image, Alert } from 'react-native';
import WelcomeScreen from './app/screens/WelcomeScreen';
import ViewImageScreen from './app/screens/ViewImageScreen';
import { MaterialIcons } from '@expo/vector-icons';

import AppText from './app/components/AppText/AppText.js';
import Card from './app/components/Card';


export default function App() {


  return (
    <View style={styles.background}>

      <Card
        title="Red jacket for sale"
        subTitle="$100"
        image={require("./app/assets/jacket.png")}>
      </Card>
    </View>

    // <WelcomeScreen />
    // <ViewImageScreen/>

  )
}

const styles = StyleSheet.create({
  background: {
    backgroundColor: '#f8f4f4',
    padding: 20,
    paddingTop: 100

  }
})


