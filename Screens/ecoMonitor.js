import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, StatusBar, Platform, SafeAreaView } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { LineChart, Grid, XAxis, YAxis } from 'react-native-svg-charts';

export default class WaterSavingsChart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      speakerIcon: 'chevron-back-outline',
    };
  }

  render() {
    const data = [0.3, 0.8 , 0.5 , 1 ,   ];
    const xLabels = ['Lavagem Carro', 'Lavagem Van', 'Lavagem Caminhão', 'Total Geral'];
    const yLabels = ['0', '0.2', '0.4', '0.6', '0.8', '1'];

    return (
      <View style={styles.container}>
        <SafeAreaView style={styles.droidSafeArea} />
        <View style={styles.header}>
          <TouchableOpacity onPress={() => this.props.navigation.navigate('Dashboard')}>
            <Ionicons name={this.state.speakerIcon} size={RFValue(40)} />
          </TouchableOpacity>
          <View style={styles.title}>
            <Text style={styles.titleText}>EcoMonitor</Text>
          </View>
        </View>

        <Text style={styles.chartTitle}>Litros de Água economizados</Text>

        <LineChart
          style={{
            height: RFValue(300), // Ajuste o tamanho do gráfico conforme necessário
            width: '90%',
          }}
          data={data}
          svg={{ stroke: 'rgb(134, 65, 244)' }}
          contentInset={{ top: 30, bottom: 30 }} // Ajuste conforme necessário
          xAccessor={({ index }) => index}
        >
          <Grid />
        </LineChart>

        <XAxis
          style={{ marginTop: 10 }}
          data={data}
          formatLabel={(value, index) => xLabels[index]}
          contentInset={{ left: 10, right: 10 }}
        />

        <YAxis
          style={{ position: 'absolute', top: 0, bottom: 0 }}
          data={data}
          contentInset={{ top: 20, bottom: 20 }} // Ajuste conforme necessário
          formatLabel={(value, index) => yLabels[index]}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  droidSafeArea: {
    marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : RFValue(35),
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: RFValue(10),
    justifyContent: 'space-between',
    paddingHorizontal: RFValue(10),
  },
  title: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    marginLeft: RFValue(20),
  },
  titleText: {
    fontWeight: 'bold',
    fontSize: RFValue(30),
    paddingRight: RFValue(65),
    marginTop: RFValue(3),
  },
  chartTitle: {
    fontSize: RFValue(20),
    fontWeight: 'bold',
    marginBottom: RFValue(10),
  },
});
