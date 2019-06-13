import { registerRootComponent } from 'expo';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ListCrypoCoin from './components/ListCryptoCoin/ListCryptoCoin'

class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      data: [
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
      ]
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text>Crypt API Client</Text>
        </View>
        <ListCrypoCoin data={this.state.data} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    padding: 20,
    alignItems: 'center'
  }
});

registerRootComponent(App);