import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Button, Image, Alert } from 'react-native';
import WelcomeScreen from './app/screens/WelcomeScreen';
import ViewImageScreen from './app/screens/ViewImageScreen';
import ListingDetailsScreen from './app/screens/ListingDetailsScreen'
import { MaterialIcons } from '@expo/vector-icons';

import AppText from './app/components/AppText/AppText.js';
import Card from './app/components/Card';
import MessagesScreen from './app/screens/MessagesScreen';
import ListItemDeleteAction from './app/components/ListItemDeleteAction.js';
import Screen from './app/components/Screen';
import Icon from './app/components/Icon';
import ListItem from './app/components/ListItem';
import AccountScreen from './app/screens/AccountScreen';
import ListingScreens from './app/screens/ListingScreens';
import AppTextInput from './app/components/AppTextInput';
import AppPicker from './app/components/AppPicker';
import LoginScreen from './app/screens/LoginScreen';
import RegisterScreen from './app/screens/RegisterScreen';
import ListingEditScreen from './app/screens/ListingEditScreen';

const categories =[
  { label: "Furniture", value: 1 },
  { label: "Clothing", value: 2 },
  { label: "Phones", value: 3 },
]

export default function App() {
  const [category, setCategory] = useState();


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
    // <Screen>
    //   <Icon name="email" size={50} backgroundColor="pink" iconColor="black" />
    // </Screen>
    // <Screen>
    //   <ListItem
    //     title="My title"
    //     subTitle="My subtitle"
    //     ImageComponent={<Icon name="email" size={50} backgroundColor="pink" iconColor="black" />}
    //   />
    // </Screen>
    // <AccountScreen/>
    // <ListingScreens />

    // <Screen>
    //   <AppPicker
    //     selectedItem={category}
    //     onSelectItem={(item) => setCategory(item)}
    //    items={categories}
    //    icon="apps"
    //    placeholder="Category"
    //   />
    //   <AppTextInput placeholder="Email" icon="email"/>
    // </Screen>
    // <LoginScreen />
    // <RegisterScreen />
    // <ListingEditScreen />
    <MessagesScreen />




  )
}

const styles = StyleSheet.create({
  background: {
    backgroundColor: '#f8f4f4',
    padding: 20,
    paddingTop: 100

  }
})


