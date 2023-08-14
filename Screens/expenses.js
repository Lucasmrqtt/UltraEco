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
  Alert,
  Keyboard
} from 'react-native';
import { RFValue } from "react-native-responsive-fontsize";
import * as Animatable from "react-native-animatable"
import Ionicons from "react-native-vector-icons/Ionicons";
import { TextInputMask } from 'react-native-masked-text';
import DropDownPicker from 'react-native-dropdown-picker';

export default class Expenses extends Component {
  constructor(props) {
    super(props)
    this.state = {
      speakerIcon: "chevron-back-outline",
      Check: "checkmark-outline",
      money: 'R$0,00',
      name:'',
      selectedValue: null,
      dropDownHeight: 40,
      payment: "Din",
      birthTxt: '',
      monthTxt: '',
      yearTxt: '',
      dayValue1: '',
      dayValue2: '',
      dayValue3: '',
      birthTxt2: '',
      monthTxt2: '',
      yearTxt2: '',
      dayValue4: '',
      dayValue5: '',
      dayValue6: '',
    }
    this.textInputBirth = null
    this.textInputMonth = null
    this.textInputYear = null
    this.textInputBirth2 = null
    this.textInputMonth2 = null
    this.textInputYear2 = null
  }

  handleValueChange = (itemValue) => {
    this.setState({ name: itemValue });
  };
  renderPlaceholder1 = () => {
    const { selectedValue } = this.state;
    if (selectedValue) {
      return selectedValue;
    } else {
      return "Selecionar";
    }
  };
  handleSearchTextChange1 = (text) => {
    this.setState({ birthTxt: text });

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
  handleSearchTextChange2 = (text) => {
    this.setState({ monthTxt: text });

    const parsedValue = parseInt(text, 10); // Parse the input to an integer
    if (!isNaN(parsedValue) && parsedValue >= 0 && parsedValue <= 12) {
      this.setState({ dayValue2: String(parsedValue) });
    } else {
      this.setState({ dayValue2: '' }); // Limpa o valor se não for válido
    }

    if (text.length >= 2 && parsedValue <= 12) {
      this.textInputYear.focus(); // Move to the month TextInput
    }
  };
  handleSearchTextChange3 = (text) => {
    this.setState({ yearTxt: text });

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

  handleSearchTextChange4 = (text) => {
    this.setState({ birthTxt2: text });

    const parsedValue = parseInt(text, 10); // Parse the input to an integer
    if (!isNaN(parsedValue) && parsedValue >= 0 && parsedValue <= 31) {
      this.setState({ dayValue4: String(parsedValue) });
    } else {
      this.setState({ dayValue4: '' }); // Limpa o valor se não for válido
    }

    if (text.length >= 2 && parsedValue <= 31) {
      this.textInputMonth2.focus(); // Move to the month TextInput
    }
  };
  handleSearchTextChange5 = (text) => {
    this.setState({ monthTxt2: text });

    const parsedValue = parseInt(text, 10); // Parse the input to an integer
    if (!isNaN(parsedValue) && parsedValue >= 0 && parsedValue <= 12) {
      this.setState({ dayValue5: String(parsedValue) });
    } else {
      this.setState({ dayValue5: '' }); // Limpa o valor se não for válido
    }

    if (text.length >= 2 && parsedValue <= 12) {
      this.textInputYear2.focus(); // Move to the month TextInput
    }
  };
  handleSearchTextChange6 = (text) => {
    this.setState({ yearTxt2: text });

    const parsedValue = parseInt(text, 10); // Parse the input to an integer
    if (!isNaN(parsedValue) && parsedValue >= 0 && parsedValue <= 2100) {
      this.setState({ dayValue6: String(parsedValue) });
    } else {
      this.setState({ dayValue6: '' }); // Limpa o valor se não for válido
    }

    if (text.length >= 4 && parsedValue <= 2100) {
      Keyboard.dismiss()
    }
  };

  render() {
    const { money,Check, name, dayValue1, dayValue2,dayValue3, dayValue4, dayValue5,dayValue6,} = this.state;
    return (
      <View style={styles.container}>
        <SafeAreaView style={styles.droidSafeArea} />

        <View style={styles.header}>
          <TouchableOpacity 
          style={styles.back}
          onPress={() => this.props.navigation.navigate("Home")}
          >
            <Ionicons
              name={this.state.speakerIcon}
              size={RFValue(40)}
              onPress={() => this.props.navigation.navigate("CashFlow")}
              style={{ color: "#fff" }}
            />
          </TouchableOpacity>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <View style={styles.valueContainer}>
              <Text style={{ color: "#990000", fontSize: RFValue(13) }}>Valor da despesa</Text>
              <TextInputMask
                placeholder='R$0,00'
                placeholderTextColor={"#fff"}
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
                autoFocus
                maxLength={20}
                style={styles.value}
              />
            </View>
            <TouchableOpacity onPress={Keyboard.dismiss}>
              <Ionicons
                name={Check}
                size={RFValue(40)}
                style={{ color: "#fff" }}
              />
            </TouchableOpacity>
          </View>
        </View>

        <ScrollView style={styles.containerForm} showsVerticalScrollIndicator={false}>
          <Text style={styles.title}>Nome</Text>
          <TextInput
            style={styles.input}
            onChangeText={this.handleValueChange}
            value={name}
            placeholder={"Nome da despesa"}
          />

          <View>
            <Text style={styles.title}>Forma de pagamento</Text>
            <DropDownPicker
              items={[
                { label: "Dinheiro", value: "Din" },
                { label: "Nubank", value: "Nub" },
                { label: "Sicrédi", value: "Sic" },
                { label: "Débito", value: "Déb" },
                { label: "Crédito", value: "Créd" },
              ]}
              placeholder={this.renderPlaceholder1()}
              placeholderStyle={{
                alignSelf: 'center',
                textAlign: 'center',
              }}
              defaultValue={this.state.payment}
              open={this.state.dropDownHeight == 170}
              onOpen={() => this.setState({ dropDownHeight: 170 })}
              onClose={() => this.setState({ dropDownHeight: 40 })}
              style={{
                marginTop: RFValue(10),
                backgroundColor: "#FFF",
                borderWidth: RFValue(2),
                borderColor: "black",
                width: RFValue(250),
              }}
              textStyle={{
                color: "black",
                fontWeight: 'bold'
                // backgroundColor: "red",
              }}
              onSelectItem={(item) => {
                this.setState({ payment: item.value })
              }}
              dropDownContainerStyle={{
                // backgroundColor: "pink",
                width: RFValue(250),
                marginTop: RFValue(10),
              }}
            // zIndexInverse={1000}
            // zIndex={1000}
            />
          </View>

          <View style={styles.date}>
            <Text style={[styles.title, {marginBottom:RFValue(10)}]}>Data de vencimento</Text>
            <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
              <Text style={{ fontSize: RFValue(16) }}>Dia</Text>
              <Text style={{ fontSize: RFValue(16) }}>Mês</Text>
              <Text style={{ fontSize: RFValue(16) }}>Ano</Text>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
              <TextInput
                placeholder="Dia"
                placeholderStyle={{
                  justifyContent: "center",
                  alignItems: "center"
                }}
                onChangeText={this.handleSearchTextChange1}
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
                onChangeText={this.handleSearchTextChange2}
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
                onChangeText={this.handleSearchTextChange3}
                value={dayValue3}
                keyboardType='numeric'
                style={[styles.textInputBirth, { width: RFValue(60) }]}
                maxLength={4}
                ref={(input) => (this.textInputYear = input)}
              />
            </View>
          </View>

          <View style={styles.date}>
            <Text style={[styles.title, {marginBottom:RFValue(10)}]}>Data do pagamento</Text>
            <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
              <Text style={{ fontSize: RFValue(16) }}>Dia</Text>
              <Text style={{ fontSize: RFValue(16) }}>Mês</Text>
              <Text style={{ fontSize: RFValue(16) }}>Ano</Text>
            </View>
            <View style={{flexDirection: 'row', justifyContent: 'space-around' }}>
              <TextInput
                placeholder="Dia"
                placeholderStyle={{
                  justifyContent: "center",
                  alignItems: "center"
                }}
                onChangeText={this.handleSearchTextChange4}
                value={dayValue4}
                keyboardType='numeric'
                style={styles.textInputBirth}
                maxLength={2}
                ref={(input) => (this.textInputDay2 = input)}
              />

              <TextInput
                placeholder="Mês"
                placeholderStyle={{
                  justifyContent: "center",
                  alignItems: "center"
                }}
                onChangeText={this.handleSearchTextChange5}
                value={dayValue5}
                keyboardType='numeric'
                style={styles.textInputBirth}
                maxLength={2}
                ref={(input) => (this.textInputMonth2 = input)}
              />

              <TextInput
                placeholder="Ano"
                placeholderStyle={{
                  justifyContent: "center",
                  alignItems: "center"
                }}
                onChangeText={this.handleSearchTextChange6}
                value={dayValue6}
                keyboardType='numeric'
                style={[styles.textInputBirth, { width: RFValue(60) }]}
                maxLength={4}
                ref={(input) => (this.textInputYear2 = input)}
              />
            </View>
          </View>

          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Salvar</Text>
          </TouchableOpacity>

          <View style={styles.space}></View>
        </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
  },
  droidSafeArea: {
    marginTop:
      Platform.OS === 'android' ? StatusBar.currentHeight : RFValue(35),
  },
  header: {
    height: RFValue(130),
    marginBottom: "5%",
    paddingStart: "3%",
    marginTop: "7%",
  },
  back: {
    alignItems: 'center',
    width: RFValue(40),

  },
  valueContainer: {
    justifyContent: 'center',
    width: RFValue(290)
  },
  value: {
    fontSize: RFValue(40),
    color: "#FFF",
  },
  date: {
    marginTop: RFValue(10),
    marginBottom: RFValue(10)
  },
  textInputBirth: {
    borderWidth: RFValue(1.5),
    borderRadius: RFValue(4),
    paddingLeft: RFValue(10),
    height: RFValue(40),
    width: RFValue(50),
    backgroundColor: "white",
    marginTop: RFValue(3),
    fontSize: RFValue(16),
    justifyContent: 'center',
    alignItems: 'center'
  },
  containerForm: {
    backgroundColor: "#fff",
    flex: 1,
    borderTopLeftRadius: RFValue(25),
    borderTopRightRadius: RFValue(25),
    paddingStart: "5%",
    paddingEnd: "5%",
  },
  title: {
    fontSize: RFValue(25),
    marginTop: RFValue(28)
  },
  input: {
    borderBottomWidth: RFValue(1),
    height: RFValue(40),
    marginBottom: RFValue(12),
    fontSize: RFValue(16)
  },
  button: {
    backgroundColor: "#990000",
    borderRadius: RFValue(50),
    paddingVertical: RFValue(8),
    width: "60%",
    alignSelf: "center",
    marginTop:RFValue(70),
    alignItems: "center",
    justifyContent: "center"
  },
  buttonText: {
    color: "#fff",
    fontSize: RFValue(18),
    fontWeight: "bold"
  },
  space: {
    width: "100%",
    height: RFValue(80)
  },
})