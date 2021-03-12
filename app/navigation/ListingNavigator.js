import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import ListingScreen from "../screens/ListingScreen";
import ListingDetailsScreen from "../screens/ListingDetailsScreen";

const Stack = createStackNavigator();

const ListingNavigator = () => (
  // left to right transition
  <Stack.Navigator screenOptions={{ headerShown: false }}>
  {/* bottom up transition(like modal)
  <Stack.Navigator mode="modal" screenOptions={{ headerShown: false }}>  */}
    <Stack.Screen name="Listings" component={ListingScreen} />
    <Stack.Screen name="ListingDetails" component={ListingDetailsScreen} />
  </Stack.Navigator>
);

export default ListingNavigator;
