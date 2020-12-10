import { StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native';
import React from 'react';
import Footer from '../components/Footer';
import SearchBar from '../components/SearchBar';
import { RouteStackParamList } from '../src/RouteParamList';


function LandingPage({ navigation, route }: RouteStackParamList<"LandingPage">) {

    return (
        <View style={styles.container}>
            <Footer navigation={navigation} route={route}/>
            <View style={styles.searchContainer}>
                <SearchBar navigation={navigation} route={route}/>
            <TouchableWithoutFeedback onPress={() => navigation.navigate("BrowsePage")}>
                <View style={styles.searchButton}>
                    <Text style={styles.buttonText}>Search</Text>
                </View>
            </TouchableWithoutFeedback>
            </View>
            <Text style={styles.brandName}>
                MovieDB
            </Text>
        </View>
    );
}

export default LandingPage;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: "column-reverse",
      backgroundColor: '#262626',
      alignItems: 'center',
      width: "100%",
    },
    searchContainer: {
        width: "100%",
        flexDirection: "row",
        justifyContent: "center",
        top: 350,
        position: "absolute"
    },
    searchBar: {
        backgroundColor: "gray",
        width: 200,
        borderRadius: 10,
        paddingLeft: 10,

    },
    searchButton: {
        height: 40,
        backgroundColor: "dodgerblue",
        borderRadius: 10,
        justifyContent: "center",
        paddingLeft: 5,
        paddingRight: 5,
    },
    buttonText: {
        color: "white"
    },
    brandName: {
        top: 100,
        color: "white",
        fontSize: 45,
        position: "absolute"
    }
  });