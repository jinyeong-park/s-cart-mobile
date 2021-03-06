import React, { useState } from 'react';
import { View, StyleSheet, Image } from 'react-native';

import Screen from '../components/Screen'
import AppTextInput from '../components/AppTextInput';
import AppButton from '../components/AppButton';

function LoginScreen(props) {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  return (
    <Screen style={styles.container}>
      <Image
        style={styles.logo}
        source = {require("../assets/sCart-logo.png")}
      />
      <AppTextInput
        autoCapitalize="none"
        autoCorrect={false}
        icon="email"
        keyboardType="email-address"
        placeholder="Email"
        textContentType="emailAddress"
        onChangeText={text => setEmail(text)}
      />
      <AppTextInput
        autoCapitalize="none"
        autoCorrect={false}
        icon="lock"
        placehoder="Password"
        textContentType="password"
        secureTextEntry={true}
        onChangeText={text => setPassword(text)}
      />
      <AppButton title="Login" onPress={() => console.log(email, password)}/>


    </Screen>

  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10
  },
  logo: {
    width: 110,
    height: 80,
    alignSelf: 'center',
    justifyContent: "center",
    marginTop: 30,
    marginBottom: 20

  }
});

export default LoginScreen;