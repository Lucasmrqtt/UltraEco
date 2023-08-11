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

export default class Service extends Component {
  constructor(props) {
    super(props)
    this.state = {
      speakerIcon: "chevron-back-outline",
      photo: "person-circle-outline",
    }
  }


  render() {
    const { speakerIcon, photo } = this.state;
    return (
      <ScrollView style={styles.container}>
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

        <View style={styles.body}>
          <View style={{ alignItems: 'center', marginVertical: RFValue(10) }}>
            <Text style={{ color: "#a1a1a1" }}>8 de jul. de 2023</Text>
            <Text>08:00 - 08:30</Text>
            <Text style={{ color: "green", fontSize: 11 }}>FINALIZADO</Text>
          </View>
          <View style={styles.clientEmployee}>

            <View style={[styles.client, { borderTopWidth: RFValue(1), borderTopColor: "#bdbdbd" }]}>
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
            <View style={styles.client}>
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
          </View>
          <View>
            <Text style={{ fontSize: 20, paddingStart: RFValue(10), paddingTop: RFValue(10) }}>Itens</Text>
            <View style={styles.client}>
              <Ionicons
                name={photo}
                size={RFValue(40)}
                style={{ marginRight: 6 }}
              // onPress={() => this.props.navigation.navigate("Home")}
              />
              <View>
                <Text style={styles.text}>Lavagem (SUV)</Text>
                <Text style={{ fontSize: 13, color: "#909090" }}>R$ 85.00</Text>
              </View>
            </View>
          </View>
          <View style={{ paddingStart: RFValue(10) }}>
            <Text style={{ fontSize: 20, paddingStart: RFValue(5), paddingTop: RFValue(10) }}>Comanda</Text>
            <View style={styles.client}>
              <View>
                <View style={{ flexDirection: "row", justifyContent: 'space-evenly' }}>
                  <Text style={styles.text}>Lavagem</Text>
                  <Text style={styles.text}>Lavagem</Text>
                </View>
              </View>
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
    justifyContent: 'flex-start',
    paddingStart: RFValue(10),
    paddingEnd: RFValue(10),
    // paddingLeft: RFValue(15),
    // marginTop: RFValue(10),
    alignContent: 'space-around'
  },
  client: {
    //  backgroundColor:"brown",
    flexDirection: "row",
    borderBottomWidth: RFValue(1),
    borderBottomColor: "#bdbdbd",
    paddingVertical: RFValue(4),
    alignItems: 'center'
  },
  text: {
    fontSize: 16
  },
  space: {
    width: "100%",
    // backgroundColor: "pink",
    height: RFValue(100)
  },
})