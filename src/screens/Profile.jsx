import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Image,
} from 'react-native';
import Img from '../assets/imgs/pro.jpg';
import ImgTwo from '../assets/imgs/Sync.png';
import {COLORS, FONTS} from '../constants/theme';
import {DashedInputField, ReusableBtn} from '../components';

const Profile = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            paddingTop: 40,
          }}>
          <View style={{flexDirection: 'row', gap: 40}}>
            <View style={{justifyContent: 'space-between'}}>
              <View
                style={{flexDirection: 'row', alignItems: 'center', gap: 10}}>
                <Image source={ImgTwo} style={{height: 40, width: 40}} />
                <Text style={styles.txt}>Refresh Status</Text>
              </View>
              <View>
                <Text style={styles.txt2}>Uhm,</Text>
                <Text style={styles.txt}>Edit your Account here.</Text>
              </View>
            </View>
            <View>
              <Image source={Img} style={{height: 100, width: 100}} />
            </View>
          </View>
        </View>
        <View style={styles.inputs}>
          {[
            {header: 'First Name', placeholder: 'your First Name'},
            {header: 'Last Name', placeholder: 'your last name'},
            {header: 'Mobile Number', placeholder: 'Contact Number'},
            {header: 'Email', placeholder: 'Enter your Mail ID'},
            {header: 'Native City', placeholder: 'Your Native City'},
            {header: 'Current City', placeholder: 'Your Current City'},
            {header: 'Profession', placeholder: 'Your Profession'},
            {header: 'Bio', placeholder: 'Your Bio'},
            {header: 'Referral Code', placeholder: 'Referral Code'},
            {header: 'Referral Link', placeholder: 'your Referral Link'},
          ].map((field, index) => (
            <DashedInputField
              key={index}
              header={field.header}
              placeholder={field.placeholder}
            />
          ))}
          <View style={{gap: 20, marginVertical: 30}}>
            <ReusableBtn
              text={'Save Changes'}
              color={COLORS.black}
              // onPress={}
              // disabled
            />
            <ReusableBtn
              text={'Logout'}
              color={COLORS.white}
              backgroundColor={COLORS.blueBlack}
              borderColor={COLORS.blueBlack}
              //  onPress={}
              //  disabled
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  // container: {
  //   flex: 1,
  // },
  txt: {
    fontFamily: FONTS.InterRegular,
    fontSize: 14,
    color: COLORS.black,
  },
  txt2: {
    fontFamily: FONTS.InterSemiBold,
    fontSize: 38,
    color: COLORS.black,
  },
  inputs: {
    gap: 10,
    paddingTop: 20,
    paddingBottom: 20,
    paddingLeft: 40,
    paddingRight: 40,
    backgroundColor: COLORS.white,
  },
});

export default Profile;
