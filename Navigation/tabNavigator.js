import React, { Component } from 'react';
import {
  Image,
  Modal,
  View,
  Button,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Platform,
} from 'react-native';
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { RFValue } from "react-native-responsive-fontsize";
import Ionicons from 'react-native-vector-icons/Ionicons'
import Schedule from '../Screens/schedule';
import Dashboard from '../Screens/dashboard';
import Clients from "../Screens/clients";
import Settings from "../Screens/settings";

import Welcome from '../Screens/welcome';
import AddButton from "../Components/addButton"; //Feito
import AddClients1 from "../Screens/addClients1"; //Feito
import AddClients2 from "../Screens/addClients2"; //Feito
import AddEmployee from "../Screens/addEmployee"; //Feito
import CashFlow from "../Screens/cashFlow"; //Feito
import Historic from "../Screens/historic";
import RegisterServices from "../Screens/registerService";
import ScheduleChange from "../Screens/ScheduleChange";
import Scheduling from "../Screens/scheduling";

import DrawerNavigator from "./drawerNavigator";
import CashFlow from "../Screens/cashFlow";
import AddClients1 from "../Screens/addClients1";
import AddClients2 from "../Screens/addClients2";
import AddEmployee from "../Screens/addEmployee";
import AddButton from "../Components/addButton";


import Login from "../Screens/login";



const Tab = createMaterialBottomTabNavigator()
const windowHeight = Dimensions.get('window').height;

export default class TabNavigator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isBottomSheetOpen: false,
    };
  }
  handleOpenBottomSheet = () => {
    this.setState({ isBottomSheetOpen: true });
  };

  // Function to close the bottom sheet
  handleCloseBottomSheet = () => {
    this.setState({ isBottomSheetOpen: false });
  };

  isTabBarVisible = (route) => {
    const routeName = route.state
      ? route.state.routes[route.state.index]?.name
      : (route.params ? route.params.screens : 'HOME');

    return ![
      // Telas que ao precionar, irá sair o TabNavigator. EX: "AddClients "
      "AddClients1",
      "AddClients2",
      "AddEmployee"].includes(routeName)
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <Tab.Navigator
          // labeled={true}
          barStyle={styles.bottomTabStyle}
          // tabBarStyle={{ backgroundColor: 'transparent' }}
          screenOptions={({ route }) => ({
            tabBarVisible: this.isTabBarVisible(route),
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;
              let iconSize = RFValue(20);
              let iconColor = color

              if (route.name === 'Clientes') {
                iconName = focused
                  ? 'people'
                  : 'people-outline';
              } else if (route.name === 'Agenda') {
                iconName = focused ? 'calendar' : 'calendar-outline';
              } else if (route.name === 'Dashboard') {
                iconName = focused ? 'bar-chart' : 'bar-chart-outline';
              } else if (route.name === 'Config.') {
                iconName = focused ? 'settings' : 'settings-outline';
              }

              // You can return any component that you like here!
              return <Ionicons name={iconName} size={iconSize} color={iconColor} style={styles.icons} />;
            },
          })}

          initialRouteName="Agenda"

          initialRouteName="Schedule"

          // initialRouteName="Tela2"
          activeColor={"black"}
          inactiveColor={"gray"}
        >
          <Tab.Screen name="Agenda" component={Schedule} />
          {/* <Tab.Screen name="Tela1" component={AddEmployee} /> */}
          {/* <Tab.Screen name="Tela2" component={AddClients1} /> */}
          {/* <Tab.Screen name="Welcome" component={Welcome}/> */}
          <Tab.Screen name="Dashboard" component={Dashboard} />

          {/* <Tab.Screen name="Modal" component={this.handleOpenBottomSheet} /> */}

          <Tab.Screen name="Modal" component={this.handleOpenBottomSheet} />

          {/* <Tab.Screen name="Login" component={Login} /> */}
          <Tab.Screen name="Clientes" component={Clients} />
          <Tab.Screen name="Config." component={Settings} />
        </Tab.Navigator >


         {/* <TouchableOpacity
          onPress={this.handleOpenBottomSheet}
          style={styles.button}
        >
           <Image
            source={require("../assets/botao-adicionar.png")}
            style={styles.icon}
          /> 
        </TouchableOpacity>  */}

        {/* if (Platform.OS === 'android') {
          *Modal do android*
        } else {
          <Modal
            animationType="slide"
            transparent={true}
            onPress={() => this.state.isBottomSheetOpen(true)}
            visible={this.state.isBottomSheetOpen}
            onRequestClose={() => this.handleCloseBottomSheet()}>
            <View style={[styles.bottomSheet, { height: windowHeight * 0.6 }]}>
              <View style={styles.modal}>
                <TouchableOpacity style={styles.closeButton} onPress={() => this.handleCloseBottomSheet()}>
                  <Image source={require("../assets/botao-adicionar.png")} style={styles.close} />
                </TouchableOpacity>
                <View style={styles.adds}>
                  <TouchableOpacity style={styles.add} onPress={() => { this.handleCloseBottomSheet(), this.props.navigation.navigate("Scheduling") }}>
                    <Image source={require("../assets/add.png")} style={styles.iconsModal} />
                    <Text style={styles.text}>Agendar Serviço</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.add} onPress={() => { this.handleCloseBottomSheet(), this.props.navigation.navigate("RegisterServices") }}>
                    <Image source={require("../assets/customer-support.png")} style={{
                      width: RFValue(35),
                      height: RFValue(35),
                      marginRight: 35,
                    }} />
                    <Text style={styles.text}>Cadastrar Serviço</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.add} onPress={() => { this.handleCloseBottomSheet(), this.props.navigation.navigate("AddEmployee") }}>
                    <Image source={require("../assets/employee.png")} style={styles.iconsModal} />
                    <Text style={styles.text}>Cadastrar Funcionário</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.add} onPress={() => { this.handleCloseBottomSheet(), this.props.navigation.navigate("AddClients1") }}>
                    <Image source={require("../assets/client.png")} style={styles.iconsModal} />
                    <Text style={styles.text}>Cadastrar Cliente</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </Modal>
        } */}

        <TouchableOpacity
          onPress={this.handleOpenBottomSheet}
          style={styles.button}
        >
          {/* <Image
            source={require("../assets/botao-adicionar.png")}
            style={styles.icon}
          /> */}
        </TouchableOpacity>

        <Modal
          animationType="slide"
          transparent={true}
          onPress={() => this.state.isBottomSheetOpen(true)}
          visible={this.state.isBottomSheetOpen}
          onRequestClose={() => this.handleCloseBottomSheet()}>
          <View style={[styles.bottomSheet, { height: windowHeight * 0.6 }]}>
            <View style={styles.modal}>
              <TouchableOpacity style={styles.closeButton} onPress={() => this.handleCloseBottomSheet()}>
                <Image source={require("../assets/botao-adicionar.png")} style={styles.close} />
              </TouchableOpacity>
              <View style={styles.adds}>
                <TouchableOpacity style={styles.add} onPress={() => { this.handleCloseBottomSheet(), this.props.navigation.navigate("Scheduling") }}>
                  <Image source={require("../assets/add.png")} style={styles.icons} />
                  <Text style={styles.text}>Agendar Serviço</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.add} onPress={() => { this.handleCloseBottomSheet(), this.props.navigation.navigate("RegisterServices") }}>
                  <Image source={require("../assets/customer-support.png")} style={{
                    width: RFValue(35),
                    height: RFValue(35),
                    marginRight: 35,
                  }} />
                  <Text style={styles.text}>Cadastrar Serviço</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.add} onPress={() => { this.handleCloseBottomSheet(), this.props.navigation.navigate("AddEmployee") }}>
                  <Image source={require("../assets/employee.png")} style={styles.icons} />
                  <Text style={styles.text}>Cadastrar Funcionário</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.add} onPress={() => { this.handleCloseBottomSheet(), this.props.navigation.navigate("AddClients1") }}>
                  <Image source={require("../assets/client.png")} style={styles.icons} />
                  <Text style={styles.text}>Cadastrar Cliente</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>
      </View>
    )
  }


}

