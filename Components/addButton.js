import React, { Component } from 'react';
import {
  Image,
  Modal,
  View,
  Button,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { RFValue } from 'react-native-responsive-fontsize';

const windowHeight = Dimensions.get('window').height;

export default class AddButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isBottomSheetOpen: false,
    };
  }
  // Function to open the bottom sheet
  handleOpenBottomSheet = () => {
    this.setState({ isBottomSheetOpen: true });
  };

  // Function to close the bottom sheet
  handleCloseBottomSheet = () => {
    this.setState({ isBottomSheetOpen: false });
  };

  // componentDidMount(){
  //   this.handleOpenBottomSheet()
  // }

  render() {
    return (
      <TouchableOpacity
        onPress={() => this.handleOpenBottomSheet()}
        style={styles.button}>
        <Image source={require("../assets/botao-adicionar.png")} style={styles.icon} />
        <Modal
          animationType="slide"
          transparent={true}

          visible={this.state.isBottomSheetOpen}

          onRequestClose={() => this.handleCloseBottomSheet()}>
          <View style={[styles.bottomSheet, { height: windowHeight * 0.6 }]}>
            <View style={styles.modal}>
              <TouchableOpacity style={styles.closeButton} onPress={() => this.handleCloseBottomSheet()}>
                <Image source={require("../assets/botao-adicionar.png")} style={styles.close} />
              </TouchableOpacity>
              <View style={styles.adds}>
                <TouchableOpacity style={styles.add} onPress={() => {this.handleCloseBottomSheet(),this.props.navigation.navigate("Scheduling")}}>
                  <Image source={require("../assets/add.png")} style={styles.icons} />
                  <Text style={styles.text}>Agendar Serviço</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.add} onPress={() => {this.handleCloseBottomSheet(),this.props.navigation.navigate("RegisterService")}}>
                  <Image source={require("../assets/customer-support.png")} style={{
                    width: RFValue(35),
                    height: RFValue(35),
                    marginRight: 35,
                  }} />
                  <Text style={styles.text}>Cadastrar Serviço</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.add} onPress={() => {this.handleCloseBottomSheet(),this.props.navigation.navigate("AddEmployee")}}>
                  <Image source={require("../assets/employee.png")} style={styles.icons} />
                  <Text style={styles.text}>Cadastrar Funcionário</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.add} onPress={() => {this.handleCloseBottomSheet(),this.props.navigation.navigate("AddClients")}}>
                  <Image source={require("../assets/client.png")} style={styles.icons} />
                  <Text style={styles.text}>Cadastrar Cliente</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>
      </TouchableOpacity >

    );
  }
}

const styles = StyleSheet.create({
  icon: {
    alignSelf: 'center',
    width: RFValue(50),
    height: RFValue(50),
    // backgroundColor:"red"
  },
  button: {
    position: 'absolute',
    alignSelf: 'center',
    bottom: 50,
    width: 50,
    height: 50,
    zIndex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    // borderWidth: 1,
    // borderColor: '#86827e',
    paddingVertical: 12,
    borderRadius: 100,
    // backgroundColor:"red"
  },

  bottomSheet: {
    position: 'absolute',
    width: "100%",
    backgroundColor: 'white',
    borderWidth: 1.5,
    bottom: 0,
  },
  modal: {
    width: '100%',
    // backgroundColor: "pink",
    justifyContent: 'center'
  },
  closeButton: {
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor:"gray"
  },
  close: {
    width: RFValue(60),
    height: RFValue(60),
    // backgroundColor: "red"
    transform: [{rotate: '45deg'}],
  },
  adds: {
    flexDirection: 'collum',
    // borderColor: "blue",
    height: windowHeight * 0.7
  },
  icons: {
    width: RFValue(40),
    height: RFValue(40),
    marginRight: 30
  },
  text: {
    // fontWeight: 'bold',
    fontSize: 25,
  },
  add: {
    marginTop: RFValue(50),
    marginLeft: 10,
    flexDirection: 'row',
    alignItems: 'center'
  },
});
