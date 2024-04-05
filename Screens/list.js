import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import Ionicons from "react-native-vector-icons/Ionicons";
import Client from './clients';

export default class List extends Component {
  constructor(props) {
    super(props)
    this.state = {
      speakerIcon: "chevron-back-outline",
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity 
        style={styles.button}
        onPress={() => this.props.navigation.navigate("Client")}
        >
          <Text style={styles.buttonText}>
            Clientes
          </Text>
        </TouchableOpacity>
        <TouchableOpacity 
        style={styles.button}
        onPress={() => this.props.navigation.navigate("ListService")}
        >
          <Text style={styles.buttonText}>
            Serviços
          </Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    fontSize: RFValue(20),
    fontWeight: "bold",
    padding: RFValue(10),
    color: "#fff",
  },
  button: {
    height: RFValue(50),
    width: RFValue(300),
    justifyContent: 'center',
    marginBottom: RFValue(15),
    backgroundColor: "#007bff",
    borderRadius: RFValue(6),
    alignItems: "center",
  },
})
