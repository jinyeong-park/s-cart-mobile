import React from 'react';
import Constants from 'expo-constants';
import { View, StyleSheet, StatusBar, SafeAreaView } from 'react-native';

function Screen({ children, style }) {
  return (
    <SafeAreaView style={[styles.screen, style]}>
      {children}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    paddingTop: Constants.StatusBarHeight,
    flex: 1  // screen takes entire screen
  }
});

export default Screen;