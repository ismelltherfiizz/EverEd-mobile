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
   <TabNavigator>
     <TabNavigator.Item
       title="Schedule"
       renderIcon={() => <Image source={{uri: `${globals.serverUrl}/images/reactjs-conf/schedule-icon.png`}} style={styles.icon} />}
       selected={this.state.selectedTab === 'schedule'}
       onPress={() => { this.setState({selectedTab: 'schedule'}); }}>
       <Navigator
         style={[styles.container, styles.navigator]}
         initialRoute={routes.list}
         renderScene={this.renderScene.bind(this)}
         navigationBar={NavBar}
         ref={component => this._navigator = component} />
     </TabNavigator.Item>
     <TabNavigator.Item
       title="Venue"
       renderIcon={() => <Image source={{uri: `${globals.serverUrl}/images/reactjs-conf/venue-icon.png`}} style={styles.icon} />}
       selected={this.state.selectedTab === 'venue'}
       onPress={() => { this.setState({selectedTab: 'venue'}); }}>
       <Screen title="Venue">
         <Venue />
       </Screen>
     </TabNavigator.Item>
     <TabNavigator.Item
       title="Tweets"
       renderIcon={() => <Image source={{uri: `${globals.serverUrl}/images/reactjs-conf/tweets-icon.png`}} style={styles.icon} />}
       selected={this.state.selectedTab === 'tweets'}
       onPress={() => { this.setState({selectedTab: 'tweets'}); }}>
       <Screen title="Tweets">
         <Tweets />
       </Screen>
     </TabNavigator.Item>
   </TabNavigator>
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
