import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {changeFilters} from "../Actions";
import { View, StyleSheet, Text } from "react-native";
import { RouteStackParamList } from '../src/RouteParamList';
import { CheckBox } from 'react-native-elements'
import _ from "lodash";
import { List } from "native-base";
import { RootState } from "../reducers";
import { Genres } from "../types/filter";
import OrderingToggle from "../components/OrderingToggle";
import FilterFooter from '../components/FilterFooter';


const genres: Array<Genres> = [
    "Action",
    "Comedy",
    "Musical",
    "Romance",
    "Drama",
    "Horror",
  ];
  

const FilterForm = ({ navigation, route }: RouteStackParamList<"FilterPage">) => {
    const checkedGenres: Record<Genres, boolean> = useSelector(
        (state: RootState) => state.filtering.filter.genres
      );
      const dispatch = useDispatch();
        
      // Changing filters
      const onPress = (genre: Genres) => {
        const checked = checkedGenres[genre];
        dispatch(changeFilters({ ...checkedGenres, [genre]: !checked }));
      };
    
      // Mapping genres to checkboxes
      const filterItems = genres.map((genre) => (
        <View style={styles.filterOptions} key={genre}>
          <CheckBox onPress={() => onPress(genre)} checked={checkedGenres[genre]}/>
            <Text style={{ paddingLeft: 10, color: "white", fontSize: 15, paddingBottom: 15 }}>{genre}</Text>
        </View>
      ));
    
    return (
    <View style={styles.container}>
        <View style={styles.title}>
            <Text style={{color: "white", fontSize: 30}}>
                Filters and ordering
            </Text>
        </View>
        <View>
            <List style={styles.filterContainer}>
                {filterItems}
            </List>
        </View>
        <View style={styles.ordering}>
            <OrderingToggle/>
        </View>
        <FilterFooter navigation={navigation} route={route}/>
    </View>
    
    );
};

export default FilterForm;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: "#262626",
        width: "100%"
    },
    title: {
        position: "absolute",
        top: 125
    },
    filterContainer: {
        flexDirection: "row",
        justifyContent: "center",
        flexWrap: "wrap",
        margin: 25,
        top: 275,
        left: 10
    },
    filterOptions: {
        width: 100,
    },
    ordering : {
        top: 275,

    }
})