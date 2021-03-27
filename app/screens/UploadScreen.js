import React from 'react';
import { View, StyleSheet, Modal } from 'react-native';
import Text from '../components/AppText/AppText';
import * as Progress from 'react-native-progress';
import colors from '../config/colors'


// show progress bar in the center
function UploadScreen({ progress = 0, visible = false }) {
  return (
    <Modal visible={visible}>
      <View style={styles.container}>
        {/* <Text>{progress * 100}%</Text> */}
        <Progress.Bar color={colors.primary} progress={progress} width={200} />
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center'
  }
});

export default UploadScreen;