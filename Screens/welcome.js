import React, { Component } from "react";
import { View, StyleSheet, SafeAreaView, Platform, StatusBar, Image, TextInput, Alert, TouchableOpacity, Text, KeyboardAvoidingView } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import * as Animatable from "react-native-animatable"

appIcon = require("../assets/UltraEco.png")

export default class Welcome extends Component {
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
        <View style={styles.conatinerLogo}>
          <Animatable.Image 
          animation={"flipInY"}
          source={appIcon} 
          style={styles.logo}
          />
        </View>

        <Animatable.View delay={600} animation={"fadeInUp"} style={styles.containerForm}>
          <Text style={styles.title}>Bem-vindo a UltraEco</Text>
          <Text style={styles.text}>Faça login para começar</Text>

          <TouchableOpacity 
          style={styles.button}
          onPress={() => this.props.navigation.navigate("Login")}
          >
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
  conatinerLogo:{
    flex:2,
    backgroundColor: "#2a1074",
    justifyContent:"center",
    alignItems:"center"
  },
  logo:{
    width: RFValue(300), 
    height: RFValue(300),
    borderRadius:RFValue(30),
    alignSelf:"center"
  },
  containerForm:{
    flex: 1,
    backgroundColor:"#FFF",
    borderTopLeftRadius:RFValue(25),
    borderTopRightRadius:RFValue(25),
    paddingStart:"5%",
    paddingEnd:"5%",
  },
  title:{
    fontSize:RFValue(24),
    fontWeight:"bold",
    marginTop:RFValue(28),
    marginBottom:RFValue(12),
    textAlign:"center"
  },
  text:{
    color:"#a1a1a1"
  },
  button:{
    position:"absolute",
    backgroundColor: "#2a1074",
    borderRadius:RFValue(50),
    paddingVertical: RFValue(8),
    width:"60%",
    alignSelf:"center",
    bottom:"40%",
    alignItems:"center",
    justifyContent:"center"
  },
  buttonText:{
    fontSize:RFValue(18),
    color: "#FFF",
    fontWeight:"bold"
  },
});

