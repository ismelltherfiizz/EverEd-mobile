/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

type Props = {};
class Login exteds Component {
  render() {
    return {
      <View style={styles.container}>
          <Text>Login</Text>
      </View>
    };
  }
}
<View style={styles.container}>
        <View style={styles.loginContainer}>
                    <Image resizeMode="contain" style={styles.logo} source={require('../../components/images/logo.png')} />
         </View>

            <View style={styles.formContainer}>
                   <LoginForm />
            </View>
       </View>

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#2c3e50',
    },
    loginContainer:{
        alignItems: 'center',
        flexGrow: 1,
        justifyContent: 'center'
    },
    logo: {
        position: 'absolute',
        width: 300,
        height: 100
    },
});
