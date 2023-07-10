import React, { Component, useState } from 'react';
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
} from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import Ionicons from "react-native-vector-icons/Ionicons";
import DropDownPicker from 'react-native-dropdown-picker';
import DatePicker from 'react-native-datepicker';
import AddClients2 from './addClients2';

export default class AddClients1 extends Component {
  constructor(props) {
    super(props)
    this.state = {
      speakerIcon: "chevron-back-outline",
      searchText: '',
      dropDownHeight: 40,
      selectedValue1: null,
      gender: "Masc",
      choseDate: "",
    }
  }

  handleValueChange = (itemValue) => {
    this.setState({ selectedValue1: itemValue });
  };

  renderPlaceholder = () => {
    const { selectedValue1 } = this.state;
    if (selectedValue1) {
      return selectedValue1;
    } else {
      return 'Selecione o gênero';
    }
  };

  handleSearchTextChange = text => {
    this.setState({ searchText: text });
    // Você pode adicionar lógica adicional aqui, como filtrar os dados com base no texto de pesquisa.
  }

  render() {
    const { searchText } = this.state;
    return (
      <View style={styles.container}>
        <SafeAreaView style={styles.droidSafeArea} />
        <View style={styles.header}>
          <TouchableOpacity style={styles.back}>
            <Ionicons
              name={this.state.speakerIcon}
              size={RFValue(40)}
            />
          </TouchableOpacity>
          <View style={styles.title}>
            <Text style={styles.titleText}>Novo Cliente</Text>
            <Text style={styles.titleText}>1 de 2</Text>
          </View>
        </View>
      
        <View style={styles.body}>

          <View style={styles.containerName}>
            <Text style={styles.bodyText}>Nome</Text>
            <TextInput
              placeholder="Digite o nome do seu cliente aqui"
              onChangeText={this.handleSearchTextChange}
              value={searchText}
              style={styles.textInput}
              maxLength={40}
            />
          </View>

          {/* <View style={styles.containerTel}>
            <Text>Telefone</Text>
            <TextInput
              placeholder="01/01/2000"
              onChangeText={this.handleSearchTextChange}
              value={searchText}
              style={styles.textInput}
            />
          </View>

          <View style={styles.containerBirth}>
            <Text>Data de Nascimento</Text>
            <TextInput
              placeholder="Digite aqui para pesquisar"
              onChangeText={this.handleSearchTextChange}
              value={searchText}
              style={styles.textInput}
            />
          </View>

          <View style={styles.containerGender}>
            <Text>Gênero</Text>
            <DropDownPicker
              items={[
                { label: "Masculino", value: "Masc" },
                { label: "Feminino", value: "Fem" },
              ]}
              placeholder={this.renderPlaceholder()}
              placeholderStyle={{
                alignSelf: 'center',
                textAlign: 'center'
              }}
              defaultValue={this.state.gender}
              open={this.state.dropDownHeight == 170}
              onOpen={() => this.setState({ dropDownHeight: 170 })}
              onClose={() => this.setState({ dropDownHeight: 40 })}
              style={{
                backgroundColor: "white",
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
                this.setState({ gender: item.value })
              }}
              dropDownContainerStyle={{
                // backgroundColor: "pink",
                width: RFValue(250),
              }}
            // zIndexInverse={1000}
            // zIndex={1000}
            />
          </View>

          <View style={styles.containerDescription}>
            <Text>Descrição</Text>
            <TextInput
              placeholder=""
              onChangeText={this.handleSearchTextChange}
              value={searchText}
              style={styles.textInput}
            />
          </View> */}
        </View>

        {/* <View style={styles.fotter}>
          <TouchableOpacity>
            <Text>Cancelar</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text>Avancar</Text>
          </TouchableOpacity>
        </View> */}

        {/* <View style={styles.space}></View> */}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: "center",
    // alignItems:"center",
  },
  droidSafeArea: {
    marginTop:
      Platform.OS === 'android' ? StatusBar.currentHeight : RFValue(35),
  },
  header: {
    backgroundColor: "pink",
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
    alignItems:'center',
    flex: 1,
    marginLeft: RFValue(20),
  },
  titleText: {
    // backgroundColor: "purple",
    fontWeight:'bold',
    fontSize:RFValue(20),
    paddingRight:RFValue(65)
  },
  textInput: {
    borderWidth: RFValue(1.5),
    borderRadius: RFValue(4),
    padding: RFValue(10),
    height: RFValue(40),
    width: RFValue(260)
    // width: 10
  },

  body:{
    backgroundColor: "green",
    justifyContent:'flex-start',
    paddingLeft:RFValue(10),
    marginTop:RFValue(10),
    alignContent:'space-around'
  },
  containerName:{
    backgroundColor: "brown",
    marginTop:RFValue(10),
    marginBottom:RFValue(10)
  },
  bodyText:{
    fontWeight:'bold',
    fontSize:RFValue(20)
  },
})