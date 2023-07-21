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

export default class CashFlow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      speakerIcon: "chevron-back-outline",
      searchText: '',
      selectedValue1: null,
      selectedValue2: null,
      valorAntigo: 0,
      dropDownHeight1: 40,
      payment: "Din",
    };
  }

  handleValueChange1 = (itemValue) => {
    this.setState({ selectedValue1: itemValue });
  };

  handleValueChange2 = (itemValue) => {
    this.setState({ selectedValue2: itemValue });
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
      return 'Receita/Despesa';
    }
  };

  handleSearchTextChange = text => {
    this.setState({ searchText: text });
    // Você pode adicionar lógica adicional aqui, como filtrar os dados com base no texto de pesquisa.
  }


  renderItem = ({ item }) => {
    // nome = item.nome
    // if (nome.lenght > 15) {
    //   nome = nome.nome.split('')

    // }
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
          <Text style={styles.fotterTextValue}>{item.valorCx + this.state.valorAntigo}</Text>
        </View>
      </View>
    )
    this.setState({valorAntigo:item.valorCx})
  }
  
  render() {
    const { searchText } = this.state;
    return (
      <View style={styles.container}>
        <SafeAreaView style={styles.droidSafeArea} />
        <ScrollView>
          <View style={styles.header}>
            <TouchableOpacity>
              <Ionicons
                name={this.state.speakerIcon}
                size={RFValue(40)}
                onPress={() => this.props.navigation.navigate("Dashboard")}
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
                <Text style={styles.revenuesAndExpensesPrice}>R$***** </Text>
                <View style={styles.addRevenues}>
                  <TouchableOpacity style={styles.addRevenuesButton}>
                    <Text style={styles.revenuesAndExpensesButtonTxt}> Adc. Receitas</Text>
                  </TouchableOpacity>
                </View>
              </View>

              <View style={styles.expensesContainer}>
                <Text style={styles.revenuesAndExpensesPrice}> R$ ******** </Text>
                <View style={styles.addExpense}>
                  <TouchableOpacity style={styles.addExpenseButton}>
                    <Text style={styles.revenuesAndExpensesButtonTxt}> Adc. Despesas</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>

            <View style={styles.textMonthContainer}>
              <Text style={styles.textMonth}>Fevereiro</Text>
            </View>
            <View style={styles.filter}>
              <View style={styles.moneyFilter}>
                <Text style={styles.filterText}> Filtro Pgmt </Text>
                <View style={styles.textInputName}>
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
                    listMode='SCROLLVIEW'
                  // zIndexInverse={1000}
                  // zIndex={1000}
                  />
                </View>
              </View>

              <View style={styles.moneyFilter}>
                <Text style={styles.filterText}> Filtro Pgmt </Text>
                <View style={styles.textInputName}>
                  <DropDownPicker
                    items={[
                      { label: "Receita", value: "Rec" },
                      { label: "Despesa", value: "Desp" },
                    ]}
                    placeholder={this.renderPlaceholder2()}
                    placeholderStyle={{
                      alignSelf: 'center',
                      textAlign: 'center'
                    }}
                    defaultValue={this.state.payment}
                    open={this.state.dropDownHeight2 == 170}
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
                      this.setState({ payment: item.value })
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

              <View style={styles.clientFilter}>
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
                  data={cashFlow}
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
    // paddingRight: RFValue(20),
    height: RFValue(30),
    width: RFValue(150)
    // alignItems:'center'
  },
  moneyFilter: {
    // backgroundColor: "red",
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: RFValue(14),
    // marginLeft: RFValue(10)
  },
  moneyFilterButton: {
    // backgroundColor: "yellow",
    borderWidth: RFValue(2),
    borderRadius: RFValue(4),
    padding: RFValue(4),
    marginLeft: RFValue(2)
  },
  moneyText: {
    //  backgroundColor:"purple",
    // fontWeight: 'bold'
    padding: RFValue(2)
  },
  filterText: {
    fontWeight: 'bold',
    fontSize: RFValue(14),
    marginLeft: RFValue(10)
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
    borderBottomWidth:RFValue(2),
    borderBottomColor:"#000",
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
    marginBottom:RFValue(1),
    borderBottomWidth:RFValue(1),
    borderBottomColor:"#000",
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