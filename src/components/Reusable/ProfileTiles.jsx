import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {COLORS, FONTS, SIZES} from '../../constants/theme';

const ProfileTiles = ({
    name,
    innerText,
    time,
    source,
}) => {
  return (
    <TouchableOpacity style={styles.touch}>
      {/* <Text>jrj</Text> */}
      <Image source={source} style={styles.img} />
      <View style={{flexDirection: 'column', justifyContent: 'space-between'}}>
        <View
          style={{
            flexDirection: 'row',
            gap: 10,
            alignItems: 'center'
          }}>
          <Text
            style={{
              fontSize: 18,
              color: COLORS.black,
              fontFamily: FONTS.InterXtraBold,
            }}>
            {name}
          </Text>
          <Text>{innerText}</Text>
        </View>
        <Text>{time}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default ProfileTiles;

const styles = StyleSheet.create({
  img: {
    borderRadius: 50,
    height: 65,
    width: 65,
  },
  touch: {
    // backgroundColor: COLORS.white,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 15,
    width: SIZES.width/ 1.18,
    paddingHorizontal:10,
    paddingVertical:10,
    borderRadius: 20
  },
});
