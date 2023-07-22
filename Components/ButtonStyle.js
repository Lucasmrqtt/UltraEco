import React, { Component } from 'react';
import {
  View,
  StyleSheet
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function ButtonStyle() {
  return (
    <View style={styles.container}>
      <Ionicons
        name="add-outline"
        size={40}
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