import React, {useState} from 'react';
import {connect} from 'react-redux';
import {View, StyleSheet, ScrollView, SafeAreaView} from 'react-native';
import {icons, appTheme, COLORS, SIZES, FONTS} from '../constants/';

// Components
import NavBar from '../components/NavBar';
import Header from '../components/Header';
import Category from '../components/Category';
import CategoryList from '../components/CategoryList';
import PendingList from '../components/PendingList';

const Home = () => {
  return (
    <View style={styles.container}>
      <NavBar />
      <Header />
      <Category />
      <ScrollView contentContainerStyle={{paddingBottom: 60}}>
        <CategoryList />
        <PendingList />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.lightGray2,
  },
});

const mapStateToProps = (state) => {
  return {
    name: state.homeReducer.name,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
