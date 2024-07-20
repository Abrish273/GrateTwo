import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {MessageDots, Search} from '../../assets/icons';
import Shop from '../../assets/imgs/shop.png';
import {COLORS, FONTS} from '../../constants/theme';
import {useNavigation} from '@react-navigation/native';

const Appbar = ({shop, headerText, icon}) => {
  const navigation = useNavigation();

  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 10,
        paddingHorizontal: 30,
        backgroundColor: COLORS.lightWhite,
      }}>
      <Text
        style={{
          color: COLORS.black,
          fontSize: 28,
          fontFamily: FONTS.InterMedium,
        }}>
        {headerText}
      </Text>
      <View style={{flexDirection: 'row', gap: 15, alignItems: 'center'}}>
        {shop && <Image source={Shop} />}
        {/* <Image source={MessageDots} height={10} width={10} /> */}
        {/* <TouchableOpacity onPress={() => navigation.replace('Search')}>
          <Image source={Search} />
        </TouchableOpacity> */}
      </View>
    </View>
  );
};

export default Appbar;

const styles = StyleSheet.create({});
