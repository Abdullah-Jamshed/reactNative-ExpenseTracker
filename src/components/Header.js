import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import {icons, appTheme, COLORS, SIZES, FONTS} from '../constants';

const Header = () => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.headerHeading}>My Expense</Text>
        <Text style={styles.headerText}>Summary (private)</Text>
      </View>
      <View style={styles.dateContainer}>
        <View style={styles.iconContainer}>
          <Image
            source={icons.calendar}
            style={{
              width: 20,
              height: 20,
              tintColor: COLORS.lightBlue,
            }}
          />
        </View>
        <View style={styles.textContainer}>
          <Text>11 Nov 2020</Text>
          <Text>18% More than last Month</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: SIZES.padding,
    paddingVertical: SIZES.padding,
    backgroundColor: COLORS.white,
  },
  headerHeading: {
    color: COLORS.primary,
    ...FONTS.h2,
  },
  headerText: {
    color: COLORS.darkgray,
    ...FONTS.h3,
  },
  dateContainer: {
    flexDirection: 'row',
    marginTop: SIZES.padding,
    alignItems: 'center',
  },
  iconContainer: {
    height: 50,
    width: 50,
    backgroundColor: COLORS.lightGray,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textContainer: {
    marginLeft: SIZES.padding,
  },
});

export default Header;
