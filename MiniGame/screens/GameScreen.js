import { View, Text, StyleSheet } from "react-native";
import Title from "../components/Title";

function GameScreen() {
  return (
    <View style={styles.screen}>
        <Title>Opponent's Guess</Title>
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
    padding: 28,
  },
});

export default GameScreen;
