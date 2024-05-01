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
  Alert,
  Keyboard
} from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import Ionicons from "react-native-vector-icons/Ionicons";
import db from "../config";
import { collection, getDocs } from "firebase/firestore";

export default class ListService extends Component {
  constructor(props) {
    super(props);
    this.state = {
      abc: "text-outline",
      photo: "person-circle-outline",
      back: "arrow-back",
      searchText: "",
      serviceList: [],

    };
  }

  componentDidMount() {
    // this.handleFilterList();
    this.getService()
    this.handleFilterList();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.searchText !== this.state.searchText) {
      this.handleFilterList();
    }
  }

  getService = async () => {
    const serviceSnapshot = await getDocs(collection(db, "Service"));
    const serviceData = serviceSnapshot.docs.map(doc => doc.data());
    this.setState({ serviceList: serviceData })
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
          <Text style={styles.itemP1}>{item.service_name}</Text>
          <Text style={styles.itemP2}>R${item.service_value}</Text>
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
      // console.log(serviceList)
      const filteredList = serviceList.filter(

        (item) => item.service_name.toLowerCase().indexOf(searchText.toLowerCase()) > -1
      );
      // console.log(filteredList),
      this.setState({ serviceList: filteredList });
    }
  }

  handleOrderClick = () => {
    const { serviceList } = this.state;

    const newList = [...serviceList];


    newList.sort((a, b) => (a.service_name > b.service_name ? 1 : b.service_name > a.service_name ? -1 : 0));

    this.setState({ serviceList: newList });
  }


  render() {
    const { searchText, allTransactions, serviceList } = this.state;
    return (
      <View style={styles.container}>

        <SafeAreaView style={styles.droidSafeArea} />
        <View style={styles.searchArea}>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate("Lista")}
            style={{ marginStart: RFValue(3) }}
          >
            <Ionicons
              name={this.state.back}
              size={RFValue(40)}
            // color="#888"
            />
          </TouchableOpacity>
          <TextInput
            style={styles.input}
            placeholder="Pesquise um serviço"
            placeholderTextColor="#888"
            value={searchText}
            onChangeText={(t) => this.setState({ searchText: t })}
            returnKeyType="done" // Mudei aqui para "done"
            onSubmitEditing={() => Keyboard.dismiss()}
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
          data={serviceList}
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
    marginStart: RFValue(10),
    marginEnd: RFValue(10),
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