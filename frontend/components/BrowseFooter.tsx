import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Button } from 'react-native-elements'
import { RouteStackParamList } from '../src/RouteParamList';

function BrowseFooter({ navigation, route }: RouteStackParamList<"BrowsePage">) {
    return (
        <View style={styles.footer}>
            <View style={styles.button}>
                <Button onPress={() => navigation.navigate('LandingPage')} title={"Search"}>
                </Button>
            </View>
            <View style={styles.button}>
                <Button onPress={() => navigation.navigate('FilterPage')} title={"Filters"}>
                </Button>
            </View>
        </View>
    );
}

export default BrowseFooter;

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
        width: 150
    }
})