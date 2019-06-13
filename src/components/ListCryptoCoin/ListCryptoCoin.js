import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';

class ListCryptoCoin extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <FlatList 
          data={this.props.data}
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