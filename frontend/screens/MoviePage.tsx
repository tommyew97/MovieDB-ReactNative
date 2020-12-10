import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import MoviePoster from '../components/MoviePoster';
import MovieFooter from '../components/MovieFooter';

type Props = {
    movieId: number,
    image: string,
    title: string,
    description: string,
    landing: React.ReactNode,
    browse: React.ReactNode
}

function MoviePage(props:Props) {
    return (
        <View style={styles.container}>
            <Text style={{fontSize: 30, bottom: 60, color: "white"}}>
                {props.title}
            </Text>
            <View>
            <MoviePoster
                        movieId={props.movieId}
                        image={props.image}
                        title={props.title}/> 
            </View>
            <View style={styles.desc}>
                <Text style= {{color:"white"}}>{props.description}</Text>
            </View>
            <View style={styles.footer}>
                <MovieFooter browse={props.browse} landing={props.landing} />
            </View>
        </View>
    );
}

export default MoviePage;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#262626",
        justifyContent: "center",
        alignItems: "center"
    },
    footer: {
        position: "absolute",
        left: 0, right: 0, bottom: 0
    },
    desc: {
        padding: 20
    }
})
