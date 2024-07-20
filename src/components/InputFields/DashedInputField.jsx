import React, {useState} from 'react';
import {
  StyleSheet,
  TextInput,
  View,
  TouchableOpacity,
  Text,
} from 'react-native';
import {COLORS, SIZES} from '../../constants/theme';

const DashedInputField = ({
  onChangeText,
  value,
  placeholder,
  header
}) => {
  return (
    <View>
      <Text style={{color: COLORS.black}}>{header}</Text>
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          value={value}
          placeholder={placeholder}
          keyboardType="default"
          placeholderTextColor={COLORS.gray}
        />
      </View>
    </View>
  );
};

export default DashedInputField;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingRight: 20,
    borderColor: COLORS.black,
    borderWidth: 0,
    borderBottomWidth: 1,
  },
  input: {
    fontSize: 16,
    paddingLeft: 5,
  },
});
