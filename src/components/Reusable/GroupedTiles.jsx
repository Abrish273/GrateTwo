import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import ReusableTile from './ReusableTile';
import {COLORS, FONTS} from '../../constants/theme';

const GroupedTiles = ({tilesData, Header}) => {
  return (
    <View style={{flexDirection: 'column', gap: 10}}>
      <Text
        style={{
          color: COLORS.black,
          fontSize: 18,
          fontFamily: FONTS.InterSemiBold,
        }}>
        {Header}
      </Text>
      <View style={styles.container}>
        {tilesData.map((tile, index) => (
          <ReusableTile
            key={index}
            source={tile.source}
            title={tile.title}
            onPress={tile.onPress}
            content={tile.content}
            isFirst={index === 0}
            isLast={index === tilesData.length - 1}
          />
        ))}
      </View>
    </View>
  );
};

export default GroupedTiles;

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.white,
    borderRadius: 10,
    overflow: 'hidden',
  },
});
