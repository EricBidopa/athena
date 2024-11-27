import { StyleSheet, Text, View, Pressable } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const StudentItem = ({ student = {} }) => {
  const navigation = useNavigation();


  const handleStudentItemPressed = ()=>{
    navigation.navigate("HomePage")
  }

  if (!student) {
    return (
      <View style={styles.emptyWrapper}>
        <Text>Added Students Appear Here</Text>
      </View>
    );
  }

  return (
    <Pressable onPress={handleStudentItemPressed}>
      <View style={styles.studentItemWrapper}>
        <View style={styles.studentImgWrapper}>
          <Text style={styles.initialsText}>L</Text>
        </View>
        <Text style={styles.studentName}>Liam Waema</Text>
      </View>
    </Pressable>
  );
};

export default StudentItem;

const styles = StyleSheet.create({
  studentItemWrapper: {
    alignItems: "center",
    flexDirection: "column",
    margin: 10,
  },
  studentImgWrapper: {
    backgroundColor: "pink",
    borderRadius: 25, // Half of the width/height for a perfect circle
    width: 50,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
  },
  initialsText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
  },
  studentName: {
    textAlign: "center",
    fontSize: 16,
    marginTop: 5,
  },
  emptyWrapper: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
});
