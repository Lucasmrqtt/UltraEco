import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
  Platform,
  SafeAreaView,
  TextInput,
} from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import Ionicons from "react-native-vector-icons/Ionicons";

export default class AddClients2 extends Component {
  constructor(props) {
    super(props)
    this.state = {
      speakerIcon: "chevron-back-outline",
      searchText1: '',
      searchText2: '',
      searchText3: '',
      searchText4: '',
      searchText5: '',
      dropDownHeight: 40,
      selectedDate: null,
      minDate: new Date(1, 1, 1), // Definindo a data mínima como a data atual
      maxDate: new Date(31, 12, 2023),
      choseDate: '',
      phoneInput: null,
      value: "",
      formattedValue: '',
      date: null,
      mode: "date",
      show: false,
    }
  }

  handleValueChange = (itemValue) => {
    this.setState({ selectedValue: itemValue });
  };

  handleSearchTextChange1 = text => {
    this.setState({ searchText1: text });
    // Você pode adicionar lógica adicional aqui, como filtrar os dados com base no texto de pesquisa.
  }

  handleSearchTextChange2 = text => {
    this.setState({ searchText2: text });
    // Você pode adicionar lógica adicional aqui, como filtrar os dados com base no texto de pesquisa.
  }

  handleSearchTextChange3 = text => {
    this.setState({ searchText3: text });
    // Você pode adicionar lógica adicional aqui, como filtrar os dados com base no texto de pesquisa.
  }

  handleSearchTextChange4 = text => {
    this.setState({ searchText4: text });
    // Você pode adicionar lógica adicional aqui, como filtrar os dados com base no texto de pesquisa.
  }

  handleSearchTextChange5 = text => {
    this.setState({ searchText5: text });
    // Você pode adicionar lógica adicional aqui, como filtrar os dados com base no texto de pesquisa.
  }

  onChange = (events, selectedDate) => {
    const currentDate = selectedDate || date
    this.state.show = Platform.OS == 'ios'
    this.state.date = currentDate

    let tempDate = new Date(currentDate)
    let fDate = tempDate.getDate() + '/' + (tempDate.getMonth() + 1) + '/' + tempDate.getFullYear()
  }

  render() {
    const { searchText1 } = this.state;
    const { searchText2 } = this.state;
    const { searchText3 } = this.state;
    const { searchText4 } = this.state;
    const { searchText5 } = this.state;
    return (
      <View style={styles.container}>
        <SafeAreaView style={styles.droidSafeArea} />
        <View style={styles.header}>
          <TouchableOpacity>
            <Ionicons
              name={this.state.speakerIcon}
              size={RFValue(40)}
              onPress={() => this.props.navigation.navigate("AddClients1")}
            />
          </TouchableOpacity>
          <View style={styles.title}>
            <Text style={styles.titleText}>Novo Cliente</Text>
            <Text style={styles.titleText}>2 de 2</Text>
          </View>
        </View>

        <View style={styles.body}>

          {/* Carro */}
          <View style={{
            marginTop: RFValue(10),
            marginBottom: RFValue(15),
            paddingLeft: RFValue(15)
          }}>
            <Text style={{
              fontWeight: 'bold',
              fontSize: RFValue(19),
              // paddingBottom:RFValue(10)
            }}>Carro</Text>
            <TextInput
              placeholder="Digite o nome do carro"
              placeholderStyle={{
                justifyContent: "center"
              }}
              onChangeText={this.handleSearchTextChange1}
              value={searchText1}
              style={styles.textInputName}
              maxLength={40}
            />
          </View>
          
          {/* Trabalho */}
          <View style={styles.work}>
            <View style={{ paddingLeft: RFValue(7), paddingTop: (7) }}>
              <Text style={styles.txt}>Trabalho</Text>
            </View>
            {/* Endereço Trab */}
            <View style={styles.margin}>
              <Text style={styles.bodyText}>Endereço do trabalho</Text>
              <TextInput
                placeholder="Rua Tal, 100"
                placeholderStyle={{
                  justifyContent: "center"
                }}
                onChangeText={this.handleSearchTextChange2}
                value={searchText2}
                style={styles.textInputName}
                maxLength={40}
              />
            </View>

            {/*Bairro Trab */}
            <View style={styles.margin}>
              <Text style={styles.bodyText}>Bairro do Trabalho</Text>
              <TextInput
                placeholder="Centro"
                placeholderStyle={{
                  justifyContent: "center"
                }}
                onChangeText={this.handleSearchTextChange3}
                value={searchText3}
                style={styles.textInputName}
                maxLength={40}
              />
            </View>
          </View>
          
          <View style={{ height: RFValue(20) }}></View>

          {/* Casa */}
          <View style={styles.house}>
            <View style={{ paddingLeft: RFValue(7), paddingTop: (7) }}>
              <Text style={styles.txt}>Casa</Text>
            </View>
            
            {/* Endereço Casa */}
            <View style={styles.margin}>
              <Text style={styles.bodyText}>Endereço Da casa</Text>
              <TextInput
                placeholder="Rua Tal, 100"
                placeholderStyle={{
                  justifyContent: "center"
                }}
                onChangeText={this.handleSearchTextChange4}
                value={searchText4}
                style={styles.textInputName}
                maxLength={40}
              />
            </View>

            {/* Bairo Casa */}
            <View style={styles.margin}>
              <Text style={styles.bodyText}>Bairro da casa</Text>
              <TextInput
                placeholder="Centro"
                placeholderStyle={{
                  justifyContent: "center"
                }}
                onChangeText={this.handleSearchTextChange5}
                value={searchText5}
                style={styles.textInputName}
                maxLength={40}
              />
            </View>
          </View>
        </View>

        <View style={styles.space}></View>

        <View style={styles.fotter}>
          <TouchableOpacity style={styles.fotterTouchableOpacityLeft} onPress={() => this.props.navigation.navigate("Schedule")}>
            <Text style={styles.fotterTextCancel}>Cancelar</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.fotterTouchableOpacityRight}>
            <Text style={styles.fotterTextAdvance}>Concluir</Text>
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
    // paddingLeft: RFValue(15),
    marginTop: RFValue(10),
    alignContent: 'space-around'
  },
  margin: {
    // backgroundColor: "brown",
    marginTop: RFValue(10),
    marginBottom: RFValue(10),
    paddingLeft: RFValue(15)
  },
  work: {
    // backgroundColor: "pink",
    borderWidth: RFValue(3),
    borderRadius: RFValue(8),
    paddingBottom: RFValue(10)
  },
  house: {
    // backgroundColor: "blue",
    borderWidth: RFValue(3),
    borderRadius: RFValue(8),
    paddingBottom: RFValue(10)
  },
  bodyText: {
    // fontWeight: 'bold',
    fontSize: RFValue(15)
  },
  txt: {
    paddingRight: RFValue(2),
    fontWeight: 'bold',
    fontSize: RFValue(17)
  },

  space: {
    width: "100%",
    // backgroundColor: "pink",
    height: RFValue(24)
  },
  fotter: {
    // backgroundColor:"gray",
    justifyContent: 'space-between',
    flexDirection: 'row',
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