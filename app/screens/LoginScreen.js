import React, { useState } from 'react';
import { View, StyleSheet, Image } from 'react-native';

import Screen from '../components/Screen'
import AppTextInput from '../components/AppTextInput';
import AppButton from '../components/AppButton';
import AppText from '../components/AppText/AppText';
import ErrorMessage from '../components/ErrorMessage';
import AppFormField from '../components/AppFormField';
import { Formik } from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password")
})

function LoginScreen(props) {
  // const [email, setEmail] = useState();
  // const [password, setPassword] = useState();

  return (
    <Screen style={styles.container}>
      <Image style={styles.logo} source={require("../assets/sCart-logo.png")} />

      <Formik
        initialValues={{ email: '', password: '' }}
        onSubmit={values => console.log(values)}
        validationSchema={validationSchema}
      >
        { ({ handleChange, handleSubmit, errors, setFieldTouched, touched }) => (
          <>
            <AppFormField
              name="email"
              autoCapitalize="none"
              autoCorrect={false}
              icon="email"
              keyboardType="email-address"
              placeholder="Email"
              textContentType="emailAddress"
              // onChangeText={text => setEmail(text)}
            />
            <AppFormField
              name="password"
              autoCapitalize="none"
              autoCorrect={false}
              icon="lock"
              placeholder="Password"
              textContentType="password"
              secureTextEntry={true}
              // onChangeText={text => setPassword(text)}
            />
            <AppButton
              title="Login"
              onPress={handleSubmit}
            />
            {/* <AppButton title="Login" onPress={() => console.log(email, password)}/> */}
          </>

        )}
      </Formik>
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

/* use normal component with state hooks for login
import React, { useState } from 'react';
import { View, StyleSheet, Image } from 'react-native';

import Screen from '../components/Screen'
import AppTextInput from '../components/AppTextInput';
import AppButton from '../components/AppButton';
import AppText from '../components/AppText/AppText.ios';
import AppFormField from '../components/AppFormField';

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

*/