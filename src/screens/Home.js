import React from 'react';
import {View, StyleSheet} from 'react-native';
import {icons, appTheme, COLORS, SIZES, FONTS} from '../constants/';

// Components
import NavBar from '../components/NavBar';
import Header from '../components/Header';

const Home = ({navigation}) => {
  return (
    <View style={styles.container}>
      <NavBar navigation={navigation} />
      <Header />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.lightGray2,
  },
});

export default Home;
