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
import firebase from 'firebase';
import db from "../config"

var clients = require("./Clients.json")


export default class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      speakerIcon: "text-outline",
      photo: "person-circle-outline",
      searchText: '',
      list: [],
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

  getClients = () => {
      let client = []
      db.collection("clients")
      .get()
      .then(response => {
          // console.log(response.docs)
          // console.log(doc.data())
          response.docs.map(doc => {
            client.push(doc.data())
          })
        })
        this.setState({ list: client })
        console.log(this.state.list)      
        // .catch(error => {
      //   Alert.alert(error.message)
      // })
  }

  renderItem = ({ item }) => {
    console.log(item)
    return (
      <TouchableOpacity style={styles.item}>
        <Ionicons
          name={this.state.photo}
          size={RFValue(50)}
          color="#555"
          style={styles.itemPhoto}
        />
        <View style={styles.itemInfo}>
          <Text style={styles.itemP1}>{item.name}</Text>
          <Text style={styles.itemP2}>{item.email}</Text>
        </View>
      </TouchableOpacity>
    )
  }

  handleFilterList() {
    const { searchText } = this.state;

    if (searchText === '') {
      this.setState({ list: clients });
    } else {
      const filteredList = clients.filter(
        (item) =>
          item.name.toLowerCase().indexOf(searchText.toLowerCase()) > -1
      );
      this.setState({ list: filteredList });
    }
  }

  handleOrderClick = () => {
    const newList = [...clients];

    newList.sort((a, b) => (a.name > b.name ? 1 : b.name > a.name ? -1 : 0));

    this.setState({ list: newList });
  }

  

  render() {
    const { searchText, allTransactions } = this.state;
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
              name={this.state.speakerIcon}
              size={RFValue(20)}
              color="#888"
            />
          </TouchableOpacity>
        </View>

        <FlatList
          data={this.state.list}
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