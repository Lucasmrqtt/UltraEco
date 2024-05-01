import React, { Component } from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import Ionicons from "react-native-vector-icons/Ionicons";

export default class AddTeam extends Component {
  constructor(props) {
    super(props)
    this.state = {
      speakerIcon: "arrow-back", // Mudança para um ícone de seta de voltar
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>
          Tela em manutenção (AddTeam)
        </Text>
        <TouchableOpacity style={styles.backButton} onPress={() => this.props.navigation.goBack()}>
          <Ionicons
            name={this.state.speakerIcon}
            size={RFValue(40)}
            color="#333" // Cor do ícone
          />
          <Text style={styles.backButtonText}> Voltar</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:"#fff",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
  },
  backButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  backButtonText: {
    fontSize: RFValue(16),
    color: "#333", // Cor do texto
    marginLeft: 5, // Espaço entre o ícone e o texto
  },
});
