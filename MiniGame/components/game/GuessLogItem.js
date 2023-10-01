import { View, Text, StyleSheet } from "react-native";
import Colors from "../../constants/colors";

function GuessLogItem({roundNumber, guess}) {
    return <View style={styles.listItem}>
        <Text style={styles.itemText}>Round #{roundNumber}</Text>
        <Text style={styles.itemText}>Opponent's Guess: {guess}</Text>
    </View>
}

const styles = StyleSheet.create({
    listItem: {
        borderColor: Colors.primary700,
        borderWidth: 1,
        borderRadius: 40,
        padding: 12,
        marginVertical: 8,
        backgroundColor: Colors.secondary500,
        flexDirection: "row",
        justifyContent: "space-between",
        width: "100%",
        elevation: 4,
        shadowColor: "black",
        shadowOffset: {width: 0, height: 0},
        shadowRadius: 3,
        shadowOpacity: 0.25,
    },
    itemText: {
        color: Colors.primary500,
        fontSize: 18,
        fontFamily: "open-sans",
    }
});

export default GuessLogItem;