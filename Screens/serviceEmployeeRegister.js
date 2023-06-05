import React, {Component} from "react";
import { Text, View, StyleSheet } from "react-native";

export default class ServiceEmployeeRegister extends Component{
  render(){
    return(
      <View style={styles.container}>
        <Text style={styles.text}>
          ServiceEmployeeRegister
        </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
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