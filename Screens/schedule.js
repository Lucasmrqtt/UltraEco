import React, { Component } from 'react';
import {
  Text,
  Image,
  View,
  ScrollView,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
  Platform,
  SafeAreaView,
  Modal
} from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { ExpandableCalendar, AgendaList, CalendarProvider, WeekCalendar, Calendar, CalendarList } from 'react-native-calendars';

var schedule = require("./Schedule.json")
var date = new Date()
var meses = {
  "Jan": "01", //31
  "Fev": "02", //28
  "Mar": "03", //31
  "Abr": "04", //30
  "Mai": "05", //31
  "Jun": "06", //30
  "Jul": "07", //31
  "Ago": "08", //31
  "Set": "09", //30
  "Out": "10", //31
  "Nov": "11", //30
  "Dez": "12", //31

}

export default class Schedule extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: "",
      visibleModal: false,
      date: new Date().getDay()

    };
  }

  componentDidMount() {
    // console.log(date)
    this.convertDateInitial(date)
  }

  visibleModalTrue = () => {
    this.setState({ visibleModal: true });
  };

  visibleModalFalse = () => {
    this.setState({ visibleModal: false });
  };

  renderItem = ({ item }) => {
    const borderLeftColor = item.status === "FINALIZADO" ? "#3bbf3f" : "#1c20ff"
    const color = item.status === "FINALIZADO" ? "#3bbf3f" : "#1c20ff"

    return (
      <TouchableOpacity style={[styles.value, { borderLeftColor }]}>
        <View style={{ flexDirection: 'row' }}>
          <Text style={styles.hour}>{item.horario1} - {item.horario2}</Text>
          <Text style={[styles.hour, { marginLeft: RFValue(5), marginRight: RFValue(5) }]}>|</Text>
          <Text style={styles.hour}>{item.bairro}</Text>
        </View>
        <Text style={styles.name}>{item.nome}</Text>
        <Text style={styles.servico}>{item.servico}</Text>
        <Text style={[styles.status, { color }]}>{item.status}</Text>
      </TouchableOpacity>
    )
  }

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
    d[1] = parseInt(d[1]) + 1
    d[1] = d[1].toString()
    if (d[1].length == 1) {
      d[1] = "0" + d[1]
    }
    d = d[1] + "/" + d[0] + "/" + d[2]
    // console.log(d)
    this.setState({ date: d })
  }

  render() {

    return (
      <View style={styles.container}>
        <Modal
          visible={this.state.visibleModal}
          transparent={true}
          onRequestClose={this.visibleModalFalse}
          // animationType="slide"
          onPress={this.visibleModalTrue}
          animationType="fade"

        >
          <CalendarProvider>
            <Calendar
              style={{
                borderRadius: RFValue(10),
                elevation: 4,
                // margin: 10
              }}
              value={this.state.date}
              monthFormat={'dd-MM-yyyy'}
              onDayPress={(day) => {
                this.visibleModalFalse()
                day = new Date(day.timestamp)

                this.convertDate(day)
              }}

            ></Calendar>

          </CalendarProvider>
        </Modal>
        <SafeAreaView style={styles.droidSafeArea} />
        <ScrollView>
          <View style={styles.header}>

            <View style={styles.profile}>
              <TouchableOpacity onPress={this.visibleModalTrue}>
                <Text style={styles.calendar}>{this.state.date}</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.userEmployee}>
                <Image
                  source={require('../assets/userProfile.png')}
                  style={styles.userEmployee}
                />
              </TouchableOpacity>
              <Text style={styles.nome}>Pedro</Text>
            </View>

            <TouchableOpacity
              onPress={() => this.props.navigation.navigate("Historic")}
              style={styles.historic}>
              <Image
                source={require('../assets/historic.png')}
                style={styles.historic}
              />
            </TouchableOpacity>

          </View>

          <ScrollView style={styles.schedule}>

            <View style={styles.containerWeeks}>
              <View style={styles.week}>
                <Text style={styles.weekTxt}>Seg</Text>
                <Text style={styles.dayTxt}>17/07</Text>
              </View>
              <View style={styles.values}>
                <View style={styles.containerValues}>
                  {/* flatlist */}

                  <FlatList
                    horizontal={true}
                    data={schedule}
                    renderItem={this.renderItem}
                    keyExtractor={(item, index) => index.toString()}
                  />
                </View>
              </View>
            </View>
            <View style={styles.containerWeeks}>
              <View style={styles.week}>
                <Text style={styles.weekTxt}>Ter</Text>
                <Text style={styles.dayTxt}>18/07</Text>
              </View>
              <View style={styles.values}>
                <View style={styles.containerValues}>

                </View>
              </View>
            </View>
            <View style={styles.containerWeeks}>
              <View style={styles.week}>
                <Text style={styles.weekTxt}>Qua</Text>
                <Text style={styles.dayTxt}>19/07</Text>
              </View>
              <View style={styles.values}>
                <View style={styles.containerValues}>

                </View>
              </View>
            </View>
            <View style={styles.containerWeeks}>
              <View style={styles.week}>
                <Text style={styles.weekTxt}>Qui</Text>
                <Text style={styles.dayTxt}>20/07</Text>
              </View>
              <View style={styles.values}>
                <View style={styles.containerValues}>

                </View>
              </View>
            </View>
            <View style={styles.containerWeeks}>
              <View style={styles.week}>
                <Text style={styles.weekTxt}>Sex</Text>
                <Text style={styles.dayTxt}>21/07</Text>
              </View>
              <View style={styles.values}>
                <View style={styles.containerValues}>

                </View>
              </View>
            </View>
            <View style={styles.containerWeeks}>
              <View style={styles.week}>
                <Text style={styles.weekTxt}>Sab</Text>
                <Text style={styles.dayTxt}>22/07</Text>
              </View>
              <View style={styles.values}>
                <View style={styles.containerValues}>

                </View>
              </View>
            </View>
            <View style={styles.containerWeeks}>
              <View style={styles.week}>
                <Text style={styles.weekTxt}>Dom</Text>
                <Text style={styles.dayTxt}>23/07</Text>
              </View>

              <View style={styles.values}>
                <View style={styles.containerValues}>

                </View>
              </View>
            </View>
          </ScrollView>

          {/* <View style={styles.space}></View> */}
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // justifyContent: "center",
    // alignItems: "center",
  },
  droidSafeArea: {
    height: Platform.OS === 'android' ? StatusBar.currentHeight : RFValue(35),
    backgroundColor: '#FFF',
  },
  header: {
    flex: 0.4,
    backgroundColor: '#fff',
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: RFValue(0.6),
    borderColor: '#dbdbdb',
    // paddingTop: RFValue(15),
    // backgroundColor: 'yellow',
    width: '100%',
  },
  profile: {
    // alignSelf:'center',
    flex: 1,
    paddingStart: RFValue(60),
    // backgroundColor: "blue",
    alignItems: "center",
    flexDirection: 'column'
  },
  calendar: {
    fontSize: RFValue(16),
    // fontWeight: 'bold',
    paddingTop: RFValue(10),
    // backgroundColor:"red",
  },
  nome: {
    fontWeight: 'bold',
    paddingTop: RFValue(6),
    paddingBottom: RFValue(4),
  },
  userEmployee: {
    width: RFValue(35),
    height: RFValue(35),
    marginTop: RFValue(5),
    // alignSelf:'center',
    // backgroundColor: 'pink',
  },
  historic: {
    width: RFValue(25),
    height: RFValue(25),
    marginEnd: RFValue(15),
    marginTop: RFValue(6),
    // backgroundColor: "brown",
  },

  schedule: {
    // alignItems: 'center'
    backgroundColor: "#F1F1F1",
  },
  containerWeeks: {
    width: "100%",
    flexDirection: 'row',
    borderBottomWidth: RFValue(2),
    borderBottomColor: "#dbdbdb",
  },
  week: {
    // backgroundColor:"red",
    height: "100%",
    width: RFValue(45),
    paddingTop: RFValue(30),
    paddingBottom: RFValue(30),
    alignItems: 'center',
    backgroundColor: "#fff",

  },
  values: {
    backgroundColor: "#F1F1F1",
    // backgroundColor:"#f1f",
  },
  containerValues: {
    flexDirection: 'row',
    // backgroundColor:"#f1f",
    alignItems: 'center',
    paddingRight: RFValue(15),


  },
  value: {
    backgroundColor: "#FFF",
    marginLeft: RFValue(15),
    width: RFValue(160),
    padding: RFValue(7),
    paddingRight: RFValue(60),
    borderWidth: RFValue(1),
    borderRadius: RFValue(8),
    borderTopColor: "#dbdbdb",
    borderRightColor: "#dbdbdb",
    borderBottomColor: "#dbdbdb",
    borderLeftWidth: RFValue(4),
  },
  lavagem: {
    flexDirection: 'row',
  },
  hour: {
    color: "#000",
    fontSize: RFValue(9),
  },
  name: {
    fontSize: RFValue(13),
    // fontWeight: 'bold',
    marginTop: RFValue(2),
    // marginBottom: RFValue(R),
    width: RFValue(160),
    height: RFValue(19)
  },
  servico: {
    fontSize: RFValue(12.5),
    color: "#a1a1a1",
  },
  status: {
    paddingTop: RFValue(2),
    fontSize: RFValue(8),
  },
  weekTxt: {
    fontSize: RFValue(14),
    // fontWeight: 'bold'
  },
  dayTxt: {
    fontSize: RFValue(9),
  },
});