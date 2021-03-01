import React from 'react';
import { FlatList,  StyleSheet, View } from 'react-native';

import ListItem from '../components/ListItem';
import Screen from '../components/Screen';
import ListItemSeparator from '../components/ListItemSeparator';

// create object
const message = [
  {
    id: 1,
    title: "T1",
    description: 'D1',
    image: require('../assets/jenny.png')
  },
  {
    id: 2,
    title: "T2",
    description: 'D2',
    image: require('../assets/jenny.png')
  },
]

function MessagesScreen(props) {
  return (
    <Screen>
      <FlatList
        data={message}
        keyExtractor={message => message.id.toString()}
        renderItem={({ item }) => (
          // use reusuable component ListItem
          <ListItem
            title={item.title}
            subTitle={item.description}
            image={item.image}
          />
        )}
        ItemSeparatorComponent={ListItemSeparator}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({

});

export default MessagesScreen;