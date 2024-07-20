import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import {NewAppBar, ProfileTiles} from '../components';
import Dots from '../assets/imgs/dots.png';
import {COLORS, FONTS} from '../constants/theme';
import TopTab from '../navigations/TopTab';
import {Members, Sellers, Products} from './search';

const data = [
  {
    name: 'Daniel',
    source: require('../assets/imgs/pro.jpg'),
  },
  {
    name: '1.56 ETH',
    source: require('../assets/imgs/pro.jpg'),
  },
  {
    name: '1.56 ETH',
    source: require('../assets/imgs/pro.jpg'),
  },
  {
    name: '1.56 ETH',
    source: require('../assets/imgs/pro.jpg'),
  },
  {
    name: '1.56 ETH',
    source: require('../assets/imgs/pro.jpg'),
  },
  {
    name: '1.56 ETH',
    source: require('../assets/imgs/pro.jpg'),
  },
  // Add more objects as needed
];

const Search = () => {
  const tabsData = [
    {name: 'All', component: Members},
    {name: 'Video', component: Sellers},
    {name: 'Star', component: Products},
  ];
  return (
    <SafeAreaView
      style={{
        marginHorizontal: 30,
        marginVertical: 20,
        flexDirection: 'column',
        gap: 30,
      }}>
      <NewAppBar searchBar />
      {/* <TopTab tabs={tabsData} />; */}
      {/* <ScrollView>
        <View style={{flexDirection: 'column', gap: 30}}>
          <View style={styles.container}>
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
        </View>
      </ScrollView> */}
    </SafeAreaView>
  );
};

export default Search;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    gap: 10,
  },
});
