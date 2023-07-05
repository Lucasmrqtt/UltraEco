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


export default class Historic extends Component {
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
                <View style={styles.textInputName}>
                  <TextInput
                    placeholder="Digite aqui para pesquisar"
                    onChangeText={this.handleSearchTextChange}
                    value={searchText}
                    style={styles.filterTextInput}
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
                  <Text style={styles.filterText}>Filtro</Text>
                  <TouchableOpacity style={styles.OpenCloseFilterButon}>
                    <Text style={styles.filterText}> A/F </Text>
                  </TouchableOpacity>
                </View>
                <View style={styles.OpenCloseFilterSearch}>
                  <TouchableOpacity style={styles.OpenCloseFilterSearchButton}>
                    <Text style={styles.filterText}> Buscar </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>


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
    flex: 0.3,
    marginTop: RFValue(10),
    backgroundColor: "green",
    width: "100%",
    height: RFValue(300)
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
    marginBottom: RFValue(10)
  },
  filterTextInput: {
    borderWidth: RFValue(1.5),
    borderRadius: RFValue(4),
    marginLeft: RFValue(10),
    padding: RFValue(7),
    height: RFValue(30)
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
    fontWeight: 'bold',
    fontSize: RFValue(15)
  },
  OpenCloseFilterAndSearch: {
    backgroundColor: "yellow",
    // height:100
    flexDirection: 'row',
    // justifyContent: 'space-evenly',
    justifyContent: 'space-around'
  },
  OpenCloseFilter: {
    backgroundColor: "purple",
    flexDirection: 'row',
  },
  OpenCloseFilterButon: {
    backgroundColor: "blue",
    borderWidth: RFValue(2)
  },
  OpenCloseFilterSearch: {
    backgroundColor: "red"
  },
  OpenCloseFilterSearchButton:{

  },

  filterText: {
    fontWeight: 'bold',
    fontSize: RFValue(14)
  },
  // FOTTER----------------------------------------------------
  fotter: {

  },

})