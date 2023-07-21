import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { RFValue } from 'react-native-responsive-fontsize';

export default function ButtonStyle() {
  return (
    <View style={styles.container}>
      <Ionicons
        name="add-outline"
        size={40}
        // onPress={() => this.props.navigation.navigate("Homer")}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: 60,
    height: 60,
    bottom:14,
    backgroundColor: "#68c1fc",
    borderRadius: 30,
    alignItems:'center',
    justifyContent:'center',
    // zIndex: 99,
  },
})