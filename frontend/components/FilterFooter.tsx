import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Button } from 'react-native-elements';
import { RouteStackParamList } from '../src/RouteParamList';
import {searchMovies} from '../Actions';
import {useDispatch} from "react-redux";

function FilterFooter({ navigation, route }: RouteStackParamList<"LandingPage">) {
    const dispatch = useDispatch();
    return (
        <View style={styles.footer}>
            <View style={styles.button}>
                <Button title={"Apply filters"} onPress={() => {
                    dispatch(searchMovies(true));
                    navigation.navigate("BrowsePage");
                }}/>
            </View>
        </View>
    );
}

export default FilterFooter;

const styles = StyleSheet.create({
    footer: {
        alignItems: "center",
        justifyContent: "center",
        height: 100,
        width: "100%",
        backgroundColor: "gray",
        position: "absolute",
        left: 0, right: 0, bottom: 0
    },
    button: {
        width: 150
    }
})