import React, { Component } from 'react';
import {
  Text,
  View,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
  Platform,
  Keyboard,
  SafeAreaView,
  TextInput,
  FlatList
} from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import DropDownPicker from 'react-native-dropdown-picker';

var clients = require("./Dashboard.json")
var meses = {
  "1": "Janeiro", //31
  "3": "Março", //31
  "4": "Abril", //30
  "5": "Maio", //31
  "6": "Junho", //30
  "7": "Julho", //31
  "8": "Agosto", //31
  "9": "Setembro", //30
  "10": "Outubro", //31
  "11": "Novembro", //30
  "12": "Dezembro", //31

}
export default class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
      searchText2: '',
      searchText3: '',
      searchText4: '',
      searchText5: '',
      searchText6: '',
      searchText7: '',
      dayValue1: '',
      dayValue2: '',
      dayValue3: '',
      dayValue4: '',
      dayValue5: '',
      dayValue6: '',
      dropDownHeight1: 40,
      dropDownHeight2: 40,
      selectedValue1: null,
      selectedValue2: null,
      payment: "Din",
      date: new Date().getMonth() + 1
    };
    this.textInputBirth1 = null
    this.textInputMonth1 = null
    this.textInputYear1 = null
    this.textInputBirth2 = null
    this.textInputMonth2 = null
    this.textInputYear2 = null
  }

  componentDidMount() {
    // console.log(date)
    this.dateChange()
  }
  
  dateChange = () =>{
    let d = this.state.date
    for (const key in meses) {
      if (d == key) {
        d = meses[key]
      }
    }
    // console.log(d)
    this.setState({ date: d })
  }

  handleValueChange1 = (itemValue) => {
    this.setState({ selectedValue1: itemValue });
  };

  handleSearchTextChange2 = (text) => {
    this.setState({ searchText2: text });
  
    const parsedValue = parseInt(text, 10);
    if (!isNaN(parsedValue) && parsedValue >= 0 && parsedValue <= 31) {
      this.setState({ dayValue1: String(parsedValue) });
    } else {
      this.setState({ dayValue1: '' });
    }
  
    if (text.length >= 2 && parsedValue <= 31) {
      this.textInputMonth1.focus();
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
      this.textInputYear1.focus(); // Move to the year TextInput
    }
  };
  handleSearchTextChange4 = (text) => {
    this.setState({ searchText4: text });

    const parsedValue = parseInt(text, 10); // Parse the input to an integer
    if (!isNaN(parsedValue) && parsedValue >= 0 && parsedValue <= 2100) {
      this.setState({ dayValue3: String(parsedValue) });
    } else {
      this.setState({ dayValue3: '' }); // Limpa o valor se não for válido
    }

    if (text.length >= 4 && parsedValue <= 2100) {
      this.textInputBirth2.focus(); // Move to the year TextInput
    }
  };

  handleSearchTextChange5 = (text) => {
    this.setState({ searchText5: text });

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
  handleSearchTextChange6 = (text) => {
    this.setState({ searchText6: text });

    const parsedValue = parseInt(text, 10); // Parse the input to an integer
    if (!isNaN(parsedValue) && parsedValue >= 0 && parsedValue <= 12) {
      this.setState({ dayValue5: String(parsedValue) });
    } else {
      this.setState({ dayValue5: '' }); // Limpa o valor se não for válido
    }

    if (text.length >= 2 && parsedValue <= 12) {
      this.textInputYear2.focus(); // Move to the year TextInput
    }
  };
  handleSearchTextChange7 = (text) => {
    this.setState({ searchText7: text });

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

  renderPlaceholder1 = () => {
    const { selectedValue1 } = this.state;
    if (selectedValue1) {
      return selectedValue1;
    } else {
      return 'Din / Nub / Sic / Déb / Créd';
    }
  };
  renderPlaceholder2 = () => {
    const { selectedValue2 } = this.state;
    if (selectedValue2) {
      return selectedValue2;
    } else {
      return 'A/F';
    }
  };

  renderItem = ({ item }) => {
    // nome = item.nome
    // if (nome.lenght > 15) {
    //   nome = nome.nome.split('')

    // }
    return (
      <View style={styles.fotterValues}>
        <View style={styles.containerFotterValues}>
          <Text style={styles.fotterTextValue}>{item.codigo}</Text>
        </View>
        <View style={styles.containerFotterValues}>
          <Text style={styles.fotterTextValue}>{item.data}</Text>
        </View>
        <View style={styles.containerFotterValues}>
          <Text style={styles.fotterTextValue}>{item.servico}</Text>
        </View>
        <View style={{
          width: RFValue(255),
          alignItems: 'center',
          // backgroundColor:"purple"
        }}>
          <Text style={styles.fotterTextValue}>{item.nome}</Text>
        </View>
        <View style={styles.containerFotterValues}>
          <Text style={styles.fotterTextValue}>{item.profissional}</Text>
        </View>
        <View style={styles.containerFotterValues}>
          <Text style={styles.fotterTextValue}>R${item.valor},00</Text>
        </View>
        <View style={styles.containerFotterValues}>
          <Text style={styles.fotterTextValue}>R${item.desconto}</Text>
        </View>
        <View style={styles.containerFotterValues}>
          <Text style={styles.fotterTextValue}>R${item.valor - item.desconto} {item.formaDePagamento}</Text>
        </View>
      </View>
    )
  }
  
  handleSearchTextChange = text => {
    this.setState({ searchText: text });
    // Você pode adicionar lógica adicional aqui, como filtrar os dados com base no texto de pesquisa.
  }

  render() {
    const { searchText } = this.state;
    return (
      <View style={styles.container}>
        <SafeAreaView style={styles.droidSafeArea} />
        <ScrollView>
          <View style={styles.header}>
            <View style={styles.title}>
              <Text style={styles.textTitle}>Dashboard</Text>
              <Text style={styles.textMonth}>{this.state.date}</Text>
            </View>
            <TouchableOpacity style={styles.cashFlow} onPress={() => this.props.navigation.navigate("CashFlow")}
            >
              <Text style={styles.cashFlowText}> Acessar fluxo de caixa </Text>
            </TouchableOpacity>
          </View>

          <View style={styles.body}>
            <View style={styles.invoicingAndCash}>
              <View style={styles.invoicingContainer}>
                <Text style={styles.invoicingText}> Faturamento </Text>
                <Text style={styles.invoicingPrice}> R$ ******** </Text>
                <View style={styles.invoicingMoney}>
                  <Text style={styles.invoicingPix}> Pix: </Text>
                  <Text style={styles.invoicingDin}> Din: </Text>
                  <Text style={styles.invoicingCred}> Créd: </Text>
                  <Text style={styles.invoicingDeb}> Déb: </Text>
                </View>
              </View>

              <View style={styles.cashContainer}>
                <Text style={styles.cashText}> Valor em caixa </Text>
                <Text style={styles.cashPrice}> R$ ******** </Text>
                <View style={styles.cashMoney}>
                  <Text style={styles.cashPix}> Pix: </Text>
                  <Text style={styles.cashDin}> Din: </Text>
                  <Text style={styles.cashCred}> Créd: </Text>
                  <Text style={styles.cashDeb}> Déb: </Text>
                </View>
              </View>
            </View>

            <View style={styles.filter}>
              <View style={styles.clientFilter}>
                <Text style={styles.filterText}> Filtro Cliente</Text>
                <View>
                  <TextInput
                    placeholder="Digite aqui para pesquisar"
                    onChangeText={this.handleSearchTextChange}
                    value={searchText}
                    style={styles.filterTextInput}
                    maxLength={40}
                  />
                </View>
              </View>

              <View style={styles.moneyFilter}>
                <Text style={styles.filterText}> Filtro </Text>
                <View style={{zIndex: 99,}} >
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
                      textAlign: 'center'
                    }}
                    defaultValue={this.state.payment}
                    open={this.state.dropDownHeight1 == 170}
                    onOpen={() => this.setState({ dropDownHeight1: 170 })}
                    onClose={() => this.setState({ dropDownHeight1: 40 })}
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
                      this.setState({ payment: item.value })
                    }}
                    dropDownContainerStyle={{
                      // backgroundColor: "pink",
                      width: RFValue(250),
                    }}
                  // zIndexInverse={1000}
                  // zIndex={1000}
                  />
                </View>
              </View>

              <View style={styles.dateFilter}>
                <Text style={[styles.fromTxt, {fontSize:RFValue(20), marginVertical:6}]}>Filtro Data</Text>
                <View style={styles.from}>
                  <Text style={[styles.fromTxt, {paddingRight:RFValue(11)}]}>De:</Text>
                  <View  style={styles.textInput}>
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
                      ref={(input) => (this.textInputBirth1 = input)}
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
                      ref={(input) => (this.textInputMonth1 = input)}
                    />

                    <TextInput
                      placeholder="Ano"
                      placeholderStyle={{
                        justifyContent: "center",
                        alignItems: "center"
                      }}
                      onChangeText={this.handleSearchTextChange4}
                      value={this.state.dayValue3}
                      keyboardType='numeric'
                      style={[styles.textInputBirth, { width: RFValue(60) }]}
                      maxLength={4}
                      ref={(input) => (this.textInputYear1 = input)}
                    />
                  </View>
                </View>

                <View style={styles.from}>
                  <Text style={styles.fromTxt}>Até:</Text>
                  <View  style={styles.textInput}>
                    <TextInput
                      placeholder="Dia"
                      placeholderStyle={{
                        justifyContent: "center",
                        alignItems: "center"
                      }}
                      onChangeText={this.handleSearchTextChange5}
                      value={this.state.dayValue4}
                      keyboardType='numeric'
                      style={styles.textInputBirth}
                      maxLength={2}
                      ref={(input) => (this.textInputBirth2 = input)}
                    />
                    <TextInput
                      placeholder="Mês"
                      placeholderStyle={{
                        justifyContent: "center",
                        alignItems: "center"
                      }}
                      onChangeText={this.handleSearchTextChange6}
                      value={this.state.dayValue5}
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
                      onChangeText={this.handleSearchTextChange7}
                      value={this.state.dayValue6}
                      keyboardType='numeric'
                      style={[styles.textInputBirth, { width: RFValue(60) }]}
                      maxLength={4}
                      ref={(input) => (this.textInputYear2 = input)}
                    />
                  </View>
                </View>
              </View>

              <View style={styles.OpenCloseFilterAndSearch}>
                <View style={[styles.OpenCloseFilter, {zIndex: 99,}]}>
                  <Text style={{
                    fontWeight: 'bold',
                    fontSize: RFValue(14),
                    marginRight: RFValue(8)
                  }}>Filtro</Text>
                  <DropDownPicker
                    items={[
                      { label: "Aberto", value: "Open" },
                      { label: "Fechado", value: "Close" },
                    ]}
                    placeholder={this.renderPlaceholder2()}
                    defaultValue={this.state.payment}
                    open={this.state.dropDownHeight2 == 170}
                    onOpen={() => this.setState({ dropDownHeight2: 170 })}
                    onClose={() => this.setState({ dropDownHeight2: 40 })}
                    style={{
                      // backgroundColor: "green",
                      borderWidth: RFValue(2),
                      borderColor: "black",
                      width: RFValue(150),
                      // marginRight:RFValue()
                      // height:RFValue(10)
                    }}
                    placeholderStyle={{
                      alignSelf: 'center',
                      textAlign: 'center'
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
                      width: RFValue(150),
                      // alignItems:'center'
                      // height:RFValue(10)
                    }}
                  // zIndexInverse={3000}
                  />
                </View>
                <View style={styles.OpenCloseFilterSearch}>
                  <TouchableOpacity style={styles.OpenCloseFilterSearchButton}>
                    <Text style={styles.OpenCloseFilterSearchText}> Buscar </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>

          <ScrollView horizontal={true} >
            <View style={styles.fotter}>
              <View style={styles.fotterTexts}>
                <View style={styles.containerFotterValues}>
                  <Text style={styles.fotterText}>Código</Text>
                </View >
                <View style={styles.containerFotterValues}>
                  <Text style={styles.fotterText}>Data</Text>
                </View>
                <View style={styles.containerFotterValues}>
                  <Text style={styles.fotterText}>Serviço</Text>
                </View>
                <View style={{
                  width: RFValue(255),
                  alignItems: 'center',
                  // backgroundColor:"purple"
                }}>
                  <Text style={styles.fotterText}>Cliente</Text>
                </View>
                <View style={styles.containerFotterValues}>
                  <Text style={styles.fotterText}>Profissional</Text>
                </View>
                <View style={styles.containerFotterValues}>
                  <Text style={styles.fotterText}>Valor</Text>
                </View>
                <View style={styles.containerFotterValues}>
                  <Text style={styles.fotterText}>Desc.</Text>
                </View>
                <View style={styles.containerFotterValues}>
                  <Text style={styles.fotterText}>Pagamento</Text>
                </View>
              </View>
              <View style={styles.fotterValuesContainer}>
                <FlatList
                  style={styles.list}
                  data={clients}
                  renderItem={this.renderItem}
                  keyExtractor={(item, index) => index.toString()}
                />
              </View>
            </View>
          </ScrollView>

          <View style={styles.space}></View>
        </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF"
    // justifyContent:"center",
    // alignItems:"center",
  },
  droidSafeArea: {
    marginTop:
      Platform.OS === 'android' ? StatusBar.currentHeight : RFValue(35),
  },
  //HEADER----------------------------------------------
  header: {
    flex: 0.1,
    // backgroundColor: "pink",
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  title: {
    left: RFValue(40),
  },
  textTitle: {
    fontSize: RFValue(30),
    fontWeight: "bold",
    alignSelf: 'center',
  },
  textMonth: {
    fontSize: RFValue(15),
    // fontWeight:"bold",
    alignSelf: 'center',
    borderWidth: RFValue(2),
    borderRadius: RFValue(5),
    marginTop: RFValue(10),
    paddingHorizontal:RFValue(15),
    paddingVertical:RFValue(2),
    left: RFValue(20)
  },
  cashFlow: {
    borderWidth: RFValue(2),
    borderRadius: RFValue(8),
    alignItems: 'center',
    justifyContent: 'center',
    width: RFValue(77),
    height: Platform.OS === 'ios' ? RFValue(40) : 55,
  },
  cashFlowText: {
    justifyContent: 'center'
  },
  //BODY------------------------------------------------
  body: {
    flex: RFValue(0.4),
    marginTop: RFValue(10),
    // backgroundColor: "green",
    width: "100%",
    height: Platform.OS === 'ios' ? RFValue(460) : RFValue(540),
  },
  invoicingAndCash: {
    // backgroundColor: "gray",
    borderTopWidth: RFValue(2),
    borderBottomWidth: RFValue(2),
    borderTopColor: "gray",
    // paddingBottom: RFValue(3),
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  invoicingContainer: {
    // backgroundColor: "red",
    width: "50%",
    alignItems: 'center',
    borderRightWidth: 1,
    paddingBottom: RFValue(3),

  },
  invoicingText: {
    fontSize: RFValue(20),
    fontWeight: "bold",
  },
  invoicingPrice: {
    marginBottom: RFValue(10),
    fontSize: RFValue(16),
  },
  invoicingMoney: {
    width: "100%",
    justifyContent: 'flex-start',
    // backgroundColor: "purple",
  },
  invoicingPix: {
    fontWeight: 'bold',
    // backgroundColor:"yellow"
    marginBottom: RFValue(5)
  },
  invoicingDin: {
    fontWeight: 'bold',
    // backgroundColor:"yellow"
    marginBottom: RFValue(5)
  },
  invoicingCred: {
    fontWeight: 'bold',
    // backgroundColor:"yellow"
    marginBottom: RFValue(5)
  },
  invoicingDeb: {
    fontWeight: 'bold',
    // backgroundColor:"yellow"
    // marginBottom:RFValue(5)
  },
  cashContainer: {
    // backgroundColor: "red",
    width: "50%",
    alignItems: 'center',
    borderLeftWidth: 1,
  },
  cashText: {
    fontSize: RFValue(20),
    fontWeight: "bold",
  },
  cashPrice: {
    marginBottom: RFValue(10),
    fontSize: RFValue(16),
  },
  cashMoney: {
    width: "100%",
    justifyContent: 'flex-start',
    // backgroundColor: "purple",
    marginLeft: RFValue(4)
  },
  cashPix: {
    fontWeight: 'bold',
    // backgroundColor:"yellow"
    marginBottom: RFValue(5)
  },
  cashDin: {
    fontWeight: 'bold',
    // backgroundColor:"yellow"
    marginBottom: RFValue(5)
  },
  cashCred: {
    fontWeight: 'bold',
    // backgroundColor:"yellow"
    marginBottom: RFValue(5)
  },
  cashDeb: {
    fontWeight: 'bold',
    // backgroundColor:"yellow"
    // marginBottom:RFValue(2)
  },
  filter: {
    // backgroundColor:"pink",
    // borderTopWidth:RFValue(2),
    marginTop: RFValue(20)
  },
  clientFilter: {
    // backgroundColor:"yellow",
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: RFValue(15)
  },
  filterTextInput: {
    borderWidth: RFValue(1.5),
    borderRadius: RFValue(4),
    marginLeft: RFValue(10),
    padding: RFValue(7),
    height: RFValue(30),
    width: RFValue(200),
  },
  moneyFilter: {
    // backgroundColor: "red",
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: RFValue(14),
    marginLeft: RFValue(10)
  },
  moneyFilterButton: {
    // backgroundColor: "yellow",
    borderWidth: RFValue(2),
    borderRadius: RFValue(4),
    padding: RFValue(4),
    marginLeft: RFValue(2)
  },
  moneyText: {
    //  backgroundColor:"purple"
    // fontWeight: 'bold'
    padding: RFValue(2)
  },

  dateFilter: {
    // backgroundColor: "purple",
    flexDirection: 'column',
    borderWidth:RFValue(3),
    alignSelf:'center',
    borderRadius:RFValue(10),
    width:"100%"
  },
  from: {
    // backgroundColor: "blue",
    marginBottom:RFValue(10),
    flexDirection: 'row',
    alignItems: 'center',
  },
  textInput:{
    flexDirection:'row',
    // backgroundColor: "#f1f",
    justifyContent:'space-between',
    width:RFValue(180)
  },
  fromTxt:{
    fontSize:RFValue(16),
    fontWeight:'bold',
    paddingStart:RFValue(6),
    paddingRight:RFValue(6),
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
  date: {
    borderWidth: RFValue(1.5),
    borderRadius: RFValue(4),
    // fontWeight: 'bold',
    fontSize: RFValue(13),
    padding: RFValue(4)
  },
  OpenCloseFilterAndSearch: {
    // backgroundColor: "yellow",
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: RFValue(10)
  },
  OpenCloseFilter: {
    // backgroundColor: "purple",
    flexDirection: 'row',
    alignItems: 'center',
    width: RFValue(200),
    marginRight: RFValue(20),
    marginLeft: RFValue(9),
  },
  OpenCloseFilterButon: {
    // backgroundColor: "blue",
    borderWidth: RFValue(2),
    borderRadius: RFValue(4),
    marginLeft: RFValue(10),
    width: RFValue(50),
    alignItems: 'center'
  },
  OpenCloseFilterSearch: {
    // backgroundColor: "red",
    top: RFValue(10),
    // right: RFValue(30),
    // bottom: RFValue(30),
  },
  OpenCloseFilterSearchButton: {
    borderWidth: RFValue(3),
    borderRadius: RFValue(8),
    // borderColor: "green"
    backgroundColor: "green",
    // backgroundColor: "pink",
    padding: RFValue(4)
  },
  OpenCloseFilterSearchText: {
    fontWeight: 'bold',
    fontSize: RFValue(20),
    // marginRight: RFValue(2)
  },
  filterText: {
    fontWeight: 'bold',
    fontSize: RFValue(14)
  },
  // FOTTER----------------------------------------------------
  fotter: {
    flex: 0.4,
    marginTop: RFValue(1),
    // backgroundColor: "orange",
    width: "100%",
    // justifyContent: 'flex-start',
    // flexDirection: 'column',
    height: RFValue(1800),
    borderTopWidth: RFValue(2),
  },
  fotterTexts: {
    // backgroundColor: "pink",
    height: RFValue(20),
    // width: RFValue(1000),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: RFValue(4),
    borderBottomWidth: RFValue(2),
    borderBottomColor: "#000",
  },
  fotterText: {
    fontWeight: 'bold',
    fontSize: RFValue(12),
  },
  fotterValuesContainer: {
    // backgroundColor: "brown",
    flexDirection: 'column',
    height: "100%",
    width: "100%",
  },
  fotterValues: {
    // backgroundColor: "purple",
    flexDirection: 'row',
    alignItems: 'center',
    // justifyContent: 'space-around',
    height: RFValue(20),
    width: "100%",
    marginBottom: RFValue(1),
    borderBottomWidth: RFValue(1),
    borderBottomColor: "#000",
    marginTop: RFValue(4), // Updated to RfValue
    marginBottom: RFValue(3), // Updated to RfValue
    // paddingBottom:RFValue(4),
    // padding: RFValue(3)
  },
  fotterTextValue: {
    // color: "red"
  },
  containerFotterValues: {
    width: RFValue(90),
    alignItems: 'center',
    // backgroundColor:"pink"

  },
  list: {
    flex: 1,
  },
  space: {
    width: "100%",
    // backgroundColor: "pink",
    height: RFValue(80)
  },
})