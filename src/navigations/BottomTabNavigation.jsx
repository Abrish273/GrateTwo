import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
// import {Feed, Games, Messages, Profile} from '../screens';
// import AntDesign from 'react-native-vector-icons/AntDesign';
// import Entypo from 'react-native-vector-icons/Entypo';
import Shops from '../assets/imgs/shop.png';
import Bell from '../assets/imgs/Notification.png'
import User from '../assets/imgs/User.png'
import Add from '../assets/imgs/add.png'
import Homes from '../assets/imgs/Home.png'
import {
  Login,
  OTP,
  Signup,
  Profile,
  Home,
  Shop,
  ProfileDetail,
  Notifications,
  Setting,
} from '../screens';

import {COLORS} from '../constants/theme';

const Tab = createBottomTabNavigator();
const tabBarStyle = {
  // borderTopLeftRadius: 30,
  // borderTopRightRadius: 30,
  height: 80,
  position: 'absolute',
  bottom: 0,
  left: 0,
  right: 0,
};
const BottomTabNavigation = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      activityColor="#EB6A58"
      tabBarHideKeyBoard={true}
      headerShown={false}
      inactiveColor="#3E2465"
      barStyle={{
        paddingBottom: 48,
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarStyle: tabBarStyle,
          tabBarShowLabel: false,
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <View style={{alignItems: 'center'}}>
              <Image source={Homes} width={40} height={40} />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Shop"
        component={Shop}
        options={{
          tabBarStyle: tabBarStyle,
          tabBarShowLabel: false,
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <View style={{alignItems: 'center'}}>
              <Image source={Shops} width={40} height={40} />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="ProfileDetail"
        component={ProfileDetail}
        options={{
          tabBarStyle: tabBarStyle,
          tabBarShowLabel: false,
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <View style={{alignItems: 'center'}}>
              <Image source={Add} width={40} height={40} />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Notification"
        component={Notifications}
        options={{
          tabBarStyle: tabBarStyle,
          tabBarShowLabel: false,
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <View style={{alignItems: 'center'}}>
              <Image source={Bell} width={40} height={40} />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={Setting}
        options={{
          tabBarStyle: tabBarStyle,
          tabBarShowLabel: false,
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <View style={{alignItems: 'center'}}>
              <Image source={User} width={40} height={40} />
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigation;

const styles = StyleSheet.create({});
