import React from "react";
import { StyleSheet, View } from "react-native";
import Header from "./components/Header";
import StartGameScreen from "./screens/StartGameScreen";
import COLORS from "./components/colors";

export default function App() {
    return (
        <View style={styles.screen}>
            <Header title="Guess a number" />
            <StartGameScreen />
        </View>
    );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: COLORS.background
    }
});
