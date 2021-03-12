import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import ListingScreen from "../screens/ListingScreen";
import ListingDetailsScreen from "../screens/ListingDetailsScreen";

const Stack = createStackNavigator();

const ListingNavigator = () => (

  // bottom up transition  mode="modal" to Stack.Navigator
  <Stack.Navigator mode="modal">
    <Stack.Screen name="Listings" component={ListingScreen} />
    <Stack.Screen name="ListingDetails" component={ListingDetailsScreen} options={{headerShown: false}}/>
  </Stack.Navigator>
);

export default ListingNavigator;
