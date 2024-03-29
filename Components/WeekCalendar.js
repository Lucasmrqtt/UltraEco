import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  SafeAreaView,
  TouchableOpacity,
  Modal
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { RFValue } from 'react-native-responsive-fontsize';
import { CalendarProvider, ExpandableCalendar } from 'react-native-calendars';

export default class WeekCalendarScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visibleModal: false,
      markedDay: ""
    };
  }

  visibleModalTrue = () => {
    this.setState({ visibleModal: true });
  };

  visibleModalFalse = () => {
    this.setState({ visibleModal: false });
  };

  render() {
    return (
      <View style={styles.container}>
        <SafeAreaView style={styles.droidSafeArea} />
        <TouchableOpacity
          onPress={this.visibleModalTrue}
          style={{
            backgroundColor: "#000",
            borderRadius: RFValue(10),
            margin: RFValue(40),
            padding: RFValue(10),
            width: RFValue(200),
            alignItems: 'center'
          }}
        >
          <Text
            style={{
              color: "#FFF",
              fontSize: 22
            }}
          > Mostrar Calendário</Text>
        </TouchableOpacity>

        <Modal
          visible={this.state.visibleModal}
          transparent={true}
          onRequestClose={this.visibleModalFalse}
          animationType="fade"
        >
          <CalendarProvider>
            <ExpandableCalendar
              style={{
                marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : RFValue(35),
                borderRadius: RFValue(10),
                elevation: 4,
                margin: 10
              }}
              initialDate={this.state.markedDay}
              onDayPress={(day) => {
                this.setState({ markedDay: day })
              }}
            />
          </CalendarProvider>
        </Modal>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  droidSafeArea: {
    marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : RFValue(35),
  },
});
