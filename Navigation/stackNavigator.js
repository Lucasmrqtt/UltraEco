import React, {Component} from "react";
import { Text, View, StyleSheet } from "react-native";

export default class StackNavigator extends Component{
  render(){
    return(
      <View style={styles.container}>
        <Text style={styles.text}>
          StackNavigator
        </Text>
      </View>
    )
  }
}

const style = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:"center",
    alignItems:"center",
  },
  text:{
    fontSize:20,
    fontWeight:"bold",
  },
})