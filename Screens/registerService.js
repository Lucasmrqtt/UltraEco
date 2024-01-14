import React, { Component, useState } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
  Platform,
  SafeAreaView,
  TextInput,
  Keyboard,
  Alert,
} from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import Ionicons from "react-native-vector-icons/Ionicons";
import { TextInputMask } from 'react-native-masked-text';
// import firebase from "firebase"
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


export default class RegisterServices extends Component {
  constructor(props) {
    super(props)
    this.state = {
      speakerIcon: "chevron-back-outline",
      Check: "checkmark-outline",
      name: '',
      // money: '',
      // name: ,
    }
  }


  convertToInt = (money) => {
    money = money.replace("R$","")
    money = money.replace(".","")
    money = money.replace(",",".")
    money = parseFloat(money)
    console.log(money)
    // this.setState({ money: money })
    return money
    // console.log(this.state.money)
  }


  registerServices = (name, price) => {
    if (
      this.state.name &&
      this.state.money 
    ) {
      price = this.convertToInt(price)
      let data = {
        service_ID: "",
        service_Name: name,
        service_Value: price
      }
      db.collection("Service")
        // collection(db, "Service")
        // .doc("ID")
        // .set(data)
        .add(data)
        .then(() => Alert.alert("Serviço cadastrado com sucesso"))
      this.props.navigation.navigate("Home");
    } else {
      Alert.alert(
        "Error",
        "Todos os campos são obrigatórios!",
        [{ text: "OK"}],
        { cancelable: false }
      );
    }
    // .catch(error => {Alert.alert(error.message)})
  }

  render() {
    const { name, money, Check } = this.state;
    return (
      <View style={styles.container}>
        <SafeAreaView style={styles.droidSafeArea} />
        <View style={styles.header}>
          <TouchableOpacity style={styles.back}
            onPress={() => this.props.navigation.navigate("Home")}>
            <Ionicons
              name={this.state.speakerIcon}
              size={RFValue(40)}
            />
          </TouchableOpacity>
          <View style={styles.title}>
            <Text style={styles.titleText}>Novo Serviço</Text>
          </View>
        </View>

        <View style={styles.body}>
          <View style={styles.margin}>
            <Text style={styles.bodyText}>Nome</Text>
            <TextInput
              placeholder="Digite o nome do serviço aqui"
              placeholderStyle={{
                justifyContent: "center"
              }}
              onChangeText={text => this.setState({ name: text })}
              value={name}
              style={styles.textInputName}
              maxLength={40}
            />
          </View>
          <View style={styles.margin}>
            <Text style={styles.bodyText}>Preço</Text>
            <View style={{ flexDirection: 'row' }}>
              <TextInputMask
                placeholder = "0,00"
                placeholderTextColor={"#000"}
                type={'money'}
                options={{
                  precision: 2,
                  separator: ',',
                  delimiter: '.',
                  unit: 'R$',
                  suffixUnit: ''
                }}
                value={money}
                onChangeText={text => {
                  this.setState({
                    money: text
                  })
                }}
                maxLength={20}
                // autoFocus
                style={styles.value}
              />
              <TouchableOpacity onPress={Keyboard.dismiss}>
                <Ionicons
                  name={Check}
                  size={RFValue(40)}
                  style={{ color: "#000", marginLeft: RFValue(20) }}
                />
              </TouchableOpacity>
            </View>
          </View>

        </View>

        <View style={styles.fotter}>
          <TouchableOpacity
            style={styles.fotterTouchableOpacityLeft}
            onPress={() => this.props.navigation.navigate("Home")}
          >
            <Text style={styles.fotterTextCancel}>Cancelar</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.registerServices(name, money)} style={styles.fotterTouchableOpacityRight}>
            <Text style={styles.fotterTextAdvance}>Avancar</Text>
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
  value: {
    fontSize: RFValue(20),
    color: "#000",
    borderWidth: RFValue(1.5),
    borderRadius: RFValue(4),
    padding: RFValue(10),
    height: RFValue(40),
    width: RFValue(150),
    marginTop: RFValue(3),
    backgroundColor: "white",
  },
  bodyText: {
    fontWeight: 'bold',
    fontSize: RFValue(20)
  },
  fotter: {
    // backgroundColor:"gray",
    justifyContent: 'space-between',
    flexDirection: 'row',
    top: Platform.OS == "ios" ? "127%" : "98%"
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