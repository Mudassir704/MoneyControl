import React from 'react';
import { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput } from 'react-native'
import { colors } from '../src/colors';
import SmallBackground from './SmallBackground';
import CustomInput from '../components/CustomInput'

export default function ModalScreen({ navigation, route }) {
    const [ammount, setAmmount] = useState();
    const [note, setNote] = useState("");
    return (
      // <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      //   <Text style={{ fontSize: 30 }}>This is a modal!</Text>
      //   <TextInput onChangeText={(input) => setAmmount(input)} placeholder="Hello"/>
      //   <Button onPress={() => navigation.navigate(route.params.content,{ ammount: ammount })} title="Dismiss" />
      // </View>
      <View style={{ flex: 1, alignItems: 'center', }}>
        <SmallBackground title={`${route.params.content} Control`} onBack={() => navigation.goBack()} />
        <CustomInput value={ammount} onChangeText={(inp) => setAmmount(inp)} placeholder="Ammount" keyboardType="number-pad" correct={ammount != 0} />
        <TouchableOpacity style={{  width : "95%", height: 40,backgroundColor: colors.primary, justifyContent: 'center', alignItems: 'center', borderWidth: 1, borderRadius: 20,}} onPress={() => navigation.navigate(route.params.content,{ ammount })}>
            <Text style={{ color: "black", fontWeight: "bold", fontSize: 20 }}>Submit</Text>
        </TouchableOpacity>
      </View>
    );
}