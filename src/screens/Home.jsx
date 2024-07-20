import React from 'react';
import {View, Text, StyleSheet, ScrollView, SafeAreaView} from 'react-native';
import {Appbar, ReusablePostCard} from '../components';
import IMG from '../assets/toBeDeleted/IMG.png';
import {COLORS} from '../constants/theme';

const Home = () => {
  return (
    <SafeAreaView>
      <Appbar headerText={'Grafity'}/>
      <View
        style={{
          backgroundColor: '#e5e7eb',
          flexDirection: 'column',
          //   justifyContent: 'center',
          //   alignItems: 'center',
          gap: 10,
        }}>
        <ScrollView style={{marginBottom: 200}}>
          <ReusablePostCard
            img={IMG}
            text={
              'korem ipsum dolor sit amet, consectetur adipisicing elit. Aut nisi placeat exercitationem tempora at, .'
            }
          />
          <ReusablePostCard
            text={
              'korem ipsum dolor sit amet, consectetur adipisicing elit. Aut nisi placeat exercitationem tempora at, .'
            }
          />
          <ReusablePostCard
            img={IMG}
            text={
              'korem ipsum dolor sit amet, consectetur adipisicing elit. Aut nisi placeat exercitationem tempora at, .'
            }
          />
          <ReusablePostCard
            img={IMG}
            text={
              'korem ipsum dolor sit amet, consectetur adipisicing elit. Aut nisi placeat exercitationem tempora at, .'
            }
          />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default Home;
