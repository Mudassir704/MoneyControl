import React,{ useState } from 'react';
import { Text } from 'react-native'


export const AdjustText = ({
    fontSize, text, style, numberOfLines
  }) => {
    const [currentFont, setCurrentFont] = useState(fontSize);
  
    return (
      <Text
        numberOfLines={ numberOfLines }
        adjustsFontSizeToFit
        style={ [style, { fontSize: currentFont }] }
        onTextLayout={ (e) => {
          const { lines } = e.nativeEvent;
          if (lines.length > numberOfLines) {
            setCurrentFont(currentFont - 1);
          }
        } }
      >
        { text }
      </Text>
    );
  };