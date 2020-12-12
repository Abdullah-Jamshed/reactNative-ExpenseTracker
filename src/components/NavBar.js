import React from 'react';
import {View, TouchableOpacity, Image, StyleSheet} from 'react-native';
import {icons, appTheme, COLORS, SIZES, FONTS} from '../constants';

const NavBar = ({navigation}) => {
  console.log(navigation);
  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <TouchableOpacity
          style={styles.iconStyle}
          onPress={() => console.log('Back')}>
          <Image
            source={icons.back_arrow}
            style={{
              width: 25,
              height: 15,
              tintColor: COLORS.primary,
            }}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.iconStyle}
          onPress={() => console.log('More')}>
          <Image
            source={icons.more}
            style={{
              width: 25,
              height: 15,
              tintColor: COLORS.primary,
            }}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.lightGray2,
  },
  iconContainer: {
    flexDirection: 'row',
    height: 60,
    justifyContent: 'space-between',
    // alignItems: 'flex-end',
    paddingHorizontal: SIZES.padding,
    backgroundColor: COLORS.white,
  },
  iconStyle: {
    justifyContent: 'center',
    width: 50,
  },
});

export default NavBar;
