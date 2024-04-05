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
import db from "../config";
import { collection, getDocs } from "firebase/firestore";

export default class ProfileClient extends Component {
  constructor(props) {
    super(props)
    this.state = {
      speakerIcon: "chevron-back-outline",
      clientList: [],
    }
  }

  componentDidMount() {
    this.getClients()
  }

  getClients = async () => {
    const clientSnapshot = await getDocs(collection(db, "clients"));
    const clientsData = clientSnapshot.docs.map(doc => doc.data());
    this.setState({ clientList: clientsData });
  }

  formatTimestamp = (timestamp) => {
    if (timestamp && timestamp.toDate) {
      const dateObject = timestamp.toDate();
      return `0${dateObject.getDate()}/0${dateObject.getMonth() + 1}/${dateObject.getFullYear()}`;
    } else {
      return 'Não especificado';
    }
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
              onPress={() => this.props.navigation.navigate("Client")}
            // onPress={() => this.props.navigation.navigate("Agenda")}
            />
          </TouchableOpacity>
          <View style={styles.title}>
            <Text style={styles.titleText}>{clientList.client_name}</Text>
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
              <Text style={styles.infoValue}>
                {clientList && clientList.length > 0 ? clientList[0].client_name : null}
              </Text>

            </View>
            <View style={{ flexDirection: "row", justifyContent: 'space-between' }}>
              <View style={styles.margin}>
                <Text style={styles.titleBody}>Nascimento</Text>
                <Text style={styles.infoValue}>{clientList && clientList.length > 0 ?
                  this.formatTimestamp(clientList[0].client_data) :
                  'Não especificado'
                }</Text>
              </View>
              <View style={[styles.margin, { marginEnd: 140, }]}>
                <Text style={styles.titleBody}>Carros</Text>
                {clientList && clientList.length > 0 ?
                  <Text style={styles.infoValue}>
                    {clientList[0].client_car1}{"\n"}{clientList[0].client_car2}
                  </Text>
                  : null
                }
              </View>
            </View>
            <View style={styles.margin}>
              <Text style={styles.titleBody}>Telefone</Text>
              <Text style={styles.infoValue}>
                {clientList && clientList.length > 0 ? clientList[0].client_phone : null}
              </Text>
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
              <Text style={styles.infoValue}>
                {clientList && clientList.length > 0 ? clientList[0].client_house_adress || 'Não especificado' : 'Não especificado'}
              </Text>
            </View>
            <View style={styles.margin}>
              <Text style={styles.titleBody}>Bairro</Text>
              <Text style={styles.infoValue}>
                {clientList && clientList.length > 0 ? clientList[0].client_house_neighborhood || 'Não especificado' : 'Não especificado'}
              </Text>
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
              <Text style={styles.infoValue}>
                {clientList && clientList.length > 0 ? clientList[0].client_work_adress || 'Não especificado' : 'Não especificado'}
              </Text>
            </View>
            <View style={styles.margin}>
              <Text style={styles.titleBody}>Bairro</Text>
              <Text style={styles.infoValue}>
                {clientList && clientList.length > 0 ? clientList[0].client_work_neighborhood || 'Não especificado' : 'Não especificado'}
              </Text>
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
    // borderBottomWidth: RFValue(1),
    // borderBottomColor: "#bdbdbd",
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: RFValue(10),
  },
  infoValue: {
    fontSize: 18,
    color: "#a1a1a1"
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
    // borderWidth: RFValue(1),
    paddingStart: RFValue(15),
  },
  Adress: {
    paddingBottom: RFValue(14),
    marginTop: RFValue(10),
    // borderWidth: RFValue(1),
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