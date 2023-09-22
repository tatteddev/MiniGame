import { View, Text, StyleSheet } from "react-native";

function GameScreen() {
    return (
    <View style={styles.screen}>
        <Text>Opponent's Guess</Text>
        {/* Guess */}
        <View>
            <Text>LOWER</Text>
            <Text>HIGHER</Text>
            {/* +- */}
        </View>
        {/* <View>Log Rounds</View> */}
    </View>
    );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 24,
    }
});

export default GameScreen;