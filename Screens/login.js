import React, { Component } from "react";
import { View, StyleSheet, SafeAreaView, Platform, StatusBar, Image, TextInput, Alert, TouchableOpacity, Text, KeyboardAvoidingView } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

appIcon = require("../assets/UltraEco.png")

export default class LoginScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      fontsLoaded: false,
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

        <Image  source={appIcon} style={styles.appIcon} />

        <TextInput
          style={styles.textinput}
          onChangeText={text => this.setState({ email: text })}
          placeholder={"Digite o e-mail"}
          placeholderTextColor={"#FFFFFF"}
          // autoFocus
        />
        <TextInput
          style={[styles.textinput, { marginTop: 20 }]}
          onChangeText={text => this.setState({ password: text })}
          placeholder={"Digite a senha"}
          placeholderTextColor={"#FFFFFF"}
          secureTextEntry
        />
        <TouchableOpacity
          style={[styles.button, { marginTop: 20 }]}
        >
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    )
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#2a1074",
    alignItems: "center",
    justifyContent: "center"
  },
  appIcon: {
    width: RFValue(250),
    height: RFValue(250),
    borderRadius:RFValue(30),
    resizeMode: "contain",
    marginBottom: RFValue(30)
  },
  appTitleText: {
    color: "white",
    textAlign: "center",
    fontSize: RFValue(22),
    marginBottom: RFValue(20)
  },
  textinput: {
    width: RFValue(250),
    height: RFValue(50),
    padding: RFValue(10),
    borderColor: "#FFFFFF",
    borderWidth: RFValue(4),
    borderRadius: RFValue(15),
    fontSize: RFValue(20),
    color: "#FFFFFF",
    backgroundColor: "#2a1074",
    
  },
  button: {
    width: RFValue(250),
    height: RFValue(50),
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    borderRadius: RFValue(30),
    backgroundColor: "white",
    marginBottom: RFValue(20)
  },
  buttonText: {
    fontSize: RFValue(24),
    color: "#2a1074",
  },
});

