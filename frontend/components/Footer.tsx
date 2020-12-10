import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Button } from 'react-native-elements';
import { RouteStackParamList } from '../src/RouteParamList';

function Footer({ navigation, route }: RouteStackParamList<"LandingPage">) {
    return (
        <View style={styles.footer}>
            <View style={styles.button}>
            <Button onPress={() => navigation.navigate('BrowsePage')} title={"Browse"}>
            </Button>
            </View>
        </View>
    );
}

export default Footer;

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