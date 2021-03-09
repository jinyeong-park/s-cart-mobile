import React from 'react';
import { View, StyleSheet } from 'react-native';
import { useFormikContext } from 'formik';    // pass objects down

import AppTextInput from '../AppTextInput';
import ErrorMessage from './ErrorMessage'

function AppFormField({ name, width, ...otherProps }) {
  const {setFieldTouched, handleChange, errors, touched} = useFormikContext();

  return (
    <>
      <AppTextInput
        onChangeText={handleChange(name)}
        onBlur={() => setFieldTouched(name)}
        width={width}
        {...otherProps}
        // autoCapitalize="none"
        // autoCorrect={false}
        // icon="email"
        // keyboardType="email-address"
        // placeholder="Email"
        // textContentType="emailAddress"
        // onChangeText={text => setEmail(text)}
      />
      {/* conditional rendering - if email touched, show error*/}
      {/* {touched.email && <ErrorMessage error={errors.email}/>} */}
      <ErrorMessage error={errors[name]} visible={touched[name]}/>
    </>
  );
}

const styles = StyleSheet.create({
  container: {}
});

export default AppFormField;