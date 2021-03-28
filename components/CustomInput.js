import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Entypo from 'react-native-vector-icons/Entypo';


export default function CustomInput({
  value,
  onChangeText,
  correct,
  hidden,
  placeholder,
  keyboardType,
  maxLength,
  style,
  numberOfLines,
}) {
  const [show, setShow] = useState(!hidden);

  return (
    <View style={[styles.main, style]}>
      <TextInput
        {...{value, onChangeText, placeholder, keyboardType, maxLength, numberOfLines}}
        style={styles.input}
        autoCorrect={false}
        spellCheck={false}
        secureTextEntry={hidden && !show}
      />
      {correct && <MaterialIcons name="check" size={20} color="#98d33c" />}
      {hidden && (
        <TouchableOpacity
          onPress={() => {
            setShow(!show);
          }}>
          <Entypo name={show ? 'eye' : 'eye-with-line'} size={20} />
        </TouchableOpacity>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    margin: 15,
    backgroundColor: '#f2f3f7',
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderRadius: 15,
    borderWidth: 1,
    width: '95%',
    alignSelf: 'center',
    paddingHorizontal: 15,
    // marginVertical: 5,
    paddingVertical: 5,
    alignItems: 'center',
  },
  input: {
    flex: 1,
  },
});
