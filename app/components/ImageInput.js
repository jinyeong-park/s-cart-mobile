import React, { useEffect } from 'react';
import { View, StyleSheet, Image, TouchableWithoutFeedback, Alert } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import colors from '../config/colors';
import * as ImagePicker from 'expo-image-picker';

function ImageInput({ imageUri, onChangeImage }) {
  useEffect(() => {
    requestPermission();
  }, [])

  const requestPermission = async () => {
    if (!result.granted) {
      alert('You need to enable permission to access the library')
    }
  }

  const handlePress = () => {
    if (!imageUri) {
      selectImage()
    } else {
      Alert.alert(
        'Delete',
        'Are you sure you want to delete this image?',
        [
        { text: "Yes", onPress: () => onChangeImage(null)},
        { text: "No" },
        ]
      )
    }
  }

  const selectImage = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        quality: 0.5,
      });
      if (!result.cancelled) {
        onChangeImage(result.uri);
      }
    } catch (error) {
      console.log("Error reading on image", error)
    }
  }

  return (
    <TouchableWithoutFeedback onPress={handlePress}>
      <View style={styles.container}>
        {/* if there is no image, just render camera icon */}
        {!imageUri &&
          <MaterialCommunityIcons color={colors.medium} name="camera" size={40}/> }

        {/* if imageuri exist, show selected image */}
        {imageUri &&
        <Image source={{ uri: imageUri }} style={styles.image} />}
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.light,
    borderRadius: 15,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    width: 100,
    overflow: "hidden",
  },
  image: {
    height: '100%',
    width: '100%'
  }
});

export default ImageInput;