const styles = StyleSheet.create({
  bottomTabStyle: {
    backgroundColor: "rgba(125, 255, 140,0.5)",
    borderTopColor: "transparent",
    height: "10%",
    // borderWidth: 1.5,
    // backgroundColor: "white",
    // borderTopLeftRadius: RFValue(50),
    // borderTopRightRadius: RFValue(30),
    overflow: "hidden",
    position: "absolute",
  },
  icons: {
    // backgroundColor:"red",
    width: RFValue(30),
    height: RFValue(30),
    // backgroundColor:"white",
  },
  button: {
    position: 'absolute',

    backgroundColor: "red",

    backgroundColor:"red",

    alignSelf: 'center',
    bottom: 50,
    width: 50,
    height: 50,
    zIndex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    // borderWidth: 1,
    // borderColor: '#86827e',
    paddingVertical: 12,
    borderRadius: 100,
    // backgroundColor:"red"
  },
  bottomSheet: {
    position: 'absolute',
    width: "100%",
    backgroundColor: 'white',
    borderWidth: 1.5,
    bottom: 0,
    // backgroundColor:"blue",
  },
  modal: {
    width: '100%',
    // backgroundColor: "pink",
    justifyContent: 'center'
  },

  closeButton: {
    justifyContent: 'center',
    alignSelf: 'center',
    backgroundColor: "gray",
    width: RFValue(60)

  closeButton96: {
    justifyContent: 'center',
    alignSelf: 'center',
    backgroundColor:"gray",
    width:RFValue(60)
  },
  close: {
    width: RFValue(60),
    height: RFValue(60),
    // backgroundColor: "red"
    transform: [{ rotate: '45deg' }],
  },
  adds: {
    flexDirection: 'collum',
    // borderColor: "blue",
    height: windowHeight * 0.7
  },
  iconsModal: {
  icons: {
    width: RFValue(40),
    height: RFValue(40),
    marginRight: 30
  },
  text: {
    // fontWeight: 'bold',
    fontSize: 25,
  },
  add: {
    marginTop: RFValue(50),
    marginLeft: 10,
    flexDirection: 'row',
    alignItems: 'center'
  },
});
