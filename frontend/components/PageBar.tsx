import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../Reducers";
import {newPage} from "../Actions/pageActions";
import { View, StyleSheet } from "react-native";
import { Button } from 'react-native-elements';

const PageBar = () => {
    const dispatch = useDispatch();
    const current = useSelector((state: RootState) => state.page.current);
    const total = useSelector((state: RootState) => state.page.total);

    // Update page number
    const onClick = (newCurrent: number) => {
        if (newCurrent < 1 || newCurrent > total) return;
        dispatch(newPage(newCurrent, total));
    };

    return (
        <View style={styles.pagination}>
            <View style={styles.button1}>
                { current != 1 ? <Button onPress={() => onClick(current - 1)} title={"Prev"}>
                </Button>: <Button onPress={() => onClick(current - 1)} title={"Prev"} titleStyle={{ color: "gray"}}>
                </Button>}
            </View>
            <View>
            { current != total ? <Button onPress={() => onClick(current + 1)} title={"Next"}>
                </Button>: <Button onPress={() => onClick(current + 1)} title={"Next"} titleStyle={{ color: "gray"}}>
                </Button>}
            </View>

        </View>
    )
};

export default PageBar;

const styles = StyleSheet.create({
    pagination: {
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
        height: 100,
        flexDirection: "row",
        marginBottom: 50

    },
    button1: {
        paddingRight: "60%"
    }
})