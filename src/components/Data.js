import React from 'react';
import {connect} from 'react-redux';
import {
  View,
  TouchableOpacity,
  Text,
  Image,
  FlatList,
  StyleSheet,
} from 'react-native';
import {DATA} from '../Data/dummyData';
import {COLORS, FONTS, SIZES} from '../constants';

const Data = ({viewMode}) => {
  // console.log(DATA);

  const renderComponent = ({item}) => {
    return (
      <TouchableOpacity style={styles.item}>
        <Image
          source={item.icon}
          style={{
            width: 20,
            height: 20,
            tintColor: item.color,
          }}
        />
        <Text
          style={{marginLeft: SIZES.base, color: COLORS.primary, ...FONTS.h4}}>
          {item.name}
        </Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={{paddingHorizontal: SIZES.padding - 5}}>
      {viewMode === 'list' && (
        <FlatList
          data={DATA}
          renderItem={renderComponent}
          keyExtractor={(item) => `${item.id}`}
          numColumns={2}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.lightGray2,
  },
  item: {
    flex: 1,
    flexDirection: 'row',
    margin: 5,
    backgroundColor: COLORS.white,
    paddingVertical: SIZES.radius,
    paddingHorizontal: SIZES.padding,
    borderRadius: 5,
  },
});

const mapStateToProps = (state) => {
  return {
    viewMode: state.homeReducer.viewMode,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Data);
