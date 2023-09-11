import React, { Component } from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
  Platform,
  SafeAreaView,
  TextInput,
} from "react-native";
import { RFValue } from 'react-native-responsive-fontsize';
import Ionicons from "react-native-vector-icons/Ionicons";
import firebase from "firebase"
import { db } from "../Config";
// import { initializeApp } from 'firebase/app'
// import { getFirestore, collection, getDocs } from 'firebase/firestore/lite'
//import db from "../Config"
// import { firestore } from 'firebase';
// import { firebaseConfig } from '../Config';

// const app = initializeApp(firebaseConfig);
// const db = getFirestore(app);
// firebase.initializeApp(firebaseConfig);
// const db = firebase.firestore()

export default class Employee extends Component {
  constructor(props) {
    super(props)
    this.state = {
      speakerIcon: "chevron-back-outline",
      name: "",
    }
  }

  handleSearchTextChange1 = (text) => {
    this.setState({ name: text })
  }

  registerEmployee = (name) => {
    if (
      this.state.name
    ) {
      let data = {
        employee_Id: "",
        employee_Name: name
      }
      db.collection("Employee")
        .add(data)
        .then(() => Alert.alert("Funcionário cadastrado com sucesso"))
      this.props.navigation.navigate("Home");
    } else {
      Alert.alert(
        "Error",
        "Todos os campos são obrigatórios!",
        [{ text: "OK" }],
        { cancelable: false }
      );
    }
    // .catch(error => {Alert.alert(error.message)})
  }


  render() {
    const { name, speakerIcon } = this.state
    return (
      <View style={styles.container}>
        <SafeAreaView style={styles.droidSafeArea} />
        <View style={styles.header}>
          <TouchableOpacity
            style={styles.back}
            onPress={() => this.props.navigation.navigate("Home")}
          >
            <Ionicons name={speakerIcon} size={RFValue(40)} />
          </TouchableOpacity>
          <View style={styles.title}>
            <Text style={styles.titleText}>Novo Funcionário</Text>
          </View>
        </View>

        <View style={styles.body}>
          <View style={styles.margin}>
            <Text style={styles.bodyText}>Nome</Text>
            <TextInput
              placeholder="Digite o nome do seu cliente aqui"
              placeholderStyle={{
                justifyContent: "center",
              }}
              onChangeText={this.handleSearchTextChange1}
              value={name}
              style={styles.textInputName}
              maxLength={40}
            />
          </View>
        </View>

        <View style={styles.fotter}>
          <TouchableOpacity
            style={styles.fotterTouchableOpacityLeft}
            onPress={() => this.props.navigation.navigate("Home")}
          >
            <Text style={styles.fotterTextCancel}>Cancelar</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.fotterTouchableOpacityRight}
            onPress={() => this.registerEmployee(name)}  
          >
            <Text style={styles.fotterTextAdvance}>Avançar</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    // justifyContent: "center",
    // alignItems:"center",
  },
  droidSafeArea: {
    marginTop:
      Platform.OS === 'android' ? StatusBar.currentHeight : RFValue(35),
  },
  header: {
    // backgroundColor: "pink",
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: RFValue(10),
  },
  back: {
    // backgroundColor: "brown",
    // justifyContent: 'flex-start',
  },
  title: {
    // backgroundColor: "blue",
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    marginLeft: RFValue(20),
  },
  titleText: {
    // backgroundColor: "purple",
    fontWeight: 'bold',
    fontSize: RFValue(20),
    paddingRight: RFValue(65),
    marginTop: RFValue(3),
  },
  textInputName: {
    borderWidth: RFValue(1.5),
    borderRadius: RFValue(4),
    padding: RFValue(10),
    height: RFValue(40),
    width: RFValue(290),
    marginTop: RFValue(3),
    backgroundColor: "white",
    // width: 10
  },
  textInputTel: {
    borderWidth: RFValue(1.5),
    borderRadius: RFValue(4),
    padding: RFValue(10),
    height: RFValue(40),
    width: RFValue(150),
    marginTop: RFValue(3),
    // width: 10
  },
  textInputBirth: {
    borderWidth: RFValue(1.5),
    borderRadius: RFValue(4),
    padding: RFValue(10),
    height: RFValue(40),
    width: RFValue(290),
    backgroundColor: "white",
    marginTop: RFValue(3),
    // width: 10
  },
  textInputDescription: {
    borderWidth: RFValue(1.5),
    borderRadius: RFValue(4),
    padding: RFValue(10),
    height: RFValue(53),
    width: RFValue(290),
    // width: 10,
    backgroundColor: "white",
    marginTop: RFValue(3),
  },

  body: {
    // backgroundColor: "green",
    justifyContent: 'flex-start',
    paddingLeft: RFValue(15),
    marginTop: RFValue(10),
    alignContent: 'space-around'
  },
  margin: {
    // backgroundColor: "brown",
    marginTop: RFValue(10),
    marginBottom: RFValue(10)
  },
  bodyText: {
    fontWeight: 'bold',
    fontSize: RFValue(20)
  },
  fotter: {
    // backgroundColor:"gray",
    justifyContent: 'space-between',
    flexDirection: 'row',
    top: Platform.OS == "ios" ? "151%" : "121%"
    // alignSelf: 'flex-end'
  },
  fotterTouchableOpacityLeft: {
    width: "48%",
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: RFValue(3),
    borderRadius: RFValue(10),
    padding: RFValue(6),
    backgroundColor: "#990000"
  },
  fotterTouchableOpacityRight: {
    width: "48%",
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: RFValue(3),
    borderRadius: RFValue(10),
    padding: RFValue(6),
    backgroundColor: "rgb(0,128,0)"
  },
  fotterTextCancel: {
    // fontWeight:'bold',
    fontSize: RFValue(30),
    color: "white"

  },
  fotterTextAdvance: {
    // fontWeight:'bold',
    fontSize: RFValue(30),
    color: "white"
  },
})