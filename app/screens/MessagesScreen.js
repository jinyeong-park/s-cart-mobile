import React from 'react';
import { View, StyleSheet, FlatList, SafeAreaView, } from 'react-native';
import ListItem from '../components/ListItem';

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
    <SafeAreaView>
      <FlatList
        data={message}
        keyExtractor={message => message.id.toString()}
        renderItem={({ item }) =>
          // use reusuable component ListItem
          <ListItem
            title={item.title}
            subTitle={item.description}
            image={item.image}
          />}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {}
});

export default MessagesScreen;