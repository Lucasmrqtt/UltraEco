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
  Modal,
} from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { CalendarProvider, Calendar } from 'react-native-calendars';

var schedule = require("./Schedule.json")
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

const getDaysOfWeek = (calendarValue) => {
  const daysOfWeek = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sab"];
  const dayIndex = calendarValue.getDay()
  const result = {};
  for (let i = 0; i < daysOfWeek.length; i++) {
    const offset = (i - dayIndex + 7) % 7;
    const dayValue = new Date(calendarValue);
    dayValue.setDate(dayValue.getDate() + offset);
    result[daysOfWeek[i]] = dayValue;
  }
  return result;
};

// Função para obter as próximas 7 datas com o dia da semana alterado para Quarta-feira
const getNextSevenWednesdays = () => {
  const currentDate = new Date();
  const nextSevenWednesdays = [];
  for (let i = 0; i < 7; i++) {
    const nextWednesday = new Date(currentDate.getTime());
    const offset = (3 - currentDate.getDay() + 7) % 7; // 3 representa Quarta-feira
    nextWednesday.setDate(currentDate.getDate() + offset + (7 * i));
    nextSevenWednesdays.push(nextWednesday);
  }
  return nextSevenWednesdays;
};

const getNextSevenDays = () => {
  const currentDate = new Date();
  const nextSevenDays = [];
  for (let i = 0; i < 7; i++) {
    const nextDay = new Date(currentDate.getTime());
    nextDay.setDate(currentDate.getDate() + i + 1);
    nextSevenDays.push(nextDay);
  }
  return nextSevenDays;
};


export default class Schedule extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: "",
      visibleModal: false,
      date: new Date().getDay(),
      dates: getNextSevenWednesdays() // Armazena as próximas 7 datas com o dia da semana alterado para Quarta-feira
    };
  }

  componentDidMount() {
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
      <TouchableOpacity
        style={[styles.value, { borderLeftColor }]}
        onPress={() => this.props.navigation.navigate("Service")}
      >
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
    let d = day
    d = d.toString().split("").slice(0, 15).join("")
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
    this.setState({ date: d })
  }

  render() {
    const { selectedDay, visibleModal, date, dates } = this.state;
    const calendarValue = new Date();
    const daysOfWeek = getDaysOfWeek(calendarValue);
    return (
      <View style={styles.container}>
        <Modal
          visible={visibleModal}
          transparent={true}
          onRequestClose={this.visibleModalFalse}
          animationType="fade"
        >
          <CalendarProvider>
            <Calendar
              style={{
                borderRadius: RFValue(10),
                elevation: 4,
                marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : RFValue(35),
              }}
              // onPress={console.log("MUITO BOM DAIA")}
              value={date}
              monthFormat={'dd-MM-yyyy'}
              onDayPress={(day) => {
                this.visibleModalFalse();
                day.day < 10 ? day.day = "0"+ day.day : null
                day.month < 10 ? day.month = "0"+ day.month : null
                this.setState({date: day.day + "/" + day.month + "/" + day.year})
              }}
            ></Calendar>
          </CalendarProvider>
        </Modal>

        <SafeAreaView style={styles.droidSafeArea} />
        <ScrollView>
          <View style={styles.header}>
            <View style={styles.profile}>
              <TouchableOpacity onPress={this.visibleModalTrue}>
                <Text style={styles.calendar}>{date}</Text>
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
            {dates.map((date, index) => (
              <View key={index} style={styles.containerWeeks}>
                <View style={styles.week}>
                  <Text style={styles.weekTxt}>Qua</Text>
                  <Text style={styles.dayTxt}>
                    {date.toLocaleDateString("pt-BR")}
                  </Text>
                </View>
                <View style={styles.values}>
                  <View style={styles.containerValues}>
                    <FlatList
                      horizontal={true}
                      data={schedule.filter(item => {
                        const itemDay = new Date(item.data);
                        return itemDay.getDay() === 3; // Filtra apenas os compromissos de Quarta-feira
                      })}
                      renderItem={this.renderItem}
                      keyExtractor={(item, index) => index.toString()}
                    />
                  </View>
                </View>
              </View>
            ))}
          </ScrollView>
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
    fontSize: RFValue(8),
  },
});
