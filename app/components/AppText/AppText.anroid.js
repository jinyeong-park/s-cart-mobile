import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

// <Heading>My Heading</Heading>
function AppText({ children, style }) {
  return (
    <Text
      style={[styles.text, style]}
    >
      {children}
    </Text>
  );
}


const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    fontFamily: "Roboto"
  }
});

export default AppText;