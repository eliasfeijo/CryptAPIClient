import { registerRootComponent } from 'expo';
import React from 'react';
import { Alert, StyleSheet, Text, View } from 'react-native';
import ListCryptoCoin from './components/ListCryptoCoin/ListCryptoCoin';
import axios from 'axios';
import Constants from 'expo-constants';

const { manifest } = Constants;
const url = `http://${manifest.debuggerHost.split(`:`).shift().concat(`:3000`)}/api/v1/crypto_coins`;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    }
  }

  componentDidMount() {
    axios.get(url)
    .then(response => {
      this.setState({
        data: response.data.data
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
        <ListCryptoCoin data={this.state.data} />
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