import React, { Component } from 'react'
import {Text, StyleSheet, View, Button} from 'react-native'

export default class Home extends Component {
    constructor(props){
        super(props);

    }
  render() {
    return (
      <View>
        <Text> Home </Text>
          <Button title={'open'} onPress={this.props.navigation.openDrawer}/>
      </View>
    )
  }
}

const styles = StyleSheet.create({});
