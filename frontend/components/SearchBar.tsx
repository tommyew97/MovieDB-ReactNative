import React, {useEffect, useState} from 'react';
import { useDispatch, useSelector } from "react-redux";
import { RootState } from '../Reducers';
import {searchMovies, searchMovieTitles} from '../Actions';
import { View, TextInput, StyleSheet } from "react-native";
import { Button } from 'react-native-elements';
import { RouteParamList, RouteStackParamList } from '../src/RouteParamList';
import { StackNavigationProp } from "@react-navigation/stack";

type Props = {
    showSuggestions: boolean,
    navigation: StackNavigationProp<RouteParamList, "LandingPage">
}

export default function SearchBar({ navigation, route }: RouteStackParamList<"LandingPage">) {
    const movies = useSelector((state: RootState) => state.movies);
    const [matching, setMatching] = useState<JSX.Element[]>([]);
    const [showMatching, setShowMatching] = useState<boolean>(false);
    const dispatch = useDispatch();

    // Suggestions for search terms

    useEffect(() => {
        const matchesElem: JSX.Element[] = Object.values(movies.byId)
            .map((movie) =>
            <View key={movie.id}>
                <View>
                <Button title={`${movie.title} ${movie.year}`} onPress={() => navigation.navigate('MoviePage', {
        title: movie.title,
        image: movie.image,
        description: movie.description
    })} titleStyle={{ fontSize: 15 }}/>
                </View>
            </View>);
        setMatching(matchesElem)
    }, [movies])

    const handleChange = (term: string): void => {
        dispatch(searchMovieTitles(term));  // Update the search term
        dispatch(searchMovies(true));
        if (term.length > 2 ) {
            setShowMatching(true)
        }
        else {setShowMatching(false)}
    }

    const determineSuggestions = () => {
        return showMatching ? matching : null;
    }

    return (
        <View>
            <View>
                <TextInput style={styles.searchBar} placeholder="Search" placeholderTextColor="white" onChangeText={(text) => handleChange(text)}></TextInput>
            </View>
            <View>
                {determineSuggestions()}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    searchBar: {
        backgroundColor: "gray",
        width: 225,
        borderRadius: 10,
        paddingLeft: 10,
        height: 40

    },
})
