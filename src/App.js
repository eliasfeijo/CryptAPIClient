import { registerRootComponent } from 'expo';
import React from 'react';
import { Alert, StyleSheet, Text, View } from 'react-native';
import ListCryptoCoin from './components/ListCryptoCoin/ListCryptoCoin';
import axios from 'axios';
import Constants from 'expo-constants';
import SelectCurrency from './components/SelectCurrency/SelectCurrency';

const { manifest } = Constants;
const url = `http://${manifest.debuggerHost.split(`:`).shift().concat(`:3000`)}/api/v1/crypto_coins`;

const currencies = [
  {key: "BRL", name: "Real", symbol: "R$"},
  {key: "USD", name: "Dólar", symbol: "$"},
]

class App extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      data: [],
      selectedCurrency: currencies[0]
    };
  }

  componentDidMount() {
    this.updateCryptoCoinList(this.state.selectedCurrency);
  }

  updateCryptoCoinList (currency) {
    axios.put(url, { currency: currency.key })
    .then(response => {
      this.setState({
        data: response.data.data,
        selectedCurrency: currency
      });
    })
    .catch(error => {
      Alert.alert("Failed to connect to Crypt API");
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text>Crypt API Client</Text>
        </View>
        <SelectCurrency
          options={currencies}
          setSelectedOption={this.setSelectedCurrency}
          selectedOption={this.state.selectedCurrency}
        />
        <ListCryptoCoin 
          data={this.state.data}
          selectedCurrency={this.state.selectedCurrency}
        />
      </View>
    );
  }

  setSelectedCurrency = (selectedCurrency) => {
    this.updateCryptoCoinList(selectedCurrency);
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