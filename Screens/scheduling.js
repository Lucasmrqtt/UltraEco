import React, {Component} from "react";
import { Text, View, StyleSheet } from "react-native";

export default class Scheduling extends Component{
  render(){
    return(
      <View style={styles.container}>
        {/* Escolha o cliente */}
        {/* Escolha o serviço */}
        {/* Desconto */}
        {/* Escolha a Duração */}
        {/* Escolha o Profissional */}
        {/* Observação */}
        {/* Repetir? Semanalmente, uma vez po dia, etc */}
        {/* Botão de cancelar / Botao de Concluir */}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:"center",
    alignItems:"center",
  },
  text:{
    fontSize:20,
    fontWeight:"bold",
  },
})