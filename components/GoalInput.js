import React, { useState } from "react";
import { View, StyleSheet, Button, TextInput, Modal } from "react-native";

const GoalInput = (props) => {
  const [goalEntered, setGoalEntered] = useState("");
  const goalInputHandler = (enteredText) => {
    setGoalEntered(enteredText);
  };
  const addGoalHandler = () => {
    props.onAddGoal(goalEntered);
    setGoalEntered("");
  };
  return (
    <Modal visible={props.isVisible} animationType="slide">
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Add text"
          style={styles.input}
          onChangeText={goalInputHandler}
          value={goalEntered}
        />
        <View style={styles.buttonsContainer}>
          <View style={styles.button}>
            <Button title="Cancel" color="red" onPress={props.onCancel} />
          </View>
          <View style={styles.button}>
            <Button title="Add" onPress={addGoalHandler} />
          </View>
        </View>
      </View>
    </Modal>
  );
};
const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    width: "80%",
    borderColor: "black",
    borderWidth: 1,
    marginBottom: 10,
    padding: 10,
  },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "60%",
  },
  button: {
    width:"40%"
  }
});
export default GoalInput;
