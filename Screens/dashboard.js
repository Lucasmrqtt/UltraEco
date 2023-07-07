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
import DropDownPicker from 'react-native-dropdown-picker';

export default class Historic extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
      dropDownHeight1: 40,
      dropDownHeight2: 40,
      selectedValue1: null,
      selectedValue2: null,
      payment: "Din",
      choseDate: "",
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
      return 'A/F';
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
        <ScrollView>
          <View style={styles.header}>
            <View style={styles.title}>
              <Text style={styles.textTitle}> Dashboard </Text>
              <Text style={styles.textMonth}> Fevereiro  </Text>
            </View>
            <TouchableOpacity style={styles.cashFlow}>
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
                  />
                </View>
              </View>

              <View style={styles.moneyFilter}>
                <Text style={styles.filterText}> Filtro </Text>
                <View>
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
                      fontWeight:'bold'
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
                <View style={styles.from}>
                  <Text style={styles.filterText}> De </Text>
                  <TouchableOpacity style={styles.dateFilterButton}>
                    <Text style={styles.date}> DATA</Text>
                  </TouchableOpacity>
                </View>
                <View style={styles.to}>
                  <Text style={styles.filterText}> até </Text>
                  <TouchableOpacity style={styles.dateFilterButton}>
                    <Text style={styles.date}> DATA</Text>
                  </TouchableOpacity>
                </View>
              </View>

              <View style={styles.OpenCloseFilterAndSearch}>
                <View style={styles.OpenCloseFilter}>
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

          <View style={styles.fotter}>

            <View style={styles.fotterTexts}>
              <View>
                <Text style={styles.fotterText}>Código</Text>
              </View>
              <View>
                <Text style={styles.fotterText}>Data</Text>
              </View>
              <View>
                <Text style={styles.fotterText}>Cliente</Text>
              </View>
              <View>
                <Text style={styles.fotterText}>Profi.</Text>
              </View>
              <View>
                <Text style={styles.fotterText}>Serviço</Text>
              </View>
              <View>
                <Text style={styles.fotterText}>Valor</Text>
              </View>
              <View>
                <Text style={styles.fotterText}>Desc.</Text>
              </View>
              <View>
                <Text style={styles.fotterText}>Pagamento</Text>
              </View>
            </View>

            <View style={styles.fotterValuesContainer}>
              <View style={styles.fotterValues}>
                <View>
                  <Text style={styles.fotterTextValue}>100</Text>
                </View>
                <View>
                  <Text style={styles.fotterTextValue}>10/04/22</Text>
                </View>
                <View>
                  <Text style={styles.fotterTextValue}>Lucas M.</Text>
                </View>
                <View>
                  <Text style={styles.fotterTextValue}>Leo</Text>
                </View>
                <View>
                  <Text style={styles.fotterTextValue}>Lavagem</Text>
                </View>
                <View>
                  <Text style={styles.fotterTextValue}>150,00</Text>
                </View>
                <View>
                  <Text style={styles.fotterTextValue}>10%</Text>
                </View>
                <View>
                  <Text style={styles.fotterTextValue}>135,00 Pix</Text>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.space}></View>
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
    left: RFValue(20)
  },
  cashFlow: {
    borderWidth: RFValue(2),
    borderRadius: RFValue(8),
    alignItems: 'center',
    justifyContent: 'center',
    width: RFValue(77),
    height: RFValue(30),
  },
  cashFlowText: {
    justifyContent: 'center'
  },
  //BODY------------------------------------------------
  body: {
    flex: 0.4,
    marginTop: RFValue(10),
    // backgroundColor: "green",
    width: "100%",
    height: RFValue(350)
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
    height: RFValue(30)
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
    // backgroundColor:"purple",
    flexDirection: 'row',
    // justifyContent: 'space-around'
    marginBottom: RFValue(10),
    marginLeft: RFValue(10),
    alignItems: 'center',
  },
  from: {
    // backgroundColor: "blue",
    flexDirection: 'row',
    marginRight: RFValue(10),
    alignItems: 'center',
  },
  to: {
    //  backgroundColor:"red",
    flexDirection: 'row',
    alignItems: 'center',
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
    marginTop: RFValue(4)
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
    height: RFValue(700),
    borderTopWidth: RFValue(1),
  },
  fotterTexts: {
    // backgroundColor: "pink",
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  fotterText: {
    fontWeight: 'bold',
    fontSize: RFValue(12)
  },
  fotterValuesContainer: {
    // backgroundColor: "brown",
    width: "100%",
    height: "100%"
  },
  fotterValues: {
    // backgroundColor:"purple",
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    padding: RFValue(3)
  },
  fotterTextValue: {
    color: "red"
  },
  space: {
    width: "100%",
    // backgroundColor: "pink",
    height: RFValue(80)
  },
})