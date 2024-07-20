import {Image, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Appbar, TopCard} from '../components';
import TopTab from '../navigations/TopTab';

const ProfileDetail = () => {
  return (
    <SafeAreaView>
      <Appbar headerText={'Grafity'} />
      <View
        style={{
          marginHorizontal: 20,
          marginVertical: 20,
          flexDirection: 'column',
          gap: 15,
        }}>
        <TopCard />
        <TopTab />
      </View>
    </SafeAreaView>
  );
};

export default ProfileDetail;

const styles = StyleSheet.create({});
