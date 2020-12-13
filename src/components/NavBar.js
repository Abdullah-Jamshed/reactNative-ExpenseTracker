import React from 'react';
import {View, TouchableOpacity, Image, StyleSheet} from 'react-native';
import {icons, COLORS, SIZES} from '../constants';

const NavBar = () => {
  return (
    <View>
      <View style={styles.iconContainer}>
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
  iconContainer: {
    flexDirection: 'row',
    height: 50,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    paddingHorizontal: SIZES.padding,
    backgroundColor: COLORS.white,
  },
  iconStyle: {
    justifyContent: 'center',
  },
});

export default NavBar;
