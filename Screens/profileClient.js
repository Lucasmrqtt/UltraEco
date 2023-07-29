import React, { Component } from 'react';
import {
  Text,
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
  Platform,
  SafeAreaView,
} from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import Ionicons from "react-native-vector-icons/Ionicons";

export default class ProfileClient extends Component {
  constructor(props) {
    super(props)
    this.state = {
      speakerIcon: "chevron-back-outline",
    }
  }


  render() {
    const { } = this.state;

    return (
      <View style={styles.container}>
        <SafeAreaView style={styles.droidSafeArea} />
        <View style={styles.header}>
          <TouchableOpacity style={styles.back}>
            <Ionicons
              name={this.state.speakerIcon}
              size={RFValue(40)}
              // onPress={() => this.props.navigation.navigate("Home")}
              onPress={() => this.props.navigation.navigate("Agenda")}
            />
          </TouchableOpacity>
          <View style={styles.title}>
            <Text style={styles.titleText}>Nome Cliente</Text>
          </View>
        </View>

        <View style={styles.body}>
          <View style={styles.profile}>
            <Text style={{
              fontSize:20,
              fontWeight:'bold',
              paddingStart:10
            }}>Perfil</Text>
            <View style={styles.row}>
              <View style={styles.name}>
                <Text style={styles.titleBody}>Nome</Text>
                <Text style={{paddingStart:4}}>Maria da Gloria Karam Marquetti</Text>
              </View>
              <View style={styles.birth}>
                <Text style={styles.titleBody}>Nascimento</Text>
                <Text>04/09/1970</Text>
              </View>
            </View>
            <View style={styles.row}>
              <View style={styles.gmail}>
                <Text style={styles.titleBody}>G-mail</Text>
                <Text>Gloriamarquetti@gmail.com</Text>
              </View>
              <View style={styles.phone}>
                <Text style={styles.titleBody}>Telefone</Text>
                <Text>(45) 99975-6051</Text>
              </View>
            </View>
          </View>
          {/* <View style={styles.house}>
            <View style={styles.birth}>
              <Text>Nascimento</Text>
              <Text>04/09/1970</Text>
            </View>
          </View>
          <View style={styles.homework}>
            <View style={styles.birth}>
              <Text>Nascimento</Text>
              <Text>04/09/1970</Text>
            </View>
          </View> */}
        </View>

        <View style={styles.space}></View>


      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    // justifyContent: "center",
    // alignItems:"center",
  },
  droidSafeArea: {
    marginTop:
      Platform.OS === 'android' ? StatusBar.currentHeight : RFValue(35),
  },
  header: {
    // backgroundColor: "pink",
    // backgroundColor: "#bdbdbd",
    borderBottomWidth: RFValue(1),
    borderBottomColor: "#bdbdbd",
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: RFValue(10),
  },
  back: {
    // backgroundColor: "brown",
    // justifyContent: 'flex-start',
  },
  title: {
    // backgroundColor: "blue",
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    marginLeft: RFValue(20),
  },
  titleText: {
    // backgroundColor: "purple",
    fontWeight: 'bold',
    fontSize: RFValue(20),
    height: RFValue(25),
    paddingRight: RFValue(65),
    marginTop: RFValue(3),
  },
  body: {
    backgroundColor: "green",
    justifyContent: 'flex-start',
    // paddingLeft: RFValue(15),
    marginTop: RFValue(10),
    alignContent: 'space-around'
  },
  row: {
    marginTop:4,
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  titleBody:{
    fontSize:RFValue(18),
  },
  profile: {
    backgroundColor: "pink",
    paddingBottom:RFValue(10),
    borderWidth:RFValue(1),
  },
  name: {
    backgroundColor: "blue",
    width:120,
  },
  birth: {
    backgroundColor: "gray",
    width:120,

  },
  gmail: {
    backgroundColor: "brown",
    width:180,

  },
  phone: {
    backgroundColor: "yellow",
    width:140,

  },

  space: {
    width: "100%",
    // backgroundColor: "pink",
    height: Platform.OS == "ios" ? RFValue(221) : RFValue(152)
  },
})