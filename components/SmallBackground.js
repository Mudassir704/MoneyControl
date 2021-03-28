import React from 'react';
import { 
  ScrollView, 
  Text, 
  ImageBackground, 
  TouchableOpacity, 
  StyleSheet,
  Dimensions,
  View
} from 'react-native';
import { MaterialIcons } from 'react-native-vector-icons';

const {width} = Dimensions.get('screen');

export default function SmallBackground({ title, onBack, children }) {
    return (
        // <ScrollView style={{flex: 1, backgroundColor: colors.white}}>
            <ImageBackground
                source={require('../src/images/back.jpg')}
                style={styles.header}>
                <Text style={styles.text}>{title}</Text>
                    {onBack ? <TouchableOpacity style={styles.back} onPress={onBack}>
                    <MaterialIcons name="arrow-back" size={22} />
                </TouchableOpacity> : null}
                <View style={{ flexDirection: 'row' }}>
                {children}
                </View>
            </ImageBackground>
            // {children}
        // </ScrollView>
    )
}

const styles = StyleSheet.create({
    header: {
      width,
      height: width * 0.30,
      // justifyContent: 'center',
      alignItems: 'center',
    },
    text: {
      fontSize: 28,
      fontWeight: 'bold',
      justifyContent: 'flex-start',
      paddingTop: 35
    },
    back: {
      position: 'absolute',
      top: 30,
      left: 30,
      padding: 10,
      borderWidth: 0.2,
      borderRadius: 20,
    },
});
  
