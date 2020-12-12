import React from 'react';
import {View, Text, TouchableOpacity, Image, StyleSheet} from 'react-native';
import {icons, appTheme, COLORS, SIZES, FONTS} from '../constants/';

// Components
import NavBar from '../components/NavBar';

const Home = ({navigation}) => {
  return (
    <View style={styles.container}>
      <NavBar navigation={navigation} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Home;
