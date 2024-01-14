import React, { Component } from 'react';
import {
  Text,
  View,
  Alert,
  Image,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
  Platform,
  SafeAreaView,
  TextInput,
  Keyboard,
  ScrollView
} from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import Ionicons from "react-native-vector-icons/Ionicons";
import { TextInputMask } from 'react-native-masked-text';
// import firebase from "firebase"
import { db } from "../Config";

export default class AddClients extends Component {
  constructor(props) {
    super(props)
    this.state = {
      speakerIcon: "chevron-back-outline",
      Check: "checkmark-outline",
      name: "",
      cell: "",
      day: "",
      month: "",
      year: "",
      description: "",
      car1: "",
      car2: "",
      adressWork: "",
      neighborhoodWork: "",
      adressHouse: "",
      neighborhoodHouse: "",
      dayValue1: "",
      dayValue2: "",
      dayValue3: "",
      value: "",
      formattedValue: "",
    }
    this.textInputBirth = null
    this.textInputMonth = null
    this.textInputYear = null
  }

  handleValueChange = (itemValue) => {
    this.setState({ selectedValue: itemValue });
  };
  handleSearchTextChange1 = (text) => {
    // Divida o texto em palavras usando espaço como separador
    const words = text.split(' ');

    // Transforme a primeira letra de cada palavra em maiúscula
    const capitalizedWords = words.map((word) =>
      word.charAt(0).toUpperCase() + word.slice(1)
    );

    // Junte as palavras novamente com espaços
    const capitalizedText = capitalizedWords.join(' ');
    this.setState({ name: capitalizedText });
    // Você pode adicionar lógica adicional aqui, como filtrar os dados com base no texto de pesquisa.
  }
  handleSearchTextChangeCell = (text) => {
    this.setState({ cell: text });
  }
  handleSearchTextChange2 = (text) => {
    this.setState({ day: text });

    const parsedValue = parseInt(text, 10); // Parse the input to an integer
    if (!isNaN(parsedValue) && parsedValue >= 0 && parsedValue <= 31) {
      this.setState({ dayValue1: String(parsedValue) });
    } else {
      this.setState({ dayValue1: '' }); // Limpa o valor se não for válido
    }

    if (text.length >= 2 && parsedValue <= 31) {
      this.textInputMonth.focus(); // Move to the month TextInput
    }
  };
  handleSearchTextChange3 = (text) => {
    this.setState({ month: text });

    const parsedValue = parseInt(text, 10); // Parse the input to an integer
    if (!isNaN(parsedValue) && parsedValue >= 0 && parsedValue <= 12) {
      this.setState({ dayValue2: String(parsedValue) });
    } else {
      this.setState({ dayValue2: '' }); // Limpa o valor se não for válido
    }

    if (text.length >= 2 && parsedValue <= 12) {
      this.textInputYear.focus(); // Move to the year TextInput
    }
  };
  handleSearchTextChange4 = (text) => {
    this.setState({ year: text });

    const parsedValue = parseInt(text, 10); // Parse the input to an integer
    if (!isNaN(parsedValue) && parsedValue >= 0 && parsedValue <= 2100) {
      this.setState({ dayValue3: String(parsedValue) });
    } else {
      this.setState({ dayValue3: '' }); // Limpa o valor se não for válido
    }

    if (text.length >= 4 && parsedValue <= 2100) {
      Keyboard.dismiss()
    }
  };
  handleSearchTextChange5 = (text) => {
    this.setState({ description: text });
    // Você pode adicionar lógica adicional aqui, como filtrar os dados com base no texto de pesquisa.
  }
  handleCar1 = (text) => {
    this.setState({ car1: text });
    // Você pode adicionar lógica adicional aqui, como filtrar os dados com base no texto de pesquisa.
  }
  handleCar2 = (text) => {
    this.setState({ car2: text });
    // Você pode adicionar lógica adicional aqui, como filtrar os dados com base no texto de pesquisa.
  }
  handleSearchTextChange7 = (text) => {
    this.setState({ adressWork: text });
    // Você pode adicionar lógica adicional aqui, como filtrar os dados com base no texto de pesquisa.
  }
  handleSearchTextChange8 = (text) => {
    this.setState({ neighborhoodWork: text });
    // Você pode adicionar lógica adicional aqui, como filtrar os dados com base no texto de pesquisa.
  }
  handleSearchTextChange9 = (text) => {
    this.setState({ adressHouse: text });
    // Você pode adicionar lógica adicional aqui, como filtrar os dados com base no texto de pesquisa.
  }
  handleSearchTextChange10 = (text) => {
    this.setState({ neighborhoodHouse: text });
    // Você pode adicionar lógica adicional aqui, como filtrar os dados com base no texto de pesquisa.
  }
  convertToTimestamp = (day, month, year) => {
    var date = [day, month, year]
    date = date.join("/")
    date = new Date(date)
    console.log(date)
    return date
  }


