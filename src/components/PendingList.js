import React, {useState} from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import {connect} from 'react-redux';
import {COLORS, FONTS, SIZES} from '../constants';
import {selectedCategoryAction} from '../store/actions/homeActions';

const PendingList = ({selectedCategory}) => {
  const expenses = selectedCategory ? selectedCategory.expenses : [];

  const expenseItem = () => {
    return <View></View>;
  };

  return (
    <View>
      <View style={styles.container}>
        <Text style={{...FONTS.h3, color: COLORS.primary}}>
          INCOMIING EXPENSE
        </Text>
        <Text style={{...FONTS.body4, color: COLORS.darkgray}}>12 Total</Text>
      </View>
      <View>
        {expenses.length ? (
          <FlatList data={expenses} data={expenses} renderItem={expenseItem} />
        ) : (
          <View style={{alignItems: 'center', justifyContent: 'center'}}>
            <Text>No Record</Text>
          </View>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: SIZES.padding,
    backgroundColor: COLORS.lightGray2,
  },
});

const mapStateToProps = (state) => {
  return {
    // name: state.homeReducer.name,
    selectedCategory: state.homeReducer.selectedCategory,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(PendingList);
