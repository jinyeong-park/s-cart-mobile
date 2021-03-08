import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import * as Yup from 'yup';

import Screen from '../components/Screen'
import {
  AppForm as Form,
  AppFormField as FormField,
  SubmitButton } from '../components/forms';


const validationSchema = Yup.object().shape({
  name: Yup.string().required().label("Name"),
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password")
})

function RegisterScreen() {

  return (
    <Screen style={styles.container}>
      <Form
        initialValues={{ name: '', email: '', password: '' }}
        onSubmit={values => console.log(values)}
        validationSchema={validationSchema}
      >
        <FormField
          name="name"
          autoCorrect={false}
          icon="account"
          placeholder="Name"
          // textContentType="emailAddress"
          // onChangeText={text => setEmail(text)}
        />
        <FormField
          name="email"
          autoCapitalize="none"
          autoCorrect={false}
          icon="email"
          keyboardType="email-address"
          placeholder="Email"
          textContentType="emailAddress"
          // onChangeText={text => setEmail(text)}
        />
        <FormField
          name="password"
          autoCapitalize="none"
          autoCorrect={false}
          icon="lock"
          placeholder="Password"
          textContentType="password"
          secureTextEntry={true}
          // onChangeText={text => setPassword(text)}
        />
        <SubmitButton title="Register" />
          {/* <AppButton title="Register" onPress={() => console.log(email, password)}/> */}
      </Form>
    </Screen>

  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10
  },
});

export default RegisterScreen;