import React, { Component } from 'react';
import {
  Text,
  Image,
  View,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
  Platform,
  SafeAreaView,
  TextInput,
  KeyboardAvoidingView,
  Alert
} from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import Ionicons from "react-native-vector-icons/Ionicons";

export default class Settings extends Component {
  constructor(props) {
    super(props)
    this.state = {
      speakerIcon: "chevron-back-outline",
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>
          Tela em manutenção (Configurações)
        </Text> 
        <TouchableOpacity style={{flexDirection:'row', alignItems:'center'}} onPress={() => this.props.navigation.navigate("Homer")}>
          <Ionicons
            name={this.state.speakerIcon}
            size={RFValue(40)}
          />
          <Text style={styles.text}> Voltar</Text>
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
  text: {
    fontSize: 20,
    fontWeight: "bold",
  },
})