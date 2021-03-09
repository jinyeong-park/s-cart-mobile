import React, { useState } from 'react';
import { View, StyleSheet, TextInput, TouchableWithoutFeedback, Modal, Button, FlatList } from 'react-native';
import { MaterialCommunityIcons} from '@expo/vector-icons';

import AppText from './AppText/AppText';
import colors from '../config/colors';
import defaultStyles from '../config/styles';
import Screen from './Screen';
import PickerItem from './PickerItem';

function AppPicker({
  icon,
  placeholder,
  items,
  onSelectItem,
  selectedItem,
  numberOfColumns = 1,
  PickerItemComponent = PickerItem,
  width="100%"}) {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    // React can return only one component => wrap TouchableWF and Modal inside of react fragment
    <>
      <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
        <View style={[styles.container, { width }]}>
          {icon && <MaterialCommunityIcons
          name={icon}
          size={20}
          color={colors.medium}
          style={styles.icon}/>}

          {/* # conditional rendering */}
          { selectedItem ?
          (<AppText style={styles.text}>{selectedItem.label}</AppText>
          ) : (<AppText style={styles.placeholder}>{placeholder}</AppText>)}
          <MaterialCommunityIcons
              name="chevron-down"
              size={20}
              color={defaultStyles.colors.medium}
          />
        </View>
      </TouchableWithoutFeedback>
      {/* Modal */}
      <Modal visible={modalVisible} animationType="slide">
        <Screen>
          <Button title="Close" onPress={() => setModalVisible(false)} />
            <FlatList
              data={items}
              keyExtractor={item => item.value.toString()}
              numColumns={numberOfColumns}
              renderItem={({item}) =>
                <PickerItemComponent
                  item={item}
                  label={item.label}
                  onPress={() => {
                    setModalVisible(false);
                    onSelectItem(item);
                  }}
                />}
            />
        </Screen>
      </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.light,
    borderRadius: 25,
    flexDirection: "row",
    // width: '100%',
    padding: 15,
    marginVertical: 10
  },
  icon: {
    marginRight: 10
  },
  text: {
    flex: 1,
  },
  placeholder: {
    color: defaultStyles.colors.medium,
    flex: 1,
  }
});

export default AppPicker;