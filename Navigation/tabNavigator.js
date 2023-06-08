import React, { Component } from "react";
import { StyleSheet } from "react-native"; 4
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { RFValue } from "react-native-responsive-fontsize";
import Ionicons from 'react-native-vector-icons/Ionicons'
import Clients from "../Screens/clients";
import Schedule from "../Screens/schedule";
import Dashboard from "../Screens/dashboard";
import Settings from "../Screens/settings";
import Records from "../Screens/records";
import DrawerNavigator from "./drawerNavigator";

const Tab = createMaterialBottomTabNavigator()


export default class TabNavigator extends Component {
  render() {
    return (
      <Tab.Navigator
        labeled={true}
        barStyle={styles.bottomTabStyle}
        tabBarStyle={{ backgroundColor: 'transparent' }}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            let iconSize = RFValue(20);
            let iconColor = color
            

            if (route.name === 'Clients') {
              iconName = focused
                ? 'people'
                : 'people-outline';
            } else if (route.name === 'Records') {
              iconName = 'add-circle'
              iconSize = RFValue(25)
              iconColor = "#0047FF"
            } else if (route.name === 'Schedule') {
              iconName = focused ? 'calendar' : 'calendar-outline';
            } else if (route.name === 'Dashboard') {
              iconName = focused ? 'bar-chart' : 'bar-chart-outline';
            } else if (route.name === 'Settings') {
              iconName = focused ? 'settings' : 'settings-outline';
            } else if (route.name === 'Search') {
              iconName = focused ? 'search' : 'search-outline';
            } else if (route.name === 'ScheduleChange') {
              iconName = focused ? 'options' : 'options-outline';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={iconSize} color={iconColor} style={styles.icons} />;
          },
        })}
        activeColor={"black"}
        inactiveColor={"gray"}

      >
        <Tab.Screen name="Schedule" component={Schedule} />
        <Tab.Screen name="Dashboard" component={Dashboard} />
        <Tab.Screen name="Records" component={Records} />
        <Tab.Screen name="Clients" component={Clients} />
        <Tab.Screen name="Settings" component={Settings} />
      </Tab.Navigator >
    )
  }
}

const styles = StyleSheet.create({
  bottomTabStyle: {
    backgroundColor: "#7dff8c",
    height: "10%",
    borderTopLeftRadius: RFValue(50),
    borderTopRightRadius: RFValue(30),
    overflow: "hidden",
    position: "absolute",
  },
  icons: {
    width: RFValue(30),
    height: RFValue(30),
    backgroundColor:"#7dff8c",
    
  }
});
