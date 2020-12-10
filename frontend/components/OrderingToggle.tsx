import React from "react";
import {changeOrdering} from "../Actions";
import {useDispatch} from "react-redux";
import { View, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';

const OrderingToggle = () => {
    const dispatch = useDispatch();

    // State used to mark that a ordering is selected
    const [desc, setDesc] = React.useState(false)
    const onClickDesc = () => {
        setDesc(true)
        setAsc(false)
    }

    const [asc, setAsc] = React.useState(false)
    const onClickAsc = () => {
        setAsc(true)
        setDesc(false)
    }

    return (
        <View style={styles.orderToggles}>
            <View style={{ paddingRight: 20, width: 75 }}>
                { desc ? 
                <Button onPress={() => {
                    dispatch(changeOrdering({order: "desc"}));
                    onClickDesc();
                }} title={"↑"} titleStyle={{ fontSize: 30, color: "grey" }}/>
                :
                <Button onPress={() => {
                    dispatch(changeOrdering({order: "desc"}));
                    onClickDesc();
                }} title={"↑"} titleStyle={{ fontSize: 30 }}/>
                }
            </View>
            <View style={{ paddingRight: 20, width: 75 }}>
            { asc ? 
                <Button onPress={() => {
                    dispatch(changeOrdering({order: "asc"}));
                    onClickAsc();
                }} title={"↓"} titleStyle={{ fontSize: 30, color: "grey" }}/>
                :
                <Button onPress={() => {
                    dispatch(changeOrdering({order: "asc"}));
                    onClickAsc();
                }} title={"↓"} titleStyle={{ fontSize: 30 }}/>
                }
            </View>
        </View>
    );
};

export default OrderingToggle;

const styles = StyleSheet.create({
    orderToggles: {
        width: 700,
        flexDirection: "row",
        justifyContent: "center",
        top: 50,

    }
})