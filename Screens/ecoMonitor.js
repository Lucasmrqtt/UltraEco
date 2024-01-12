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
// import { LineChart, Grid } from 'react-native-svg-charts';

export default class EcoMonitor extends Component {
  constructor(props) {
    super(props)
    this.state = {
      speakerIcon: "chevron-back-outline",
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <SafeAreaView style={styles.droidSafeArea} />
        <View style={styles.header}>
          <TouchableOpacity onPress={() => this.props.navigation.navigate("Dashboard")}>
            <Ionicons
              name={this.state.speakerIcon}
              size={RFValue(40)}
            />
          </TouchableOpacity>
          <View style={styles.title}>
            <Text style={styles.titleText}>EcoMonitor</Text>
          </View>
        </View>
        {/* <LineChart
          style={{ height: 200 }}
          // data={data}
          svg={{ stroke: 'rgb(134, 65, 244)' }}
          contentInset={{ top: 20, bottom: 20 }}
        >
          <Grid />
        </LineChart> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  droidSafeArea: {
    marginTop:
      Platform.OS === 'android' ? StatusBar.currentHeight : RFValue(35),
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: RFValue(10),
    justifyContent: 'space-between',
    paddingHorizontal: RFValue(10),
  },
  title: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    marginLeft: RFValue(20),
  },
  titleText: {
    fontWeight: 'bold',
    fontSize: RFValue(30),
    paddingRight: RFValue(65),
    marginTop: RFValue(3),
  },
}) 