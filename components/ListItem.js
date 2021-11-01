import React from 'react';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

const ListItem = ({item, deleteItem}) => {
  return (
      <View style={styles.listItemView}>
        <Text>
          {item.text}
        </Text>
        <View style={styles.iconView}>
          <Icon
            name="remove"
            size={20}
            color="firebrick"
            onPress={() => deleteItem(item.id)}
          />
        </View>
      </View>
  );
};

const styles = StyleSheet.create({
  listItemView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginLeft:wp('1%'),
    height: hp('5%'),
    backgroundColor: 'pink',
    borderBottomWidth: 1,
    borderBottomColor: 'white',
    padding: 15,
    borderColor: '#eee',
  },
  listItemText: {
    fontSize: 18,
  },
  iconView: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginRight:wp('3%'),
  },
});

export default ListItem;
