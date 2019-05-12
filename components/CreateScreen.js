import React, { Component } from 'react';
//import react in our code.
import { Text, View, TouchableOpacity, StyleSheet, TextInput } from 'react-native';
import { Input } from 'react-native-elements';
//import all the basic component we have used
 
export default class CreateScreen extends React.Component {
  //Home Screen to show in Home Option
  constructor(props) {
    super(props);
    this.state = {text: ''};
  }

 render() {
    return (
      <View style={styles.container}>
        <Input
          style={{height: 40}}
          placeholder="Add a name"
          onChangeText={(text) => this.setState({text})}
        />
        <Text style={{padding: 10, fontSize: 42}}>
        </Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
    width: 200,
    marginTop: 16,
  },
});