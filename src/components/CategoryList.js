import React, {useState, useRef} from 'react';
import {connect} from 'react-redux';
import {selectedCategoryAction} from '../store/actions/homeActions';
import {
  View,
  TouchableOpacity,
  Text,
  Image,
  FlatList,
  StyleSheet,
  Animated,
} from 'react-native';
import {COLORS, FONTS, icons, SIZES} from '../constants';
import { DATA } from "../Data/dummyData";



const CategoryList = ({viewMode, selectedCategorySet}) => {
  const [showMoreToggle, setShowMoreToggle] = useState(false);

  const categoryListHeightAnimationValue = useRef(new Animated.Value(115))
    .current;

  const renderComponent = ({item}) => {
    return (
      <TouchableOpacity
        style={styles.item}
        onPress={() => selectedCategorySet(item)}>
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
    viewMode === 'list' && (
      <View style={{paddingHorizontal: SIZES.padding - 5}}>
        <Animated.View style={{height: categoryListHeightAnimationValue}}>
          {/* {viewMode === 'list' &&  */}
          <FlatList
            data={DATA}
            renderItem={renderComponent}
            keyExtractor={(item) => `${item.id}`}
            numColumns={2}
          />
          {/* } */}
        </Animated.View>

        <TouchableOpacity
          onPress={() => {
            if (showMoreToggle) {
              Animated.timing(categoryListHeightAnimationValue, {
                toValue: 115,
                duration: 300,
                useNativeDriver: false,
              }).start();
            } else {
              Animated.timing(categoryListHeightAnimationValue, {
                toValue: 172.5,
                duration: 300,
                useNativeDriver: false,
              }).start();
            }
            setShowMoreToggle(!showMoreToggle);
          }}
          style={{
            flexDirection: 'row',
            marginVertical: SIZES.base,
            justifyContent: 'center',
          }}>
          <Text style={{...FONTS.body4}}>
            {showMoreToggle ? 'LESS' : 'MORE'}
          </Text>
          <Image
            source={showMoreToggle ? icons.up_arrow : icons.down_arrow}
            style={{
              width: 15,
              height: 15,
              marginLeft: 5,
              alignSelf: 'center',
            }}
          />
        </TouchableOpacity>
      </View>
    )
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
    shadowColor: 'red',
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
    viewMode: state.homeReducer.viewMode,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    selectedCategorySet: (category) =>
      dispatch(selectedCategoryAction(category)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CategoryList);
