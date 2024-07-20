import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {COLORS, FONTS} from '../../constants/theme';
import ReusableBtn from '../Reusable/reusableBtn';
import BlueMessage from '../../assets/imgs/blueMessage.png';

const TopCard = () => {
  return (
    <View style={{flexDirection: 'column', gap: 25}}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <Image
          source={require('../../assets/imgs/pro.jpg')}
          style={styles.img}
        />
        <View style={{flexDirection: 'row', gap: 15, alignItems: 'center'}}>
          <View style={{flexDirection: 'column', alignItems: 'center'}}>
            <Text
              style={{
                fontSize: 24,
                color: COLORS.black,
                fontFamily: FONTS.InterMedium,
              }}>
              20
            </Text>
            <Text
              style={{
                fontSize: 16,
                color: COLORS.gray,
                fontFamily: FONTS.InterMedium,
              }}>
              Posts
            </Text>
          </View>
          <Image source={require('../../assets/imgs/divider.png')} />
          <View style={{flexDirection: 'column', alignItems: 'center'}}>
            <Text
              style={{
                fontSize: 24,
                color: COLORS.black,
                fontFamily: FONTS.InterMedium,
              }}>
              20
            </Text>
            <Text
              style={{
                fontSize: 16,
                color: COLORS.gray,
                fontFamily: FONTS.InterMedium,
              }}>
              Follower
            </Text>
          </View>
          <Image source={require('../../assets/imgs/divider.png')} />
          <View style={{flexDirection: 'column', alignItems: 'center'}}>
            <Text
              style={{
                fontSize: 24,
                color: COLORS.black,
                fontFamily: FONTS.InterMedium,
              }}>
              20
            </Text>
            <Text
              style={{
                fontSize: 16,
                color: COLORS.gray,
                fontFamily: FONTS.InterMedium,
              }}>
              Likes
            </Text>
          </View>
        </View>
      </View>
      <View style={{flexDirection: 'column', gap: 15}}>
        <Text
          style={{
            fontSize: 24,
            color: COLORS.black,
            fontFamily: FONTS.InterMedium,
          }}>
          Jennie Ruby
        </Text>
        <Text>Single & Dancer</Text>
        <View style={styles.containerx}>
          <View style={{flexDirection: 'row', alignItems: 'flex-end'}}>
            <Text style={styles.txt} numberOfLines={2}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. kdh akjd
              kajfb ukeaj Lorem, ipsum dolor sit amet consectetur adipisicing
              elit. Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            </Text>
            <Text style={styles.seeMore}> See more...</Text>
          </View>
        </View>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <ReusableBtn
          text="Follow +"
          //   onPress=
          //   disabled=
          backgroundColor={COLORS.lightBlues}
          borderColor={COLORS.lightBlue}
          color={COLORS.white}
        />
        <TouchableOpacity style={styles.btn}>
          <Image source={BlueMessage} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default TopCard;

const styles = StyleSheet.create({
  img: {
    borderRadius: 50,
    height: 65,
    width: 65,
  },
  txt: {
    color: '#000',
    flexShrink: 1,
  },
  seeMore: {
    color: '#000',
    fontWeight: 'bold',
  },
  btn: {
    borderColor: COLORS.lightBlues,
    padding: 10,
    // border: 2,
    borderRadius: 10,
    borderWidth: 1,
  },
});
