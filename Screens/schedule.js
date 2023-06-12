import React, { Component } from "react"
import { Text, Image, View, ScrollView, StyleSheet, TouchableOpacity, StatusBar, Platform, SafeAreaView } from "react-native"
import { RFValue } from "react-native-responsive-fontsize"
import Historic from "./historic"

export default class Schedule extends Component {
  render() {
    return (
      <View style={styles.container}>
        <SafeAreaView style={styles.droidSafeArea} />
        <ScrollView>
          <View style={styles.square}>
            <TouchableOpacity style={styles.equalizer} >
              <Image
                source={require("../assets/equalizer.png")}
                style={styles.equalizer}
              />
            </TouchableOpacity>
            <View style={styles.iconSquareRight}>
              <TouchableOpacity onPress={()=>this.navigation.navigate(Historic)} style={styles.historic}>
                <Image
                  source={require("../assets/historic.png")}
                  style={styles.historic}
                />
              </TouchableOpacity>

              <TouchableOpacity style={styles.search}>
                <Image
                  source={require("../assets/search-interface-symbol.png")}
                  style={styles.search}
                />
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.employee}>
            <TouchableOpacity style={styles.userEmployee}>
              <Image
                source={require("../assets/userProfile.png")}
                style={styles.userEmployee}
              />
            </TouchableOpacity>
            <Text style={styles.text}>
              Pedro
            </Text>
            <TouchableOpacity style={styles.menu}>
              <Image
                source={require("../assets/menu.png")}
                style={styles.menu}
              />
            </TouchableOpacity>
            <Text style={{
              left: 320,
              top: 12,
              fontWeight: "bold"
            }}>
              Funcionários
            </Text>
          </View>

          <View style={styles.bgHours}>
            <Text style={styles.hours}>
              7h
            </Text>
            <Text style={styles.hours}>
              7:30
            </Text>
            <Text style={styles.hours}>
              8h
            </Text>
            <Text style={styles.hours}>
              8:30
            </Text>
            <Text style={styles.hours}>
              9h
            </Text>
            <Text style={styles.hours}>
              9:30
            </Text>
            <Text style={styles.hours}>
              10h
            </Text>
            <Text style={styles.hours}>
              10:30
            </Text>
            <Text style={styles.hours}>
              11h
            </Text>
            <Text style={styles.hours}>
              11:30
            </Text>
            <Text style={styles.hours}>
              12h
            </Text>
            <Text style={styles.hours}>
              12:30
            </Text>
            <Text style={styles.hours}>
              13h
            </Text>
            <Text style={styles.hours}>
              13:30
            </Text>
            <Text style={styles.hours}>
              14h
            </Text>
            <Text style={styles.hours}>
              14:30
            </Text>
            <Text style={styles.hours}>
              15h
            </Text>
            <Text style={styles.hours}>
              15:30
            </Text>
            <Text style={styles.hours}>
              16h
            </Text>
            <Text style={styles.hours}>
              16:30
            </Text>
            <Text style={styles.hours}>
              17h
            </Text>
            <Text style={styles.hours}>
              17:30
            </Text>
            <Text style={styles.hours}>
              18h
            </Text>
            <Text style={styles.hours}>
              18:30
            </Text>
            <Text style={styles.hours}>
              19h
            </Text>
          </View>
        </ScrollView >
      </View>

    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: "center",
    // alignItems: "center",
  },
  square: {
    alignSelf: "stretch",
    alignItems:"space-between",
    justifyContent: "start",
    borderWidth: 4,
    borderRadius: 10,
    borderColor: 'black',
    backgroundColor: 'red',
    // width: "100%",
    height: 250,
  },
  iconSquareRight: {

  },
  equalizer: {
    // position: "absolute",
    top: RFValue(25),
    left: 10,
    width: 32,
    height: 32,
  },
  historic: {
    // position: "absolute",
    top: RFValue(25),
    left: 157,
    width: 32,
    height: 32,
  },
  search: {
    // position: "absolute",
    // top: RFValue(25),
    // left: RFValue(160),
    width: 32,
    height: 32,
  },
  droidSafeArea: {
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : RFValue(35)
  },
  employee: {
    borderWidth: 4,
    borderRadius: 10,
    borderColor: 'black',
    backgroundColor: 'transparent',
    width: "100%",
    height: 100,
    bottom: 3,
  },
  userEmployee: {
    left: 90,
    top: 10,
    width: 40,
    height: 40,
  },
  text: {
    left: 183,
    top: 20,
    fontWeight: "bold"
  },
  menu: {
    position: "absolute",
    top: 15,
    left: 180,
    width: 32,
    height: 32,
  },
  hours: {
    backgroundColor: "#abb0ad",
    margin: 30,
    fontWeight: "bold",
    bottom: 10,
    left: 0
  },
  bgHours: {
    backgroundColor: "#abb0ad",
    margin: 30,
    fontWeight: "bold",
    bottom: 33,
    right: 170
  },

})
