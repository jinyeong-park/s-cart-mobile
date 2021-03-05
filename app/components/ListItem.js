import React from 'react';
import { View, StyleSheet, Image, TouchableHighlight } from 'react-native';
import Swipeable from 'react-native-gesture-handler/Swipeable';

import AppText from './AppText/AppText';

import colors from '../config/colors'

function ListItem({
  title,
  subTitle,
  image,
  IconComponent,
  onPress,
  renderRightActions }) {
  return (
    <Swipeable
      renderRightActions={renderRightActions}>
      <TouchableHighlight
        underlayColor={'#f8f4f4'}
        onPress={onPress}>
        <View style={styles.container}>
          {IconComponent}
          {/* if there is no image, remove the image space&&*/}
          {image && <Image style={styles.image} source={image} />}
          <View style={styles.detailsContainer}>
            <AppText style={styles.title}>{title}</AppText>
            {/* if there is no subtitle, make the one title in center */}
            {subTitle && <AppText style={styles.subTitle}>{subTitle}</AppText>}
          </View>
        </View>
      </TouchableHighlight>

    </Swipeable>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 15,
    backgroundColor: colors.white,
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
    marginRight: 10,
  },
  detailsContainer: {
    marginLeft: 10,
    justifyContent: "center"
  },
  title: {
    fontWeight: "500",
  },
  subTitle: {
    color: colors.medium
  }
});

export default ListItem;