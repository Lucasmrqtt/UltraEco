import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import StackNavigator from './Navigation/stackNavigator';
import TabNavigator from './Navigation/tabNavigator';
import Scheduling from './Screens/scheduling';
import AddEmployee from './Screens/addEmployee';
import RegisterServices from './Screens/registerService';
import AddClients from './Screens/addClients';
import Historic from './Screens/historic';
import CashFlow from './Screens/cashFlow';
import EcoMonitor from './Screens/ecoMonitor';
import { createStackNavigator } from '@react-navigation/stack';

// import firebase from 'firebase';
// import { firebaseConfig } from './Config';


// if (!firebase.apps.length) {
//   firebase.initializeApp(firebaseConfig)
// } else {
//   firebase.app()
// }

const Stack = createStackNavigator()
const StackNav = () => {
  return (
    <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false, gestureEnabled: false }}>
        <Stack.Screen name="Home" component={TabNavigator}/>
        {/* <Stack.Screen name="AddButton" component={AddButton}/> */}
        <Stack.Screen name="Scheduling" component={Scheduling}/>
        {/* <Stack.Screen name="AddEmployee" component={AddEmployee}/> */}
        <Stack.Screen name="RegisterService" component={RegisterServices}/>
        <Stack.Screen name="AddClients" component={AddClients}/>
        <Stack.Screen name="Historic" component={Historic}/>
        <Stack.Screen name="CashFlow" component={CashFlow}/>
        <Stack.Screen name="EcoMonitor" component={EcoMonitor}/>
    </Stack.Navigator>
  )
}

export default function App() {
  return (
    <NavigationContainer>
      <StackNavigator/>
    </NavigationContainer>   
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});