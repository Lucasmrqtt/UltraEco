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
import { initializeApp } from 'firebase/app'
// import firebase from 'firebase';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite'
//import db from "../Config"
import { firebaseConfig } from '../Config';
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);


var clients = require("./Clients.json")

export default class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      abc: "text-outline",
      photo: "person-circle-outline",
      searchText: '',
      clientList:[]
    };
  }

  componentDidMount() {
    this.handleFilterList();
    this.getClients()
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.searchText !== this.state.searchText) {
      this.handleFilterList();
    }
  }

  getClients = async () => {
      const clients = collection(db,"clients")
      const clientSnapshot = await getDocs(clients)
      const clientList = clientSnapshot.docs.map(doc => doc.data());
      // console.log(clientList)
      this.setState({clientList : [...clientList]})
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
          <Text style={styles.itemP1}>{item.client_Name}</Text>
          <Text style={styles.itemP2}>{item.client_Email}</Text>
        </View>
      </TouchableOpacity>
    )
  }

  handleFilterList() {
    const { searchText } = this.state;

    if (searchText === '') {
      this.setState({ clientList: clients });
    } else {
      const filteredList = clients.filter(
        (item) =>
          item.name.toLowerCase().indexOf(searchText.toLowerCase()) > -1
      );
      this.setState({ clientList: filteredList });
    }
  }

  handleOrderClick = () => {
    const newList = [...clients];

    newList.sort((a, b) => (a.name > b.name ? 1 : b.name > a.name ? -1 : 0));

    this.setState({ clientList: newList });
  }

  

  render() {
    const { searchText, allTransactions, clientList } = this.state;
    return (
      <View style={styles.container}>

        <SafeAreaView style={styles.droidSafeArea} />
        <View style={styles.searchArea}>
          <TextInput
            style={styles.input}
            placeholder="Pesquise um cliente"
            placeholderTextColor="#888"
            value={searchText}
            onChangeText={(t) => this.setState({ searchText: t })}
          />
          <TouchableOpacity
            onPress={this.handleOrderClick}
            style={styles.orderButton}
          >
            <Ionicons
              name={this.state.abc}
              size={RFValue(20)}
              color="#888"
            />
          </TouchableOpacity>
        </View>

        <FlatList
          data={clientList}
          renderItem={this.renderItem}
          keyExtractor={(item, index) => index.toString()}
          style={styles.list}
        />
      </View >
    );
  };

};

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
    paddingTop: RFValue(15), // Updated to RfValue
    paddingBottom: RFValue(15), // Updated to RfValue
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