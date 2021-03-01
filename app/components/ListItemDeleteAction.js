import React from 'react';
import { View, StyleSheet, TouchableWithoutFeedback, Text  } from 'react-native';

import colors from '../config/colors.js'
import { MaterialCommunityIcons } from '@expo/vector-icons';


function ListItemDeleteAction({ onPress }) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.container}>
        <MaterialCommunityIcons name="trash-can" size={35} color={colors.white}/>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.danger,
    width: 70,
    justifyContent:'center',
    alignItems: 'center'
  },

});

export default ListItemDeleteAction;