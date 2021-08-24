import React from "react";
import { View, Text, StyleSheet } from "react-native";
import COLORS from "../constants/colors";

const Header = (props) => {
    return (
        <View style={styles.header}>
            <Text style={styles.headerTitle}>{props.title}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    header: {
        width: "100%",
        height: 90,
        paddingTop: 36,
        backgroundColor: COLORS.black,
        alignItems: "center",
        justifyContent: "center"
    },
    headerTitle: {
        color: COLORS.background,
        fontSize: 18
    }
});

export default Header;
