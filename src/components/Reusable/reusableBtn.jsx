import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {COLORS, SIZES} from '../../constants/theme';

const ReusableBtn = ({
  text,
  onPress,
  disabled,
  backgroundColor,
  borderColor,
  color,
  paddingHorizontal,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={styles.bg(backgroundColor, borderColor, paddingHorizontal)}
      disabled={disabled}>
      <Text style={styles.txt(color)}>{text}</Text>
    </TouchableOpacity>
  );
};

export default ReusableBtn;

const styles = StyleSheet.create({
  bg: (backgroundColor, borderColor, paddingHorizontal) => ({
    backgroundColor: backgroundColor,
    paddingVertical: 12,
    paddingHorizontal: paddingHorizontal ? paddingHorizontal : 80,
    borderRadius: 10,
    borderWidth: 1.2,
    borderColor: borderColor,
  }),
  txt: color => ({
    color: color,
    fontSize: SIZES.medium,
    textAlign: 'center',
  }),
});
