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
        {/* <SafeAreaView style={styles.droidSafeArea} /> */}
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
            <Text style={styles.hours}>7h</Text>
            <Text style={styles.hours}>7:30</Text>
            <Text style={styles.hours}>8h</Text>
            <Text style={styles.hours}>8:30</Text>
            <Text style={styles.hours}>9h</Text>
            <Text style={styles.hours}>9:30</Text>
            <Text style={styles.hours}>10h</Text>
            <Text style={styles.hours}>10:30</Text>
            <Text style={styles.hours}>11h</Text>
            <Text style={styles.hours}>11:30</Text>
            <Text style={styles.hours}>12h</Text>
            <Text style={styles.hours}>12:30</Text>
            <Text style={styles.hours}>13h</Text>
            <Text style={styles.hours}>13:30</Text>
            <Text style={styles.hours}>14h</Text>
            <Text style={styles.hours}>14:30</Text>
            <Text style={styles.hours}>15h</Text>
            <Text style={styles.hours}>15:30</Text>
            <Text style={styles.hours}>16h</Text>
            <Text style={styles.hours}>16:30</Text>
            <Text style={styles.hours}>17h</Text>
            <Text style={styles.hours}>17:30</Text>
            <Text style={styles.hours}>18h</Text>
            <Text style={styles.hours}>18:30</Text>
            <Text style={styles.hours}>19h</Text>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
  },

  hours: {
    // backgroundColor: 'red',
    justifyContent: "flex-start",
    margin: 15,
    width: RFValue(35),
    fontWeight: 'bold',
  },
  bgHours: {
    backgroundColor: '#bdbdbd',
    justifyContent: "flex-start",
    width: RFValue(50),
  },
});