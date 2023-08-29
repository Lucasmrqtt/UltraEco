import React, { Component } from 'react';
import {
  Text,
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
  Platform,
  SafeAreaView,
  TextInput,
  Keyboard,
  ScrollView,
  Modal
} from 'react-native';
import ModalClient from '../Components/ModalClient';
import ModalService from '../Components/ModalService';
import { RFValue } from 'react-native-responsive-fontsize';
import Ionicons from "react-native-vector-icons/Ionicons";
import { TextInputMask } from 'react-native-masked-text';
import { ExpandableCalendar, AgendaList, CalendarProvider, WeekCalendar, Calendar, CalendarList } from 'react-native-calendars';


export default class Scheduling extends Component {
  constructor(props) {
    super(props)
    this.state = {
      speakerIcon: "chevron-back-outline",
      Check: "checkmark-outline",
      add: "add-outline",
      clientModal: "",
      serviceModal: "",
      day: "",
      hour: "",
      duration: "",
      employee: "",
      discount: "R$0,00",
      description: "",
    }
  }

  clientModalTrue = () => {
    this.setState({ clientModal: true });
  };
  clientModalFalse = () => {
    this.setState({ clientModal: false });
  };
  serviceModalTrue = () => {
    this.setState({ serviceModal: true });
  };
  serviceModalFalse = () => {
    this.setState({ serviceModal: false });
  };

  render() {
    const { } = this.state;
    return (
      <View style={styles.container}>
        <Modal
          visible={this.state.clientModal}
          transparent={true}
          onRequestClose={this.clientModalFalse}
          // animationType="slide"
          onPress={this.clientModalTrue}
          animationType="slide"
        >
          <ModalClient
            navigation={this.props.navigation}
            handleClose={this.clientModalFalse}
          />
        </Modal>
        <Modal
          visible={this.state.serviceModal}
          transparent={true}
          onRequestClose={this.serviceModalFalse}
          // animationType="slide"
          onPress={this.serviceModalTrue}
          animationType="slide"
        >
          <ModalService
            navigation={this.props.navigation}
            handleClose={this.serviceModalFalse}
          />
        </Modal>

        <SafeAreaView style={styles.droidSafeArea} />
        <View style={styles.header}>
          <TouchableOpacity style={styles.back}
            onPress={() => this.props.navigation.navigate("Home")}>
            <Ionicons
              name={this.state.speakerIcon}
              size={RFValue(40)}
            />
          </TouchableOpacity>
          <View style={styles.title}>
            <Text style={styles.titleText}>Novo agendamento</Text>
          </View>
        </View>
        <ScrollView style={styles.body}>
          <View style={styles.margin}>
            <TouchableOpacity onPress={this.clientModalTrue} style={styles.touchableOpacity}>
              <Text style={styles.bodyText}>Cliente</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.props.navigation.navigate("AddClients")} style={styles.add}>
              <Ionicons
                name={this.state.add}
                size={RFValue(35)}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.margin}>
            <TouchableOpacity onPress={this.serviceModalTrue} style={styles.touchableOpacity}>
              <Text style={styles.bodyText}>Serviço</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.props.navigation.navigate("RegisterServices")} style={styles.add}>
              <Ionicons
                name={this.state.add}
                size={RFValue(35)}
              />
            </TouchableOpacity>
          </View>
          <View style={{ flexDirection: 'row' }}>
            <View style={styles.margin}>
              <TouchableOpacity onPress={this.serviceModalTrue} style={styles.touchableOpacity}>
                <Text style={styles.bodyText}>12/08/2023</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.margin}>
              <TouchableOpacity onPress={this.serviceModalTrue} style={styles.touchableOpacity}>
                <Text style={styles.bodyText}>11:00</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.margin}>
            <TouchableOpacity onPress={this.serviceModalTrue} style={styles.touchableOpacity}>
              <Text style={styles.bodyText}>Duração</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.add}>
              <Ionicons
                name={"chevron-down-outline"}
                size={RFValue(25)}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.margin}>
            <TouchableOpacity onPress={this.serviceModalTrue} style={styles.touchableOpacity}>
              <Text style={{
                fontWeight: 'bold',
                fontSize: RFValue(16)
              }}>Profissional/Equipes</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.add}>
              <Ionicons
                name={this.state.add}
                size={RFValue(40)}
              />
            </TouchableOpacity>
          </View>

          <View style={{
            width: RFValue(200),
            marginTop: RFValue(10),
            marginBottom: RFValue(10),
          }}>
            <Text style={{
              fontWeight: 'bold',
              fontSize: RFValue(16),
              // backgroundColor: "gray"
            }}>Desconto (Em reais)</Text>
            <TextInputMask
              placeholder='R$0,00'
              type={'money'}
              options={{
                precision: 2,
                separator: ',',
                delimiter: '.',
                unit: 'R$ ',
                suffixUnit: ''
              }}
              value={this.state.discount}
              onChangeText={text => {
                this.setState({
                  discount: text
                })
              }}
              maxLength={20}
              style={{
                height: RFValue(30),
                width: RFValue(190),
                borderWidth: RFValue(1),
                borderRadius: RFValue(3),
                // fontWeight: 'bold',
                fontSize: RFValue(16),
                paddingStart: RFValue(10),

              }}
            />
          </View>

          <View style={{
            width: RFValue(200),
            marginTop: RFValue(10),
            marginBottom: RFValue(10),
          }}>
            <Text style={{
              fontWeight: 'bold',
              fontSize: RFValue(16),
            }}>Observação</Text>
            <TextInput multiline={true} style={{
              height: RFValue(50),
              borderWidth: RFValue(1),
              borderRadius: RFValue(3),
            }} />
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
  header: {
    // backgroundColor: "brown",
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
    fontWeight: 'bold',
    fontSize: RFValue(22),
    paddingRight: RFValue(60),
    marginTop: RFValue(3),
  },
  body: {
    // backgroundColor: "green",
    // justifyContent: 'flex-start',
    paddingStart: RFValue(20),
    marginTop: RFValue(15),
    alignContent: 'space-around'
  },
  margin: {
    width: RFValue(200),
    // backgroundColor: "brown",
    flexDirection: 'row',
    // paddingEnd: 40,
    // padding:RFValue(5),
    marginTop: RFValue(10),
    marginBottom: RFValue(10),
    borderWidth: RFValue(1),
    borderRadius: RFValue(6)

  },
  touchableOpacity: {
    width: RFValue(140),
    // backgroundColor: "pink",
    paddingStart: RFValue(10),
    // paddingVertical: RFValue(5),
    padding: RFValue(8),
    borderRightWidth: RFValue(1),
    // borderTopRightRadius: RFValue(4),
    // borderBottomRightRadius: RFValue(4),
    // borderRadius: RFValue(6)
  },
  add: {
    // backgroundColor: "green", 
    width: RFValue(57),
    alignItems: 'center',
    justifyContent: 'center'

  },
  bodyText: {
    fontWeight: 'bold',
    fontSize: RFValue(20)
  },
  space: {
    height: RFValue(400)
  },
})