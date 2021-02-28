import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import AppText from '../components/AppText/AppText.ios';

import colors from '../config/colors'

function ListingDetailsScreen(props) {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require("../assets/jacket.png")}
      >
      </Image>
      <View style={styles.detailsContainer}>
        <AppText style={styles.title}>Red jacket for sale</AppText>
        <AppText style={styles.price}>$100</AppText>
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
    color: colors.third,
    fontWeight: 'bold',
    fontSize: 20,
    marginVertical: 10,
  }

});

export default ListingDetailsScreen;