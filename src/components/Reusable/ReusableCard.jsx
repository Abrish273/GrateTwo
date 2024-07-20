import {StyleSheet, TextInput, View} from 'react-native';
import React from 'react';
import {COLORS} from '../../constants/theme';
import ReusableBtn from './reusableBtn';

const ReusableCard = ({
  onChangeText,
  onChangeTextTwo,
  valueTwo,
  value,
  placeholder,
  placeholder2,
  signups,
  onPressTwo,
}) => {
  return (
    <View style={styles.card}>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={value}
        placeholder={placeholder}
        keyboardType="default"
        placeholderTextColor={COLORS.black}
        placeholderStyle={styles.input}
      />
      {signups && (
        <TextInput
          style={styles.input}
          onChangeText={onChangeTextTwo}
          value={valueTwo}
          placeholder={placeholder2}
          keyboardType="default"
          placeholderTextColor={COLORS.black}
          placeholderStyle={styles.input}
        />
      )}
      <ReusableBtn
        text={'Send OTP'}
        color={COLORS.white}
        backgroundColor={COLORS.blueBlack}
        borderColor={COLORS.blueBlack}
        onPress={onPressTwo}
      />
    </View>
  );
};

export default ReusableCard;

const styles = StyleSheet.create({
  card: {
    gap: 30,
    backgroundColor: COLORS.white,
    paddingHorizontal: 20,
    paddingVertical: 16,
    borderRadius: 10,
    width: '100%',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
  input: {
    backgroundColor: COLORS.gray,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 10,
    fontSize: 14,
  },
});
