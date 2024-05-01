import React, { Component } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import TabNavigator from "./tabNavigator";

import AddClients from "../Screens/addClients"; //Feito
import ListClient from "../Screens/listClients";
import ListService from "../Screens/listService";
import CashFlow from "../Screens/cashFlow"; //Feito
import Historic from "../Screens/historic";
import Employee from "../Screens/addEmployee";
import RegisterServices from "../Screens/registerService";
import Scheduling from "../Screens/scheduling";
import Login from "../Screens/login";
import Revenue from "../Screens/revenue";
import Expenses from "../Screens/expenses";
import Service from "../Screens/service";
import ProfileClient from "../Screens/profileClient";
import EcoMonitor from "../Screens/ecoMonitor";
import List from "../Screens/list";
import ListEmployee from "../Screens/listEmployee";
import AddTeam from "../Screens/addTeam";
// import Dashboard from "../Screens/dashboard";
const Stack = createStackNavigator()

export default class StackNavigator extends Component {
  render() {
    return (
      <Stack.Navigator initialRouteName="Home" screenOptions={{headerShown:false}}>
        <Stack.Screen name="Home" component={TabNavigator} />
        <Stack.Screen name="ProfileClient" component={ProfileClient}/>
        <Stack.Screen name="Service" component={Service}/>
        <Stack.Screen name="Employee" component={Employee}/>
        <Stack.Screen name="Scheduling" component={Scheduling} />
        <Stack.Screen name="AddClients" component={AddClients} />
        <Stack.Screen name="AddTeam" component={AddTeam} />
        {/* <Stack.Screen name="List" component={List} />x */}
        <Stack.Screen name="ListClient" component={ListClient} />
        <Stack.Screen name="ListService" component={ListService} />
        <Stack.Screen name="ListEmployee" component={ListEmployee} />
        <Stack.Screen name="Expenses" component={Expenses} />
        <Stack.Screen name="Revenue" component={Revenue} />
        <Stack.Screen name="RegisterServices" component={RegisterServices} />
        <Stack.Screen name="Historic" component={Historic} />
        {/* <Stack.Screen name="Dashboard" component={Dashboard} /> */}
        <Stack.Screen name="CashFlow" component={CashFlow} />
        <Stack.Screen name="EcoMonitor" component={EcoMonitor} />
        <Stack.Screen name="Login" component={Login} />
      </Stack.Navigator>
    )
  }
}