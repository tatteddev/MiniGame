import { Text, StyleSheet } from "react-native";
import Colors from "../../constants/colors";

function InstructionText({children}) {
    return  <Text style={styles.instructionText}>{children}</Text>
}

const styles = StyleSheet.create({
    instructionText: {
        color: Colors.secondary500,
        fontFamily: "open-sans",
        fontSize: 24,
      },
});

export default InstructionText;