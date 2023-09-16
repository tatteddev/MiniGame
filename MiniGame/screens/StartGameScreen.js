import { View, TextInput, StyleSheet } from "react-native";
import PrimaryButton from "../components/PrimaryButton";

function StartGameScreen() {
  return (
    <View style={styles.inputContainer}>
      <TextInput />
      <PrimaryButton>Reset</PrimaryButton>
      <PrimaryButton>Confirm</PrimaryButton>
    </View>
  );
}

const styles = StyleSheet.create({
    inputContainer: { 
      marginTop: 100,
      marginHorizontal: 24,
      padding: 16,
      backgroundColor: "#72063c",
      borderRadius: 8,
      elevation: 4,
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 4
      },
      shadowRadius: 6,
      shadowOpacity: 0.26,
    }
});

export default StartGameScreen;
