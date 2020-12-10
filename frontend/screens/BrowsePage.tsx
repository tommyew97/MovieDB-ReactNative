import React, {useEffect} from 'react';
import { StyleSheet, View, Text, ScrollView } from 'react-native';
import {useDispatch, useSelector} from "react-redux";
import {searchMovies} from "../Actions";
import {RootState} from "../Reducers";
import MoviePoster from "../components/MoviePoster";
import PageBar from '../components/PageBar';
import { RouteStackParamList } from '../src/RouteParamList';
import BrowseFooter from '../components/BrowseFooter';
import { TouchableHighlight } from 'react-native-gesture-handler';


function BrowsePage({ navigation, route }: RouteStackParamList<"BrowsePage">) {
    const dispatch = useDispatch();
    const movies = useSelector((state: RootState) => state.movies.byId);

    // Mapping movies to MoviePosters
    const movieElements = Object.values(movies).map((movie) =>
    <TouchableHighlight onPress={() => navigation.navigate('MoviePage', {
        title: movie.title,
        image: movie.image,
        description: movie.description
    })} key={movie.id}>
        <MoviePoster
                    movieId={movie.id}
                    image={movie.image}
                    title={movie.title}
                    key={movie.id}/>
    </TouchableHighlight>)
    const determineRender = () => {
        return movieElements;
    };

    useEffect(() => {
        dispatch(searchMovies(true));
    }, []);

    return (
        <View style={styles.container}>
                <Text style={styles.brandName}>
                    MovieDB
                </Text>
            <ScrollView style={styles.scroller} contentContainerStyle={styles.scrollContainer} >
                {determineRender()}
                <View>
                    <PageBar/>
                </View>
            </ScrollView>
            <BrowseFooter navigation={navigation} route={route}/>
        </View>
    );
}

export default BrowsePage;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        backgroundColor: '#262626',
        alignItems: 'center',
      },
    scroller: {
        width: "100%",
        top: 50
    },
    scrollContainer: {
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "center",
    },
    brandName: {
        color: "white",
        fontSize: 45,
        top: 50,
        paddingBottom: 20
    }
})