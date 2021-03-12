import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import colors from '../config/colors'
import { MaterialCommunityIcons } from '@expo/vector-icons';

function NewListingTabButton({ onPress }) {
  return (
    <TouchableOpacity onPress={onPress} >
      <View style={styles.container}>
        <MaterialCommunityIcons name="plus-circle" color={"white"} size={40} />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.scartColor,
    height: 80,
    width: 80,
    borderRadius: 40,
    borderColor: colors.white,
    borderWidth: 10,
    bottom: 20,
  }
});

export default NewListingTabButton;