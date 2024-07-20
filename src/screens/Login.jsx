import React from 'react';
import {
  View,
  StyleSheet,
  TextInput,
  Text,
  Image,
  StatusBar,
} from 'react-native';
import {COLORS, FONTS} from '../constants/theme';
import {ReusableBtn, ReusableCard} from '../components';
import Img from '../assets/imgs/bgelement.png';
import {useNavigation} from '@react-navigation/native';

const Login = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={{position: 'absolute', right: -160, top: -174, zIndex: 10}}>
        <Image source={Img} style={{height: 400, width: 400}} />
      </View>
      <View style={styles.halfBlue}>
        <StatusBar
          barStyle={'light-content'}
          translucent
          backgroundColor="transparent"
        />
        <Text style={styles.text1}>Hello, welcome back!</Text>
        <Text style={styles.text2}>Login to continue</Text>
      </View>
      <View style={styles.halfWhite}>
        <View style={{alignItems: 'center', gap: 10, marginVertical: 10}}>
          <Text style={styles.txt}>Don't have an account?</Text>
          <ReusableBtn
            text={'Signup'}
            color={COLORS.black}
            paddingHorizontal={30}
            onPress={() => navigation.replace('Login')}
            //  disabled
          />
        </View>
      </View>
      <View style={styles.cardContainer}>
        <ReusableCard
          onPressTwo={() => navigation.replace('OTP')}
          placeholder={'Enter Your Mobile Number'}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  halfBlue: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: '50%',
    backgroundColor: COLORS.blue,
    paddingHorizontal: 30,
    paddingVertical: 120,
    borderBottomEndRadius: 30,
    borderBottomStartRadius: 30,
  },
  text1: {
    color: COLORS.white,
    fontSize: 26,
    fontFamily: FONTS.InterRegular,
  },
  text2: {
    color: COLORS.white,
    fontSize: 18,
    fontFamily: FONTS.InterMedium,
  },
  halfWhite: {
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
    position: 'absolute',
    top: '50%',
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'white',
  },
  cardContainer: {
    position: 'absolute',
    top: '40%',
    width: 320,
    height: 160,
    flexDirection: 'row',
  },
  txt: {
    color: COLORS.black,
    fontSize: 14,
    fontFamily: FONTS.InterMedium,
  },
});

export default Login;