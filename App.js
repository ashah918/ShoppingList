import React, {useState} from 'react';
import {View, StyleSheet, FlatList, Alert} from 'react-native';
import {uuid} from 'uuidv4';

import Header from './components/Header';
import ListItem from './components/ListItem';
import AddItem from './components/AddItem';

const App = () => {
  const [items, setItems] = useState([
    {
      id: uuid(),
      text: 'Water',
    },
    {
      id: uuid(),
      text: 'Onions',
    },
    {
      id: uuid(),
      text: 'Bell Peppers',
    },
    {
      id: uuid(),
      text: 'Corn',
    },
  ]);

  const deleteItem = id => {
    setItems(prevItems => {
      return prevItems.filter(item => item.id !== id);
    });
  };

  const addItem = text => {
    if (!text) {
      Alert.alert(
        'Oops! No item entered',
        'Please enter valid item',
        [
          {
            text: 'Close',
            style: 'cancel',
          },
        ],
        {cancelable: true},
      );
    } else {
      setItems(items => {
        return [{id: uuid(), text}, ...items];
      });
    }
  };

  return (
    <View style={styles.container}>
      <Header title="Shopping List" />
      <AddItem addItem={addItem} />
      <FlatList
        data={items}
        renderItem={({item}) => (
          <ListItem
            item={item}
            deleteItem={deleteItem}
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
