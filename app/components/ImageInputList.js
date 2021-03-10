import React from 'react';
import { View, StyleSheet } from 'react-native';

import ImageInput from './ImageInput';

// selecting multiple images
function ImageInputList({ imageUris = [], onRemoveImage, onAddImage }) {
  return (
    <View style={styles.container}>
      {imageUris.map(uri => (
        <View key={uri} style={styles.image}>
          <ImageInput
            imageUri={uri}
            key={uri}
            onChangeImage={() => onRemoveImage(uri)}
          />
        </View>
      ))}
      {/* adding new images */}
      <ImageInput onChangeImage={(uri) => onAddImage(uri)}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // horizontally
    flexDirection: 'row',
  },
  image: {
    marginRight: 10,
  }
});

export default ImageInputList;