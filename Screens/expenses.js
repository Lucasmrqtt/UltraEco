import React, { Component } from 'react';
import {
  Text,
  Image,
  View,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
  Platform,
  SafeAreaView,
  TextInput,
  KeyboardAvoidingView,
  Alert
} from 'react-native';
import { RFValue } from "react-native-responsive-fontsize";
import * as Animatable from "react-native-animatable"
import Ionicons from "react-native-vector-icons/Ionicons";

export default class Revenue extends Component {
  render() {
    return (
      <View style={styles.container}>
        <SafeAreaView style={styles.droidSafeArea} />

        <View style={styles.header}>
          <TouchableOpacity style={styles.cancelContainer}>
            <Text style={styles.cancelTxt}>Cancelar</Text>
          </TouchableOpacity>
          <View style={styles.valueContainer}>
            <Text style={{ color: "#a1a1a1" , fontSize:RFValue(13)}}>Valor da despesa</Text>
            <Text style={styles.value}>R$ 0,00</Text>
          </View>
        </View>


        <ScrollView style={styles.body}>
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
            <Text style={styles.buttonText}>Salvar</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    // alignItems: "center",
    // justifyContent: "center"
  },
  droidSafeArea: {
    marginTop:
      Platform.OS === 'android' ? StatusBar.currentHeight : RFValue(35),
  },
  header: {
    flexDirection: 'row',
    height:RFValue(80),
    justifyContent: 'space-between',
    // marginBottom: "5%",
    paddingStart: "5%",
    paddingEnd: "5%",
    marginTop: "7%",
  //  backgroundColor: "#f1f",
  },
  cancelContainer: {
    backgroundColor: "#2e2e2e",
    height: RFValue(40),
    width: RFValue(80),
    alignItems: 'center',
    justifyContent: 'center',
    //  padding: "1%",
    marginTop: "2%",
    borderWidth: RFValue(2),
    borderColor: "#FFF",
    borderRadius: RFValue(17)
    // justifyContent:'center'

  },
  cancelTxt: {
    // backgroundColor: "red",
    color: "#fff",
    fontSize: RFValue(17),
  },
  valueContainer: {
    // backgroundColor: "yellow",
    // height: "40%",
    padding: "2%",
    // top:"10%",
    // alignItems: 'center',
    justifyContent: 'center',
  },
  value: {
    // backgroundColor: "brown",
    fontSize: RFValue(40),
    color: "#FFF"
  },

  body: {
    backgroundColor: "#fff",
    flex: 1,
    borderTopLeftRadius: RFValue(25),
    borderTopRightRadius: RFValue(25),
    paddingStart: "5%",
    paddingEnd: "5%",
  },
  title: {
    fontSize: RFValue(20),
    marginTop: RFValue(28)
  },
  input: {
    borderBottomWidth: RFValue(1),
    height: RFValue(40),
    marginBottom: RFValue(12),
    fontSize: RFValue(16)
  },
  button: {
    backgroundColor: "#2a1074",
    width: "100%",
    borderRadius: RFValue(5),
    paddingVertical: RFValue(8),
    marginTop: RFValue(14),
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: RFValue(18),
    fontWeight: "bold"
  },
})