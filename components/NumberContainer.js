import React from "react";
import COLORS from "../constants/colors";
import { View, Text, StyleSheet } from "react-native";

const NumberContainer = (props) => {
    return (
        <View style={styles.container}>
            <Text style={styles.number}>{props.children}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        borderWidth: 2,
        borderColor: COLORS.black,
        padding: 10,
        borderRadius: 10,
        marginVertical: 10,
        alignItems: "center",
        justifyContent: "center"
    },
    number: {
        color: COLORS.black,
        fontSize: 22
    }
});

export default NumberContainer;
