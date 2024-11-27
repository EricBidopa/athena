import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Pressable,
  SafeAreaView,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import StudentItem from "./StudentItem";

const AllStudentsPage = () => {
  const [isEmpty, setIsEmpty] = useState(false);

  const navigation = useNavigation();
  const handleAddNewStudentBtnPressed =()=>{
    navigation.navigate("AddStudentPage")
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.allStudentsWrapper}>
        <Text style={styles.allStudentsTitle}>Who's Learning?</Text>
        <View style={styles.allStudentsItemsWrapper}>
          <StudentItem />
          <StudentItem />
          <StudentItem />
        </View>
        <View style={styles.allStudentsOtherItems}>
          <Pressable
            style={styles.addStudentBtn}
            onPress={handleAddNewStudentBtnPressed}
            disabled={isEmpty}
          >
            <Text style={styles.addStudentBtnText}>Add New Student</Text>
          </Pressable>
          <Pressable>
            <Text style={styles.logoutBtnText}>Log out</Text>
          </Pressable>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default AllStudentsPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    paddingHorizontal: "10%",
    paddingTop: "12%",
  },
  allStudentsWrapper: {
    width: "100%",
    flexDirection: "column",
    // backgroundColor: "blue"
  },
  allStudentsTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 15,
    textAlign: "center",
  },
  allStudentsItemsWrapper: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    marginBottom: 20,
  },
  allStudentsOtherItems: {
    flexDirection: "column",
    alignItems: "center",
    marginBottom: 30,
  },
  addStudentBtn: {
    padding: 17,
    borderColor: "black",
    borderWidth: 1,
    alignItems: "center",
    borderRadius: 10,
    marginVertical: 10,
  },
  addStudentBtnText: {
    fontSize: 14,
    fontWeight: "600",
  },
  logoutBtn: {
    padding: 17,
    borderColor: "red",
    borderWidth: 1,
    alignItems: "center",
    borderRadius: 10,
  },
  logoutBtnText: {
    fontSize: 16,
    color: "red",
    fontWeight: "600",
  },
});
