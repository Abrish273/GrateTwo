import {Image, SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NewAppBar, ProfileTiles} from '../components';
import Dots from '../assets/imgs/dots.png';
import {COLORS, FONTS} from '../constants/theme';

const data = [
  {
    name: 'Daniel',
    innerText: 'liked your status',
    time: '10 min ago',
    source: require('../assets/imgs/pro.jpg'),
  },
  {
    name: '1.56 ETH',
    innerText: 'commented on your post',
    time: '1 min ago',
    source: require('../assets/imgs/pro.jpg'),
  },
  // Add more objects as needed
];
const dataTwo = [
  {
    name: 'Sharok',
    innerText: 'liked your status',
    time: '10 min ago',
    source: require('../assets/imgs/pro.jpg'),
  },
  {
    name: '1.56 ETH',
    innerText: 'commented on your post',
    time: '1 min ago',
    source: require('../assets/imgs/pro.jpg'),
  },
  {
    name: 'Sharok',
    innerText: 'liked your status',
    time: '10 min ago',
    source: require('../assets/imgs/pro.jpg'),
  },
  {
    name: '1.56 ETH',
    innerText: 'commented on your post',
    time: '1 min ago',
    source: require('../assets/imgs/pro.jpg'),
  },
  {
    name: 'Sharok',
    innerText: 'liked your status',
    time: '10 min ago',
    source: require('../assets/imgs/pro.jpg'),
  },
  {
    name: '1.56 ETH',
    innerText: 'commented on your post',
    time: '1 min ago',
    source: require('../assets/imgs/pro.jpg'),
  },
  {
    name: '1.56 ETH',
    innerText: 'commented on your post',
    time: '1 min ago',
    source: require('../assets/imgs/pro.jpg'),
  },
  {
    name: '1.56 ETH',
    innerText: 'commented on your post',
    time: '1 min ago',
    source: require('../assets/imgs/pro.jpg'),
  },
];

const Notifications = () => {
  return (
    <SafeAreaView
      style={{
        marginHorizontal: 30,
        marginVertical: 20,
        flexDirection: 'column',
        gap: 30,
      }}>
      <NewAppBar headerText={'Notifications'} source={Dots} />
      <ScrollView>
        <View style={{flexDirection: 'column', gap: 30}}>
          <View style={styles.container}>
            <Text style={styles.headerText}>Today</Text>
            {data.map((item, index) => (
              <ProfileTiles
                key={index}
                name={item.name}
                innerText={item.innerText}
                time={item.time}
                source={item.source}
              />
            ))}
          </View>
          <View style={styles.container}>
            <Text style={styles.headerText}>Yesterday</Text>
            {dataTwo.map((item, index) => (
              <ProfileTiles
                key={index}
                name={item.name}
                innerText={item.innerText}
                time={item.time}
                source={item.source}
              />
            ))}
          </View>
        </View>
      </ScrollView>
      {/* <View style={{marginBottom: 100}} /> */}
    </SafeAreaView>
  );
};

export default Notifications;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    gap: 10,
  },
  headerText: {
    color: COLORS.black,
    fontSize: 18,
    fontFamily: FONTS.InterMedium,
  },
});
