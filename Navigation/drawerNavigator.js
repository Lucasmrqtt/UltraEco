import React, {Component} from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
// import AddEmployee from "../Screens/AddEmployee";
import AddService from "../Screens/addService";
import AddClients from "../Screens/addClients";

const Drawer = createDrawerNavigator()

export default class DrawerNavigator extends Component{
  render(){
    return(
      <Drawer.Navigator screenOptions={{drawerPosition:""}}>
        {/* <Drawer.Screen name="AddEmployee" component={AddEmployee}/> */}
        <Drawer.Screen name="AddService" component={AddService}/>
        <Drawer.Screen name="AddClients" component={AddClients}/>
      </Drawer.Navigator>
    )
  }
}