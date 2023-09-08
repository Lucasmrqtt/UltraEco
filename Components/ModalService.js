import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Platform,
  SafeAreaView,
  TextInput,
  FlatList,
  StatusBar,
  Alert
} from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import Ionicons from "react-native-vector-icons/Ionicons";
import firebase from "firebase" 
import { db } from "../Config";
// import { initializeApp } from 'firebase/app'
// import { getFirestore, collection, getDocs } from 'firebase/firestore/lite'
//import db from "../Config"
// import { firestore } from 'firebase';
// import { firebaseConfig } from '../Config';

// const app = initializeApp(firebaseConfig);
// const db = getFirestore(app);
// firebase.initializeApp(firebaseConfig);
// const db = firebase.firestore()

export default class ModalService extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      speakerIcon: "chevron-back-outline",
      photo: "person-circle-outline",
      searchText: "",
      list: [],
      serviceList: [],

    };
  }

  componentDidMount() {
    this.handleFilterList();
    this.getService()
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.searchText !== this.state.searchText) {
      this.handleFilterList();
    }
  }

  getService = async () => {
    const service = collection(db, "Service")
    const serviceSnapshot = await getDocs(service)
    const serviceList = serviceSnapshot.docs.map(doc => doc.data());
    this.setState({ serviceList: [...serviceList] })
  }

  renderItem = ({ item }) => {
    // console.log(item)
    return (
      <TouchableOpacity style={styles.item}>
        <Ionicons
          name={this.state.photo}
          size={RFValue(50)}
          color="#555"
          style={styles.itemPhoto}
        />
        <View style={styles.itemInfo}>
          <Text style={styles.itemP1}>{item.service_Name}</Text>
          <Text style={styles.itemP2}>R${item.service_Value}</Text>
        </View>
      </TouchableOpacity>
    )
  }

  handleFilterList() {
    const { searchText, serviceList } = this.state;

    if (searchText === '') {
      this.setState({ serviceList: serviceList });
      this.getService()
    } else {
      // this.getService():
      const filteredList = serviceList.filter(

        (item) => item.service_Name.toLowerCase().indexOf(searchText.toLowerCase()) > -1
      );
      // console.log(filteredList),
      this.setState({ serviceList: filteredList });
    }
  }


  render() {
    const { searchText, allTransactions, serviceList } = this.state;
    return (
      <View style={styles.container}>

        <SafeAreaView style={styles.droidSafeArea} />
        <View style={styles.searchArea}>
          <TouchableOpacity
            onPress={this.props.handleClose}>
            <Ionicons
              name={this.state.speakerIcon}
              size={RFValue(40)}
            />
          </TouchableOpacity>
          <TextInput
            style={styles.input}
            placeholder="Pesquise um serviço"
            placeholderTextColor="#888"
            value={searchText}
            onChangeText={(t) => this.setState({ searchText: t })}
          />
        </View>

        <FlatList
          data={serviceList}
          renderItem={this.renderItem}
          keyExtractor={(item, index) => index.toString()}
          style={styles.list}
        />
      </View >
    );
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  droidSafeArea: {
    height: Platform.OS === 'android' ? StatusBar.currentHeight : RFValue(35),
    backgroundColor: '#f5f5f5',
  },
  input: {
    flex: 1,
    height: RFValue(50),
    backgroundColor: '#f1f1f1',
    margin: RFValue(30), // 
    borderWidth: RFValue(2), // Updated to RfValue
    borderRadius: RFValue(5), // Updated to RfValue
    fontSize: RFValue(19), // Updated to RfValue
    paddingLeft: RFValue(15), // Updated to RfValue
    paddingRight: RFValue(15), // Updated to RfValue
    color: '#000',
  },
  searchArea: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  orderButton: {
    width: RFValue(32),
    marginRight: RFValue(30), // Updated to RfValue
    alignItems: 'center',
    justifyContent: 'center'
  },
  list: {
    flex: 1,
  },
  item: {
    flexDirection: 'row',
    width: "100%",
    borderBottomWidth: RFValue(1), // Updated to RfValue
    borderBottomColor: '#000',
    paddingTop: RFValue(10), // Updated to RfValue
    paddingBottom: RFValue(10), // Updated to RfValue
  },
  itemPhoto: {
    // width: RFValue(50), // Updated to RfValue
    // height: RFValue(50), // Updated to RfValue
    borderRadius: RFValue(30), // Updated to RfValue
    // backgroundColor: '#ababab',
    paddingStart: "5%"
  },
  itemInfo: {
    marginLeft: RFValue(20), // Updated to RfValue
  },
  itemP1: {
    fontSize: RFValue(19),
    color: '#000',
    marginBottom: RFValue(5), // Updated to RfValue
  },
  itemP2: {
    fontSize: RFValue(16), // Updated to RfValue
    color: '#ababab',
  },
});