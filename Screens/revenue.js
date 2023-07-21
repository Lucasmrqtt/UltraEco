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

export default class Revenue extends Component {
  constructor(props) {
    super(props)
    this.state = {
      speakerIcon: "chevron-back-outline",
      Check: "checkmark-outline",
      money: 'R$0,00',
      selectedValue: null,
      dropDownHeight: 40,
      payment: "Din",
    }

  }

  renderPlaceholder1 = () => {
    const { selectedValue } = this.state;
    if (selectedValue) {
      return selectedValue;
    } else {
      return "Selecionar";
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <SafeAreaView style={styles.droidSafeArea} />

        <View style={styles.header}>
          <TouchableOpacity style={styles.back}>
            <Ionicons
              name={this.state.speakerIcon}
              size={RFValue(40)}
              onPress={() => this.props.navigation.navigate("Homer")}
              style={{ color: "#fff" }}
            />
          </TouchableOpacity>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <View style={styles.valueContainer}>
              <Text style={{ color: "#a1a1a1", fontSize: RFValue(13) }}>Valor da receita</Text>
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
                value={this.state.money}
                onChangeText={text => {
                  this.setState({
                    money: text
                  })
                }}
                autoFocus
                style={styles.value}
              />
            </View>
            <TouchableOpacity onPress={Keyboard.dismiss}>
              <Ionicons
                name={this.state.Check}
                size={RFValue(40)}
                style={{ color: "#fff" }}
              />
            </TouchableOpacity>
          </View>
        </View>


        <ScrollView style={styles.containerForm}>
          <Text style={styles.title}>Nome</Text>
          <TextInput
            style={styles.input}
            onChangeText={text => this.setState({ name: text })}
            placeholder={"Nome da receita"}
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
                marginTop:RFValue(10),
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
    // flexDirection: 'row',
    height: RFValue(130),
    // justifyContent: 'space-between',
    marginBottom: "5%",
    paddingStart: "3%",
    // paddingEnd: "5%",
    marginTop: "7%",
    // backgroundColor: "#f1f",
  },
  back: {
    // backgroundColor: "brown",;
    alignItems: 'center',
    width: RFValue(40),

  },
  valueContainer: {
    // marginTop: RFValue(10),
    // backgroundColor: "yellow",
    justifyContent: 'center',
    width: RFValue(290)
  },
  value: {
    // backgroundColor: "brown",
    fontSize: RFValue(40),
    color: "#FFF",
    // backgroundColor: "red",
    // width:RFValue(100)
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
  button:{
    position:"absolute",
    backgroundColor: "green",
    borderRadius:RFValue(50),
    paddingVertical: RFValue(8),
    width:"60%",
    alignSelf:"center",
    bottom:"-100%",
    alignItems:"center",
    justifyContent:"center"
  },
  buttonText: {
    color: "#fff",
    fontSize: RFValue(18),
    fontWeight: "bold"
  },
})