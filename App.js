import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Button,
  FlatList,
} from "react-native";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);
  const [isAddMode, setIsAddMode] = useState(false)
  const addCourse = (goalEntered) => {
    setCourseGoals([
      ...courseGoals,
      { id: Math.random().toString(), value: goalEntered },
    ]);
    setIsAddMode(false);
  };
  const cancelGoalAdditionHandler=()=>{
    setIsAddMode(false);
  }
  const removeGoalHandler=(goalId)=>{
    setCourseGoals(courseGoals=>{
      return courseGoals.filter(goal=>goal.id!==goalId);
    })
  }
  return (
    <View style={styles.screen}>
      <Button title="Add New Goal" onPress={()=>setIsAddMode(true)} />
      <GoalInput onCancel={cancelGoalAdditionHandler} isVisible={isAddMode} onAddGoal={addCourse} />
      <FlatList
        keyExtractor={(item, index) => item.id}
        data={courseGoals}
        renderItem={(itemData) => <GoalItem onDelete={()=>removeGoalHandler(itemData.item.id)} title={itemData.item.value} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50,
  },
});
