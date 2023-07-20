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
} from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

var schedule = require("./Schedule.json")

export default class Schedule extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: "",
    };
  }

  renderItem = ({ item }) => {
    const borderLeftColor = item.status === "FINALIZADO" ? "#3bbf3f" : "#1c20ff"
    const color = item.status === "FINALIZADO" ? "#3bbf3f" : "#1c20ff"
    
    return (
      <View style={[styles.value, { borderLeftColor }]}>
        <Text style={styles.hour}>{item.horario1} - {item.horario2}</Text>
        <Text style={styles.name}>{item.nome}</Text>
        <View style={styles.lavagem}>
          <Text style={styles.servico}>{item.servico}</Text>
          <Text style={styles.tipoCarro}>{item.tipoCarro}</Text>
        </View>
        <Text style={[styles.status, {color}]}>{item.status}</Text>
      </View>
    )
  }

  render() {
    return (
      <View style={styles.container}>
        <SafeAreaView style={styles.droidSafeArea} />
        <ScrollView>
          <View style={styles.header}>

            <View style={styles.profile}>
              <TouchableOpacity>
                <Text style={styles.calendar}>16/07 á 22/07</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.userEmployee}>
                <Image
                  source={require('../assets/userProfile.png')}
                  style={styles.userEmployee}
                />
              </TouchableOpacity>
              <Text style={styles.name}>Pedro</Text>
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

          <View style={styles.schedule}>

            <View style={styles.containerWeeks}>
              <View style={styles.week}>
                <Text style={styles.weekTxt}>Dom</Text>
                <Text style={styles.dayTxt}>16/07</Text>
              </View>

              <ScrollView horizontal={true} style={styles.values}>
                <View style={styles.containerValues}>
                  {/* flatlist */}

                  <FlatList
                    horizontal={true}
                    data={schedule}
                    renderItem={this.renderItem}
                    keyExtractor={(item, index) => index.toString()}
                  />
                </View>
              </ScrollView>
            </View>
            <View style={styles.containerWeeks}>
              <View style={styles.week}>
                <Text style={styles.weekTxt}>Seg</Text>
                <Text style={styles.dayTxt}>17/07</Text>
              </View>
              <ScrollView horizontal={true} style={styles.values}>
                <View style={styles.containerValues}>

                </View>
              </ScrollView>
            </View>
            <View style={styles.containerWeeks}>
              <View style={styles.week}>
                <Text style={styles.weekTxt}>Ter</Text>
                <Text style={styles.dayTxt}>18/07</Text>
              </View>
              <ScrollView horizontal={true} style={styles.values}>
                <View style={styles.containerValues}>

                </View>
              </ScrollView>
            </View>
            <View style={styles.containerWeeks}>
              <View style={styles.week}>
                <Text style={styles.weekTxt}>Qua</Text>
                <Text style={styles.dayTxt}>19/07</Text>
              </View>
              <ScrollView horizontal={true} style={styles.values}>
                <View style={styles.containerValues}>

                </View>
              </ScrollView>
            </View>
            <View style={styles.containerWeeks}>
              <View style={styles.week}>
                <Text style={styles.weekTxt}>Qui</Text>
                <Text style={styles.dayTxt}>20/07</Text>
              </View>
              <ScrollView horizontal={true} style={styles.values}>
                <View style={styles.containerValues}>

                </View>
              </ScrollView>
            </View>
            <View style={styles.containerWeeks}>
              <View style={styles.week}>
                <Text style={styles.weekTxt}>Sex</Text>
                <Text style={styles.dayTxt}>21/07</Text>
              </View>
              <ScrollView horizontal={true} style={styles.values}>
                <View style={styles.containerValues}>

                </View>
              </ScrollView>
            </View>
            <View style={styles.containerWeeks}>
              <View style={styles.week}>
                <Text style={styles.weekTxt}>Sab</Text>
                <Text style={styles.dayTxt}>22/07</Text>
              </View>
              <ScrollView horizontal={true} style={styles.values}>
                <View style={styles.containerValues}>

                </View>
              </ScrollView>
            </View>

          </View>

          <View style={styles.space}></View>
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
    fontWeight: 'bold',
    paddingTop: RFValue(10),
    // backgroundColor:"red",
  },
  name: {
    fontWeight: 'bold',
    paddingTop: RFValue(6),
    paddingBottom: RFValue(4),
  },
  userEmployee: {
    width: RFValue(50),
    height: RFValue(50),
    marginTop: RFValue(5),
    // alignSelf:'center',
    // backgroundColor: 'pink',
  },
  historic: {
    width: RFValue(40),
    height: RFValue(40),
    marginEnd: RFValue(10),
    // backgroundColor: "brown",
  },

  schedule: {
    backgroundColor: '#fff',
    alignItems: 'center'
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
    paddingTop: RFValue(45),
    paddingBottom: RFValue(50),
    alignItems: 'center',
  },
  values: {
    backgroundColor: "#F1F1F1",
    // backgroundColor:"#f1f",
  },
  containerValues: {
    flexDirection: 'row',
    // backgroundColor:"#f1f",
    alignItems: 'center',
    paddingRight: RFValue(15)

  },
  value: {
    backgroundColor: "#FFF",
    marginLeft: RFValue(15),
    padding: RFValue(16),
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
    color: "#a1a1a1",
  },
  name: {
    fontSize: RFValue(14),
    fontWeight: 'bold',
    marginTop: RFValue(2),
    marginBottom: RFValue(2)
  },
  servico: {
    fontSize: RFValue(12.5),
  },
  tipoCarro: {
    fontSize: RFValue(12),
    marginLeft: RFValue(2)
  },
  status: {
    paddingTop: RFValue(3),
    fontSize: RFValue(12),
    color: "green" //Condição: borderLeftColor: {item.status} == 'FINALIZADO' ? "green" : "blue"
  },

  weekTxt: {
    fontSize: RFValue(18),
    fontWeight: 'bold'
  },
  dayTxt: {
    fontSize: RFValue(14),
  },
  space: {
    width: "100%",
    // backgroundColor: "brown",
    height: RFValue(75)
  },
});