import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import ListingNavigator from './ListingNavigator';
import ListingEditScreen from "../screens/ListingEditScreen";
import AccountNavigator from './AccountNavigator'
import NewListingTabButton from './NewListingTabButton';
import routes from "./routes";


const Tab = createBottomTabNavigator();

const AppNavigator = () => (
  <Tab.Navigator>
    <Tab.Screen
      name="Listings"
      component={ListingNavigator}
      options={{
        tabBarIcon: ({ color, size }) =>
          <MaterialCommunityIcons name="home" color={color} size={size} />
      }}
    />
    <Tab.Screen
      name="ListingEdit"
      component={ListingEditScreen}
      options={({ navigation }) => ({
        // use paren () so return object (otherwise just present block of code)
        tabBarButton: () =>
          <NewListingTabButton onPress={() => navigation.navigate("ListingEdit")}/>,
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="plus-circle" color={color} size={size} />
        )
      })}
    />
    <Tab.Screen
      name="Account"
      component={AccountNavigator}
      options={{
        tabBarIcon: ({ color, size }) =>
          <MaterialCommunityIcons name="account" color={color} size={size} />
      }}
    />
  </Tab.Navigator>
);

export default AppNavigator;
