import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';

type Props = {
    movieId: number,
    image: string,
    title: string
}


function MoviePoster(props: Props) {
    return (
        <View style={styles.poster}>
            <Image style={{ height: 193, width: 135}} source={{ uri: props.image }}/>
            <Text style={{color:"white"}}>{props.title}</Text>
        </View>
    );
}

export default MoviePoster;

const styles = StyleSheet.create({
    poster: {
        width: 180,
        height: 200,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 20,
        marginBottom: 20,
    }
})