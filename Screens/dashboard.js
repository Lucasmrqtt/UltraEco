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
} from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

export default class Historic extends Component{
  render(){
    return(
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
                <Text style={styles.invoicingPrice}> R$ 1.365,00 </Text>
                <View style={styles.invoicingMoney}>
                  <Text style={styles.invoicingPix}> Pix: </Text>
                  <Text style={styles.invoicingDin}> Din: </Text>
                  <Text style={styles.invoicingCred}> Créd: </Text>
                  <Text style={styles.invoicingDeb}> Déb: </Text>
                </View>
              </View>

              <View style={styles.cashContainer}>
                <Text style={styles.cashText}> Valor em caixa </Text>
                <Text style={styles.cashPrice}> R$ 1.165,00 </Text>
                <View style={styles.cashMoney}>
                  <Text style={styles.cashPix}> Pix: </Text>
                  <Text style={styles.cashDin}> Din: </Text>
                  <Text style={styles.cashCred}> Créd: </Text>
                  <Text style={styles.cashDeb}> Déb: </Text>
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
  container:{
    flex:1,
    // justifyContent:"center",
    // alignItems:"center",
  },
  droidSafeArea: {
    marginTop:
      Platform.OS === 'android' ? StatusBar.currentHeight : RFValue(35),
  },
  header:{
    flex:0.1,
    // backgroundColor: "pink",
    flexDirection:'row',
    justifyContent: 'space-around',
    alignItems:'center'
  },
  title:{
    left:RFValue(40),
  },
  textTitle:{
    fontSize: RFValue(30),
    fontWeight:"bold",
    alignSelf:'center',
  },
  textMonth:{
    fontSize: RFValue(15),
    // fontWeight:"bold",
    alignSelf:'center',
    borderWidth: RFValue(2),
    borderRadius: RFValue(5),
    marginTop: RFValue(10),
    left: RFValue(20)
  },
  cashFlow:{
    borderWidth: RFValue(2),
    borderRadius:RFValue(8),
    alignItems:'center',
    justifyContent:'center',
    width: RFValue(77),
    height: RFValue(30),
  },
  cashFlowText:{
    justifyContent:'center'
  },

  body:{
    flex:0.3,
    marginTop: RFValue(10),
    // backgroundColor: "green",
    width: "100%",
    height:RFValue(300)
  },
  invoicingAndCash:{
    // backgroundColor: "gray",
    borderTopWidth: RFValue(2),
    borderTopColor: "gray",
    paddingBottom: RFValue(4),
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  invoicingContainer:{
    // backgroundColor: "red",
    width: "50%",
    alignItems:'center',
    borderRightWidth: 1,
     
  },
  invoicingText:{
    fontSize: RFValue(20),
    fontWeight:"bold",
  },
  invoicingPrice:{
    marginBottom: RFValue(10),
    fontSize: RFValue(16),
  },
  invoicingMoney:{ 
    width: "100%",
    justifyContent: 'flex-start',
    // backgroundColor: "purple",
  },
  invoicingPix:{ 
    fontWeight:'bold',
    // backgroundColor:"yellow"
    marginBottom:RFValue(5)
  },
  invoicingDin:{ 
    fontWeight:'bold',
    // backgroundColor:"yellow"
    marginBottom:RFValue(5)
  },
  invoicingCred:{
    fontWeight:'bold',
    // backgroundColor:"yellow"
    marginBottom:RFValue(5)
  },
  invoicingDeb:{ 
    fontWeight:'bold',
    // backgroundColor:"yellow"
    // marginBottom:RFValue(5)
  },
  cashContainer:{
   // backgroundColor: "red",
   width: "50%",
   alignItems:'center',
   borderLeftWidth: 1,
  },
  cashText:{
    fontSize: RFValue(20),
    fontWeight:"bold",
  },
  cashPrice:{
    marginBottom: RFValue(10),
    fontSize: RFValue(16),
  },
  cashMoney:{
    width: "100%",
    justifyContent: 'flex-start',
    // backgroundColor: "purple",
  },
  cashPix:{
    fontWeight:'bold',
    // backgroundColor:"yellow"
    marginBottom:RFValue(5)
  },
  cashDin:{
    fontWeight:'bold',
    // backgroundColor:"yellow"
    marginBottom:RFValue(5)
  },
  cashCred:{
    fontWeight:'bold',
    // backgroundColor:"yellow"
    marginBottom:RFValue(5)
  },
  cashDeb:{
    fontWeight:'bold',
    // backgroundColor:"yellow"
    // marginBottom:RFValue(2)
  },
})