import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';

class ListCryptoCoin extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <FlatList 
          data={[
            {id: 1, title: 'Bitcoin', price: 32000.321},
            {id: 2, title: 'Ethereum', price: 1000.123},
            {id: 3, title: 'AnotherCoin', price: 4.321},
            {id: 4, title: 'AnotherCoin', price: 4.321},
            {id: 5, title: 'AnotherCoin', price: 4.321},
            {id: 6, title: 'AnotherCoin', price: 4.321},
            {id: 7, title: 'AnotherCoin', price: 4.321},
            {id: 8, title: 'AnotherCoin', price: 4.321},
            {id: 9, title: 'AnotherCoin', price: 4.321},
            {id: 10, title: 'AnotherCoin', price: 4.321},
          ]}
          keyExtractor={item => item.id.toString()}
          renderItem={({item}) => {
            return(
              <View style={styles.item}>
                <Text>{item.title}: {item.price}</Text>
              </View>
            );
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  item : {
    flexGrow: 1,
    margin: 4,
    padding: 20
  },
});
export default ListCryptoCoin;