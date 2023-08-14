import React, { Component } from "react";
import { View, StyleSheet, SafeAreaView, Platform, StatusBar, Image, TextInput, Alert, TouchableOpacity, Text, KeyboardAvoidingView } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import * as Animatable from "react-native-animatable"

appIcon = require("../assets/UltraEco.png")

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      userSignedIn: false
    };
  }


  signIn = async (email, password) => {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        this.props.navigation.replace("Dashboard");
      })
      .catch(error => {
        Alert.alert(error.message);
      });
  };

  render() {
    return (
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <SafeAreaView style={styles.droidSafeArea} />
        <Animatable.View animation="fadeInLeft" delay={500} style={styles.containerHeader}>
          <Text style={styles.message}>Bem-vindo(a)</Text>
        </Animatable.View>
        <Animatable.View animation="fadeInUp" style={styles.containerForm}>
          <Text style={styles.title}>Email</Text>
          <TextInput
            style={styles.input}
            onChangeText={text => this.setState({ email: text })}
            placeholder={"Digite o e-mail"}
          />

          <Text style={styles.title}>Senha</Text>
          <TextInput
            style={styles.input}
            onChangeText={text => this.setState({ password: text })}
            placeholder={"Digite a senha"}
            secureTextEntry
          />

          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Acessar</Text>
          </TouchableOpacity>
        </Animatable.View>
      </KeyboardAvoidingView>
    )
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#2a1074",
    // alignItems: "center",
    // justifyContent: "center"
  },
  droidSafeArea: {
    marginTop:
      Platform.OS === 'android' ? StatusBar.currentHeight : RFValue(35),
  },
  containerHeader:{
    marginTop:"14%",
    marginBottom: "8%",
    paddingStart: "5%"
  },
  message:{
    fontSize:RFValue(28),
    fontWeight:"bold",
    color:"#FFF"
  },
  containerForm:{
    backgroundColor:"#fff",
    flex:1,
    borderTopLeftRadius:RFValue(25),
    borderTopRightRadius:RFValue(25),
    paddingStart:"5%",
    paddingEnd:"5%",
  },
  title:{
    fontSize:RFValue(20),
    marginTop:RFValue(28)
  },
  input: {
    borderBottomWidth: RFValue(1),
    height:RFValue(40),
    marginBottom:RFValue(12),
    fontSize:RFValue(16)
  },
  button: {
    backgroundColor: "#2a1074",
    width: "100%",
    borderRadius: RFValue(5),
    paddingVertical:RFValue(8),
    marginTop:RFValue(14),
    justifyContent:"center",
    alignItems:"center",
  },
  buttonText:{
    color:"#fff",
    fontSize:RFValue(18),
    fontWeight:"bold"
  },
});