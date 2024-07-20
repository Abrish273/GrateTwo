import React, {useState} from 'react';
import {StyleSheet, TextInput, View, TouchableOpacity} from 'react-native';
import {COLORS, SIZES} from '../../constants/theme';
import Entypo from 'react-native-vector-icons/Entypo';

const ReusableInput = ({
  onChangeText,
  value,
  placeholder,
  isPassword = false,
  multiline,
  borderColor,
  borderRadius,
  borderWidth,
}) => {
  const [secureTextEntry, setSecureTextEntry] = useState(isPassword);

  const toggleSecureEntry = () => {
    setSecureTextEntry(prevState => !prevState);
  };

  return (
    <View style={styles.container(borderWidth, borderRadius, borderColor)}>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={value}
        placeholder={placeholder}
        keyboardType="default"
        secureTextEntry={secureTextEntry}
        placeholderTextColor={COLORS.gray}
        multiline={multiline}
      />
    </View>
  );
};

export default ReusableInput;

const styles = StyleSheet.create({
  container: (borderWidth, borderRadius, borderColor) => ({
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingRight: 10,
    borderColor: borderColor ? borderColor : COLORS.gray,
    borderRadius: borderRadius ? borderRadius : 10,
    borderWidth: borderWidth ? borderWidth : 1,
  }),
});
