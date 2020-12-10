import { RouteProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";

// Types for the params, only used for MoviePage

export type RouteParamList = {
    LandingPage: undefined,
    BrowsePage: undefined,
    MoviePage: {
        title: string,
        image: string,
        description: string
    },
    FilterPage: undefined

};

export type RouteStackParamList<T extends keyof RouteParamList> = {
    navigation: StackNavigationProp<RouteParamList, T>;
    route: RouteProp<RouteParamList, T>;
}