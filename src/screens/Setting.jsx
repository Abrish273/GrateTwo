import {Image, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {
  GroupedTiles,
  NewAppBar,
  ReusableBtn,
  ReusableTile,
} from '../components';
import Dots from '../assets/imgs/dots.png';
import Right from '../assets/imgs/right.png';
import {COLORS} from '../constants/theme';

const tilesData = [
  {
    title: 'Update Profile',
    content: 'Bio, Pictures',
    source: require('../assets/imgs/right.png'),
    onPress: 'Profile',
  },
  {
    title: 'Change Mobile Number',
    content: '+91',
    source: require('../assets/imgs/right.png'),
  },
  {
    title: 'Status',
    content: 'Approved',
    source: require('../assets/imgs/right.png'),
  },
];
const tilesDataTwo = [
  {
    title: 'Transaction History',
    source: require('../assets/imgs/right.png'),
  },
];
const tilesDataThree = [
  {
    title: 'Rate App',
    source: require('../assets/imgs/right.png'),
  },
  {
    title: 'App Version',
    content: 'Gratify V1.0',
  },
];

const Setting = () => {
  return (
    <SafeAreaView
      style={{
        backgroundColor: COLORS.lightGray,
        height: '100%',
      }}>
      <View
        style={{
          marginHorizontal: 30,
          marginVertical: 20,
          flexDirection: 'column',
          gap: 30,
        }}>
        <NewAppBar headerText={'Setting'} />
        <View style={{flexDirection: 'column', gap: 35, marginBottom: 80}}>
          <GroupedTiles tilesData={tilesData} Header={'General'} />
          <GroupedTiles
            tilesData={tilesDataTwo}
            Header={'Application settings'}
          />
          <GroupedTiles tilesData={tilesDataThree} Header={'General'} />
        </View>
          <ReusableBtn
            text={'Logout'}
            //  onPress,
            // disabled,
            // backgroundColor,
            borderColor={COLORS.red}
            color={COLORS.red}
            // paddingHorizontal
          />
      </View>
    </SafeAreaView>
  );
};

export default Setting;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: COLORS.lightGray,
  },
  scrollView: {
    flexGrow: 1,
  },
  container: {
    flex: 1,
    marginHorizontal: 30,
    marginVertical: 20,
  },
  tilesContainer: {
    flexDirection: 'column',
    gap: 18,
  },
});
