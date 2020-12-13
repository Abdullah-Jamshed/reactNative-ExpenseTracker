import React, {useState, useRef, useEffect} from 'react';
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
  ScrollView,
} from 'react-native';

import {VictoryPie} from 'victory-native';

import {COLORS, FONTS, icons, SIZES} from '../constants';
import {DATA} from '../Data/dummyData';
import PendingList from '../components/PendingList';

const CategoryList = ({viewMode, selectedCategorySet}) => {
  const [showMoreToggle, setShowMoreToggle] = useState(false);
  const [selectedPie, setSelectedPie] = useState(null);

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
          style={{
            marginLeft: SIZES.base,
            color: COLORS.primary,
            ...FONTS.h4,
            fontSize: 12,
          }}>
          {item.name}
        </Text>
      </TouchableOpacity>
    );
  };

  //  chart

  const chartData = DATA.map((item) => {
    let confirmedExpenses = item.expenses.filter((a) => a.status == 'C');
    var total = confirmedExpenses.reduce((a, b) => a + (b.total || 0), 0);

    return {
      name: item.name,
      y: total,
      expensesCount: confirmedExpenses.length,
      color: item.color,
      id: item.id,
    };
  });

  const filterChartData = chartData.filter((a) => a.y > 0);
  const totalExpense = filterChartData.reduce((a, b) => a + (b.y || 0), 0);

  let finalChartData = filterChartData.map((item) => {
    let percentage = ((item.y / totalExpense) * 100).toFixed(0) + '%';
    return {
      label: `${percentage}`,
      y: Number(item.y),
      expensesCount: item.expensesCount,
      color: item.color,
      name: item.name,
      id: item.id,
    };
  });

  let colorScale = chartData.map((item) => item.color);

  let totalExpenseCount = chartData.reduce(
    (a, b) => a + (b.expensesCount || 0),
    0,
  );

  const setSelectCategoryByName = (name) => {
    let category = DATA.filter((a) => a.name == name);
    setSelectedPie(category[0]);
  };

  const renderItem = ({item}) => (
    <TouchableOpacity
      style={{
        flexDirection: 'row',
        height: 40,
        paddingHorizontal: SIZES.radius,
        borderRadius: 10,
        backgroundColor:
          selectedPie && selectedPie.name == item.name
            ? item.color
            : COLORS.white,
      }}
      onPress={() => {
        let categoryName = item.name;
        setSelectCategoryByName(categoryName);
      }}>
      <View style={{flex: 1, flexDirection: 'row', alignItems: 'center'}}>
        <View
          style={{
            width: 20,
            height: 20,
            backgroundColor:
              selectedPie && selectedPie.name == item.name
                ? COLORS.white
                : item.color,
            borderRadius: 5,
          }}
        />

        <Text
          style={{
            marginLeft: SIZES.base,
            color:
              selectedPie && selectedPie.name == item.name
                ? COLORS.white
                : COLORS.primary,
            ...FONTS.h3,
          }}>
          {item.name}
        </Text>
      </View>

      <View style={{justifyContent: 'center'}}>
        <Text
          style={{
            color:
              selectedPie && selectedPie.name == item.name
                ? COLORS.white
                : COLORS.primary,
            ...FONTS.h3,
          }}>
          {item.y} USD - {item.label}
        </Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <ScrollView contentContainerStyle={{paddingBottom: 60}}>
      {viewMode === 'list' && (
        <View style={{paddingHorizontal: SIZES.padding - 5}}>
          <Animated.View style={{height: categoryListHeightAnimationValue}}>
            <FlatList
              data={DATA}
              renderItem={renderComponent}
              keyExtractor={(item) => `${item.id}`}
              numColumns={2}
            />
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

          <View>
            <PendingList />
          </View>
        </View>
      )}

      {viewMode === 'chart' && (
        <View>
          <View style={{alignItems: 'center', justifyContent: 'center'}}>
            <VictoryPie
              data={finalChartData}
              labels={(datum) => `${datum.y}`}
              radius={({datum}) =>
                selectedPie && selectedPie.name == datum.name
                  ? SIZES.width * 0.4
                  : SIZES.width * 0.4 - 10
              }
              innerRadius={70}
              labelRadius={({innerRadius}) =>
                (SIZES.width * 0.4 + innerRadius) / 2.5
              }
              style={{
                labels: {fill: 'white', ...FONTS.body3},
                parent: {
                  ...styles.shadow,
                },
              }}
              width={SIZES.width * 0.8}
              height={SIZES.width * 0.8}
              colorScale={colorScale}
              events={[
                {
                  target: 'data',
                  eventHandlers: {
                    onPress: () => {
                      return [
                        {
                          target: 'labels',
                          mutation: (props) => {
                            let categoryName = chartData[props.index].name;
                            setSelectCategoryByName(categoryName);
                          },
                        },
                      ];
                    },
                  },
                },
              ]}
            />
            <View style={{position: 'absolute', top: '42%', left: '42%'}}>
              <Text style={{...FONTS.h1, textAlign: 'center'}}>
                {totalExpenseCount}
              </Text>
              <Text style={{...FONTS.body3, textAlign: 'center'}}>
                Expenses
              </Text>
            </View>
          </View>

          <View style={{padding: SIZES.padding}}>
            <FlatList
              data={finalChartData}
              renderItem={renderItem}
              keyExtractor={(item) => `${item.id}`}
            />
          </View>
        </View>
      )}
    </ScrollView>
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
