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
} from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
// import Historic from "./historic"

export default class Schedule extends Component {
  render() {
    return (
      <View style={styles.container}>
        <SafeAreaView style={styles.droidSafeArea} />
        <ScrollView>
          <View style={styles.square}>
            <TouchableOpacity style={styles.equalizer}>
              <Image
                source={require('../assets/equalizer.png')}
                style={styles.equalizer}
              />
            </TouchableOpacity>

            <View style={styles.profile}>
              <Text style={styles.calendar}>30.12 </Text>
              <TouchableOpacity style={styles.userEmployee}>
                <Image
                  source={require('../assets/userProfile.png')}
                  style={styles.userEmployee}
                />
              </TouchableOpacity>
              <Text style={styles.name}>Pedro</Text>
            </View>

            <View style={styles.iconSquareRight}>
              <TouchableOpacity
                onPress={() => this.navigation.navigate(Historic)}
                style={styles.historic}>
                <Image
                  source={require('../assets/historic.png')}
                  style={styles.historic}
                />
              </TouchableOpacity>
              <TouchableOpacity style={styles.search}>
                <Image
                  source={require('../assets/search-interface-symbol.png')}
                  style={styles.search}
                />
              </TouchableOpacity>
            </View>

          </View>

          <View style={styles.bgHours}>

            <View style={styles.hours}>
              <Text style={styles.hoursTxt}>7h</Text>
            </View>
            <View style={styles.hours}>
              <Text style={styles.hoursTxt}>7:30</Text>
            </View>
            <View style={styles.hours}>
              <Text style={styles.hoursTxt}>8h</Text>
            </View>
            <View style={styles.hours}>
              <Text style={styles.hoursTxt}>8:30</Text>
            </View>
            <View style={styles.hours}>
              <Text style={styles.hoursTxt}>9h</Text>
            </View>
            <View style={styles.hours}>
              <Text style={styles.hoursTxt}>9:30</Text>
            </View>
            <View style={styles.hours}>
              <Text style={styles.hoursTxt}>10h</Text>
            </View>
            <View style={styles.hours}>
              <Text style={styles.hoursTxt}>10:30</Text>
            </View>
            <View style={styles.hours}>
              <Text style={styles.hoursTxt}>11h</Text>
            </View>
            <View style={styles.hours}>
              <Text style={styles.hoursTxt}>11:30</Text>
            </View>
            <View style={styles.hours}>
              <Text style={styles.hoursTxt}>12h</Text>
            </View>
            <View style={styles.hours}>
              <Text style={styles.hoursTxt}>12:30</Text>
            </View>
            <View style={styles.hours}>
              <Text style={styles.hoursTxt}>13h</Text>
            </View>
            <View style={styles.hours}>
              <Text style={styles.hoursTxt}>13:30</Text>
            </View>
            <View style={styles.hours}>
              <Text style={styles.hoursTxt}>14h</Text>
            </View>
            <View style={styles.hours}>
              <Text style={styles.hoursTxt}>14:30</Text>
            </View>
            <View style={styles.hours}>
              <Text style={styles.hoursTxt}>15h</Text>
            </View>
            <View style={styles.hours}>
              <Text style={styles.hoursTxt}>15:30</Text>
            </View>
            <View style={styles.hours}>
              <Text style={styles.hoursTxt}>16h</Text>
            </View>
            <View style={styles.hours}>
              <Text style={styles.hoursTxt}>16:30</Text>
            </View>
            <View style={styles.hours}>
              <Text style={styles.hoursTxt}>17h</Text>
            </View>
            <View style={styles.hours}>
              <Text style={styles.hoursTxt}>17:30</Text>
            </View>
            <View style={styles.hours}>
              <Text style={styles.hoursTxt}>18h</Text>
            </View>
            <View style={styles.hours}>
              <Text style={styles.hoursTxt}>18:30</Text>
            </View>
            <View style={styles.hours}>
              <Text style={styles.hoursTxt}>19h</Text>
            </View>

          </View>
          <View style={styles.space}></View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
    // justifyContent: "center",
    // alignItems: "center",
  },
  droidSafeArea: {
    marginTop:
      Platform.OS === 'android' ? StatusBar.currentHeight : RFValue(35),
  },
  square: {
    flex: 0.3,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'start',
    borderWidth: RFValue(4),
    borderRadius: RFValue(10),
    borderColor: 'black',
    // backgroundColor: 'red',
    width: '100%',
    height: RFValue(100),
  },
  iconSquareRight: {
    // backgroundColor:"green",
    flexDirection: 'row',
    justifyContent: 'space-around',
    margin:RFValue(17),
  },
  equalizer: {
    width: RFValue(32),
    height: RFValue(32),
    // backgroundColor:"pink",
    margin: 10,
  },
  historic: {
    width: RFValue(32),
    height: RFValue(32),
  },
  search: {
    width: RFValue(32),
    height: RFValue(32),
    marginLeft: RFValue(5),
  },
  userEmployee: {
    width: RFValue(37),
    height: RFValue(37),
    // backgroundColor: 'pink',
  },
  name: {
    // fontWeight: 'bold',
  },
  profile: {
    // backgroundColor: "blue",
    alignItems: "center",
    left:RFValue(30),
    marginTop:RFValue(7),
  },
  calendar:{
    margin:5,
    // fontWeight:"bold",
    fontSize:20,
    // backgroundColor:"red"
  },
  hours: {
    alignItems:'center',
    justifyContent:'center',
    marginTop:RFValue(30)
  },
  hoursTxt:{
    fontSize:RFValue(15)
  },
  bgHours: {
    backgroundColor: '#bdbdbd',
    width: RFValue(50),
    height:RFValue(1180),
    alignItems:'center'
  },
  space: {
    width: "100%",
    // backgroundColor: "brown",
    height: RFValue(75)
  },
});