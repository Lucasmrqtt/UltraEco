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
  Keyboard,
  KeyboardAvoidingView,
} from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import Ionicons from "react-native-vector-icons/Ionicons";
import DatePicker from 'react-native-datepicker';
import PhoneInput from 'react-native-phone-number-input';

export default class AddClients1 extends Component {
  constructor(props) {
    super(props)
    this.state = {
      speakerIcon: "chevron-back-outline",
      Check: "checkmark-outline",
      searchText1: '',
      searchText2: '',
      dropDownHeight: 40,
      selectedDate: null,
      minDate: "1-1-1920", // Definindo a data mínima como a data atual
      maxDate: "1-1-1920", // Definindo a data Maxima como a data atual
      // maxDate: new Date(Date.now()).toLocaleString().split(","),
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
  // onChange = (events, selectedDate) => {
  //   const currentDate = selectedDate || this.state.date
  //   this.state.show = Platform.OS == 'ios'
  //   this.state.date = currentDate

  //   let tempDate = new Date(currentDate)
  //   let fDate = tempDate.getDate() + '/' + (tempDate.getMonth() + 1) + '/' + tempDate.getFullYear()
  // }
  onChange = (date) => {
    this.setState({date: date})
  }

  render() {
    const { searchText1 } = this.state;
    const { searchText2 } = this.state;
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
              // confirmBtnText
              // disableArrowIcon={true}
              // confirmBtnText="Confirmar"
              // withDarkTheme
              withShadow
            // autoFocus={true}
            />
          </View>

          <View style={styles.margin}>
            <Text style={styles.bodyText}>Data de Nascimento</Text>
            <DatePicker
              style={{
                width: 200,
                borderWidth: RFValue(2),
                borderRadius: RFValue(6),
              }}
              mode="date"
              value={this.state.date}
              date={this.state.date}
              format="DD-MM-YYYY"
              maxDate="30-09-2019"
              minDate="10-07-2019"
              onDateChange={(date) => { this.setState({ date: date }) }}
              onChange={this.onChange}

              // mode={this.state.mode}
            
              placeholder={this.state.date}
              confirmBtnText="Confirmar"
              cancelBtnText="Cancelar"
              showIcon={false}
            // onDateChange={this.state.date}
            />
          </View>

          <View style={styles.margin}>
            <Text style={styles.bodyText}>Descrição</Text>
            <View style={{
              flexDirection:'row',
              // backgroundColor:"pink"
            }}>
              <TextInput
                placeholder="Descrição do cliente"
                multiline={true}
                onChangeText={this.handleSearchTextChange2}
                value={searchText2}
                style={styles.textInputDescription}
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
    padding: RFValue(10),
    height: RFValue(40),
    width: RFValue(290),
    backgroundColor: "white",
    marginTop: RFValue(3),
    // width: 10
  },
  textInputDescription: {
    flex:1,
    borderWidth: RFValue(1.5),
    borderRadius: RFValue(4),
    padding: RFValue(10),
    marginRight:RFValue(10),
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
    paddingEnd:40,
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
    height: RFValue(186)
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
    backgroundColor:"gray"
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