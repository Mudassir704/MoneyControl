import React,{ useState } from 'react';
import { Alert, Modal, ScrollView,StyleSheet,Text, View, TouchableOpacity } from 'react-native';
import Card1 from '../components/Card1'
import CustomButton from '../components/CustomButton';
import CustomInput from '../components/CustomInput';
import { ScreenHeight, ScreenWidth } from '../components/ScreenSize';
import SmallBackground from '../components/SmallBackground';
import DateTimePicker from "@react-native-community/datetimepicker";
import { Icon } from "react-native-elements";
import Moment from "moment";
import { colors } from '../src/colors';
import Deleteitem from '../components/Deleteitem';
import EditItem from '../components/EditItem';


const CustomerDetails = ({ navigation, route }) => {
    const {name, list} = route.params; 
    const [ammount, setamount] = useState("");
    const [inModal, setinModal]  = useState(false);
    const [reModal, setreModal]  = useState(false);
    const [items, setItems] = useState(list);
    const [notes, setNotes] = useState(" ");
    const [date, setdate] = useState(new Date());
    const [show, setshow] = useState(false);
    const [mode, setmode] = useState("date");

    const handleEdit = item => {
      console.log(item);
      setamount(`${item.invested ? item.invested : item.return}`);
      setNotes(item.notes);
      item.return ? setreModal(true) : setinModal(true);
    }

    const handleDelete = item => {
      setItems(items.filter(m => ((m.date !== item.date) && (m.time !== item.time))))
    }
r65 
    return (
        <ScrollView>
            <SmallBackground title={name} onBack={() => navigation.pop()}>
                <Text>{name}</Text>
            </SmallBackground>
            <View style={{ flexDirection: 'row', justifyContent: 'space-around', margin: 10 }}>
                <CustomButton title="Invested" style={{ width: ScreenWidth * 0.4, backgroundColor: colors.light, }} onPress={() => setinModal(true)}/>
                <CustomButton title="Return" style={{ width: ScreenWidth * 0.4 }} onPress={() => setreModal(true)}/>
            </View>
            <Card1 text1="Entries" text2="Invested" text3="Return" />
            {items ? items.map((item, index) => {return(<Card1 key={index} renderLeftActions={() => (<EditItem onPress={() => handleEdit(item)}  />)} renderRightActions={() => (<Deleteitem onPress={() => handleDelete(item)}/>)}  text1={item.date + "\n" + item.time+"\n"+item.notes} text2={item.invested ? item.invested: ""} text3={item.return ? item.return : ""}/>)}) : (<Text>Not Transacted</Text>)}
            <Modal
                animationType="slide"
                transparent={true}
                visible={inModal}
                onRequestClose={() => {
                  Alert.alert('Modal has been closed.');
                }}>
                <View style={styles.centeredView}>
                <View style={styles.modalView}>
                    <TouchableOpacity style={{ alignSelf: 'flex-end'}} onPress={() => setinModal(!inModal)}>
                      <Icon name="times" type="font-awesome-5" />
                    </TouchableOpacity>
                    <Text style={styles.modalText}>Add Your Investment</Text>
                    <CustomInput value = {ammount} keyboardType="number-pad" placeholder="Ammount" value={ammount} correct={ammount != ''} onChangeText={(inp) => setamount(inp)}  />
                    <CustomInput placeholder="Notes.." value = {notes} onChangeText={(inp) =>setNotes(inp)} numberOfLines={5} />
                    <View style={styles.formRow}>
                      {/* <Text style={styles.formLabel}>Date and Time</Text> */}
                      <TouchableOpacity
                        style={styles.formItem}
                        style={{
                          // padding: 15,
                          borderColor: "#512DA8",
                          // borderWidth: 2,
                          flexDirection: "row",
                          // margin: 100,
                          width: 30,
                          height: 30,
                        }}
                        onPress={() => {setshow(true); setmode("date")}}
                      >
                        <Icon type="font-awesome" name="calendar" color={colors.primary} />
                      </TouchableOpacity>
                      <Text style={{ flexDirection: "column" }}>
                        {" " + Moment(date).format("DD-MMM-YYYY h:mm A")}
                      </Text>
                      {/* Date Time Picker */}
                      {show && (
                        <DateTimePicker
                          value={date}
                          mode={mode}
                          minimumDate={new Date()}
                          minuteInterval={30}
                          onChange={(date) => {
                            if (date === undefined) {
                              setshow(false);
                            } else {
                              setshow(mode === "time" ? false : true);
                              setmode("time");
                              setdate(new Date(date));
                            }
                          }}
                        />
                      )}
                    </View>
                    <CustomButton title="Submit" style={styles.modalbtn} onPress={() => {
                        if(ammount){
                          // console.log(typeof(ammount));
                          setItems([...items, {
                            invested: `${ammount}`,
                            date: date.toDateString(),
                            time: `${date.getHours()} : ${date.getMinutes()}`,
                            notes: notes
                        }])
                        setNotes("")
                        setamount('')
                        setinModal(!inModal)}
                            
                        else{Alert.alert("Please Enter Valid Ammount!")
                         }}}/>
                </View>
                </View>
            </Modal>
            <Modal
                animationType="slide"
                transparent={true}
                visible={reModal}
                onRequestClose={() => {
                  Alert.alert('Modal has been closed.');
                }}>
                <View style={styles.centeredView}>
                <View style={styles.modalView}>
                    <TouchableOpacity style={{ alignSelf: 'flex-end'}} onPress={() => setreModal(!reModal)}>
                      <Icon name="times" type="font-awesome-5" />
                    </TouchableOpacity>
                    <Text style={styles.modalText}>Add Your Return</Text>
                    <CustomInput keyboardType="number-pad" placeholder="Ammount" value={ammount} onChangeText={(inp) => setamount(inp)} correct={ammount != ''}/>
                    <CustomInput placeholder="Notes.." value = {notes} onChangeText={(inp) =>setNotes(inp)} numberOfLines={5} />
                    <View style={styles.formRow}>
                      {/* <Text style={styles.formLabel}>Date and Time</Text> */}
                      <TouchableOpacity
                        style={styles.formItem}
                        style={{
                          // padding: 15,
                          borderColor: "#512DA8",
                          // borderWidth: 2,
                          flexDirection: "row",
                          // margin: 100,
                          width: 30,
                          height: 30,
                        }}
                        onPress={() => {setshow(true); setmode("date")}}
                      >
                        <Icon type="font-awesome" name="calendar" color={colors.primary} />
                      </TouchableOpacity>
                      <Text style={{ flexDirection: "column" }}>
                        {" " + Moment(date).format("DD-MMM-YYYY h:mm A")}
                      </Text>
                      {/* Date Time Picker */}
                      {show && (
                        <DateTimePicker
                          value={date}
                          mode={mode}
                          minimumDate={new Date()}
                          minuteInterval={30}
                          onChange={(date) => {
                            if (date === undefined) {
                              setshow(false);
                            } else {
                              setshow(mode === "time" ? false : true);
                              setmode("time");
                              setdate(new Date(date));
                            }
                          }}
                        />
                      )}
                    </View>
                    <CustomButton title="Submit" style={styles.modalbtn} onPress={() => {
                        if(ammount){
                          setItems([...items, {
                            return: ammount,
                            date: date.toDateString(),
                            time: `${date.getHours()} : ${date.getMinutes()}`,
                            notes: notes
                        }]);
                        // (items.map((item) => {console.log(typeof(item.date))}));
                        setNotes("")
                        setamount(0)
                        setreModal(!reModal)}
                        else{Alert.alert("Please Enter Valid Ammount!")
                         }} }/>
                </View>
                </View>
            </Modal>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    view1: {
        alignItems: 'center',
        backgroundColor: '#f2f3f7',
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: ScreenWidth,
        height: ScreenHeight * 0.05
    },
    modalbtn: {
      margin: 10, 
      width: ScreenWidth * 0.7, 
      borderRadius: 25
    },
    text: {
        color: 'black',
        fontSize: 18
    },
    centeredView: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 22,
    },
    modalView: {
      margin: 20,
      backgroundColor: 'white',
      borderRadius: 20,
      padding: 35,
      alignItems: 'center',
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
    },
    openButton: {
      backgroundColor: '#F194FF',
      borderRadius: 20,
      padding: 10,
      elevation: 2,
    },
    textStyle: {
      color: 'white',
      fontWeight: 'bold',
      textAlign: 'center',
    },
    modalText: {
      fontSize: 23,
      color: 'black',
      fontWeight: "400",
      marginBottom: 15,
      textAlign: 'center',
    },
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
    },
    formRow: {
      alignItems: "center",
      justifyContent: "center",
      // flex: 1,
      flexDirection: "row",
      margin: 30,
    },
    formLabel: {
      fontSize: 18,
      flex: 2,
    },
    formItem: {
      flex: 1,
    },
});

export default CustomerDetails;