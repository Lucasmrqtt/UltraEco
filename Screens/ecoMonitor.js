import React, { Component } from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  TouchableOpacity, 
  tatusBar, 
  Platform, 
  SafeAreaView 
} from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { LineChart, Grid, XAxis, YAxis } from 'react-native-svg-charts';
import { Circle, G, Line } from 'react-native-svg';

export default class WaterSavingsChart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      speakerIcon: "arrow-back",

    };
  }

  render() {
    const data = [0, 0.4, 0.8, 1.2];
    const xLabels = ['Lavagem Carro', 'Lavagem Van', 'Lavagem Caminhão', 'Total Geral'];
    const yLabels = ['0', '0.2', '0.4', '0.6', '0.8', '1', '1.2'];
    const Decorator = ({ x, y, data }) => {
      return data.map((value, index) => (
        <G key={index}>
          <Line
            x1={x(index)}
            y1={y(0)}
            x2={x(index)}
            y2={y(value)}
            stroke={'rgb(134, 65, 244)'}
          />
          <Circle
            cx={x(index)}
            cy={y(value)}
            r={4} // Raio da bolinha
            fill={'rgb(134, 65, 244)'}
            stroke={'rgb(134, 65, 244)'}
          />
        </G>
      ));
    };

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
        <View style={{ height: 250, flexDirection: 'row' ,}}>
          <YAxis
            data={yLabels}
            contentInset={{ top: 10, bottom: 10 }}
            style={{ height: 250 }}
            svg={{
              // fill: 'grey',
              fontSize: 10,
              fontWeight: 'bold'
            }}
            numberOfTicks={7}
            formatLabel={(value) => `${value}L`}
          />
          <LineChart
            style={{ marginLeft: 20, height: 250, flex: 0.9 }}
            data={data}
            svg={{ stroke: 'rgb(134, 65, 244)' }}
            contentInset={{ top: 10, bottom: 10 }}
            numberOfTicks={7}
          >
            <Grid />
            <Decorator />
          </LineChart>
        </View>
        <View style={{ height: 200, padding: 20 }}>
          <XAxis
            data={xLabels}
            contentInset={{ left: 10, right: 10 }}
            svg={{
              fontSize: 12,
              fontWeight: 'bold',
            }}
            numberOfTicks={xLabels.length}
            style={{ width: 500, marginLeft: 16 }}
            formatLabel={(value, index) => xLabels[index]}
          />
        </View>

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
