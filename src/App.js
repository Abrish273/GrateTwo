import React from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import {
  Home,
  Login,
  Notifications,
  OTP,
  Profile,
  ProfileDetail,
  Search,
  Setting,
  Signup,
} from './screens';
import BottomTabNavigation from './navigations/BottomTabNavigation';
import {NavigationContainer} from '@react-navigation/native';
import {Video, All, Star} from './screens';
import Test from './screens/Test';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();

function App() {
  return (
    // <View>
    //   <Text>Hello world</Text>
    // </View>
    <NavigationContainer>
      <Stack.Navigator>
        {/* <Stack.Screen
          name="search"
          component={Search}
          options={{headerShown: false}}
        /> */}
        {/* 
        <Stack.Screen
          name="video"
          component={Video}
          // options={{headerShown: false}}
        />
        <Stack.Screen
          name="star"
          component={Star}
          // options={{headerShown: false}}
        /> */}
        <Stack.Screen
          name="Signup"
          component={Signup}
          options={{headerShown: false}}
        />
        {/*
        <Stack.Screen
          name="Login"
          component={Login}
          options={{headerShown: false}}
        /> */}
        <Stack.Screen
          name="BottomTabNavigation"
          component={BottomTabNavigation}
          options={{headerShown: false}}
        />
        {/* 
        {/* <Stack.Screen
          name="Profile"
          component={Profile}
          options={{headerShown: false}}
        /> */}
        <Stack.Screen
          name="OTP"
          component={OTP}
          options={{headerShown: false}}
        />
        {/* 
        <Stack.Screen
          name="Search"
          component={Search}
          options={{headerShown: false}}
        /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
