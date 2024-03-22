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
  Modal,
} from 'react-native';
import ModalClient from '../Components/ModalClient';
import ModalService from '../Components/ModalService';
import ModalEmployee from '../Components/ModalEmployee';
import { RFValue } from 'react-native-responsive-fontsize';
import Ionicons from "react-native-vector-icons/Ionicons";
import { TextInputMask } from 'react-native-masked-text';
import DropDownPicker from 'react-native-dropdown-picker';
import { CalendarProvider, Calendar, } from 'react-native-calendars';

var date = new Date()
var meses = {
  "Jan": "01", //31
  "Feb": "02", //28
  "Mar": "03", //31
  "Apr": "04", //30
  "May": "05", //31
  "Jun": "06", //30
  "Jul": "07", //31
  "Aug": "08", //31
  "Sep": "09", //30
  "Oct": "10", //31
  "Nov": "11", //30
  "Dec": "12", //31

}
export default class Scheduling extends Component {
  constructor(props) {
    super(props)
    this.state = {
      speakerIcon: "chevron-back-outline",
      Check: "checkmark-outline",
      add: "add-outline",
      clientModal: "",
      serviceModal: "",
      calendarModal: "false",
      date: new Date().getDay(),
      hour: "",
      duration: "30min",
      dropDownHeight: 40,
      employeeModal: "",
      discount: "R$0,00",
      description: "",
    }
  }

