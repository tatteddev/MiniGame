import { StyleSheet, ImageBackground, SafeAreaView } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";

import StartGameScreen from "./screens/StartGameScreen";
import GameScreen from "./screens/GameScreen";
import GameOverScreen from "./screens/GameOverScreen";
import Colors from "./constants/colors";

export default function App() {
  const [userNumber, setUserNumber] = useState();
  const [gameOver, setGameOver] = useState(true);
  const [rounds, setRounds] = useState(0);

  const [fontsLoaded] = useFonts({
    "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
    "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  function selectNumberHandler(selectedNumber) {
    setUserNumber(selectedNumber);
    setGameOver(false);
  }

  function gameOverHandler(numberOfRounds) {
    setGameOver(true);
    setRounds(numberOfRounds);
  }

  function restartGameHandler() {
    setUserNumber(null);
    setRounds(0);
  }

  let screen = <StartGameScreen onSelectNumber={selectNumberHandler} />;

  if (userNumber) {
    screen = (
      <GameScreen userChoice={userNumber} onGameOver={gameOverHandler} />
    );
  }

  if (gameOver && userNumber) {
    screen = (
      <GameOverScreen
        userNumber={userNumber}
        rounds={rounds}
        onRestart={restartGameHandler}
      />
    );
  }

  return (
    <LinearGradient
      colors={[Colors.primary500, Colors.secondary500]}
      style={styles.rootScreen}
    >
      <ImageBackground
        source={require("./assets/images/background.png")}
        resizeMode="cover"
        style={styles.rootScreen}
        imageStyle={styles.backgroundImage}
      >
        <SafeAreaView style={styles.rootScreen}>{screen}</SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
  backgroundImage: {
    opacity: 0.25,
  },
});
