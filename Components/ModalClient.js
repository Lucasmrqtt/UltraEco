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
import db from "../config";
import { collection, getDocs } from "firebase/firestore";

export default class ModalClient extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      speakerIcon: "chevron-back-outline",
      abc: "text-outline",
      photo: "person-circle-outline",
      searchText: "",
      list: [],
      clientList: [],

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

  handleFilterList() {
    const { searchText, clientList } = this.state;

    if (searchText === '') {
      this.setState({ clientList: clientList });
      this.getClients();

    } else {
      const filteredList = clientList.filter(
        (item) => item.client_name.toLowerCase().includes(searchText.toLowerCase())
      );
      this.setState({ clientList: filteredList });
    }
  }

  getClients = async () => {
    const clientSnapshot = await getDocs(collection(db, "clients"));
    const clientsData = clientSnapshot.docs.map(doc => doc.data());
    this.setState({ clientList: clientsData });
  }

  renderItem = ({ item }) => {
    // console.log(item)
    return (
      <TouchableOpacity
        style={styles.item}
        onPress={() => this.handleClientSelect(item)}
      >
        <Ionicons
          name={this.state.photo}
          size={RFValue(50)}
          color="#555"
          style={styles.itemPhoto}
        />
        <View style={styles.itemInfo}>
          <Text style={styles.itemP1}>{item.client_name}</Text>
          <Text style={styles.itemP2}>{item.client_phone}</Text>
        </View>
      </TouchableOpacity>
    )
  }

  handleOrderClick = () => {
    const { clientList } = this.state;

    const newList = [...clientList];
    // console.log(newList)
    // newList.sort((a, b) => {return b.client_Name - a.client_Name});

    newList.sort((a, b) => (a.client_Name > b.client_Name ? 1 : b.client_Name > a.client_Name ? -1 : 0));

    this.setState({ clientList: newList });
  }

  handleClientSelect = (clientData) => {
    this.props.onClientSelect(clientData);
  }

  render() {
    const { searchText, clientList } = this.state;
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
}

const styles = StyleSheet.create({
  container: {
    // height: RFValue(400),
    flex: 0.7,
    top: RFValue(220),
    // width: RFValue(400),
    backgroundColor: '#fff',
    borderWidth: RFValue(2), // Updated to RfValue
  },
  droidSafeArea: {
    // height: Platform.OS === 'android' ? StatusBar.currentHeight : RFValue(35),
    backgroundColor: '#f5f5f5',
  },
  input: {
    flex: 1,
    height: RFValue(40),
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
    height: RFValue(70),

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