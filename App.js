//This is an example code for Bottom Navigation//
import React from 'react';
//import react in our code.

import { Button, Text, View, TouchableOpacity, StyleSheet } from 'react-native';
//import all the basic component we have used

import { Ionicons } from 'react-native-vector-icons';
//import Ionicons to show the icon for bottom options

//For React Navigation 2.+ import following
//import {createStackNavigator,createBottomTabNavigator} from 'react-navigation';

//For React Navigation 3.+ import following
import {
  createStackNavigator,
  createBottomTabNavigator,
  createAppContainer,
} from 'react-navigation';
//import createStackNavigator, createBottomTabNavigator, createAppContainer in our project

import HomeScreen from './components/HomeScreen';
import SearchScreen from './components/SearchScreen';
import CreateScreen from './components/CreateScreen';
import ProfileScreen from './components/ProfileScreen';
import Separator from './components/Separator';
import Tel from './components/Tel';
import Email from './components/Email';
import Constants from './components/constants';

const HomeStack = createStackNavigator(
  {
    //Defination of Navigaton from home screen
    Home: { screen: HomeScreen },
  },
  {
    //For React Navigation 2.+ change defaultNavigationOptions->navigationOptions
    defaultNavigationOptions: {
      //Header customization of the perticular Screen
      headerStyle: {
        backgroundColor: 'gray',
      },
      headerTintColor: '#FFFFFF',
      title: 'Home',
      //Header title
    },
  }
);
const SearchStack = createStackNavigator(
  {
    //Defination of Navigaton from home screen
    Search: { screen: SearchScreen },

  },
  {
    //For React Navigation 2.+ change defaultNavigationOptions->navigationOptions
    defaultNavigationOptions: {
      //Header customization of the perticular Screen
      headerStyle: {
        backgroundColor: 'gray',
      },
      headerTintColor: '#FFFFFF',
      title: 'Search',
      //Header title
    },
  }
);
const ProfileStack = createStackNavigator(
  {
    //Defination of Navigaton from home screen
    Profile: { screen: ProfileScreen },
  },
  {
    //For React Navigation 2.+ change defaultNavigationOptions->navigationOptions
    defaultNavigationOptions: {
      //Header customization of the perticular Screen
      headerStyle: {
        backgroundColor: 'gray',
      },
      headerTintColor: '#FFFFFF',
      title: 'Profile',
      //Header title
    },
  }
);
const CreateStack = createStackNavigator(
  {
    //Defination of Navigaton from home screen
    Create: { screen: CreateScreen },

  },
  {
    //For React Navigation 2.+ change defaultNavigationOptions->navigationOptions
    defaultNavigationOptions: {
      //Header customization of the perticular Screen
      headerStyle: {
        backgroundColor: 'gray',
      },
      headerTintColor: '#FFFFFF',
      title: 'Create',
      //Header title
    },
  }
);
const App = createBottomTabNavigator(
  {
    //Defination of Navigaton bottom options
    Home: { screen: HomeStack },
    Search: { screen: SearchStack },
    Create: { screen: CreateStack },
    Profile: { screen: ProfileStack },
  },
  {
    //For React Navigation 2.+ change defaultNavigationOptions->navigationOptions
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        let IconComponent = Ionicons;
        let iconName;
        if (routeName === 'Home') {
          iconName = `ios-information-circle${focused ? '' : '-outline'}`;
          // Sometimes we want to add badges to some icons.
          // You can check the implementation below.
        } else if (routeName === 'Profile') {
          iconName = `ios-contact`;
        } else if (routeName === 'Search') {
          iconName = `ios-search`;
        } else if (routeName === 'Create') {
          iconName = `ios-create`;
        }

        // You can return any component that you like here!
        return <IconComponent name={iconName} size={25} color={tintColor} />;
      },
    }),
    tabBarOptions: {
      activeTintColor: '#42f44b',
      inactiveTintColor: 'gray',
    },
  }
);
//For React Navigation 2.+ need to export App only
//export default App;
//For React Navigation 3.+
export default createAppContainer(App);
