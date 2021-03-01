import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Button, Image, Alert } from 'react-native';
import WelcomeScreen from './app/screens/WelcomeScreen';
import ViewImageScreen from './app/screens/ViewImageScreen';
import ListingDetailsScreen from './app/screens/ListingDetailsScreen'
import { MaterialIcons } from '@expo/vector-icons';

import AppText from './app/components/AppText/AppText.js';
import Card from './app/components/Card';
import MessagesScreen from './app/screens/MessagesScreen';
import ListItemDeleteAction from './app/components/ListItemDeleteAction.js'
import Screen from './app/components/Screen'
import Icon from './app/components/Icon'



export default function App() {


  return (
    // <View style={styles.background}>

    //   <Card
    //     title="Red jacket for sale"
    //     subTitle="$100"
    //     image={require("./app/assets/jacket.png")}>
    //   </Card>
    // </View>

    // <WelcomeScreen />
    // <ViewImageScreen/>
    // <ListingDetailsScreen />
    // <MessagesScreen />
    <Screen>
      <Icon name="email" size={50} backgroundColor="pink" iconColor="black" />
    </Screen>


  )
}

const styles = StyleSheet.create({
  background: {
    backgroundColor: '#f8f4f4',
    padding: 20,
    paddingTop: 100

  }
})


