import React, {Component} from "react";
import { createStackNavigator } from "@react-navigation/stack";
import AddEmployee from "../Screens/AddEmployee";
import AddService from "../Screens/addService";
import AddClients from "../Screens/addClients";

const Stack = createStackNavigator()

export default class StackNavigator extends Component{
  render(){
    return(
      <Stack.Navigator>
        <Stack.Screen name="AddEmployee" component={AddEmployee}/>
        <Stack.Screen name="AddService" component={AddService}/>
        <Stack.Screen name="AddClients" component={AddClients}/>
      </Stack.Navigator>
    )
  }
}
