import React, {Component} from "react";
import { Text, View, StyleSheet } from "react-native";

export default class Records extends Component{
  render(){
    return(
      <View style={styles.container}>
        <View style={styles.uperContainer}></View>
        <View styles={styles.lowerContainer}></View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor: "transparent",
    justifyContent:"center",
    alignItems:"center",

  },
  uperContainer:{
    flex:0.5,
    backgroundColor: "transparent",
    justifyContent:"center",
    alignItems:"center",
  },
  lowerContainer:{
    flex:0.5,
    backgroundColor: "black",
    justifyContent:"center",
    alignItems:"center",
  },
  text:{
    fontSize:20,
    fontWeight:"bold",
  },
})