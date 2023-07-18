import React, { Component } from 'react';
import {
  Text,
  View,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Platform,
  SafeAreaView,
  TextInput,
  FlatList
} from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import Ionicons from "react-native-vector-icons/Ionicons";

var clients = require("./Clients.json")

export default class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      speakerIcon: "text-outline",
      searchText: '',
      list: clients,
    };
  }

  componentDidMount() {
    this.handleFilterList();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.searchText !== this.state.searchText) {
      this.handleFilterList();
    }
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

  renderItem = ({ item }) => {
    return (
      <TouchableOpacity style={styles.item}>
        {/* <Image source={item.avatar} style={styles.itemPhoto} /> */}
        <View style={styles.itemInfo}>
          <Text style={styles.itemP1}>{item.name}</Text>
          <Text style={styles.itemP2}>{item.email}</Text>
        </View>
      </TouchableOpacity>
    )
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
  input: {
    flex: 1,
    height: 50,
    backgroundColor: '#f1f1f1',
    margin: 30,
    borderWidth: 2,
    borderRadius: 5,
    fontSize: 19,
    paddingLeft: 15,
    paddingRight: 15,
    color: '#000',
  },
  searchArea: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  orderButton: {
    width: 32,
    marginRight: 30,
  },
  list: {
    flex: 1,
  },
  item: {
    flexDirection: 'row',
    marginLeft: 30,
    marginRight: 30,
    borderBottomWidth: 1,
    borderBottomColor: '#FFF',
    paddingTop: 15,
    paddingBottom: 15,
  },
  itemPhoto: {
    width: 50,
    height: 50,
    borderRadius: 30,
  },
  itemInfo: {
    marginLeft: 20,
  },
  itemP1: {
    fontSize: 22,
    color: '#000',
    marginBottom: 5,
  },
  itemP2: {
    fontSize: 18,
    color: '#fff',
  },
  droidSafeArea: {
    marginTop:
      Platform.OS === 'android' ? StatusBar.currentHeight : RFValue(35),
  },
});