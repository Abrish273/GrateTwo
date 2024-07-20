import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {COLORS} from '../../constants/theme';
import {useNavigation} from '@react-navigation/native';

const ReusableTile = ({source, title, content, isFirst, isLast, onPress}) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate(onPress)}
      style={[
        styles.touch,
        {
          backgroundColor: COLORS.white,
          paddingHorizontal: 15,
          paddingVertical: 15,
          borderTopLeftRadius: isFirst ? 10 : 0,
          borderTopRightRadius: isFirst ? 10 : 0,
          borderBottomLeftRadius: isLast ? 10 : 0,
          borderBottomRightRadius: isLast ? 10 : 0,
        },
      ]}>
      <Text style={styles.txt}>{title}</Text>
      <View style={[styles.innerTouch, {gap: 15}]}>
        <Text>{content}</Text>
        {source && <Image source={source} style={styles.image} />}
      </View>
    </TouchableOpacity>
  );
};

export default ReusableTile;

const styles = StyleSheet.create({
  touch: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  innerTouch: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  txt: {
    fontSize: 20,
    color: COLORS.black,
  },
  //   image: {
  //     width: 20,
  //     height: 20,
  //     resizeMode: 'contain',
  //   },
});
