import React, { Component } from "react"
import { Text, Image, View, ScrollView, StyleSheet, TouchableOpacity } from "react-native"


export default class Schedule extends Component {
  render() {
    return (
      <ScrollView>
        <View style={styles.container}>
          <TouchableOpacity style={styles.equalizer} >
            <Image
              source={require("../assets/equalizer.png")}
              style={styles.equalizer}
            />
          </TouchableOpacity>


          <TouchableOpacity style={styles.historic}>
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


          <View style={styles.square}>
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
            <Text  style={styles.hours}>
              7:30
            </Text>
            <Text  style={styles.hours}>
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

        </View>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  equalizer: {
    position: "absolute",
    top: 30,
    left: 10,
    width: 32,
    height: 32,
  },
  historic: {
    position: "absolute",
    top: 30,
    left: 157,
    width: 32,
    height: 32,
  },
  search: {
    position: "absolute",
    top: 30,
    left: 180,
    width: 32,
    height: 32,
  },
  square: {
    borderWidth: 4,
    borderRadius: 10,
    borderColor: 'black',
    backgroundColor: 'transparent',
    width: 420,
    height: 250,
  },
  employee: {
    borderWidth: 4,
    borderRadius: 10,
    borderColor: 'black',
    backgroundColor: 'transparent',
    width: 420,
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
    backgroundColor:"#abb0ad",
    margin:30,
    fontWeight:"bold",
    bottom:10,
    left:0
  },
  bgHours: {
    backgroundColor:"#abb0ad",
    margin:30,
    fontWeight:"bold",
    bottom:33,
    right:170
  },

})
