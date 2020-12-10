import React from 'react';
import { StyleSheet, View } from 'react-native';

type Props = {
    browse: React.ReactNode,
    landing: React.ReactNode
}

function MovieFooter(props: Props) {
    return (
        <View style={styles.footer}>
            <View style={styles.button}>
                {props.browse}
            </View>
        </View>
    );
}

export default MovieFooter;

const styles = StyleSheet.create({
    footer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-evenly",
        height: 100,
        width: "100%",
        backgroundColor: "gray",
    },
    button: {
        width: 150,
    }
})