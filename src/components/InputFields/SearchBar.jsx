import {Image, StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';
import {COLORS} from '../../constants/theme';
const SearchBar = ({headerText, icon}) => {
  return (
    <View>
      {/* <Text style={{color: COLORS.black}}>{header}</Text> */}
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          //   onChangeText={onChangeText}
          //   value={value}
          placeholder={'Search here...'}
          keyboardType="default"
          placeholderTextColor={COLORS.black}
        />
        <Image
          source={require('../../assets/imgs/search.png')}
          style={{width: 20, height: 20, marginLeft: 10}}
        />
      </View>
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  container:{
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.gray,
    borderRadius: 25,
    paddingHorizontal: 35,
    paddingVertical: 1,
  },
});
