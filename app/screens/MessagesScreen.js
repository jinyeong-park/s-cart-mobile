import React, { useState } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';

import ListItem from '../components/ListItem';
import Screen from '../components/Screen';
import ListItemSeparator from '../components/ListItemSeparator';
import ListItemDeleteAction from '../components/ListItemDeleteAction';

// create temporary object
const initialMessage = [
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
  }
]

function MessagesScreen(props) {
  // in order to have state, use useState hooks
  const [messages, setMessages] = useState(initialMessage);
  const [refreshing, setRefreshing] = useState(false);

  const handleDelete = (message) => {
    // Delete the message from messages
    // Call the server (later)
    // use filter: if id is not the same, add those result to newMessages
    const newMessages = messages.filter((m) => m.id !== message.id)
    setMessages(newMessages);
  }
  return (
    <Screen>
      <FlatList
        data={messages}
        keyExtractor={(message) => message.id.toString()}
        renderItem={({ item }) => (
          // use reusuable component ListItem
          <ListItem
            title={item.title}
            subTitle={item.description}
            image={item.image}
            onPress={() => console.log("Message selecter", item)}
            renderRightActions={() =>
              <ListItemDeleteAction onPress={() => handleDelete(item)}/>}
          />
        )}
        ItemSeparatorComponent={ListItemSeparator}
        refreshing={refreshing}
        onRefresh={() => {
          // retrieve new messages from database later
          setMessages([
            {
              id: 2,
              title: "T2",
              description: 'D2',
              image: require('../assets/jenny.png'),
            }
          ]);
        }}
      />
    </Screen>
  );
}

// const styles = StyleSheet.create({

// });

export default MessagesScreen;