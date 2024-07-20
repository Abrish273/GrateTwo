import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import VideoIcon from '../assets/imgs/video.png';
import Burger from '../assets/imgs/blocks.png';
import Movie from '../assets/imgs/Movie.png';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {Videos, Alls, Stars} from '../screens';
import {COLORS, SIZES} from '../constants/theme';

const Tab = createMaterialTopTabNavigator();

const TopTab = ({tabs}) => {
  return (
    <View style={{flex: 1}}>
      <Tab.Navigator>
        {tabs.map((tab, index) => (
          <Tab.Screen
            key={index}
            name={tab.name}
            component={tab.component}
            options={tab.options}
          />
        ))}
      </Tab.Navigator>
    </View>
  );
};

export default TopTab;

const styles = StyleSheet.create({
  //   profile: {
  //     position: 'absolute',
  //     left: 0,
  //     right: 0,
  //     top: 110,
  //     alignItems: 'center',
  //   },
  //   image: {
  //     resizeMode: 'cover',
  //     borderWidth: 1,
  //     borderRadius: 90,
  //     // borderColor: COLORS.white,
  //   },
  //   name: {
  //     backgroundColor: COLORS.lightGrey,
  //     padding: 1,
  //     paddingHorizontal: 8,
  //     borderRadius: 12,
  //   },
});
