import React, { Component } from "react";
import { Text, Image, View, StyleSheet, FlatList, TextInput, TouchableOpacity } from "react-native";
import { ListItem, Avatar, Icon } from "react-native-elements";
import { RFValue } from "react-native-responsive-fontsize";



export default class Search extends Component {
  constructor(){
    super()
    this.state = {
      allClients: [],
      lastVisibleTransaction: null,
      searchText: ""
    }
  };

  // componentDidMount = async() => {
  //   await this.getTransactions()
  // };

  // getTransactions = () => {
  //   db.collection("transactions")
  //     .limit(10)
  //     .get()
  //     .then(snapshot => {
  //       snapshot.docs.map(doc => {
  //         this.setState({
  //           allTransactions: [...this.state.allTransactions, doc.data()],
  //           lastVisibleTransaction: doc
  //         });
  //       });
  //     });
  // };

  // handleSearch = async text => {
  //   var enteredText = text.toUpperCase().split("");
  //   text = text.toLowerCase();
  //   this.setState({
  //     allTransactions: []
  //   });
  //   if (!text) {
  //     this.getTransactions();
  //   }

  //   if (enteredText[0] === "B") {
  //     db.collection("transactions")
  //       .where("book_id", "==", text)
  //       .get()
  //       .then(snapshot => {
  //         snapshot.docs.map(doc => {
  //           this.setState({
  //             allTransactions: [...this.state.allTransactions, doc.data()],
  //             lastVisibleTransaction: doc
  //           });
  //         });
  //       });
  //   } else if (enteredText[0] === "S") {
  //     db.collection("transactions")
  //       .where("student_id", "==", text)
  //       .get()
  //       .then(snapshot => {
  //         snapshot.docs.map(doc => {
  //           this.setState({
  //             allTransactions: [...this.state.allTransactions, doc.data()],
  //             lastVisibleTransaction: doc
  //           });
  //         });
  //       });
  //   }
  // };

  // fetchMoreTransactions = async text => {
  //   var enteredText = text.toUpperCase().split("");
  //   text = text.toLowerCase();

  //   const { lastVisibleTransaction, allTransactions } = this.state;
  //   if (enteredText[0] === "B") {
  //     const query = await db
  //       .collection("transactions")
  //       .where("bookId", "==", text)
  //       .startAfter(lastVisibleTransaction)
  //       .limit(10)
  //       .get();
  //     query.docs.map(doc => {
  //       this.setState({
  //         allTransactions: [...this.state.allTransactions, doc.data()],
  //         lastVisibleTransaction: doc
  //       });
  //     });
  //   } else if (enteredText[0] === "S") {
  //     const query = await db
  //       .collection("transactions")
  //       .where("bookId", "==", text)
  //       .startAfter(this.state.lastVisibleTransaction)
  //       .limit(10)
  //       .get();
  //     query.docs.map(doc => {
  //       this.setState({
  //         allTransactions: [...this.state.allTransactions, doc.data()],
  //         lastVisibleTransaction: doc
  //       });
  //     });
  //   }
  // };

  // renderItem = ({ item, i }) => {
  //   console.log(item.date.toDate().toString().split(" ").splice(0, 4).join(" "))
  //   var item = item
  //   let date = item.date.toDate().toString().split(" ").splice(0, 4).join(" ")

  //   var transactionType =
  //     item.transaction_type === "issue" ? "issued" : "returned";
  //   return (
  //     <View style={{ borderWidth: 1 }}>
  //       <ListItem key={i} bottomDivider>
  //         <Icon type={"antdesign"} name={"book"} size={40} />
  //         <ListItem.Content>
  //           <ListItem.Title style={styles.title}>
  //             {`${item.book_name} ( ${item.book_id} )`}
  //           </ListItem.Title>
  //           <ListItem.Subtitle style={styles.subtitle}>
  //             {`This book ${transactionType} by ${item.student_name}`}
  //           </ListItem.Subtitle>
  //           <View style={styles.lowerLeftContaiiner}>
  //             <View style={styles.transactionContainer}>
  //               <Text
  //                 style={[
  //                   styles.transactionText,
  //                   {
  //                     color:
  //                       item.transaction_type === "issue"
  //                         ? "#78D304"
  //                         : "#0364F4"
  //                   }
  //                 ]}
  //               >
  //                 {item.transaction_type.charAt(0).toUpperCase() +
  //                   item.transaction_type.slice(1)}
  //               </Text>
  //               <Icon
  //                 type={"ionicon"}
  //                 name={
  //                   item.transaction_type === "issue"
  //                     ? "checkmark-circle-outline"
  //                     : "arrow-redo-circle-outline"
  //                 }
  //                 color={
  //                   item.transaction_type === "issue" ? "#78D304" : "#0364F4"
  //                 }
  //               />
  //             </View>
  //             {/* <Text style={styles.date}>{date}</Text> */}
  //           </View>
  //         </ListItem.Content>
  //       </ListItem>
  //     </View>
  //   );
  // };
  
  render() {
    const { searchText, allTransactions } = this.state;
    return (
      <View style={styles.container}>
        <View style={styles.upperContainer}>
          <Text style={{
            fontSize:RFValue(25),
            fontWeight:"bold",
            marginBottom:RFValue(5)
          }}>Clients</Text>
          <View style={styles.textinputContainer}>
            <TextInput
              style={styles.textinput}
              onChangeText={text => this.setState({ searchText: text })}
              placeholder={"Escreva aqui"}
              placeholderTextColor={"#000"}
            />
            <TouchableOpacity
              style={styles.scanbutton}
              // onPress={() => this.handleSearch(searchText)}
            >
              <Text style={styles.scanbuttonText}>Pesquisa</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.lowerContainer}>
          <FlatList
            data={allTransactions}
            renderItem={this.renderItem}
            // keyExtractor={(item, index) => index.toString()}
            // onEndReached={() => this.fetchMoreTransactions(searchText)}
            // onEndReachedThreshold={0.7}
          />
        </View>
      </View>
    );
  };

};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF"
  },
  upperContainer: {
    flex: 0.2,
    justifyContent: "center",
    alignItems: "center"
  },
  textinputContainer: {
    borderWidth: 2,
    borderRadius: 10,
    flexDirection: "row",
    // backgroundColor: "#9DFD24",
    // color:"#000",
    borderColor: "#000"
  },
  textinput: {
    width: "57%",
    height: 50,
    padding: 10,
    borderColor: "#000",
    borderRadius: 8,
    borderWidth: 3,
    fontSize: 18,
    // backgroundColor: "#5653D4",
    color: "#000"
  },
  scanbutton: {
    width: 100,
    height: 50,
    // color:"#000",
    // backgroundColor: "#9DFD24",
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    justifyContent: "center",
    alignItems: "center"
  },
  scanbuttonText: {
    fontSize: 24,
    color: "#000",
  },
  lowerContainer: {
    flex: 0.8,
    backgroundColor: "#f4f4f4"
  },
  title: {
    fontSize: 20,
  },
  subtitle: {
    fontSize: 16,
  },
  lowerLeftContaiiner: {
    alignSelf: "flex-end",
    marginTop: -40
  },
  transactionContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center"
  },
  transactionText: {
    fontSize: 20,

  },
  date: {
    fontSize: 12,
    paddingTop: 5
  }
});