  componentDidMount() {
    // console.log(date)
    this.convertDateInitial(date)
    // this.clientModalTrue()
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
  calendarModalTrue = () => {
    this.setState({ calendarModal: true });
  };
  calendarModalFalse = () => {
    this.setState({ calendarModal: false });
  };
  convertDateInitial = (day) => {
    // let d = new Date(day.timestamp)
    let d = day
    // console.log(d)
    // d = d.toDateString()
    d = d.toString().split("").slice(0, 15).join("")
    // d = d.toString().split("")
    d = d.split(" ").slice(1, 4)
    for (const key in meses) {
      if (d[0] == key) {
        d[0] = meses[key]
      }
    }
    if (d[1].length == 1) {
      d[1] = "0" + d[1]
    }
    d = d[1] + "/" + d[0] + "/" + d[2]
    // console.log(d)
    this.setState({ date: d })
  }
  convertDate = (day) => {
    // let d = new Date(day.timestamp)
    let d = day
    // d = d.toDateString()
    d = d.toString().split("").slice(0, 15).join("")
    // d = d.toString().split("")
    d = d.split(" ").slice(1, 4)
    // console.log(d)
    for (const key in meses) {
      if (d[0] == key) {
        // console.log(d[0])
        d[0] = meses[key]
      }
    }
    d[1] = parseInt(d[1]) + 1
    d[1] = d[1].toString()
    if (d[1].length == 1) {
      d[1] = "0" + d[1]
    }
    d = d[1] + "/" + d[0] + "/" + d[2]
    // console.log(d)
    this.setState({ date: d })
  }
  renderPlaceholder1 = () => {
    const { duration } = this.state;
    if (duration) {
      return duration;
    } else {
      return "Duração";
    }
  };
  employeeModalTrue = () => {
    this.setState({ employeeModal: true });
  };
  employeeModalFalse = () => {
    this.setState({ employeeModal: false });
  };
  addSchedule = (discount, obs) => {
    if (
      this.state.discount &&
      this.state.obs
    ) {
      var date = this.convertToTimestamp(day, month, year)
      let data = {
        client_discount: discount,
        client_obs: obs,
      };
      db.collection("clients")
        .add(data)
        .then(() => Alert.alert("Cliente cadastrado com sucesso"))
      this.props.navigation.navigate("Home");
    } else {
      Alert.alert(
        "Error",
        "Todos os campos que tem * são obrigatórios!",
        [{ text: "OK" }],
        { cancelable: false }
      );
    }
    // .catch(error => {Alert.alert(error.message)})
  }
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
        <Modal
          visible={this.state.employeeModal}
          transparent={true}
          onRequestClose={this.employeeModalFalse}
          // animationType="slide"
          onPress={this.employeeModalTrue}
          animationType="slide"
        >
          <ModalEmployee
            navigation={this.props.navigation}
            handleClose={this.employeeModalFalse}
          />
        </Modal>
        <Modal
          visible={this.state.calendarModal}
          transparent={true}
          onRequestClose={this.calendarModalFalse}
          onPress={this.calendarModalTrue}
          animationType="fade"
        >
          <View style={styles.calendarModalContainer}>
            <View style={styles.calendarModal}>
              <Calendar
                style={{ flex: 1 }}
                value={this.state.date}
                monthFormat={'dd-MM-yyyy'}
                onDayPress={(day) => {
                  this.calendarModalFalse();
                  day = new Date(day.timestamp);
                  this.convertDate(day);
                }}
              />
            </View>
          </View>
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
            <View>
              <Text style={{
                fontWeight: 'bold',
                fontSize: RFValue(16),
                // backgroundColor: "gray"
                marginBottom: RFValue(-10),
                marginTop: RFValue(5),
              }}>Data</Text>
              <TouchableOpacity onPress={this.calendarModalTrue} style={styles.calendarContainer}>
                <Text style={styles.calendar}>{this.state.date}</Text>
              </TouchableOpacity>
            </View>
            <Text style={{
              fontWeight: 'bold',
              fontSize: RFValue(16),
              marginLeft: RFValue(30),
              marginTop: RFValue(3),

            }}>Horário</Text>
            <View style={[styles.margin, {
              width: RFValue(100),
              height: Platform.OS === 'android' ? RFValue(45) : RFValue(40),
              padding: RFValue(10),
              marginLeft: RFValue(-55),
              marginTop: Platform.OS === 'android' ? RFValue(25) : RFValue(19),
            }]}>
              <TouchableOpacity>
                <Text style={styles.bodyText}>11:00</Text>
              </TouchableOpacity>
            </View>
          </View>

          <View style={{ zIndex: 99, }}>
            <Text style={{
              fontWeight: 'bold',
              fontSize: RFValue(16),
              // backgroundColor: "gray"
              marginBottom: RFValue(-10),
              marginTop: RFValue(5),
            }}>Duração</Text>
            <DropDownPicker
              items={[
                { label: "30min", value: "30min" },
                { label: "1h", value: "1h" },
                { label: "1:30", value: "1:30" },
                { label: "2h", value: "2h" },
                { label: "2:30", value: "2:30" },
                { label: "3h", value: "3h" },
                { label: "3:30", value: "3:30" },
                { label: "4h", value: "4h" },
                { label: "4:30", value: "4:30" },
                { label: "5h", value: "5h" },
              ]}
              // scrollViewProps={false}
              placeholder={this.renderPlaceholder1()}
              placeholderStyle={{
                alignSelf: 'center',
                textAlign: 'center',
              }}
              defaultValue={this.state.duration}
              open={this.state.dropDownHeight == 170}
              onOpen={() => this.setState({ dropDownHeight: 170 })}
              onClose={() => this.setState({ dropDownHeight: 40 })}
              style={{
                marginTop: RFValue(10),
                marginBottom: RFValue(10),
                backgroundColor: "#FFF",
                borderWidth: RFValue(1),
                borderColor: "black",
                width: RFValue(200),
              }}
              textStyle={{
                color: "black",
                fontSize: RFValue(16),
                fontWeight: 'bold'
                // backgroundColor: "red",
              }}
              onSelectItem={(item) => {
                this.setState({ duration: item.value })
              }}
              dropDownContainerStyle={{
                // backgroundColor: "pink",
                width: RFValue(200),
                marginTop: RFValue(10),
              }}
            // zIndexInverse={1000}
            />
          </View>
          <View style={styles.margin}>
            <TouchableOpacity onPress={this.employeeModalTrue} style={styles.touchableOpacity}>
              <Text style={{
                fontWeight: 'bold',
                fontSize: RFValue(16)
              }}>Profissional/Equipes</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.props.navigation.navigate("Employee")} style={styles.add}>
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
              padding: RFValue(3)
            }} />
          </View>
          <View style={styles.space}></View>
        </ScrollView>

        <View style={styles.fotter}>
          <TouchableOpacity
            style={styles.fotterTouchableOpacityLeft}
            onPress={() => this.props.navigation.navigate("Home")}
          >
            <Text style={styles.fotterTextCancel}>Cancelar</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.fotterTouchableOpacityRight}
            onPress={() => this.addSchedule(discount, obs)}
          >
            <Text style={styles.fotterTextAdvance}>Avançar</Text>
          </TouchableOpacity>
        </View>
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
  calendarModalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',  // Fundo escuro transparente
  },
  calendarModal: {
    width: '80%',
    borderRadius: RFValue(10),
    backgroundColor: '#fff',
    paddingHorizontal: RFValue(20),  // Margem horizontal
    paddingVertical: RFValue(20),    // Margem vertical
    borderWidth: RFValue(2),          // Borda
    borderColor: '#000',            // Cor da borda
  },
  header: {
    // backgroundColor: "brown",
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: RFValue(10),
    borderBottomWidth: RFValue(1)
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
    paddingTop: RFValue(15),
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
    borderRadius: RFValue(6),
    alignItems: 'center',
    justifyContent: 'center'
  },
  calendar: {
    fontSize: RFValue(16),
    margin: RFValue(10),
    fontWeight: 'bold',
    // paddingTop: RFValue(10),
    // backgroundColor:"red",
  },
  calendarContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor:"red",
    width: RFValue(130),
    marginTop: RFValue(10),
    marginBottom: RFValue(10),
    borderWidth: RFValue(1),
    borderRadius: RFValue(6),
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
    height: RFValue(300)
  },
  fotter: {
    // backgroundColor:"gray",
    justifyContent: 'space-between',
    flexDirection: 'row',
    height: RFValue(60),
    // alignSelf: 'flex-end'
  },
  fotterTouchableOpacityLeft: {
    width: "48%",
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: RFValue(3),
    borderRadius: RFValue(10),
    padding: RFValue(6),
    backgroundColor: "#990000"
  },
  fotterTouchableOpacityRight: {
    width: "48%",
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: RFValue(3),
    borderRadius: RFValue(10),
    padding: RFValue(6),
    backgroundColor: "rgb(0,128,0)"
  },
  fotterTextCancel: {
    // fontWeight:'bold',
    fontSize: RFValue(30),
    color: "white"

  },
  fotterTextAdvance: {
    // fontWeight:'bold',
    fontSize: RFValue(30),
    color: "white"
  },
})