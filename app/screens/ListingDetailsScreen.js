import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import AppText from '../components/AppText/AppText';
import ListItem from '../components/ListItem';

import colors from '../config/colors'


function ListingDetailsScreen({ route }) {
  const listing = route.params;

  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        // source={require("../assets/jacket.png")}
        source={listing.image}
      >
      </Image>
      <View style={styles.detailsContainer}>
        <AppText style={styles.title}>{listing.title}</AppText>
        <AppText style={styles.price}>${listing.price}</AppText>
        <View style={styles.userContainer}>
          <ListItem
            image={require("../assets/jenny.png")}
            title="Jenny"
            subTitle="5 Listings"
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 300
  },
  detailsContainer: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: '500'
  },
  price: {
    color: colors.secondary,
    fontWeight: 'bold',
    fontSize: 20,
    marginVertical: 10,
  },
  userContainer: {
    marginVertical: 40,
  }

});

export default ListingDetailsScreen;