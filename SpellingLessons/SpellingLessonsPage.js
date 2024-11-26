import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Pressable,
  TextInput,
} from "react-native";
import React, { useState } from "react";
import { Ionicons } from "@expo/vector-icons";

const SpellingLessonsPage = () => {
  const [isPressed, setIsPressed] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  const speakIsPressed = () => {
    setIsPressed(true);
    console.log("its pressed");
    setIsPressed(false);
  };
  const submitBtnPressed = ()=>{
    console.log("answer submitted")
  }
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View style={styles.wrapper}>
          <Pressable onPress={speakIsPressed} style={styles.speakBtn}>
            <Ionicons
              name={isPressed == true ? "mic" : "mic-outline"}
              size={80}
              color="black"
            />
          </Pressable>
          <View
            style={[
              styles.searchContainer,
              isFocused && styles.searchContainerFocused,
            ]}
          >
            <TextInput
              style={styles.searchInput}
              placeholder="Spell the Word Here"
              placeholderTextColor="gray"
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
            />
          </View>

          <Pressable
            style={styles.submitBtn}
            onPress={submitBtnPressed}
          >
            <Text>Submit Answer</Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SpellingLessonsPage;

const styles = StyleSheet.create({
  container: {
    paddingVertical: "10%",
    paddingHorizontal: "5%",
    backgroundColor: "yellow",
    width: "100%",
    height: "100%",

    // flex: 1,
  },
  wrapper: {
    // backgroundColor: "blue",
    flex: 1,
    flexDirection: "column",
    gap: 2,
    paddingVertical: "5%",
  },
  speakBtn: {
    padding: "30%",
    backgroundColor: "pink",
    borderRadius: 50,
    alignSelf: "center",
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f0f0f0",
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderWidth: 1,
    borderColor: "#f0f0f0",
    marginVertical: 15,
  },
  searchContainerFocused: {
    borderColor: "black", // Focused border color
    borderWidth: 1.5,
  },
  searchInput: {
    flex: 1,
    fontSize: 30,
  },
  submitBtn: {
    padding: 17,
    borderColor: "black",
    borderWidth: 1,
    alignItems: "center",
    borderRadius: 10,
    marginVertical: 10,
  },
});
