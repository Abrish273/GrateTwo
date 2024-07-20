import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import Back from '../../assets/imgs/back.png';
import {COLORS, FONTS} from '../../constants/theme';
import SearchBar from '../InputFields/SearchBar';
import {useNavigation} from '@react-navigation/native';

const NewAppBar = ({headerText, source, searchBar}) => {
  const navigation = useNavigation();

  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}>
      <View
        style={{
          borderRadius: 50,
          borderWidth: 1,
          borderColor: COLORS.gray,
          padding: 10,
        }}>
        <TouchableOpacity onPress={() => navigation.goBack}>
          <Image source={Back} />
        </TouchableOpacity>
      </View>
      <TouchableOpacity>
        <Text
          style={{
            color: COLORS.black,
            fontSize: 28,
            fontFamily: FONTS.InterMedium,
          }}>
          {headerText && headerText}
        </Text>
      </TouchableOpacity>
      {searchBar && <SearchBar />}
      {searchBar && <View />}
      <View>{source ? <Image source={source} /> : <View />}</View>
    </View>
  );
};

export default NewAppBar;

const styles = StyleSheet.create({});
