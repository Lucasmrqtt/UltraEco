import React, { Component } from 'react';
import {
  Image,
  Modal,
  View,
  Button,
  Text,
  StyleSheet,
  StatusBar,
  Dimensions,
  TouchableOpacity,
  Platform,
} from 'react-native';
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { RFValue } from "react-native-responsive-fontsize";
import Ionicons from "react-native-vector-icons/Ionicons";
import Schedule from "../Screens/schedule";
import Dashboard from "../Screens/dashboard";
import ActionModal from "../Components/ActionModal";
import ButtonStyle from "../Components/ButtonStyle";
import Clients from "../Screens/clients";
import Settings from "../Screens/settings";

import Welcome from "../Screens/welcome";
import Login from "../Screens/login";
import AddClients from "../Screens/addClients"; //Feito
import Employee from '../Screens/addEmployee';
import CashFlow from "../Screens/cashFlow"; //Feito
import Historic from "../Screens/historic";
import RegisterServices from "../Screens/registerService";
import Scheduling from "../Screens/scheduling";
import DrawerNavigator from "./drawerNavigator";
import Revenue from "../Screens/revenue";
import Expenses from "../Screens/expenses";
import ProfileClient from '../Screens/profileClient';
import Service from "../Screens/service";


const Tab = createMaterialBottomTabNavigator()
const windowHeight = Dimensions.get('window').height;

export default class TabNavigator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visibleModal: false,
    };
  }
  visibleModalTrue = () => {
    this.setState({ visibleModal: true });
  };

  visibleModalFalse = () => {
    this.setState({ visibleModal: false });
  };

  isTabBarVisible = (route) => {
    const routeName = route.state
      ? route.state.routes[route.state.index]?.name
      : route.params
        ? route.params.screens
        : 'HOME';

    return ![
      // Telas que ao precionar, irá sair o TabNavigator. EX: "AddClients "
      "AddClients",
      "Employee"
    ].includes(routeName)
  }

  render() {
    if (this.state.visibleModal) {
      return (
        <Modal
          visible={this.state.visibleModal}
          transparent={true}
          onRequestClose={this.visibleModalFalse}
          // animationType="slide"
          onPress={this.visibleModalTrue}
          animationType="slide"
        >
          <ActionModal
            navigation={this.props.navigation}
            handleClose={this.visibleModalFalse}
          />
        </Modal>
      );
    }
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
              let iconSize = RFValue(24);
              let iconColor = color;

              if (route.name === "Clientes") {
                iconName = focused ? "people" : "people-outline";
              } else if (route.name === "Agenda") {
                iconName = focused ? "calendar" : "calendar-outline";
              } else if (route.name === "Dashboard") {
                iconName = focused ? "bar-chart" : "bar-chart-outline";
              } else if (route.name === "Config.") {
                iconName = focused ? "settings" : "settings-outline";
              } else if (route.name === "Modal") {
                iconName = focused ? "add" : "add-outline";
              }

              // You can return any component that you like here!
              return (
                <Ionicons name={iconName} size={iconSize} color={iconColor} />
              );
            },
          })}

          // initialRouteName="Agenda"
          initialRouteName="PerfilClient"
          activeColor={"black"}
          inactiveColor={"gray"}
        >
          {/* <Tab.Screen name="Welcome" component={Welcome} />
          <Tab.Screen name="Login" component={Login} /> */}
          <Tab.Screen name="Agenda" component={Schedule} /> 
          {/* {/* <Tab.Screen name="Scheduling" component={Scheduling}/> */}
          {/* <Tab.Screen name="Perfil" component={ProfileClient} /> */}
          {/* <Tab.Screen name="Despesa" component=} /> */}
          {/* <Tab.Screen name="1" component={AddClients} /> */}
          <Tab.Screen name="Dashboard" component={Dashboard} />
          <Tab.Screen
            name="Modal"
            component={this.visibleModalTrue}
            options={{
              tabBarLabel: "",
              tabBarIcon: () => <ButtonStyle />,
            }}
          />
          <Tab.Screen name="Clientes" component={Clients} />
          <Tab.Screen name="Config." component={Settings} />
        </Tab.Navigator >

      </View>
    )
  }


}

const styles = StyleSheet.create({
  bottomTabStyle: {
    backgroundColor: "rgba(125, 255, 140,0.5)",
    borderTopColor: "transparent",
    height: "10%",
    // overflow: "hidden",
    // position: "absolute",
  },

  droidSafeArea: {
    marginTop:
      Platform.OS === 'android' ? StatusBar.currentHeight : RFValue(35),
  },

  modal: {
    width: '100%',
    backgroundColor: "#dbdbdb",
    justifyContent: 'center'
  },
  closeButton: {
    justifyContent: 'center',
    alignSelf: 'center',
    backgroundColor: "gray",
    width: RFValue(60)
  },
  closeButton: {
    justifyContent: 'center',
    alignSelf: 'center',
    backgroundColor: "gray",
    width: RFValue(60)
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
})