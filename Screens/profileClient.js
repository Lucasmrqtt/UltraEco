import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
  Platform,
  SafeAreaView,
  ScrollView
} from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import Ionicons from "react-native-vector-icons/Ionicons";
import { db } from "../config";

export default class ProfileClient extends Component {
  constructor(props) {
    super(props)
    this.state = {
      speakerIcon: "chevron-back-outline",
      clientList: [],
    }
  }

  componentDidMount() {
    this.getClients("01")
  }

  getClients = async (clientID) => {
    const clients = collection(db, "clients")
    const clientSnapshot = await getDocs(clients)
    const clientList = clientSnapshot.docs.map(doc => { doc.data().client_ID == clientID? doc.data() : false
      // doc.data()
      // if (doc.data().client_ID == clientID) {
      //   return (doc.data())
      // }
    });
    console.log(clientList)
    console.log(clientList[2])
    this.setState({ clientList: [...clientList] })
  }

  render() {
    const { speakerIcon, clientList } = this.state;
    return (
      <ScrollView style={styles.container}>
        <SafeAreaView style={styles.droidSafeArea} />
        <View style={styles.header}>
          <TouchableOpacity style={styles.back}>
            <Ionicons
              name={speakerIcon}
              size={RFValue(40)}
              onPress={() => this.props.navigation.navigate("Home")}
            // onPress={() => this.props.navigation.navigate("Agenda")}
            />
          </TouchableOpacity>
          <View style={styles.title}>
            <Text style={styles.titleText}>{clientList.client_Name}</Text>
          </View>
        </View>

        <View style={styles.body}>
          <View style={styles.profile}>
            <Text style={{
              fontSize: 25,
              fontWeight: 'bold',
              marginStart: -7,
              paddingTop: 10,
            }}>Perfil</Text>
            <View style={[styles.margin, { marginTop: RFValue(13), }]}>
              <Text style={styles.titleBody}>Nome</Text>
              <Text style={{ fontSize: 15, color: "#a1a1a1" }}>Maria da Gloria Karam Marquetti</Text>
            </View>
            <View style={{ flexDirection: "row", justifyContent: 'space-between' }}>
              <View style={styles.margin}>
                <Text style={styles.titleBody}>Nascimento</Text>
                <Text style={{ fontSize: 15, color: "#a1a1a1" }}>04/09/1970</Text>
              </View>
              <View style={[styles.margin, { marginEnd: 140, }]}>
                <Text style={styles.titleBody}>Carro</Text>
                <Text style={{ fontSize: 15, color: "#a1a1a1" }}>HR-V</Text>
              </View>
            </View>
            <View style={styles.margin}>
              <Text style={styles.titleBody}>G-mail</Text>
              <Text style={{ fontSize: 15, color: "#a1a1a1" }}>Gloriamarquetti@gmail.com</Text>
            </View>
            <View style={styles.margin}>
              <Text style={styles.titleBody}>Telefone</Text>
              <Text style={{ fontSize: 15, color: "#a1a1a1" }}>(45) 99975-6051</Text>
            </View>
          </View>
          <View style={styles.Adress}>
            <Text style={{
              fontSize: 25,
              fontWeight: 'bold',
              marginStart: -7,
              paddingTop: 10,
            }}>Casa</Text>

            <View style={[styles.margin, { marginTop: RFValue(13), }]}>
              <Text style={styles.titleBody}>Endereço</Text>
              <Text style={{ fontSize: 15, color: "#a1a1a1" }}>Rua Trinta Reis, 442</Text>
            </View>
            <View style={styles.margin}>
              <Text style={styles.titleBody}>Bairro</Text>
              <Text style={{ fontSize: 15, color: "#a1a1a1" }}>Vila A</Text>
            </View>
          </View>
          <View style={styles.Adress}>
            <Text style={{
              fontSize: 25,
              fontWeight: 'bold',
              marginStart: -7,
              paddingTop: 10,
            }}>Trabalho</Text>

            <View style={[styles.margin, { marginTop: RFValue(13), }]}>
              <Text style={styles.titleBody}>Endereço</Text>
              <Text style={{ fontSize: 15, color: "#a1a1a1" }}>Rua Trinta Reis, 442</Text>
            </View>
            <View style={styles.margin}>
              <Text style={styles.titleBody}>Bairro</Text>
              <Text style={{ fontSize: 15, color: "#a1a1a1" }}>Vila A</Text>
            </View>
          </View>
        </View>

        <View style={styles.space}></View>


      </ScrollView>
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
    borderBottomWidth: RFValue(1),
    borderBottomColor: "#bdbdbd",
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
    fontSize: RFValue(20),
    height: RFValue(25),
    paddingRight: RFValue(65),
    marginTop: RFValue(3),
  },
  body: {
    // backgroundColor: "green",
    justifyContent: 'flex-start',
    // paddingLeft: RFValue(15),
    marginTop: RFValue(10),
    alignContent: 'space-around'
  },
  profile: {
    // backgroundColor: "pink",
    paddingBottom: RFValue(14),
    borderWidth: RFValue(1),
    paddingStart: RFValue(15),
  },
  Adress: {
    paddingBottom: RFValue(14),
    marginTop: RFValue(10),
    borderWidth: RFValue(1),
    paddingStart: RFValue(15),
  },
  titleBody: {
    fontSize: RFValue(18),
    paddingBottom: RFValue(1)
    // fontWeight:'bold'
  },
  margin: {
    // backgroundColor: "gray",
    marginBottom: RFValue(13),
    // width:120,
    justifyContent: 'flex-start',
    // alignItems:'center',
  },

  space: {
    width: "100%",
    // backgroundColor: "pink",
    height: RFValue(100)
  },
})