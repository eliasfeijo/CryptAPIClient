import React from 'react';
import { TouchableWithoutFeedback, StyleSheet, Text, View } from 'react-native';
import { RadioButtons } from 'react-native-radio-buttons'

class SelectCurrency extends React.Component {
  render() {

    function renderOption(option, selected, onSelect, index) {
      const style = selected ? { fontWeight: 'bold'} : {};
   
      return (
        <TouchableWithoutFeedback onPress={onSelect} key={index}>
          <Text style={style}>{option.name}</Text>
        </TouchableWithoutFeedback>
      );
    }

    function renderContainer(optionNodes) {
      return <View>{optionNodes}</View>;
    }

    return (
      <View style={styles.container}>
        <RadioButtons
        options={ this.props.options }
        onSelection={ this.props.setSelectedOption.bind(this) }
        selectedOption={this.props.selectedOption }
        renderOption={ renderOption }
        renderContainer={ renderContainer }
      />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center"
  },
});
export default SelectCurrency;