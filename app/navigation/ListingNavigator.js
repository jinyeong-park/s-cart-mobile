import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import ListingScreen from "../screens/ListingScreen";
import ListingDetailsScreen from "../screens/ListingDetailsScreen";

const Stack = createStackNavigator();

const ListingNavigator = () => (

  // bottom up transition  mode="modal" to Stack.Navigator
  // change backbutton color & title: options={{headerTintColor: '#ffbc0f'}}
  <Stack.Navigator mode="modal" screenOptions={{ headerShown: false }}>
    <Stack.Screen name="Listings" component={ListingScreen} />
    <Stack.Screen name="ListingDetails" component={ListingDetailsScreen} options={{headerShown: false}}/>
  </Stack.Navigator>
);

export default ListingNavigator;
