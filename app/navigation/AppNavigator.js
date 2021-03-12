import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";

// import ListingScreens from '../screens/ListingScreens';
import ListingNavigator from './ListingNavigator';
import ListingEditScreen from "../screens/ListingEditScreen";
import AccountNavigator from './AccountNavigator'
// import AccountNavigator from "./AccountNavigator";
// import NewListingButton from "./NewListingButton";
// import routes from "./routes";



const Tab = createBottomTabNavigator();

const AppNavigator = () => (
  <Tab.Navigator>
    <Tab.Screen
      name="Listings"
      component={ListingNavigator}
    />
    <Tab.Screen
      name="ListingEdit"
      component={ListingEditScreen}
    />
    <Tab.Screen
      name="Account"
      component={AccountNavigator}
    />
  </Tab.Navigator>
);

export default AppNavigator;
