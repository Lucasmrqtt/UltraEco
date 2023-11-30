import React, { Component } from 'react';
import {
  Text,
  View,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
  Platform,
  SafeAreaView,
  TextInput,
  FlatList,
} from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import Ionicons from "react-native-vector-icons/Ionicons";
import DropDownPicker from 'react-native-dropdown-picker';

var cashFlow = require("./Cashflow.json")
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
export default class CashFlow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      speakerIcon: "chevron-back-outline",
      searchText: '',
      dayValue1: '',
      dayValue2: '',
      dayValue3: '',
      valorAntigo: 0,
      dropDownHeight1: 40,
      dropDownHeight2: 40,
      payment: "",
      payment2: "",
      date: new Date().getMonth() + 1,
      list: []
    };
  }
  componentDidMount() {
    // console.log(date)
    this.dateChange()
    // this.verification()
    this.handleFilterList()
  }
  handleFilterList() {
    const { searchText, payment, payment2, dayValue1, dayValue2, dayValue3 } = this.state;

    let filteredList = cashFlow;

    // Aplicar filtro de pesquisa por nome
    if (searchText !== '') {
      filteredList = filteredList.filter(
        (item) => item.nome.toLowerCase().indexOf(searchText.toLowerCase()) > -1
      );
    }

    // Aplicar filtro de forma de pagamento
    if (payment && payment !== 'Todos') {
      filteredList = filteredList.filter(
        (item) => item.formaDePagamento === payment
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

    // Aplicar filtro de valor
    // Aplicar filtro de valor (receitas ou despesas)
    if (payment2 && payment2 !== 'Todos') {
      if (payment2 === 'Receita') {
        // Mostrar apenas os itens com valor maior ou igual a 0 (receitas)
        filteredList = filteredList.filter(
          (item) => parseFloat(item.valor) >= 0
        );
      } else if (payment2 === 'Despesa') {
        // Mostrar apenas os itens com valor menor que 0 (despesas)
        filteredList = filteredList.filter(
          (item) => parseFloat(item.valor) < 0
        );
      }
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
  renderPlaceholder1 = () => {
    if (this.state.payment) {
      return this.state.payment;
    } else {
      return 'Din / Pix / Deb / Créd';
    }
  };
  renderPlaceholder2 = () => {
    if (this.state.payment2) {
      return this.state.payment2;
    } else {
      return 'Receita / Despesa';
    }
  };
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
  dateChange = () => {
    let d = this.state.date
    for (const key in meses) {
      if (d == key) {
        d = meses[key]
      }
    }
    // console.log(d)
    this.setState((prevState) => ({ date: meses[prevState.date] }))
  }
  handleSearchTextChange = text => {
    this.setState({ searchText: text });
    // Você pode adicionar lógica adicional aqui, como filtrar os dados com base no texto de pesquisa.
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
  revenue = () => {
    const { list } = this.state;
    const totalRevenue = list
      .filter(item => item.valor > 0)
      .reduce((sum, item) => sum + item.valor, 0)
      .toFixed(2)
      .replace('.', ',')
    return totalRevenue;
  };
  expense = () => {
    const { list } = this.state;
    const totalRevenue = list
      .filter(item => item.valor < 0)
      .reduce((sum, item) => sum + item.valor, 0)
      .toFixed(2)
      .replace('.', ',')
    return totalRevenue;
  };
  renderItem = ({ item }) => {
    // nome = item.nome
    // if (nome.lenght > 15) {
    //   nome = nome.nome.split('')

    // }
    const novoValorAntigo = item.valorCx + this.state.valorAntigo;
    return (
      <View style={styles.fotterValues}>
        <View style={styles.containerFotterValues}>
          <Text style={styles.fotterTextValue}>R${item.valor}</Text>
        </View>
        <View style={{
          width: RFValue(255),
          alignItems: 'center',
          // backgroundColor:"purple"
        }}>
          <Text style={styles.fotterTextValue}>{item.nome}</Text>
        </View>
        <View style={styles.containerFotterValues}>
          <Text style={styles.fotterTextValue}>{item.data}</Text>
        </View>
        <View style={styles.containerFotterValues}>
          <Text style={styles.fotterTextValue}>{item.formaDePagamento}</Text>
        </View>
        <View style={{
          width: RFValue(255),
          alignItems: 'center',
          // backgroundColor:"purple"
        }}>
          <Text style={styles.fotterTextValue}>{novoValorAntigo}</Text>
        </View>
      </View>
    )
    // this.setState({ valorAntigo: item.valorCx })
  }

  render() {
    const { speakerIcon, searchText, dayValue1, dayValue2, dayValue3, dropDownHeight1, dropDownHeight2, payment } = this.state;
    return (
      <View style={styles.container}>
        <SafeAreaView style={styles.droidSafeArea} />
        <ScrollView>
          <View style={styles.header}>
            <TouchableOpacity onPress={() => this.props.navigation.navigate("Dashboard")}>
              <Ionicons
                name={speakerIcon}
                size={RFValue(40)}
              />
            </TouchableOpacity>
            <View style={styles.title}>
              <Text style={styles.titleText}>Fluxo de caixa</Text>
            </View>
          </View>

          <View style={styles.body}>
            <View style={styles.bodyTitles}>
              <Text style={styles.bodyTitleText}> Receitas </Text>
              <Text style={styles.bodyTitleText}> Despesas </Text>
            </View>

            <View style={styles.revenuesAndExpenses}>
              <View style={styles.revenuesContainer}>
                <Text style={styles.revenuesAndExpensesPrice}>R${this.revenue()} </Text>
                <View style={styles.addRevenues}>
                  <TouchableOpacity
                    style={styles.addRevenuesButton}
                    onPress={() => this.props.navigation.navigate("Revenue")}
                  >
                    <Text style={styles.revenuesAndExpensesButtonTxt}> Adc. Receitas</Text>
                  </TouchableOpacity>
                </View>
              </View>

              <View style={styles.expensesContainer}>
                <Text style={styles.revenuesAndExpensesPrice}> R$ {this.expense()} </Text>
                <View style={styles.addExpense}>
                  <TouchableOpacity
                    style={styles.addExpenseButton}
                    onPress={() => this.props.navigation.navigate("Expenses")}
                  >
                    <Text style={styles.revenuesAndExpensesButtonTxt}> Adc. Despesas</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>

            <View style={styles.textMonthContainer}>
              <Text style={styles.textMonth}>{this.state.date}</Text>
            </View>
            <View style={styles.filter}>
              <View style={[styles.containerFilters, { zIndex: this.zIndex1() }]}>
                <Text style={styles.filterText}> Filtro Pgmt </Text>
                <View style={styles.textInputName}>
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
                    defaultValue={this.state.payment}
                    open={dropDownHeight1 == 170}
                    onOpen={() => this.setState({ dropDownHeight1: this.verification() })}
                    onClose={() => this.setState({ dropDownHeight1: 40 })}
                    style={{
                      backgroundColor: "white",
                      borderWidth: RFValue(2),
                      borderColor: "black",
                      width: RFValue(250),
                    }}
                    // onPress={Alert.alert()}
                    textStyle={{
                      color: "black",
                      fontWeight: 'bold'
                      // backgroundColor: "red",
                    }}
                    onSelectItem={(item) => {
                      if (item.value === "Todos") {
                        this.setState({ payment: null }, () => {
                          this.handleFilterList();
                        });
                      } else {
                        this.setState({ payment: item.value }, () => {
                          this.handleFilterList();
                        });
                      }
                    }}
                    dropDownContainerStyle={{
                      // backgroundColor: "pink",
                      width: RFValue(250),
                    }}
                  // listMode='SCROLLVIEW'
                  />
                </View>
              </View>

              <View style={[styles.containerFilters, { zIndex: this.zIndex2() }]}>
                <Text style={styles.filterText}> Filtro Pgmt </Text>
                <View style={styles.textInputName}>
                  <DropDownPicker
                    items={[
                      { label: "Todos", value: "Todos" },
                      { label: "Receita", value: "Receita" },
                      { label: "Despesa", value: "Despesa" },
                    ]}
                    placeholder={this.renderPlaceholder2()}
                    placeholderStyle={{
                      alignSelf: 'center',
                      textAlign: 'center'
                    }}
                    defaultValue={this.state.payment2}
                    open={dropDownHeight2 == 170}
                    onOpen={() => this.setState({ dropDownHeight2: 170 })}
                    onClose={() => this.setState({ dropDownHeight2: 40 })}
                    style={{
                      backgroundColor: "white",
                      borderWidth: RFValue(2),
                      borderColor: "black",
                      width: RFValue(150),
                    }}
                    textStyle={{
                      color: "black",
                      fontWeight: 'bold'
                      // backgroundColor: "red",
                    }}
                    onSelectItem={(item) => {
                      if (item.value === "Todos") {
                        this.setState({ payment2: null }, () => {
                          this.handleFilterList();
                        });
                      } else {
                        this.setState({ payment2: item.value }, () => {
                          this.handleFilterList();
                        });
                      }
                    }}
                    dropDownContainerStyle={{
                      // backgroundColor: "pink",
                      width: RFValue(150),
                    }}
                  // zIndexInverse={1000}
                  // zIndex={1000}
                  />
                </View>
              </View>

              <View style={styles.containerFilters}>
                <Text style={styles.filterText}> Filtro Descrição</Text>
                <View style={styles.textInputName}>
                  <TextInput
                    placeholder="Buscar"
                    onChangeText={this.handleSearchTextChange}
                    value={searchText}
                    style={styles.filterTextInput}
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
            </View>
          </View>

          <ScrollView horizontal={true} >
            <View style={styles.fotter}>
              <View style={styles.fotterTexts}>
                <View style={styles.containerFotterValues}>
                  <Text style={styles.fotterText}>Valor</Text>
                </View>
                <View style={{
                  width: RFValue(255),
                  alignItems: 'center',
                  // backgroundColor:"purple"
                }}>
                  <Text style={styles.fotterText}>Nome</Text>
                </View>
                <View style={styles.containerFotterValues}>
                  <Text style={styles.fotterText}>Data</Text>
                </View>
                <View style={styles.containerFotterValues}>
                  <Text style={styles.fotterText}>Pgmt</Text>
                </View>
                <View style={{
                  width: RFValue(255),
                  alignItems: 'center',
                  // backgroundColor: "purple"
                }}>
                  <Text style={styles.fotterText}>Valor CX</Text>
                </View>
              </View>
              <View style={styles.fotterValuesContainer}>
                <FlatList
                  data={this.state.list}
                  renderItem={this.renderItem}
                  keyExtractor={(item, index) => index.toString()}
                />
              </View>
            </View>
          </ScrollView>

        </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
    // justifyContent:"center",
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
    marginBottom: RFValue(10),
    justifyContent: 'space-between',
    paddingHorizontal: RFValue(10),
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
    fontSize: RFValue(30),
    paddingRight: RFValue(65),
    marginTop: RFValue(3),
  },
  body: {
    flex: 0.4,
    marginTop: RFValue(13),
    // backgroundColor: "green",
    width: "100%",
    height: RFValue(400)
  },
  bodyTitles: {
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  bodyTitleText: {
    fontSize: RFValue(20),
    fontWeight: "bold",
  },
  revenuesAndExpenses: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: RFValue(10),
    // backgroundColor: "pink",
  },
  revenuesAndExpensesPrice: {
    marginBottom: RFValue(15),
    marginTop: RFValue(10),
    fontSize: RFValue(16),
    fontWeight: 'bold',
  },
  revenuesContainer: {
    alignItems: 'center',
    borderWidth: RFValue(2),
    borderRadius: RFValue(10),
    padding: RFValue(15),
    paddingTop: RFValue(8)
  },
  addRevenuesButton: {
    borderWidth: RFValue(2),
    borderRadius: RFValue(4),
  },
  expensesContainer: {
    // backgroundColor: "red",
    // width: "50%",
    alignItems: 'center',
    borderWidth: RFValue(2),
    borderRadius: RFValue(10),
    padding: RFValue(15),
    paddingTop: RFValue(8)
  },
  addExpenseButton: {
    borderWidth: RFValue(2),
    borderRadius: RFValue(4),
  },
  revenuesAndExpensesButtonTxt: {
    // color: "pink",
    padding: RFValue(3),
  },
  textMonthContainer: {
    fontSize: RFValue(15),
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: RFValue(10),
  },
  textMonth: {
    fontSize: RFValue(25),
    fontWeight: "bold",
  },
  filter: {
    // backgroundColor:"pink",
    // borderTopWidth:RFValue(2),
    marginTop: RFValue(20)
  },
  filterTextInput: {
    borderWidth: RFValue(1.5),
    borderRadius: RFValue(4),
    marginLeft: RFValue(10),
    padding: RFValue(7),
    // paddingRight: RFValue(20),
    height: RFValue(30),
    width: RFValue(150)
    // alignItems:'center'
  },
  textInput: {
    flexDirection: 'row',
    // backgroundColor: "#f1f",
    justifyContent: 'space-between',
    width: RFValue(180),
    left:RFValue(3)
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
  filterText: {
    fontWeight: 'bold',
    fontSize: RFValue(14),
    marginLeft: RFValue(10)
  },
  containerFilters: {
    // backgroundColor: "yellow",
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: RFValue(14)
  },
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
    // justifyContent: 'center',
    height: RFValue(30),
    width: "100%",
    marginBottom: RFValue(1),
    borderBottomWidth: RFValue(1),
    borderBottomColor: "#000",
    // marginTop: RFValue(4), // Updated to RfValue
    // marginBottom: RFValue(3),
    // padding: RFValue(3)
  },
  fotterTextValue: {
    // color: "red"
  },
  containerFotterValues: {
    width: RFValue(120),
    alignItems: 'center',
    // backgroundColor:"pink"
    // height: this.state.teste + 10
  },
  space: {
    width: "100%",
    backgroundColor: "pink",
    height: RFValue(80)
  },

})