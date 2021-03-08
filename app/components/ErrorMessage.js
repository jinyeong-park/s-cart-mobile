import React from 'react';
import { View, StyleSheet } from 'react-native';

import AppText from './AppText/AppText'

function ErrorMessage({ error }) {
  if (!error) return null;

  return (
    <AppText style={styles.error}>{error}</AppText>
  );
}

const styles = StyleSheet.create({
  error: {
    color: 'red'
  }
});

export default ErrorMessage;