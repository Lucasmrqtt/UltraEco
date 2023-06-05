import React, { Component } from "react";
import { Text, View, StyleSheet } from "react-native"; 4
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { RFValue } from "react-native-responsive-fontsize";
import Ionicons from 'react-native-vector-icons/Ionicons'
import Clients from "../Screens/clients";
import Historic from "../Screens/historic";
import Schedule from "../Screens/schedule";
import Dashboard from "../Screens/dashboard";
import Settings from "../Screens/settings";


const Tab = createMaterialBottomTabNavigator()


export default class TabNavigator extends Component {
  render() {
    return (
      <Tab.Navigator
        labeled={true}
        barStyle={styles.bottomTabStyle}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            let iconSize = RFValue(20);

            if (route.name === 'Clients') {
              iconName = focused
                ? 'people'
                : 'people-outline';
            } else if (route.name === 'Historic') {
              iconName = focused ? 'refresh-circle' : 'refresh-circle-outline';
            } else if (route.name === 'Schedule') {
              iconName = focused ? 'calendar' : 'calendar-outline';
              iconSize = RFValue(25)
            } else if (route.name === 'Dashboard') {
              iconName = focused ? 'bar-chart' : 'bar-chart-outline';
            } else if (route.name === 'Settings') {
              iconName = focused ? 'settings' : 'settings-outline';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={iconSize} color={color} style={styles.icons} />;
          },       
        })}
        activeColor={"black"}
        inactiveColor={"gray"}

      >
        <Tab.Screen name="Clients" component={Clients} />
        <Tab.Screen name="Historic" component={Historic} />
        <Tab.Screen name="Schedule" component={Schedule} />
        <Tab.Screen name="Dashboard" component={Dashboard} />
        <Tab.Screen name="Settings" component={Settings} />
      </Tab.Navigator>
    )
  }
}

const styles = StyleSheet.create({
  bottomTabStyle: {
    backgroundColor: "#7dff8c",
    height: "10%",
    borderTopLeftRadius: RFValue(30),
    borderTopRightRadius: RFValue(30),
    overflow: "hidden",
    position: "absolute",
  },
  icons: {
    width: RFValue(30),
    height: RFValue(30)
  }
});