  addClient = (name, cell, day, month, year, description, car1, car2, adressWork, neighborhoodWork, adressHouse, neighborhoodHouse) => {
    if (
      this.state.name &&
      this.state.cell &&
      this.state.day &&
      this.state.month &&
      this.state.year &&
      this.state.car1 &&
      this.state.adressHouse &&
      this.state.neighborhoodHouse
    ) {
      var date = this.convertToTimestamp(day, month, year)
      let data = {
        client_Name: name,
        client_Phone: cell,
        client_Data: date,
        client_Obs: description,
        client_Car1: car1,
        client_Car2: car2,
        client_Work_Adress: adressWork,
        client_Work_Neighborhood: neighborhoodWork,
        client_House_Adress: adressHouse,
        client_House_Neighborhood: neighborhoodHouse,
      };
      db.collection("clients")
        .add(data)
        .then(() => Alert.alert("Cliente cadastrado com sucesso"))
      this.props.navigation.navigate("Home");
    } else {
      Alert.alert(
        "Error",
        "Todos os campos que tem * são obrigatórios!",
        [{ text: "OK" }],
        { cancelable: false }
      );
    }
    // .catch(error => {Alert.alert(error.message)})
  }


  render() {
    const { 
      Check, speakerIcon, name, cell, dayValue1, dayValue2, dayValue3, description, car1,
      car2, adressWork, neighborhoodWork, adressHouse, neighborhoodHouse
    } = this.state;

    return (
      <View style={styles.container}>
        <SafeAreaView style={styles.droidSafeArea} />
        <View style={styles.header}>
          <TouchableOpacity style={styles.back}>
            <Ionicons
              name={speakerIcon}
              size={RFValue(40)}
              onPress={() => this.props.navigation.navigate("Home")}
            />
            {/* onPress={() => this.props.navigation.navigate("Schedule")} */}
          </TouchableOpacity>
          <View style={styles.title}>
            <Text style={styles.titleText}>Novo Cliente</Text>
          </View>
        </View>

        <ScrollView style={styles.body}>

          <View style={styles.margin}>
            <Text style={styles.bodyText}>Nome*</Text>
            <TextInput
              placeholder="Digite o nome do seu cliente aqui"
              placeholderStyle={{
                justifyContent: "center"
              }}
              onChangeText={this.handleSearchTextChange1}
              value={name}
              style={styles.textInputName}
              maxLength={40}
            />
          </View>

          <View style={styles.margin}>
            <Text style={styles.bodyText}>Telefone*</Text>

            <TextInputMask
              style={styles.textInputName}
              type={"cel-phone"}
              placeholder="(99) 99999-9999"
              options={{
                maskType: 'BRL',
                withDDD: true,
                dddMask: '(99) '
              }}
              value={cell}
              onChangeText={this.handleSearchTextChangeCell}
            />

          </View>

          <View style={styles.margin}>
            <Text style={styles.bodyText}>Data de Nascimento</Text>
            <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
              <Text style={{ fontSize: RFValue(16) }}>Dia*</Text>
              <Text style={{ fontSize: RFValue(16) }}>Mês*</Text>
              <Text style={{ fontSize: RFValue(16) }}>Ano*</Text>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
              <TextInput
                placeholder="Dia"
                placeholderStyle={{
                  justifyContent: "center",
                  alignItems: "center"
                }}
                onChangeText={this.handleSearchTextChange2}
                value={dayValue1}
                keyboardType='numeric'
                style={styles.textInputBirth}
                maxLength={2}
                ref={(input) => (this.textInputDay = input)}
              />

              <TextInput
                placeholder="Mês"
                placeholderStyle={{
                  justifyContent: "center",
                  alignItems: "center"
                }}
                onChangeText={this.handleSearchTextChange3}
                value={dayValue2}
                keyboardType='numeric'
                style={styles.textInputBirth}
                maxLength={2}
                ref={(input) => (this.textInputMonth = input)}
              />

              <TextInput
                placeholder="Ano"
                placeholderStyle={{
                  justifyContent: "center",
                  alignItems: "center"
                }}
                onChangeText={this.handleSearchTextChange4}
                value={dayValue3}
                keyboardType='numeric'
                style={[styles.textInputBirth, { width: RFValue(60) }]}
                maxLength={4}
                ref={(input) => (this.textInputYear = input)}
              />
            </View>
          </View>

          <View style={styles.margin}>
            <Text style={styles.bodyText}>Descrição</Text>
            <View style={{
              flexDirection: 'row',
              // backgroundColor:"pink"
            }}>
              <TextInput
                placeholder="Descrição do cliente"
                multiline={true}
                onChangeText={this.handleSearchTextChange5}
                value={description}
                style={[styles.textInputDescription, { height: RFValue(55) }]}
              />
              <TouchableOpacity onPress={Keyboard.dismiss}>
                <Ionicons
                  name={Check}
                  size={RFValue(40)}
                />
              </TouchableOpacity>
            </View>
          </View>

          {/* Carro */}
          <View style={{
            marginTop: RFValue(10),
            marginBottom: RFValue(15),
          }}>
            <Text style={{
              fontWeight: 'bold',
              fontSize: RFValue(19),
              // paddingBottom:RFValue(10)
            }}>Carro 1*</Text>
            <TextInput
              placeholder="Digite o nome do carro"
              placeholderStyle={{
                justifyContent: "center"
              }}
              onChangeText={this.handleCar1}
              value={car1}
              style={styles.textInputName}
              maxLength={40}
            />
          </View>

          <View style={{
            marginTop: RFValue(10),
            marginBottom: RFValue(15),
          }}>
            <Text style={{
              fontWeight: 'bold',
              fontSize: RFValue(19),
              // paddingBottom:RFValue(10)
            }}>Carro 2</Text>
            <TextInput
              placeholder="Digite o nome do carro"
              placeholderStyle={{
                justifyContent: "center"
              }}
              onChangeText={this.handleCar2}
              value={car2}
              style={styles.textInputName}
              maxLength={40}
            />
          </View>

          {/* Trabalho */}
          <View style={styles.border}>
            <View style={{ paddingLeft: RFValue(7), paddingTop: (7) }}>
              <Text style={styles.txt}>Trabalho</Text>
            </View>
            {/* Endereço Trab */}
            <View style={styles.margin}>
              <Text style={styles.bodyText2}>Endereço do trabalho</Text>
              <TextInput
                placeholder="Rua Tal, 100"
                placeholderStyle={{
                  justifyContent: "center"
                }}
                onChangeText={this.handleSearchTextChange7}
                value={adressWork}
                style={styles.textInputName}
                maxLength={40}
              />
            </View>

            {/*Bairro Trab */}
            <View style={styles.margin}>
              <Text style={styles.bodyText2}>Bairro do Trabalho</Text>
              <TextInput
                placeholder="Centro"
                placeholderStyle={{
                  justifyContent: "center"
                }}
                onChangeText={this.handleSearchTextChange8}
                value={neighborhoodWork}
                style={styles.textInputName}
                maxLength={40}
              />
            </View>
          </View>

          <View style={{ height: RFValue(20) }}></View>

          {/* Casa */}
          <View style={styles.border}>
            <View style={{ paddingLeft: RFValue(7), paddingTop: (7) }}>
              <Text style={styles.txt}>Casa</Text>
            </View>

            {/* Endereço Casa */}
            <View style={styles.margin}>
              <Text style={styles.bodyText2}>Endereço da casa*</Text>
              <TextInput
                placeholder="Rua Tal, 100"
                placeholderStyle={{
                  justifyContent: "center"
                }}
                onChangeText={this.handleSearchTextChange9}
                value={adressHouse}
                style={styles.textInputName}
                maxLength={40}
              />
            </View>

            {/* Bairo Casa */}
            <View style={styles.margin}>
              <Text style={styles.bodyText2}>Bairro da casa*</Text>
              <TextInput
                placeholder="Centro"
                placeholderStyle={{
                  justifyContent: "center"
                }}
                onChangeText={this.handleSearchTextChange10}
                value={neighborhoodHouse}
                style={styles.textInputName}
                maxLength={40}
              />
            </View>
          </View>
        <View style={styles.space}></View>
        </ScrollView>
        <View style={styles.fotter}>
          <TouchableOpacity
            style={styles.fotterTouchableOpacityLeft}
            onPress={() => this.props.navigation.navigate("Home")}
          >
            <Text style={styles.fotterTextCancel}>Cancelar</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.fotterTouchableOpacityRight}
            onPress={() => this.addClient(name, cell, dayValue1, dayValue2, dayValue3, description, car1, car2, adressWork, neighborhoodWork, adressHouse, neighborhoodHouse)}
          >
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
  bodyText2: {
    fontSize: RFValue(15)

  },
  border: {
    // backgroundColor: "pink",
    borderWidth: RFValue(3),
    borderRadius: RFValue(8),
    paddingBottom: RFValue(10),
    marginStart: Platform.OS === 'android' ? RFValue(-2) : RFValue(-15),
    // width:"100%",
    paddingStart: RFValue(15),
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
    fontSize: RFValue(25),
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
  margin: {
    // backgroundColor: "brown",
    marginTop: RFValue(10),
    marginBottom: RFValue(10),
  },
  txt: {
    paddingRight: RFValue(2),
    fontWeight: 'bold',
    fontSize: RFValue(17)
  },
  textInputBirth: {
    borderWidth: RFValue(1.5),
    borderRadius: RFValue(4),
    paddingLeft: RFValue(10),
    height: RFValue(40),
    width: RFValue(50),
    backgroundColor: "white",
    marginTop: RFValue(3),
    // fontWeight:'bold',
    fontSize: RFValue(16),
    justifyContent: 'center',
    alignItems: 'center'
    // width: 10
  },
  textInputDescription: {
    flex: 1,
    borderWidth: RFValue(1.5),
    borderRadius: RFValue(4),
    padding: RFValue(10),
    marginRight: RFValue(10),
    height: RFValue(40),
    width: RFValue(10),
    // justifyContent:'center',
    // width: 10,
    // backgroundColor: "blue",
    marginTop: RFValue(3),
  },
  body: {
    // backgroundColor: "green",
    // justifyContent: 'flex-start',
    paddingLeft: RFValue(15),
    marginTop: RFValue(10),
    alignContent: 'space-around'
  },
  margin: {
    // backgroundColor: "brown",
    paddingEnd: 40,
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
    height: RFValue(60),
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
  sectionStyle: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderWidth: 0.5,
    borderColor: '#000',
    height: 40,
    borderRadius: 5,
    margin: 10,
    backgroundColor: "gray"
  },
  imageStyle: {
    padding: 10,
    margin: 5,
    height: 25,
    width: 25,
    resizeMode: 'stretch',
    alignItems: 'center',
  },
  space: {
    width: "100%",
    // backgroundColor: "pink",
    height: Platform.OS == "ios" ? RFValue(221) : RFValue(152)
  },
})




