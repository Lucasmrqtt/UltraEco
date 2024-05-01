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
import { collection, getDocs, query, updateDoc, where, doc, } from "firebase/firestore";
import { SwipeListView } from 'react-native-swipe-list-view';

export default class ListClient extends Component {
  constructor(props) {
    super(props);
    this.state = {
      trash: "trash-outline",
      photo: "person-circle-outline",
      back: "arrow-back",
      searchText: "",
      clientList: [],
      originalClientList: [],
    };
  }

  componentDidMount() {
    this.getClients();
  }

  async getClients() {
    const clientSnapshot = await getDocs(query(collection(db, "clients"), where("client_delet", "==", false)));
    const clientsData = clientSnapshot.docs.map(doc => doc.data())
    clientsData.sort((a, b) => a.client_name.localeCompare(b.client_name, 'pt', { sensitivity: 'base' }));
    this.setState({ clientList: clientsData, originalClientList: clientsData });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.searchText !== this.state.searchText) {
      this.handleFilterList();
    }
  }

  handleUnableClient = async (item) => {
    Alert.alert(
      'Excluir Cliente',
      `Você deseja excluir \n${item.client_name}?`,
      [
        { text: 'Cancelar', style: 'cancel' },
        {
          text: 'Excluir',
          onPress: () => {
            Alert.alert(
              'Confirmar',
              'Esta ação é irreversível. \nTem certeza?',
              [
                { text: 'Cancelar', style: 'cancel' },
                {
                  text: 'Confirmar',
                  onPress: async () => {
                    // await updateDoc(doc(db, "clients"), {
                    //   client_delet: true
                    // });                    
                    // item.client_delet = true
                    console.log(item.id)
                    this.getClients();
                  }
                }
              ]
            );
          }
        }
      ]
    );
  };

  renderHiddenItem = ({ item }) => {
    return (
      <View style={styles.hiddenItem}>
        <TouchableOpacity onPress={() => this.handleUnableClient(item)}
          style={{
            // backgroundColor: "purple",
            flex: 1,
            width:RFValue(80),
            alignItems: 'center',
            justifyContent:'center'
          }}>
          <Text style={{ fontSize: RFValue(15) }}>Excluir</Text>
        </TouchableOpacity>
      </View>
    );
  }

  renderItem = ({ item }) => {
    return (
      <TouchableOpacity
        style={styles.item}
        onPress={() => this.props.navigation.navigate("ProfileClient", { item: item })}
        activeOpacity={1}
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

  handleFilterList() {
    const { searchText, originalClientList } = this.state;
    if (searchText === '') {
      this.setState({ clientList: originalClientList });
    } else {
      const filteredList = originalClientList.filter(
        item => item.client_name && item.client_name.toLowerCase().indexOf(searchText.toLowerCase()) > -1
      );
      this.setState({ clientList: filteredList });
    }
  }

  render() {
    const { searchText, clientList } = this.state;
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
            />
          </TouchableOpacity>
          <TextInput
            style={styles.input}
            placeholder="Pesquise um cliente"
            placeholderTextColor="#888"
            value={searchText}
            onChangeText={(t) => this.setState({ searchText: t })}
            returnKeyType="done" // Mudei aqui para "done"
              onSubmitEditing={() => Keyboard.dismiss()}
          />
          <TouchableOpacity
            // onPress={() => this.props.navigation.navigate("unableClients")}
            style={styles.orderButton}
          >
            <Ionicons
              name={this.state.trash}
              size={RFValue(28)}
              color="#000"
            />
          </TouchableOpacity>
        </View>
        <SwipeListView
          data={clientList}
          renderItem={this.renderItem}
          keyExtractor={(item, index) => index.toString()}
          disableRightSwipe={true}
          rightOpenValue={-100}
          renderHiddenItem={this.renderHiddenItem}
          style={styles.list}
        />
      </View>
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
    margin: RFValue(30),
    marginStart: RFValue(10),
    marginEnd: RFValue(10),
    borderWidth: RFValue(2),
    borderRadius: RFValue(5),
    fontSize: RFValue(19),
    paddingLeft: RFValue(15),
    paddingRight: RFValue(15),
    color: '#000',
  },
  searchArea: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  orderButton: {
    // width: RFValue(32),
    // backgroundColor:"pink",
    marginLeft: RFValue(10),
    marginRight: RFValue(20),
    alignItems: 'center',
    justifyContent: 'center'
  },
  list: {
    flex: 1,
  },
  item: {
    flexDirection: 'row',
    width: "100%",
    borderBottomWidth: RFValue(1),
    borderBottomColor: '#000',
    paddingTop: RFValue(15),
    paddingBottom: RFValue(15),
    backgroundColor: 'white',
  },
  itemPhoto: {
    borderRadius: RFValue(30),
    paddingStart: "5%"
  },
  itemInfo: {
    marginLeft: RFValue(20),
  },
  itemP1: {
    fontSize: RFValue(19),
    color: '#000',
    marginBottom: RFValue(5),
  },
  itemP2: {
    fontSize: RFValue(16),
    color: '#ababab',
  },
  hiddenItem: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: "100%",
    paddingLeft: Platform.OS === 'android' ? RFValue(330) : RFValue(260),
    alignSelf: 'flex-end',
    backgroundColor: '#f00',
  },
});
