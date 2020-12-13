import React, {useState} from 'react';
import {connect} from 'react-redux';
import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';
import {icons, appTheme, COLORS, SIZES, FONTS} from '../constants';

//  Redux Actions
import {viewModeAction} from '../store/actions/homeActions';

const Category = (props) => {
  // const [view, setView] = useState('chart');
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={{...FONTS.h3}}>CATEGORIES</Text>
        <Text style={{...FONTS.body4, color: COLORS.darkgray}}>7 total</Text>
      </View>
      <View style={styles.iconsContainer}>
        <TouchableOpacity
          onPress={() => props.viewModeSet('chart')}
          style={{
            width: 40,
            height: 40,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 25,
            backgroundColor:
              props.viewMode === 'chart' ? COLORS.secondary : null,
          }}>
          <Image
            source={icons.chart}
            resizeMode="contain"
            style={{
              width: 20,
              height: 20,
              tintColor:
                props.viewMode === 'chart' ? COLORS.white : COLORS.darkgray,
            }}
          />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => props.viewModeSet('list')}
          style={{
            width: 40,
            height: 40,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 25,
            backgroundColor:
              props.viewMode === 'list' ? COLORS.secondary : null,
          }}>
          <Image
            source={icons.menu}
            resizeMode="contain"
            style={{
              width: 20,
              height: 20,
              tintColor:
                props.viewMode === 'list' ? COLORS.white : COLORS.darkgray,
            }}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: SIZES.padding,
  },
  titleContainer: {},
  iconsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});

const mapStateToProps = (state) => {
  return {
    viewMode: state.homeReducer.viewMode,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    viewModeSet: (mode) => dispatch(viewModeAction(mode)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Category);
