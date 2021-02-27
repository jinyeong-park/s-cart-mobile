import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

// <Heading>My Heading</Heading>
function AppText(props) {
  return (
    <Text style={styles.text}>{props.children}</Text>
  );
}


const styles = StyleSheet.create({
  text: {
    color: "tomato",
    fontSize: 20,
    fontFamily: "Avenir"

  }
});

export default AppText;