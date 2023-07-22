import React, { Component } from 'react';
import {
  Text,
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  StatusBar,
  Platform,
  SafeAreaView,
} from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

export function ActionModal({ handleClose }) {
  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.droidSafeArea} />
      <TouchableOpacity style={{ flex: 1 }} onPress={handleClose}></TouchableOpacity>
      <View style={styles.content}>
        <View style={{ alignItems: 'center', height: RFValue(20) }}>
          <TouchableOpacity onPress={handleClose}>
            <Image
              source={require("../assets/botao-adicionar.png")}
              style={{
                height: RFValue(70),
                width: RFValue(70),
                top: '-60%',
                zIndex: 99,
                transform: [{ rotate: '45deg' }],
              }}
            />
          </TouchableOpacity>
        </View>

        <View>
          <TouchableOpacity
            style={styles.containerIcons}
            onPress={() => this.props.navigation.navigate("Home")}
          >
            <Image source={require("../assets/add.png")} style={styles.icons} />
            <Text style={styles.text}>Agendar Serviço</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.containerIcons}
            onPress={() => this.props.navigation.navigate("RegisterService")}
          >
            <Image source={require("../assets/customer-support.png")} style={{
              width: RFValue(35),
              height: RFValue(35),
              marginRight: 30,
              marginStart: "3%"
            }} />
            <Text style={styles.text}>Serviço</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.containerIcons}
            onPress={() => this.props.navigation.navigate("AddEmploye")}
          >
            <Image source={require("../assets/employee.png")} style={styles.icons} />
            <Text style={styles.text}>Funcionário</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.containerIcons}
            onPress={() => this.props.navigation.navigate("AddClients")}
          >
              <Image source={require("../assets/client.png")} style={styles.icons} />
              <Text style={styles.text}>Clientes</Text>
          </TouchableOpacity>
        </View>

      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  droidSafeArea: {
    marginTop:
      Platform.OS === 'android' ? StatusBar.currentHeight : RFValue(35),
  },
  content: {
    flex: 2,
    backgroundColor: "#FFF",
    borderTopWidth: RFValue(2)
  },
  icons: {
    width: RFValue(40),
    height: RFValue(40),
    marginRight: 30,
    marginStart: "3%"
  },
  containerIcons: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: Platform.OS === 'ios' ? RFValue(37) : RFValue(31),
    borderBottomWidth: RFValue(1),
  },
  text: {
    fontSize: RFValue(30),
    textAlign: 'center',
    // backgroundColor: "pink"

  },
})