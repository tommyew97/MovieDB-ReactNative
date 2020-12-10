import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Button } from 'react-native-elements';
import { RouteParamList, RouteStackParamList } from './RouteParamList';
import BrowsePage from '../screens/BrowsePage';
import LandingPage from '../screens/LandingPage';
import MoviePage from '../screens/MoviePage';
import FilterPage from '../screens/FilterPage';

interface RoutesProps {

}

// Routes for the different screens

function LandingPageT({ navigation, route }: RouteStackParamList<"LandingPage">) {
    return (
        <LandingPage navigation={navigation} route={route}>
        </LandingPage>
    )
}

function BrowsePageT({navigation, route}: RouteStackParamList<"BrowsePage">) {
    return (
        <BrowsePage navigation={navigation} route={route}>
        </BrowsePage>
    )
}

function FilterPageT({navigation, route}: RouteStackParamList<"FilterPage">) {
    return (
        <FilterPage navigation={navigation} route={route}>
        </FilterPage>
    )
}

function MoviePageT({ navigation, route }: RouteStackParamList<"MoviePage">) {
    const browseButton = <Button onPress={() => navigation.navigate('BrowsePage')} title={"Back"}/>
    const landingButton = <Button onPress={() => navigation.navigate('LandingPage')} title={"Search"}/>
    return (
        <MoviePage movieId={140} image={ route.params.image }
        title={ route.params.title } description={ route.params.description } browse= {browseButton} landing= {landingButton}>
            </MoviePage>
    )
}



export const Routes: React.FC<RoutesProps> = ({}) => {
    const Stack = createStackNavigator<RouteParamList>();
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name="LandingPage" component={LandingPageT} />
                <Stack.Screen name="BrowsePage" component={BrowsePageT} />
                <Stack.Screen name="MoviePage" component={MoviePageT} />
                <Stack.Screen name="FilterPage" component={FilterPageT} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}