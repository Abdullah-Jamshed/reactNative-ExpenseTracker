import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  SafeAreaView,
} from 'react-native';
import {connect} from 'react-redux';
import {COLORS, FONTS, SIZES, icons} from '../constants';
import {selectedCategoryAction} from '../store/actions/homeActions';

const PendingList = ({selectedCategory}) => {
  const expenses = selectedCategory ? selectedCategory.expenses : [];

  const expenseItem = ({item, index}) => {
    return (
      <View
        style={{
          width: 300,
          marginRight: SIZES.padding - 15,
          marginLeft: index == 0 ? SIZES.padding - 20 : 0,
          marginVertical: SIZES.radius,
          borderRadius: SIZES.radius,
          backgroundColor: COLORS.white,
          ...styles.shadow,
        }}>
        <View
          style={{
            flexDirection: 'row',
            padding: SIZES.padding,
            alignItems: 'center',
          }}>
          <View
            style={{
              height: 50,
              width: 50,
              borderRadius: 25,
              backgroundColor: COLORS.lightGray,
              alignItems: 'center',
              justifyContent: 'center',
              marginRight: SIZES.base,
            }}>
            <Image
              source={selectedCategory.icon}
              style={{
                width: 30,
                height: 30,
                tintColor: selectedCategory.color,
              }}
            />
          </View>
          <Text style={{...FONTS.h3, color: selectedCategory.color}}>
            {selectedCategory.name}
          </Text>
        </View>
        <View style={{paddingHorizontal: SIZES.padding}}>
          <Text style={{...FONTS.h2}}>{item.title}</Text>
          <Text
            style={{...FONTS.body3, flexWrap: 'wrap', color: COLORS.darkgray}}>
            {item.description}
          </Text>
          <View>
            <Text
              style={{
                marginTop: SIZES.padding,
                ...FONTS.h4,
              }}>
              Location
            </Text>
            <View
              style={{
                flexDirection: 'row',
                marginTop: 5,
              }}>
              <Image
                source={icons.pin}
                style={{
                  height: 20,
                  width: 20,
                  tintColor: COLORS.darkgray,
                  marginRight: 5,
                }}
              />
              <Text
                style={{
                  marginBottom: SIZES.base,
                  color: COLORS.darkgray,
                  ...FONTS.body4,
                }}>
                {item.location}
              </Text>
            </View>
          </View>
        </View>

        <View
          style={{
            height: 50,
            alignItems: 'center',
            justifyContent: 'center',
            borderBottomStartRadius: SIZES.radius,
            borderBottomEndRadius: SIZES.radius,
            backgroundColor: selectedCategory.color,
          }}>
          <Text
            style={{
              color: COLORS.white,
              ...FONTS.body3,
            }}>
            Confirm {item.total.toFixed(2)} USD
          </Text>
        </View>
      </View>
    );
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
          <FlatList
            data={expenses}
            data={expenses}
            renderItem={expenseItem}
            keyExtractor={(item) => `${item.id}`}
            horizontal
            showsHorizontalScrollIndicator={false}
          />
        ) : (
          <View style={{alignItems: 'center', justifyContent: 'center'}}>
            <Text style={{color: COLORS.primary, ...FONTS.h3}}>No Record</Text>
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
  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 3,
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
