import React, { Component } from "react";
import {
  Alert,
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
  Platform,
  SafeAreaView,
  TextInput,
  Keyboard,
  Image
} from "react-native";
import { RFValue } from 'react-native-responsive-fontsize';
import Ionicons from "react-native-vector-icons/Ionicons";
import db from "../config";
import { collection, addDoc } from "firebase/firestore";
import { TextInputMask } from "react-native-masked-text"; 4

export default class Employee extends Component {
  constructor(props) {
    super(props)
    this.state = {
      speakerIcon: "arrow-back",
      name: "",
      cpf: "",
      // id: 0
    }
  }

  handleSearchTextChange1 = (text) => {
    this.setState({ name: text })
  }
  handleSearchTextChange2 = (text) => {
    this.setState({ cpf: text })
  }

  registerEmployee = async () => {
    const { name, cpf } = this.state
    if (this.state.cpf.length > 13) {
      if (
        name &&
        cpf
      ) {
        console.log(cpf)
        await addDoc(collection(db, "Employee"), {
          // employee_Id: this.state.id,
          employee_name: name,
          employee_cpf: cpf
        })
        // this.setState(prevState => ({ id: prevState.id + 1 }))
        Alert.alert("Funcionário cadastrado com sucesso!")
        this.setState({ cpf: "" })
        this.setState({ name: "" })
      } else {
        Alert.alert(
          "Error",
          "Todos os campos são obrigatórios!",
          [{ text: "OK" }],
          { cancelable: false }
        );
      }
    } else {
      Alert.alert(
        "Error",
        "O CPF deve conter 11 caracteres!",
        [{ text: "OK" }],
        { cancelable: false }
      );
    }
  }


  render() {
    const { name, cpf, speakerIcon } = this.state
    return (
      <View style={styles.container}>
        <SafeAreaView style={styles.droidSafeArea} />
        <View style={styles.header}>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate("Home")}
          >
            <Ionicons name={speakerIcon} size={RFValue(40)} />
          </TouchableOpacity>
          <View style={styles.title}>
            <Text style={styles.titleText}>Novo Funcionário</Text>
          </View>
          <TouchableOpacity onPress={() => this.props.navigation.navigate("AddTeam")}>
            <Image
              source={require("../assets/employee.png")}
              style={styles.image} />
          </TouchableOpacity>
        </View>

        <View style={styles.body}>
          <View style={styles.margin}>
            <Text style={styles.bodyText}>Nome</Text>
            <TextInput
              placeholder="Digite o nome do seu funcionário aqui"
              placeholderStyle={{
                justifyContent: "center",
              }}
              onChangeText={this.handleSearchTextChange1}
              value={name}
              style={styles.textInputName}
              maxLength={40}
              returnKeyType="done" // Mudei aqui para "done"
              onSubmitEditing={() => Keyboard.dismiss()}
            />
          </View>
          <View style={styles.margin}>
            <Text style={styles.bodyText}>CPF</Text>

            <TextInputMask
              style={styles.textInputName}
              type={"cpf"}
              placeholder="999.999.999-99"
              value={cpf}
              onChangeText={this.handleSearchTextChange2}
              returnKeyType="done" // Mudei aqui para "done"
              onSubmitEditing={() => Keyboard.dismiss()}
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
    marginTop:RFValue(3),
    flexDirection: 'row',
    alignItems: 'center',
    // justifyContent: 'space-between',
    paddingHorizontal: RFValue(10),
  },
  title: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  titleText: {
    fontWeight: 'bold',
    fontSize: RFValue(20),
    marginTop: RFValue(3),
  },
  image: {
    width: RFValue(40),
    height: RFValue(40),
    marginEnd: 20,
    marginTop:RFValue(1),
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
    fontSize: RFValue(16)
  },
  fotter: {
    // backgroundColor:"gray",
    justifyContent: 'space-between',
    flexDirection: 'row',
    top: Platform.OS == "ios" ? "131%" : "101%"
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