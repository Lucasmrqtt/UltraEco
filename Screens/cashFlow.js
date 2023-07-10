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
import DatePicker from 'react-native-datepicker';

export default class CashFlow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: ''
    };
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
            <View>
              <Text style={styles.textTitle}> Fluxo de caixa </Text>
            </View>
          </View>

          <View style={styles.body}>
            <View style={styles.bodyTitles}>
              <Text style={styles.bodyTitleText}> Receitas </Text>
              <Text style={styles.bodyTitleText}> Despesas </Text>
            </View>

            <View style={styles.revenuesAndExpenses}>
              <View style={styles.revenuesContainer}>
                <Text style={styles.revenuesAndExpensesPrice}> R$ ******** </Text>
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
                  <TouchableOpacity style={styles.moneyFilterButton}>
                    <Text style={styles.moneyText}> Din / Nub / Sic / Déb / Céd</Text>
                  </TouchableOpacity>
                </View>
              </View>

              <View style={styles.moneyFilter}>
                <Text style={styles.filterText}> Filtro Pgmt </Text>
                <View style={styles.textInputName}>
                  <TouchableOpacity style={styles.moneyFilterButton}>
                    <Text style={styles.moneyText}> Receita / Despesas</Text>
                  </TouchableOpacity>
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
                <View>
                  <Text style={styles.fotterText}>Valor</Text>
                </View>
                <View>
                  <Text style={styles.fotterText}>Nome</Text>
                </View>
                <View>
                  <Text style={styles.fotterText}>Data</Text>
                </View>
                <View>
                  <Text style={styles.fotterText}>Pgmt</Text>
                </View>
                <View>
                  <Text style={styles.fotterText}>Valor CX</Text>
                </View>
              </View>

              <View style={styles.fotterValuesContainer}>
              <View style={styles.fotterValues}>
                  <View>
                    <Text style={styles.fotterTextValue}>-30</Text>
                  </View>
                  <View>
                    <Text style={styles.fotterTextValue}>Produto</Text>
                  </View>
                  <View>
                    <Text style={styles.fotterTextValue}>11/04/2023</Text>
                  </View>
                  <View>
                    <Text style={styles.fotterTextValue}>Crédito</Text>
                  </View>
                  <View>
                    <Text style={styles.fotterTextValue}>105</Text>
                  </View>
                </View>
                <View style={styles.fotterValues}>
                  <View>
                    <Text style={styles.fotterTextValue}>135</Text>
                  </View>
                  <View>
                    <Text style={styles.fotterTextValue}>Lucas Marquetti</Text>
                  </View>
                  <View>
                    <Text style={styles.fotterTextValue}>10/04/2023</Text>
                  </View>
                  <View>
                    <Text style={styles.fotterTextValue}>Nubank</Text>
                  </View>
                  <View>
                    <Text style={styles.fotterTextValue}>135</Text>
                  </View>
                </View>
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
    // justifyContent:"center",
    // alignItems:"center",
  },
  droidSafeArea: {
    marginTop:
      Platform.OS === 'android' ? StatusBar.currentHeight : RFValue(35),
  },
  header: {
    flex: 0.1,
    // backgroundColor: "pink",
    // flexDirection: 'row',
    // alignItems: 'center',
    justifyContent: 'center',
    width: "100%",
  },
  textTitle: {
    fontSize: RFValue(30),
    fontWeight: "bold",
    alignSelf: 'center',
    // backgroundColor: "orange",
  },
  body: {
    flex: 0.4,
    marginTop: RFValue(13),
    // backgroundColor: "green",
    width: "100%",
    height: RFValue(305)
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
    justifyContent:'flex-start',
     flexDirection: 'column',
    height: RFValue(1800),
    borderTopWidth: RFValue(1),
  },
  fotterTexts: {
    // backgroundColor: "pink",
    height: RFValue(20),
    width: RFValue(1000),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    // marginTop:RFValue(4),
  },
  fotterText: {
    fontWeight: 'bold',
    fontSize: RFValue(12)
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
    justifyContent: 'space-around',
    height: RFValue(20),
    width: "100%",
    padding: RFValue(3)
  },
  fotterTextValue: {
    // color: "red"
  },
  space: {
    width: "100%",
    backgroundColor: "pink",
    height: RFValue(80)
  },

})