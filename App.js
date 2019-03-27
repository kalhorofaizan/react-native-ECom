/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,Button} from 'react-native';
import {createAppContainer,createStackNavigator,createDrawerNavigator} from 'react-navigation';
import Home from "./src/pages/Home/Home";
import About from "./src/pages/About/About";



const App = createDrawerNavigator({
  Home:Home,
  about:About
});

export default createAppContainer(App);