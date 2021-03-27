import React, { useState, useEffect } from 'react';
import { View, StyleSheet, FlatList } from 'react-native';

import ActivityIndicator from "../components/ActivityIndicator"
import listingsApi from '../api/listings';
import useApi from '../hooks/useApi';
import AppText from '../components/AppText/AppText';
import Button from '../components/AppButton';
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
  // move to useApi
  // const [listings, setListings] = useState([]);
  // const [error, setError] = useState(false);
  // const [loading, setLoading] = useState(false);

  // const { data: listings, error, loading, request: loadListings } = useApi(listingsApi.getListings);
  // cf) if we call multiple api in single component,  and then don't use above destructuring
  const getListingsApi = useApi(listingsApi.getListings);


  // call first time the component render (cannot use async in useEffect)
  useEffect(() => {
    getListingsApi.requestServer();
  }, [])

  // const loadListings = async () => {
  //   setLoading(true);
  //   const response = await listingsApi.getListings();
  //   setLoading(false);

  //   // error handling
  //   if (!response.ok) {
  //     return setError(true)
  //   }
  //   setError(false);
  //   setListings(response.data);
  // }


  return (
    <Screen style={styles.screen}>
      {getListingsApi.error && <>
        <AppText>Can't retrieve the lisings</AppText>
        <Button title="Retry" onPress={getListingsApi.requestServer}/>
      </>}
      {/* <ActivityIndicator animator={true} /> */}
      <ActivityIndicator visible={getListingsApi.loading} />
      <FlatList
        data={getListingsApi.data}
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