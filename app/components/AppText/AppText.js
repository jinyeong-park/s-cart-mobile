import React from 'react';
import { Text, StyleSheet } from 'react-native';

import defaultStyles from '../../config/styles';

// <Heading>My Heading</Heading>
function AppText({ children, style }) {
  return (
    <Text style={[defaultStyles.text, style]}>{children}</Text>
  );
}


// const styles = StyleSheet.create({
//   text: {
//     fontSize: 18,
//     fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
//   }
// });

export default AppText;