import React, { Component } from "react";
import { Image, Modal, View, Button, Text, StyleSheet, Dimensions, TouchableOpacity, } from 'react-native'
// import AddEmployee from "./AddEmployee";
import AddService from "./registerService";
import AddClients from "./addClients";

const windowHeight = Dimensions.get('window').height;


export default class Records extends Component {
  constructor() {
    super()
    this.state = {
      isBottomSheetOpen: false,
    }
  }

  // Function to open the bottom sheet
  handleOpenBottomSheet = () => {
    this.setState({ isBottomSheetOpen: true })
  };

  // Function to close the bottom sheet
  handleCloseBottomSheet = () => {
    this.setState({ isBottomSheetOpen: false })
  };

  componentDidMount() {
    this.handleOpenBottomSheet()
  }

  render() {
    return (
      <View style={styles.container}>

        <Modal
          animationType="slide"
          transparent={true}
          visible={this.state.isBottomSheetOpen}
          onRequestClose={() => this.handleCloseBottomSheet()}>
          <View style={[styles.bottomSheet, { height: windowHeight * 0.5 }]}>

            <View
              style={{
                flex: 0,
                width: '100%',
                justifyContent: 'space-between',
                flexDirection: 'column',
              }}>
              <Text style={styles.title}>Cadastros</Text>
              <TouchableOpacity >
                <Text>Cadastrar Cliente</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={()=>this.navigation.navigate(AddService)}>
                <Text>Cadastrar Service</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={()=>this.navigation.navigate(AddEmployee)}>
                <Text>Cadastrar Funcionário</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 0.8,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 50
  },
  title: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 20
  },
  bottomSheet: {
    position: 'absolute',
    left: 0,
    right: 0,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: 'white',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingVertical: 23,
    paddingHorizontal: 25,
    bottom: 50,
    borderWidth: 4,
    borderColor: 'blue',
  },
});
