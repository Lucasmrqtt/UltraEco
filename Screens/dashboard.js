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
      dayValue1: '',
      dayValue2: '',
      dayValue3: '',
      dropDownHeight1: 40,
      dropDownHeight2: 40,
      selectedPayment: null,
      selectedStatus: null,
      date: new Date().getMonth() + 1,
      list: [],
      cashValue: ""
    };
    this.textInputBirth = ""
    this.textInputMonth = ""
    this.textInputYear = ""
  }

  componentDidMount() {
    // console.log(date)
    this.dateChange()
    this.handleFilterList()
  }
  handleFilterList() {
    const { searchText, selectedPayment, selectedStatus, dayValue1, dayValue2, dayValue3 } = this.state;

    let filteredList = clients;

    // Aplicar filtro de pesquisa por nome
    if (searchText !== '') {
      filteredList = filteredList.filter(
        (item) => item.nome.toLowerCase().indexOf(searchText.toLowerCase()) > -1
      );
    }

    if (dayValue1 !== '') {
      filteredList = filteredList.filter(
        (item) => item.dia.toLowerCase().indexOf(dayValue1.toLowerCase()) > -1
      );
    }

    if (dayValue2 !== '') {
      filteredList = filteredList.filter(
        (item) => item.mes.toLowerCase().indexOf(dayValue2.toLowerCase()) > -1
      );
    }

    if (dayValue3 !== '') {
      filteredList = filteredList.filter(
        (item) => item.ano.toLowerCase().indexOf(dayValue3.toLowerCase()) > -1
      );
    }

    // Aplicar filtro de forma de pagamento
    if (selectedPayment && selectedPayment !== 'Todos') {
      filteredList = filteredList.filter(
        (item) => item.formaDePagamento === selectedPayment
      );
    }

    // Aplicar filtro de status
    if (selectedStatus && selectedStatus !== 'Todos') {
      filteredList = filteredList.filter(
        (item) => item.status === selectedStatus
      );
    }

    this.setState({ list: filteredList });
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.searchText !== this.state.searchText) {
      this.handleFilterList();
    }
    if (prevState.dayValue1 !== this.state.dayValue1) {
      this.handleFilterList();
    }
    if (prevState.dayValue2 !== this.state.dayValue2) {
      this.handleFilterList();
    }
    if (prevState.dayValue3 !== this.state.dayValue3) {
      this.handleFilterList();
    }
  }
  dateChange = () => {
    let d = this.state.date
    for (const key in meses) {
      if (d == key) {
        d = meses[key]
      }
    }
    // console.log(d)
    this.setState({ date: d })
  }
  handleSearchTextChange1 = (text) => {
    // Remover toLowerCase e usar parseInt
    const parsedValue = parseInt(text, 10);

    if (!isNaN(parsedValue) && parsedValue >= 0 && parsedValue <= 31) {
      this.setState({ dayValue1: String(parsedValue) });
    } else {
      this.setState({ dayValue1: '' });
    }

    if (text.length >= 2 && parsedValue <= 31) {
      this.textInputMonth.focus();
    }
  };
  handleSearchTextChange2 = (text) => {
    // Remover toLowerCase e usar parseInt
    const parsedValue = parseInt(text, 10);

    if (!isNaN(parsedValue) && parsedValue >= 0 && parsedValue <= 12) {
      this.setState({ dayValue2: String(parsedValue) });
    } else {
      this.setState({ dayValue2: '' });
    }

    if (text.length >= 2 && parsedValue <= 12) {
      this.textInputYear.focus();
    }
  };
  handleSearchTextChange3 = (text) => {
    // Remover toLowerCase e usar parseInt
    const parsedValue = parseInt(text, 10);

    if (!isNaN(parsedValue) && parsedValue >= 0 && parsedValue <= 2100) {
      this.setState({ dayValue3: String(parsedValue) });
    } else {
      this.setState({ dayValue3: '' });
    }

    if (text.length >= 4 && parsedValue <= 2100) {
      Keyboard.dismiss();
    }
  };
  renderPlaceholder1 = () => {
    if (this.state.selectedPayment) {
      return this.state.selectedPayment;
    } else {
      return 'Din / Nub / Pix / Créd';
    }
  };
  renderPlaceholder2 = () => {
    if (this.state.selectedStatus) {
      return this.state.selectedStatus;
    } else {
      return 'Pago / Não pago';
    }
  }
  verification() {
    if (this.state.dropDownHeight2 == 170) {
      this.setState({ dropDownHeight2: 40 })
      return 170
    } else {
      return 170
    }
  }
  zIndex1() {
    if (this.state.dropDownHeight1 == 170) {
      return 9
    } else {
      return 0
    }
  }
  zIndex2() {
    if (this.state.dropDownHeight2 == 170) {
      return 9
    } else {
      return 0
    }
  }
  renderItem = ({ item }) => {
    item.total = item.valor - item.desconto
    return (
      <View style={styles.fotterValues}>
        <View style={styles.containerFotterValues}>
          <Text style={styles.fotterTextValue}>{item.codigo}</Text>
        </View>
        <View style={styles.containerFotterValues}>
          <Text style={styles.fotterTextValue}>{item.dia}-{item.mes}-{item.ano}</Text>
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
          <Text style={styles.fotterTextValue}>R${item.total} {item.formaDePagamento}</Text>
        </View>
        <View style={styles.containerFotterValues}>
          <Text style={styles.fotterTextValue}>{item.status}</Text>
        </View>
      </View>
    )
  }
  handleSearchTextChange = text => {
    this.setState({ searchText: text });
    // Você pode adicionar lógica adicional aqui, como filtrar os dados com base no texto de pesquisa.
  }
  cashValue = () => {
    const { list } = this.state;
    const totalRevenue = list.reduce((sum, item) => sum + item.total, 0)
    .toFixed(2)
    .replace('.', ',')
    return totalRevenue;
  };
  invoicing = () => {
    const { list } = this.state;
    const totalRevenue = list
      .filter(item => item.total > 0)
      .reduce((sum, item) => sum + item.total, 0)
      .toFixed(2)
      .replace('.', ',')
    return totalRevenue;
  };
  pix = () => {
    const { list } = this.state;
    const pixTotal = list
      .filter(item => item.formaDePagamento.toLowerCase() === 'pix')
      .reduce((sum, item) => sum + item.total, 0)
      .toFixed(2)
      .replace('.', ',');
  
    return pixTotal;
  }
  din = () => {
    const { list } = this.state;
    const dinTotal = list
      .filter(item => item.formaDePagamento.toLowerCase() === 'Dinheiro')
      .reduce((sum, item) => sum + item.total, 0)
      .toFixed(2)
      .replace('.', ',');
  
    return dinTotal;
  }
  cred = () => {
    const { list } = this.state;
    const credTotal = list
      .filter(item => item.formaDePagamento.toLowerCase() === 'Crédito')
      .reduce((sum, item) => sum + item.total, 0)
      .toFixed(2)
      .replace('.', ',');
  
    return credTotal;
  }
  deb = () => {
    const { list } = this.state;
    const debTotal = list
      .filter(item => item.formaDePagamento.toLowerCase() === 'Débito')
      .reduce((sum, item) => sum + item.total, 0)
      .toFixed(2)
      .replace('.', ',');
    return debTotal;
  }
  pixV = () => {
    const { list } = this.state;
    const pixTotal = list
      .filter(item => item.formaDePagamento.toLowerCase() === 'pix' || item.formaDePagamento > 0)
      .reduce((sum, item) => sum + item.total, 0)
      .toFixed(2)
      .replace('.', ',');
  
    return pixTotal;
  }
  dinV = () => {
    const { list } = this.state;
    const dinTotal = list
      .filter(item => item.formaDePagamento.toLowerCase() === 'Dinheiro' || item.formaDePagamento > 0)
      .reduce((sum, item) => sum + item.total, 0)
      .toFixed(2)
      .replace('.', ',');
  
    return dinTotal;
  }
  credV = () => {
    const { list } = this.state;
    const credTotal = list
      .filter(item => item.formaDePagamento.toLowerCase() === 'Crédito' || item.formaDePagamento > 0)
      .reduce((sum, item) => sum + item.total, 0)
      .toFixed(2)
      .replace('.', ',');
  
    return credTotal;
  }
  debV = () => {
    const { list } = this.state;
    const debTotal = list
      .filter(item => item.formaDePagamento.toLowerCase() === 'Débito' || item.formaDePagamento > 0)
      .reduce((sum, item) => sum + item.total, 0)
      .toFixed(2)
      .replace('.', ',');
    return debTotal;
  }
  
  render() {
    const { searchText, dayValue1, dayValue2, dayValue3 } = this.state;
    // const totalRevenue = this.calculateTotalRevenue();
    return (
      <View style={styles.container}>
        <SafeAreaView style={styles.droidSafeArea} />
        <ScrollView>
          <View style={styles.header}>
            <View></View>
            <View style={styles.title}>
              <Text style={styles.textTitle}>Dashboard</Text>
              <Text style={styles.textMonth}>{this.state.date}</Text>
            </View>

            <TouchableOpacity style={styles.cashFlow} onPress={() => this.props.navigation.navigate("CashFlow")}
            >
              <Text style={styles.cashFlowText}> Acessar </Text>
              <Text style={styles.cashFlowText}> fluxo de caixa </Text>
            </TouchableOpacity>
          </View>

          <View style={styles.body}>
            <View style={styles.invoicingAndCash}>
              <View style={styles.invoicingContainer}>
                <Text style={styles.invoicingText}> Faturamento </Text>
                <Text style={styles.invoicingPrice}> R$ {this.invoicing()} </Text>
                <View style={styles.invoicingMoney}>
                  <Text style={styles.paymentTxt}> Pix: R$ {this.pix()}</Text>
                  <Text style={styles.paymentTxt}> Din: R$ {this.din()}</Text>
                  <Text style={styles.paymentTxt}> Créd: R$ {this.cred()}</Text>
                  <Text style={styles.paymentTxt}> Déb: R$ {this.deb()}</Text>
                </View>
              </View>

              <View style={styles.cashContainer}>
                <Text style={styles.cashText}> Valor em caixa </Text>
                <Text style={styles.cashPrice}> R$ {this.cashValue()} </Text>
                <View style={styles.cashMoney}>
                  <Text style={styles.paymentTxt}> Pix: R$ {this.pixV()}</Text>
                  <Text style={styles.paymentTxt}> Din: R$ {this.dinV()}</Text>
                  <Text style={styles.paymentTxt}> Créd: R$ {this.credV()}</Text>
                  <Text style={styles.paymentTxt}> Déb: R$ {this.debV()}</Text>
                </View>
              </View>
            </View>

            <View style={styles.filter}>



              <View style={[styles.containerFilters, { zIndex: this.zIndex1(), right:4}]}>
                <Text style={styles.filterText}> Filtro pgmt </Text>
                <View>
                  <DropDownPicker
                    items={[
                      { label: "Todos", value: "Todos" },
                      { label: "Dinheiro", value: "Dinheiro" },
                      { label: "Pix", value: "Pix" },
                      { label: "Débito", value: "Débito" },
                      { label: "Crédito", value: "Crédito" },
                    ]}
                    placeholder={this.renderPlaceholder1()}
                    placeholderStyle={{
                      alignSelf: 'center',
                      textAlign: 'center'
                    }}
                    defaultValue={this.state.selectedPayment}
                    open={this.state.dropDownHeight1 == 170}
                    onOpen={() => this.setState({ dropDownHeight1: this.verification() })}
                    onClose={() => this.setState({ dropDownHeight1: 40 })}
                    style={{
                      backgroundColor: "white",
                      borderWidth: RFValue(2),
                      borderColor: "black",
                      width: RFValue(200),
                    }}
                    textStyle={{
                      color: "black",
                      fontWeight: 'bold'
                      // backgroundColor: "red",
                    }}
                    onSelectItem={(item) => {
                      if (item.value === "Todos") {
                        this.setState({ selectedPayment: null }, () => {
                          this.handleFilterList();
                        });
                      } else {
                        this.setState({ selectedPayment: item.value }, () => {
                          this.handleFilterList();
                        });
                      }
                    }}

                    dropDownContainerStyle={{
                      // backgroundColor: "pink",
                      width: RFValue(200),
                    }}
                  />
                </View>
              </View>

              <View style={[styles.containerFilters, { zIndex: this.zIndex2(), }]}>
                  <Text style={styles.filterText}>Filtro pago</Text>
                  <View>
                    <DropDownPicker
                      items={[
                        { label: "Todos", value: "Todos" },
                        { label: "Pago", value: "Pago" },
                        { label: "Não Pago", value: "Não pago" },
                      ]}
                      placeholder={this.renderPlaceholder2()}
                      defaultValue={this.state.selectedStatus}
                      open={this.state.dropDownHeight2 == 170}
                      onOpen={() => this.setState({ dropDownHeight2: 170 })}
                      onClose={() => this.setState({ dropDownHeight2: 40 })}
                      style={{
                        // backgroundColor: "green",
                        borderWidth: RFValue(2),
                        borderColor: "black",
                        width: RFValue(160),
                        // marginRight:RFValue()
                        // height:RFValue(50)
                      }}
                      placeholderStyle={{
                        alignSelf: 'center',
                        textAlign: 'center',
                      }}
                      textStyle={{
                        color: "black",
                        fontWeight: 'bold'
                        // backgroundColor: "red",
                      }}
                      onSelectItem={(item) => {
                        if (item.value === "Todos") {
                          this.setState({ selectedStatus: null }, () => {
                            this.handleFilterList();
                          });
                        } else {
                          this.setState({ selectedStatus: item.value }, () => {
                            this.handleFilterList();
                          });
                        }
                      }}
                      dropDownContainerStyle={{
                        backgroundColor: "white",
                        width: RFValue(160),
                        // alignItems:'center'
                        // padding:RFValue(1)
                        // height: RFValue(70)

                      }}
                    />
                  </View>
                
              </View>

              <View style={styles.containerFilters}>
                <Text style={styles.filterText}>Filtro Data</Text>
                <View style={styles.textInput}>
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
                    ref={(input) => (this.textInputBirth = input)}
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

              <View style={styles.containerFilters}>
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


            </View>
          </View>
          {/* <View style={{width:"100%", paddingVertical:20}}></View> */}

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
                <View style={styles.containerFotterValues}>
                  <Text style={styles.fotterText}>Status</Text>
                </View>
              </View>
              <View style={styles.fotterValuesContainer}>
                <FlatList
                  data={this.state.list}
                  renderItem={this.renderItem}
                  style={styles.list}
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
    justifyContent: 'space-evenly',
    alignItems: 'center'
  },
  title: {
    left: RFValue(20),
    // backgroundColor: "red",
    alignItems: 'center',

  },
  textTitle: {
    fontSize: RFValue(30),
    // backgroundColor: "orange",
    // fontWeight: "bold",
    // alignSelf: 'center',
  },
  textMonth: {
    fontSize: RFValue(15),
    fontWeight: "bold",
    // backgroundColor: "red",
    // alignSelf: 'center',
    borderWidth: RFValue(2),
    borderRadius: RFValue(5),
    marginTop: RFValue(10),
    paddingHorizontal: RFValue(15),
    paddingVertical: RFValue(2),
    // left: RFValue(30)
  },
  cashFlow: {
    borderWidth: RFValue(2),
    borderRadius: RFValue(8),
    alignItems: 'center',
    // paddingHorizontal: RFValue(15),
    // paddingVertical: RFValue(4),
    // backgroundColor: "red",
    justifyContent: 'center',
    width: RFValue(77),
    height: Platform.OS === 'ios' ? RFValue(40) : 55,
    marginEnd: RFValue(-35)
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
    height: Platform.OS === 'ios' ? RFValue(330) : RFValue(420),
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
  paymentTxt: {
    fontWeight: 'bold',
    marginBottom: RFValue(5)
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
  filter: {
    // backgroundColor:"pink",
    // borderTopWidth:RFValue(2),
    marginTop: RFValue(20),
    paddingStart:10
  },
  filterTextInput: {
    borderWidth: RFValue(1.5),
    borderRadius: RFValue(4),
    marginLeft: RFValue(10),
    padding: RFValue(7),
    height: RFValue(30),
    width: RFValue(200),
  },
  textInput: {
    flexDirection: 'row',
    // backgroundColor: "#f1f",
    justifyContent: 'space-between',
    width: RFValue(180)
  },
  filterText: {
    fontWeight: 'bold',
    fontSize: RFValue(14),
    marginRight: RFValue(8)
  },
  textInputBirth: {
    borderWidth: RFValue(1.5),
    borderRadius: RFValue(4),
    paddingLeft: RFValue(10),
    height: RFValue(40),
    width: RFValue(50),
    backgroundColor: "white",
    // marginTop: RFValue(3),
    // backgroundColor: "#f1f",
    // fontWeight:'bold',
    fontSize: RFValue(16),
    justifyContent: 'center',
    alignItems: 'center'
    // width: 10
  },
  containerFilters: {
    // backgroundColor: "yellow",
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: RFValue(14)
  },
  // FOTTER----------------------------------------------------
  fotter: {
    flex: 0.4,
    marginTop: RFValue(30),
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