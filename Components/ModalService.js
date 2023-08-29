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

export default class ModalService extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={styles.container}>
        <SafeAreaView style={styles.droidSafeArea} />
        <TouchableOpacity
          style={{ flex: 1 }}
          onPress={this.props.handleClose}
        ></TouchableOpacity>
        <View style={styles.content}>
          <View style={{ alignItems: 'center', height: RFValue(20) }}>
            <TouchableOpacity onPress={this.props.handleClose}>
              <Image
                source={require("../assets/botao-adicionar.png")}
                style={{
                  height: RFValue(70),
                  width: RFValue(70),
                  top: "-60%",
                  zIndex: 99,
                  transform: [{ rotate: "45deg" }],
                }}
              />
            </TouchableOpacity>
          </View>

          <View>

          </View>

        </View>
      </View>
    )
  }
} 

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:"gray",
  },
  droidSafeArea: {
    marginTop:
      Platform.OS === 'android' ? StatusBar.currentHeight : RFValue(35),
  },
  content: {
    flex: 10,
    backgroundColor: "#FFF",
    backgroundColor:"pink",

    borderTopWidth: RFValue(2),
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