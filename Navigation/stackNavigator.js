import React, {Component} from "react";
import { createStackNavigator } from "@react-navigation/stack";
import TabNavigator from "./tabNavigator";
import AddButton from "../Components/addButton";
import Scheduling from "../Screens/scheduling";
// import AddEmployee from "../Screens/AddEmployee";
import RegisterServices from "../Screens/registerService";
import AddClients1 from "../Screens/addClients1";
import CashFlow from "../Screens/cashFlow";
import Historic from "../Screens/historic";

const Stack = createStackNavigator()

export default class StackNavigator extends Component{
  render(){
    return(
      <Stack.Navigator>
        <Stack.Screen name="Home" component={TabNavigator}/>
        <Stack.Screen name="AddButton" component={AddButton}/>
        <Stack.Screen name="Scheduling" component={Scheduling} />
        {/* <Stack.Screen name="AddEmployee" component={AddEmployee}/> */}
        <Stack.Screen name="RegisterService" component={RegisterServices}/>
        <Stack.Screen name="AddClients" component={AddClients1}/>
        <Stack.Screen name="Historic" component={Historic}/>
        <Stack.Screen name="CashFlow" component={CashFlow}/>
      </Stack.Navigator>
    )
  }
}
