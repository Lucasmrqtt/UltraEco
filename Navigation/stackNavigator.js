import React, { Component } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import TabNavigator from "./tabNavigator";

import AddClients1 from "../Screens/addClients1"; //Feito
import AddClients2 from "../Screens/addClients2";
import AddEmployee from "../Screens/addEmployee"; //Feito
import CashFlow from "../Screens/cashFlow"; //Feito
import Historic from "../Screens/historic";
import RegisterServices from "../Screens/registerService";
import Scheduling from "../Screens/scheduling";
import Login from "../Screens/login";
import Revenue from "../Screens/revenue";
import Expenses from "../Screens/expenses";

const Stack = createStackNavigator()

export default class StackNavigator extends Component {
  render() {
    return (
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={TabNavigator} />
        {/* <Stack.Screen name="AddButton" component={AddButton}/> */}
        <Stack.Screen name="Scheduling" component={Scheduling} />
        <Stack.Screen name="AddClients1" component={AddClients1} />
        <Stack.Screen name="AddClients2" component={AddClients2} />
        <Stack.Screen name="Expenses" component={Expenses} />
        <Stack.Screen name="Revenue" component={Revenue} />
        <Stack.Screen name="AddEmployee" component={AddEmployee} />
        <Stack.Screen name="RegisterService" component={RegisterServices} />
        <Stack.Screen name="Historic" component={Historic} />
        <Stack.Screen name="CashFlow" component={CashFlow} />
        <Stack.Screen name="Login" component={Login} />
      </Stack.Navigator>
    )
  }
}
