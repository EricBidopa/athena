import { StyleSheet, Text, View, SafeAreaView, Pressable } from "react-native";
import React from "react";

const SpellingLessonsPage = () => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View style={styles.wrapper}>
            <View>

            </View>
          <Text>This spelings page</Text>
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
    backgroundColor: "blue",
    flex: 1
  },
});
