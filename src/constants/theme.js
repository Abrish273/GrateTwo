import {Dimensions} from 'react-native';
const {height, width} = Dimensions.get('window');

// const windowHeight = Dimensions.get('window').height;

const COLORS = {
  mainColor: '#ffbb7c',
  red: '#e60909',
  fadedmainColor: '#ff8743',
  lightBlue: '#f1f5f6',
  lightBlues: '#4999f1',
  lightGray: '#faf2f2',
  black: '#000',
  white: '#FBFBFB',
  lightWhite: '#fafdff',
  gray: '#d9d9d9',
  purple: '#bc67ff',
  green: '#43af41',
  darkGray: '#8696a4',
  blue: '#0056bb',
  blueBlack: '#124176',
};

const SIZES = {
  xSmall: 10,
  small: 12,
  medium: 16,
  large: 20,
  xLarge: 24,
  xxLarge: 44,
  height,
  width,
};

// const SHADOWS = {
//   small: {
//     shadowColor: '#000000',
//     shadowOffset: {
//       width: 0,
//       height: 2,
//     },
//     shadowOpacity: 0.25,
//     shadowRadius: 3.84,
//     elevation: 2,
//   },
//   medium: {
//     shadowColor: '#000000',
//     shadowOffset: {
//       width: 0,
//       height: 2,
//     },
//     shadowOpacity: 0.25,
//     shadowRadius: 5.84,
//     elevation: 2,
//   },
// };

const FONTS = {
  InterBlack: 'Inter-Black',
  InterBold: 'Inter-Bold',
  InterLight: 'Inter-Light',
  InterXtraBold: 'Inter-ExtraBold',
  InterExtraLight: 'Inter-ExtraLight',
  InterMedium: 'Inter-Medium',
  InterRegular: 'Inter-Regular',
  InterSemiBold: 'Inter-SemiBold',
  InterThin: 'Inter-Thin',
};

export {COLORS, SIZES, FONTS};
