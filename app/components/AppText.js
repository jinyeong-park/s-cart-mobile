import React from 'react';
import { View, Text, StyleSheet, Platform } from 'react-native';

// <Heading>My Heading</Heading>
function AppText(props) {
  return (
    <Text style={styles.text}>{props.children}</Text>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir"
  }
});

export default AppText;