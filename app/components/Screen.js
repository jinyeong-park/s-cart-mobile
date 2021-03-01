import React from 'react';
import Constants from 'expo-constants';
import { View, StyleSheet, StatusBar, SafeAreaView } from 'react-native';

function Screen(props) {
  return (
    <SafeAreaView style={styles.screen}>
      {props.children}
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