import React, { Component } from 'react';
import {
  Text,
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
  Platform,
  SafeAreaView,
  TextInput,
  Keyboard,
} from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import Ionicons from "react-native-vector-icons/Ionicons";
import PhoneInput from 'react-native-phone-number-input';

export default class AddClients1 extends Component {
  constructor(props) {
    super(props)
    this.state = {
      speakerIcon: "chevron-back-outline",
      Check: "checkmark-outline",
      searchText1: '',
      searchText2: '',
      searchText3: '',
      searchText4: '',
      searchText5: '',
      dayValue1: '',
      dayValue2: '',
      dayValue3: '',
      yearValue: '',
      dropDownHeight: 40,
      phoneInput: null,
      value: "",
      formattedValue: '',
    }
    this.textInputBirth = null
    this.textInputMonth = null
    this.textInputYear = null
  }

  handleValueChange = (itemValue) => {
    this.setState({ selectedValue: itemValue });
  };
  handleSearchTextChange1 = text => {
    this.setState({ searchText1: text });
    // Você pode adicionar lógica adicional aqui, como filtrar os dados com base no texto de pesquisa.
  }
  handleSearchTextChange2 = (text) => {
    this.setState({ searchText2: text });

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
    this.setState({ searchText3: text });

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
    this.setState({ searchText4: text });
  
    const parsedValue = parseInt(text, 10); // Parse the input to an integer
    if (!isNaN(parsedValue) && parsedValue >= 0 && parsedValue <= 2030) {
      this.setState({ yearValue: String(parsedValue) });
    } else {
      this.setState({ yearValue: '' }); // Limpa o valor se não for válido
    }

    if (text.length >= 4 && parsedValue <= 2030) {
      Keyboard.dismiss()
    }
  };
  handleSearchTextChange5 = text => {
    this.setState({ searchText5: text });
    // Você pode adicionar lógica adicional aqui, como filtrar os dados com base no texto de pesquisa.
  }


  render() {
    const { searchText1 } = this.state;
    const { searchText5 } = this.state;

    return (
      <View style={styles.container}>
        <SafeAreaView style={styles.droidSafeArea} />
        <View style={styles.header}>
          <TouchableOpacity style={styles.back}>
            <Ionicons
              name={this.state.speakerIcon}
              size={RFValue(40)}
              onPress={() => this.props.navigation.navigate("Schedule")}
            />
            {/* onPress={() => this.props.navigation.navigate("Schedule")} */}
          </TouchableOpacity>
          <View style={styles.title}>
            <Text style={styles.titleText}>Novo Cliente</Text>
            <Text style={styles.titleText}>1 de 2</Text>
          </View>
        </View>

        <View style={styles.body}>

          <View style={styles.margin}>
            <Text style={styles.bodyText}>Nome</Text>
            <TextInput
              placeholder="Digite o nome do seu cliente aqui"
              placeholderStyle={{
                justifyContent: "center"
              }}
              onChangeText={this.handleSearchTextChange1}
              value={searchText1}
              style={styles.textInputName}
              maxLength={40}
            />
          </View>

          <View style={styles.margin}>
            <Text style={styles.bodyText}>Telefone</Text>
            <PhoneInput
              ref={this.state.phoneInput}
              defaultValue={this.state.value}
              placeholder='Número de telefone'
              placeholderStyle={{
                justifyContent: "center"
              }}
              defaultCode="BR"
              layout="first"
              onChangeText={(text) => {
                this.setState({ value: text });
              }}
              onChangeFormattedText={(text) => {
                this.setState({ formattedValue: text });
              }}
              containerStyle={{
                marginTop: RFValue(4),
                borderWidth: RFValue(2),
                borderRadius: RFValue(5)
              }}
              withShadow
            />
          </View>

          <View style={styles.margin}>
            <Text style={styles.bodyText}>Data de Nascimento</Text>
            <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
              <Text style={{fontSize:RFValue(16)}}>Dia</Text>
              <Text style={{fontSize:RFValue(16)}}>Mês</Text>
              <Text style={{fontSize:RFValue(16)}}>Ano</Text>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
              <TextInput
                placeholder="Dia"
                placeholderStyle={{
                  justifyContent: "center",
                  alignItems: "center"
                }}
                onChangeText={this.handleSearchTextChange2}
                value={this.state.dayValue1}
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
                value={this.state.dayValue2}
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
                value={this.state.yearValue}
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
                value={searchText5}
                style={[styles.textInputDescription, { height: RFValue(55) }]}
              />
              <TouchableOpacity onPress={Keyboard.dismiss}>
                <Ionicons
                  name={this.state.Check}
                  size={RFValue(40)}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <View style={styles.space}></View>
        <View style={styles.fotter}>
          <TouchableOpacity style={styles.fotterTouchableOpacityLeft} onPress={() => this.props.navigation.navigate("Schedule")}>
            <Text style={styles.fotterTextCancel}>Cancelar</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.fotterTouchableOpacityRight} onPress={() => this.props.navigation.navigate("AddClients2")}>
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
    justifyContent: 'flex-start',
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
  space: {
    width: "100%",
    // backgroundColor: "pink",
    height: RFValue(148)
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
  }
})