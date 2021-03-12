import React from 'react';
import Constants from 'expo-constants';
import { View, StyleSheet, StatusBar, SafeAreaView } from 'react-native';

function Screen({ children, style }) {
  return (
    <SafeAreaView style={[styles.screen, style]}>
      <View style={[styles.view, style]}>{children}</View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    paddingTop: Constants.StatusBarHeight,
    flex: 1  // screen takes entire screen
  },
  view: {
    // flex: 1

  }
});

export default Screen;