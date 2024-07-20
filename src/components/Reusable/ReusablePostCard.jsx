import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import {COLORS, FONTS, SIZES} from '../../constants/theme';
import Heart from '../../assets/imgs/heart.png';
import Message from '../../assets/imgs/message.png';

const ReusablePostCard = ({text, img}) => {
  const [liked, setLiked] = useState(false);
  const handlePress = () => {
    setLiked(!liked);
  };

  return (
    <View
      style={{
        gap: 10,
        marginBottom: 5,
        padding: 10,
        backgroundColor: COLORS.white,
        paddingVertical: 10,
        paddingHorizontal: 20,
      }}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        {/* <Image
          source={require('../../assets/imgs/pro.jpg')}
          style={styles.img}
        /> */}
        <View style={styles.containerx}>
          <View style={styles.imageContainerx}>
            <Image
              source={require('../../assets/imgs/pro.jpg')}
              style={styles.img}
            />
            <View style={styles.onlineDot} />
          </View>
        </View>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            width: '80%',
            marginHorizontal: 10,
          }}>
          <View>
            <Text style={styles.txt}>Ralph Edwards</Text>
            <Text style={{fontFamily: FONTS.Regular, color: COLORS.gray}}>
              2 minutes
            </Text>
          </View>
          {/* <Text style={{color: COLORS.black, fontSize: 40}}>....</Text> */}
          <Image
            source={require('../../assets/imgs/dots.png')}
            // style={styles.img}
          />
        </View>
      </View>
      <View style={{gap: 10}}>
        {text && (
          <View style={styles.containerx}>
            <View style={{flexDirection: 'row', alignItems: 'flex-end'}}>
              <Text style={styles.txt} numberOfLines={2}>
                {text ? text : ''}
              </Text>
              {text && <Text style={styles.seeMore}> See more...</Text>}
            </View>
          </View>
        )}
        <View style={styles.container}>
          {img && <Image source={img} style={styles.largeImage} />}
          <Image
            source={require('../../assets/imgs/dots.png')}
            // style={styles.img}
          />
          {/* <View style={styles.smallImagesContainer}>{renderImages()}</View> */}
        </View>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <View style={{flexDirection: 'row', gap: 12}}>
          <TouchableOpacity onPress={handlePress}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                gap: 8,
                marginLeft: 8,
              }}>
              <Image source={Heart} style={styles.icon} />
              <Text style={{color: COLORS.black}}>
                {liked ? '24kk' : '23.9kk'}
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={handlePress}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                gap: 8,
              }}>
              <Image source={Message} style={styles.icon} />

              <Text style={{color: COLORS.black}}>{'23.9kk'}</Text>
            </View>
          </TouchableOpacity>
        </View>
        <Image
          source={require('../../assets/imgs/share.png')}
          // style={styles.img}
        />
      </View>
    </View>
  );
};

export default ReusablePostCard;

const styles = StyleSheet.create({
  txt: {
    color: COLORS.black,
    fontFamily: FONTS.InterMedium,
    fontSize: 18,
  },
  container: {
    // borderRadius: 10,
    // backgroundColor: 'green',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 10,
    // marginVertical: 10,
  },
  largeImage: {
    width: '100%',
    height: 200,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    marginRight: 5,
  },
  img: {
    borderRadius: 50,
    height: 45,
    width: 45,
  },
  lastImage: {
    position: 'relative',
    borderBottomRightRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  },
  remainingImagesText: {
    position: 'absolute',
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    zIndex: 1,
  },
  containerx: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageContainerx: {
    position: 'relative',
  },
  onlineDot: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    width: 15,
    height: 15,
    borderRadius: 7.5, // Making the dot round
    backgroundColor: 'lightgreen',
    borderWidth: 2,
    borderColor: 'white', // Optional: adding a border to make the dot more distinct
  },
  //   containerx: {
  //     flex: 1,
  //     justifyContent: 'center',
  //     alignItems: 'center',
  //     flexDirection: 'row',
  //     padding: 20,
  //   },
  //   textContainer: {
  //     flexDirection: 'row',
  //     flexWrap: 'wrap',
  //     alignItems: 'flex-end',
  //   },
  txt: {
    color: '#000',
    flexShrink: 1,
  },
  seeMore: {
    color: '#000',
    fontWeight: 'bold',
  },
});
