import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
  Platform,
  SafeAreaView,
  ScrollView,
  Alert,
} from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import Ionicons from "react-native-vector-icons/Ionicons";

export default class Service extends Component {
  constructor(props) {
    super(props)
    this.state = {
      speakerIcon: "arrow-back",
      photo: "person-circle-outline",
    }
  }

  alert(){
    Alert.alert("Status foi definido como Agendado")
  }

  render() {
    const { speakerIcon, photo } = this.state;
    return (
      <View style={styles.container}>
        <SafeAreaView style={styles.droidSafeArea} />
        <View style={styles.header}>
          <TouchableOpacity style={styles.back}>
            <Ionicons
              name={speakerIcon}
              size={RFValue(40)}
              // onPress={() => this.props.navigation.navigate("Home")}
              onPress={() => this.props.navigation.navigate("Agenda")}
            />
          </TouchableOpacity>
          <View style={styles.title}>
            <Text style={styles.titleText}>Serviço</Text>
          </View>
        </View>

        <ScrollView style={styles.body}>
          <View style={{ alignItems: 'center', marginVertical: RFValue(10) }}>
            <Text style={{ color: "#a1a1a1" }}>8 de jul. de 2023</Text>
            <Text>08:00 - 08:30</Text>
            <Text style={{ color: "green", fontSize: 11 }}>FINALIZADO</Text>
          </View>
          <View style={styles.headerBody}>

            <View style={[styles.margin, { borderTopWidth: RFValue(1), borderTopColor: "#bdbdbd" }]}>
              <Ionicons
                name={photo}
                size={RFValue(40)}
                style={{ marginRight: 6 }}
              // onPress={() => this.props.navigation.navigate("Home")}
              />
              <View>
                <Text style={styles.text}>Gloria Marquetti</Text>
                <Text style={{ fontSize: 13, color: "#909090" }}>(45) 99975-6051</Text>
              </View>
            </View>
            <View style={styles.margin}>
              <Ionicons
                name={photo}
                size={RFValue(40)}
                style={{ marginRight: 6 }}
              // onPress={() => this.props.navigation.navigate("Home")}
              />
              <View>
                <Text style={styles.text}>Pedro</Text>
                <Text style={{ fontSize: 13, color: "#909090" }}>Profissional</Text>
              </View>
            </View>
            <View style={styles.margin}>
              <Ionicons
                name={"location-outline"}
                size={RFValue(35)}
                style={{ marginRight: 10 }}
              // onPress={() => this.props.navigation.navigate("Home")}
              />
              <View>
                <Text style={styles.text}>Localização</Text>
                <Text style={{ fontSize: 13, color: "#909090" }}>Rua trinta Reis, 442</Text>
                <Text style={{ fontSize: 13, color: "#909090" }}>Vila A</Text>
              </View>
            </View>
            <View style={styles.margin}>
              <Ionicons
                name={"clipboard-outline"}
                size={RFValue(35)}
                style={{ marginRight: 10 }}
              // onPress={() => this.props.navigation.navigate("Home")}
              />
              <View>
                <Text style={styles.text}>Observações</Text>
                <Text style={{ fontSize: 13, color: "#909090" }}>Mora em uma casa azul</Text>
              </View>
            </View>
          </View>

          <View style={{
            borderBottomWidth: RFValue(1),
            borderBottomColor: "#bdbdbd",
          }}>
            <Text style={{ fontSize: 25, paddingStart: RFValue(10), paddingTop: RFValue(10) }}>Itens</Text>
            <View style={styles.marginItem}>
              <Ionicons
                name={"image-outline"}
                size={RFValue(35)}
                style={{ marginRight: 10 }}
              // onPress={() => this.props.navigation.navigate("Home")}
              />
              <View>
                <Text style={styles.text}>Lavagem (SUV)</Text>
                <Text style={{ fontSize: 13, color: "#909090" }}>R$ 85,00</Text>
              </View>
            </View>
            <View style={styles.marginItem}>
              <Ionicons
                name={"image-outline"}
                size={RFValue(35)}
                style={{ marginRight: 10 }}
              // onPress={() => this.props.navigation.navigate("Home")}
              />
              <View>
                <Text style={styles.text}>Aplicação Evolution</Text>
                <Text style={{ fontSize: 13, color: "#909090" }}>R$ 50,00</Text>
              </View>
            </View>

          </View>

          <View style={{
            borderBottomWidth: RFValue(1),
            borderBottomColor: "#bdbdbd",
          }}>
            <Text style={{ fontSize: 25, paddingStart: RFValue(10), paddingTop: RFValue(10), paddingBottom: RFValue(10) }}>Comanda</Text>
            <View style={styles.commands}>
              <View style={styles.commandsTxts}>
                <Text style={[styles.text, { color: "#4d4d4d" }]}>Subtotal</Text>
                <Text style={[styles.text, { color: "rgb(0,128,0)" }]}>R$ 225,00</Text>
              </View>
              <View style={styles.commandsTxts}>
                <Text style={[styles.text, { color: "#a1a1a1" }]}>Desconto</Text>
                <Text style={[styles.text, { color: "#990000" }]}>-R$ 50,00</Text>
              </View>
              <View style={styles.commandsTxts}>
                <Text style={[styles.text, { color: "#000" }]}>Total pago</Text>
                <Text style={[styles.text, { color: "#000" }]}>R$ 125,00</Text>
              </View>
            </View>
          </View>

          <TouchableOpacity style={styles.status} onPress={this.alert}>
            <Ionicons
              name={"sync-circle-outline"}
              size={RFValue(35)}
              style={{ marginRight: 10 , transform: [{rotate: '90deg'}],}}
            />
            <Text style={{fontSize:RFValue(16)}}>
              Ativar status
            </Text>
          </TouchableOpacity>

        </ScrollView>



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
    // backgroundColor: "#bdbdbd",
    // borderBottomWidth: RFValue(1),
    // borderBottomColor: "#bdbdbd",
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
    // fontWeight: 'bold',
    fontSize: RFValue(25),
    height: RFValue(35),
    paddingRight: RFValue(65),
    // marginTop: RFValue(3),
  },
  body: {
    // backgroundColor: "pink",
    paddingStart: RFValue(10),
    paddingEnd: RFValue(10),
    // paddingLeft: RFValue(15),
    // marginTop: RFValue(10),
    alignContent: 'space-around'
  },
  margin: {
    //  backgroundColor:"brown",
    flexDirection: "row",
    borderBottomWidth: RFValue(1),
    borderBottomColor: "#bdbdbd",
    paddingVertical: RFValue(4),
    alignItems: 'center'
  },
  marginItem: {
    //  backgroundColor:"brown",
    flexDirection: "row",
    paddingVertical: RFValue(2),
    alignItems: 'center'
  },
  commands: {
    // backgroundColor:"gray"
  },
  commandsTxts: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: RFValue(7)
  },
  text: {
    fontSize: 16
  },
  status: {
    // backgroundColor:"pink", 
    borderWidth:RFValue(2),
    borderRadius:RFValue(10),
    marginTop:RFValue(15),
    paddingVertical:RFValue(2),
    flexDirection:'row', 
    alignItems:'center',
    // justifyContent:'center'
  },
})