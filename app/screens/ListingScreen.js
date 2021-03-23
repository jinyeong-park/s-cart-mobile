import React, { useState, useEffect } from 'react';
import { View, StyleSheet, FlatList } from 'react-native';

import listingsApi from '../api/listings';
import Screen from '../components/Screen';
import Card from '../components/Card';
import colors from '../config/colors';
import routes from '../navigation/routes';

// temporary data
// const listings  = [
//   {
//     id: 1,
//     title: 'Red jacket for sale',
//     price: 100,
//     image: require('../assets/jacket.png')
//   },
//   {
//     id: 2,
//     title: 'Couch',
//     price: 100,
//     image: require('../assets/couch.png')
//   },
// ]

function ListingScreens({ navigation }) {
  const [listings, setListings] = useState([]);

  // call first time the component render (cannot use async in useEffect)
  useEffect(() => {
    loadListings();
  }, [])

  const loadListings = async () => {
    const response = await listingsApi.getListings();
    setListings(response.data)
  }


  return (
    <Screen style={styles.screen}>
      <FlatList
        data={listings}
        keyExtractor={listing => listing.id.toString()}
        renderItem={({ item }) =>
          <Card
            title={item.title}
            subTitle={"$" + item.price}
            imageUrl={item.images[0].url}
            onPress={() => navigation.navigate(routes.LISTING_DETAILS, item)}
            // onPress={() => navigation.navigate("ListingDetails", item)}
          />
      }
      />
    </Screen>

  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 20,
    backgroundColor: colors.light
  }
});

export default ListingScreens;