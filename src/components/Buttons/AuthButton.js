import React from 'react';
import {View, Text, Pressable} from 'react-native';
import {styles} from '../../styles/styles';

const AuthButton = ({buttonLevel, onPress, text}) => {
  return (
    <View style={styles.authButtonContainer}>
      <Pressable
        style={buttonLevel === 'primary' ? styles.authButtonPrimary : styles.authButtonSecondary}
        onPress={onPress}>
        <Text style={buttonLevel === 'primary' ? styles.authButtonTextPrimary : styles.authButtonTextSecondary}>{text}</Text>
      </Pressable>
    </View>
  );
};

export default AuthButton;
