import React from 'react'
import { Text, ScrollView, StyleSheet, Modal, View, Alert, TouchableOpacity } from 'react-native'
import Background from '../components/Background';
import Box1 from '../components/Box1';
import {colors} from '../src/colors';
import  { AdjustText } from '../components/AdjustedText';
import ButtonBox from '../components/ButtonBox';
import { useState } from 'react';
import Card from '../components/Card';
import CustomInput from '../components/CustomInput';
import CustomButton from '../components/CustomButton';
import { ScreenWidth } from '../components/ScreenSize';
import { Icon } from 'react-native-elements';
import Deleteitem from '../components/Deleteitem';

const initialItem = [
  {
      id: 1,
      name: "Mudassir",
      profit: -2000,
      icon: "m",
      list: [
      {
        invested: 2000,
        date: "Mon Feb 20 2021",
        time: "10 : 20",
        notes: "YEss"
      },
      {
        return: 2000,
        date: "Mon Feb 20 2021",
        time: "10 : 30",
        notes: "YEss"
      },
    ]
  },
  {
    id: 2,
    name: "Ramesh",
    profit: 5000,
    icon: "r",
  },
  {
    id: 3,
    name: "Raman",
    profit: 8000,
    icon: "r",
  }
];

export default function Investment({ navigation }) {
    const [visible, setVisible] = useState(false);
    const [name, setname] = useState("");
    const [items, setitems] = useState(initialItem);

    const handleDelete = item => {
      setitems(items.filter(m => m.name !== item));
    }
    return (
        <ScrollView style={{flex: 1, backgroundColor: colors.white}}>
            <Background title="Investment" onBack = {() => navigation.goBack()}>
                <Box1 title="Investment" style={{ fontSize: 18 }}>
                    <AdjustText fontSize={25} text="Rs."/>
                    <AdjustText fontSize={20} text="10000" numberOfLines={1} />
                </Box1>
                <Box1 title="Return">
                    <Text>Rs. 10000</Text>
                </Box1>
            </Background>
            <ButtonBox text="Add Your Investment" onPress={() => setVisible(true)}/>
            {items.map((item, index) => {return(<Card key={index} text={item.name} val={item.profit} icon={item.icon} renderRightActions={() => (<Deleteitem onPress={() => handleDelete(item.name)} />)} onPress={() => navigation.navigate('Details', { name: item.name, list: item.list })}/>)})}
            <Modal
                animationType="slide"
                transparent={true}
                visible={visible}
                onRequestClose={() => {
                Alert.alert('Modal has been closed.');
                }}>
                <View style={styles.centeredView}>
                <View style={styles.modalView}>
                    <TouchableOpacity style={{ alignSelf: 'flex-end'}} onPress={() => setVisible(!visible)}>
                      <Icon name="times" type="font-awesome-5" />
                    </TouchableOpacity>
                    <Text style={styles.modalText}>Add Your Investment</Text>
                    <CustomInput placeholder="Name" value={name} onChangeText={(inp) => setname(inp)} correct={name != ""}/>
                    <CustomButton title="Submit" style={{ width: ScreenWidth * 0.7, borderRadius: 20 }} onPress={() => {
                        if(name === "")
                            Alert.alert("Please Enter Valid name!")
                        else{
                        setitems([...items, {
                          id: 4,
                          name,
                          profit: 0,
                          icon: name[0].toLowerCase(),
                        }])
                        console.log(items);
                        setname("")
                        setVisible(!visible)}} }/>
                </View>
                </View>
            </Modal>
        </ScrollView>
        
    )
}

const styles = StyleSheet.create({
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
      fontSize: 25,
      marginBottom: 15,
      textAlign: 'center',
    },
  });
  
