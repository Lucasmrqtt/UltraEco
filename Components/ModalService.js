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

export default class ModalService extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      speakerIcon: "chevron-back-outline",
      photo: "person-circle-outline",
      searchText: "",
      check: "checkmark-outline",
      list: [],
      serviceList: [],
      selectedServices: [], 
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

  handleFilterList() {
    const { searchText, serviceList } = this.state;

    if (searchText === '') {
      this.setState({ serviceList: serviceList });
      this.getService();
    } else {
      const filteredList = serviceList.filter(
        (item) => item.service_name.toLowerCase().indexOf(searchText.toLowerCase()) > -1
      );
      this.setState({ serviceList: filteredList });
    }
  }

  getService = async () => {
    const serviceSnapshot = await getDocs(collection(db, "Service"));
    const serviceData = serviceSnapshot.docs.map(doc => doc.data());
    this.setState({ serviceList: serviceData })
  }

  handleServiceSelect = (selectedService) => {
    const { selectedServices } = this.state;
    const index = selectedServices.findIndex(service => service.service_name === selectedService.service_name);
    if (index === -1) {
      // Se o serviço não estiver selecionado, adicione-o aos serviços selecionados
      this.setState(prevState => ({
        selectedServices: [...prevState.selectedServices, selectedService]
      }));
      // console.log(selectedServices)
    } else {
      // Se o serviço já estiver selecionado, remova-o dos serviços selecionados
      this.setState(prevState => ({
        selectedServices: prevState.selectedServices.filter(service => service.service_name !== selectedService.service_name)
      }));
      // console.log(selectedServices)
    }
  }
  handleOrderClick = (selectedServices) => {
    // Faça algo com os dados do serviço selecionado
    // console.log(selectedServices);
    // Chame a função onServiceSelect passando os dados do serviço selecionado
    this.props.onServiceSelect(selectedServices);
  }
  
  renderItem = ({ item }) => {
    const isSelected = this.state.selectedServices.some(selected => selected.service_name === item.service_name);
 
    return (
      <TouchableOpacity
        style={[styles.item, isSelected ? {backgroundColor:"#9ecdff"} : null]}
        onPress={() => this.handleServiceSelect(item)}
      >
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

  render() {
    const { searchText, serviceList } = this.state;
    return (
      <View style={styles.container}>
        <View style={styles.searchArea}>
          <TouchableOpacity
            onPress={this.props.handleClose}
          >
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
          <TouchableOpacity
            onPress={() => this.handleOrderClick(this.state.selectedServices)}
            style={styles.orderButton}
          >
            <Ionicons
              name={this.state.check}
              size={RFValue(35)}
              // color="#888"
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
    height: Platform.OS === 'android' ? StatusBar.currentHeight : RFValue(35),
    backgroundColor: '#f5f5f5',
  },
  input: {
    // flex: 1,
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
    marginTop: RFValue(7), // Updated to RfValue
  },
  itemP2: {
    fontSize: RFValue(16), // Updated to RfValue
    color: '#ababab',
  },
});