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
  Alert
} from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import Ionicons from "react-native-vector-icons/Ionicons";
import db from "../config";
import { collection, getDocs, deleteDoc, doc } from "firebase/firestore";

export default class ProfileClient extends Component {
  constructor(props) {
    super(props)
    this.state = {
      speakerIcon: "arrow-back",
      clientList: [],
      client: this.props.route.params.item
    }
  }

  componentDidMount() {
    this.getClients()
    console.log(this.state.client)
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
  deleteClient = async () => {
    const { client } = this.state;
    const { client_name, id } = client;
    Alert.alert(
      'Excluir Cliente',
      `Você deseja excluir ${client_name}?`,
      [
        { text: 'Cancelar', style: 'cancel' },
        {
          text: 'Excluir',
          onPress: () => {
            Alert.alert(
              'Confirmar',
              'Esta ação é irreversível. Tem certeza?',
              [
                { text: 'Cancelar', style: 'cancel' },
                {
                  text: 'Confirmar',
                  onPress: async () => {
                    await deleteDoc(doc(db, "clients", id));
                    Alert.alert('Sucesso', 'Cliente excluído com sucesso!');
                    this.props.navigation.goBack(); // Navigate back to the previous screen
                  }
                }
              ]
            );
          }
        }
      ]
    );
  };
  
  
  render() {
    const { speakerIcon, clientList, client } = this.state;
    return (
      <ScrollView style={styles.container}>
        <SafeAreaView style={styles.droidSafeArea} />
        <View style={styles.header}>
          <TouchableOpacity style={styles.back}>
            <Ionicons
              name={speakerIcon}
              size={RFValue(40)}
              onPress={() => this.props.navigation.navigate("ListClient")}
            // onPress={() => this.props.navigation.navigate("Agenda")}
            />
          </TouchableOpacity>
          <View style={styles.title}>
            <Text style={styles.titleText}>
              {clientList && clientList.length > 0 ? client.client_name : null}
            </Text>
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
                {clientList && clientList.length > 0 ? client.client_name : null}
              </Text>

            </View>
            <View style={{ flexDirection: "row", justifyContent: 'space-between' }}>
              <View style={styles.margin}>
                <Text style={styles.titleBody}>Nascimento</Text>
                <Text style={styles.infoValue}>{clientList && clientList.length > 0 ?
                  this.formatTimestamp(client.client_data) :
                  'Não especificado'
                }</Text>
              </View>
              <View style={[styles.margin, { marginEnd: 140, }]}>
                <Text style={styles.titleBody}>Carros</Text>
                {clientList && clientList.length > 0 ?
                  <Text style={styles.infoValue}>
                    {client.client_car1}{"\n"}{client.client_car2}
                  </Text>
                  : null
                }
              </View>
            </View>
            <View style={styles.margin}>
              <Text style={styles.titleBody}>Telefone</Text>
              <Text style={styles.infoValue}>
                {clientList && clientList.length > 0 ? client.client_phone : null}
              </Text>
            </View>
          </View>
          <View style={styles.adress}>
            <Text style={{
              fontSize: 25,
              fontWeight: 'bold',
              marginStart: -7,
              paddingTop: 10,
            }}>Casa</Text>

            <View style={[styles.margin, { marginTop: RFValue(13), }]}>
              <Text style={styles.titleBody}>Endereço</Text>
              <Text style={styles.infoValue}>
                {clientList && clientList.length > 0 ? client.client_house_adress || 'Não especificado' : 'Não especificado'}
              </Text>
            </View>
            <View style={styles.margin}>
              <Text style={styles.titleBody}>Bairro</Text>
              <Text style={styles.infoValue}>
                {clientList && clientList.length > 0 ? client.client_house_neighborhood || 'Não especificado' : 'Não especificado'}
              </Text>
            </View>
          </View>
          <View style={styles.adress}>
            <Text style={{
              fontSize: 25,
              fontWeight: 'bold',
              marginStart: -7,
              paddingTop: 10,
            }}>Trabalho</Text>

            <View style={[styles.margin, { marginTop: RFValue(13), }]}>
              <Text style={styles.titleBody}>Endereço</Text>
              <Text style={styles.infoValue}>
                {clientList && clientList.length > 0 ? client.client_work_adress || 'Não especificado' : 'Não especificado'}
              </Text>
            </View>
            <View style={styles.margin}>
              <Text style={styles.titleBody}>Bairro</Text>
              <Text style={styles.infoValue}>
                {clientList && clientList.length > 0 ? client.client_work_neighborhood || 'Não especificado' : 'Não especificado'}
              </Text>
            </View>
          </View>
        </View>

        {/* <View style={styles.space}></View> */}
        <TouchableOpacity style={styles.delet} onPress={() => this.deleteClient(client)}>
          <Text style={styles.deletTxt}>
            Excluir
          </Text>
        </TouchableOpacity>

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
  adress: {
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
  delet: {
    backgroundColor: "red", // Mudando a cor de fundo para vermelho
    alignContent: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    paddingHorizontal: RFValue(25),
    paddingVertical: RFValue(10),
    borderWidth: RFValue(2),
    borderRadius: RFValue(10),
    borderColor: "darkred", // Mudando a cor da borda para vermelho escuro
    shadowColor: "black", // Adicionando uma sombra
    shadowOpacity: 0.3,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 5,
    top: RFValue(20)
  },
  deletTxt: {
    color: 'white', // Cor do texto
    fontSize: RFValue(16), // Tamanho da fonte
    fontWeight: 'bold' // Negrito
  }

})