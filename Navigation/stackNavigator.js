import React, {Component} from "react";
import { createStackNavigator } from "@react-navigation/stack";
import TabNavigator from "./tabNavigator";
// import AddEmployee from "../Screens/AddEmployee";
import AddService from "../Screens/addService";
import AddClients from "../Screens/addClients";
import Historic from "../Screens/historic";

const Stack = createStackNavigator()

export default class StackNavigator extends Component{
  render(){
    return(
      <Stack.Navigator>
        <Stack.Screen name="Home" component={TabNavigator}/>
        {/* <Stack.Screen name="AddEmployee" component={AddEmployee}/> */}
        <Stack.Screen name="AddService" component={AddService}/>
        <Stack.Screen name="AddClients" component={AddClients}/>
        <Stack.Screen name="Historic" component={Historic}/>
      </Stack.Navigator>
    )
  }
}
