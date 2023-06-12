import React from 'react';
import {
  Image,
  Modal,
  View,
  Button,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { RFValue } from 'react-native-responsive-fontsize';

const windowHeight = Dimensions.get('window').height;

export default class AddButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isBottomSheetOpen: false,
    };
  }
  // Function to open the bottom sheet
  handleOpenBottomSheet = () => {
    this.setState({ isBottomSheetOpen: true });
  };

  // Function to close the bottom sheet
  handleCloseBottomSheet = () => {
    this.setState({ isBottomSheetOpen: false });
  };

  // useEffect(() => {
  //   handleOpenBottomSheet();
  // });
  render() {
    return (

        <TouchableOpacity
          onPress={() => this.handleOpenBottomSheet()}
          style={styles.button}>
          <Image source={require("../assets/botao-adicionar.png")} style={styles.icons}/>
          <Modal
            animationType="slide"
            transparent={true}
            
            visible={this.state.isBottomSheetOpen}
            
            onRequestClose={() => this.handleCloseBottomSheet()}>
            <View style={[styles.bottomSheet, { height: windowHeight * 0.5 }]}>
              <View
                style={{
                  flex: 0,
                  width: '100%',
                  justifyContent: 'space-between',
                  flexDirection: 'column',
                }}>
                <Text>Título aqui</Text>
                <TouchableOpacity onPress={() => this.handleCloseBottomSheet()}>
                  <Text>Fechar</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.navigation.replace("Home")}>
                  <Text>Home</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.handleCloseBottomSheet()}>
                  <Text>Fechar</Text>
                </TouchableOpacity>
              </View>
            </View>
          </Modal>
        </TouchableOpacity>

    );
  }
}

const styles = StyleSheet.create({
  bottomSheet: {
    position: 'absolute',
    left: 0,
    right: 0,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: 'white',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    paddingVertical: 23,
    paddingHorizontal: 25,
    bottom: 50,
    borderWidth: 1,
    borderColor: 'red',
  },
  button: {
    position: 'absolute',
    alignSelf:'center',
    bottom: 50,
    width: 50,
    height:50,
    zIndex:1,
    alignItems: 'center',
    justifyContent: 'center',
    // borderWidth: 1,
    // borderColor: '#86827e',
    paddingVertical: 12,
    borderRadius: 100,
  },
  icons: {
    alignSelf:'center',
    width: RFValue(50),
    height: RFValue(50),
    // backgroundColor:"red"
    
  }
});
