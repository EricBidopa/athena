import { StyleSheet, Text, View, TextInput, Pressable } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";

const SignupPage = () => {
  const navigation = useNavigation();
  const [parentFullName, setParentFullName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isFullNameFocused, setIsFullNameFocused] = useState(false);
  const [isPhoneNumberFocused, setIsPhoneNumberFocused] = useState(false);
  const [isEmpty, setIsEmpty] = useState(true);

  const handleContinueBtnClicked = () => {
    navigation.navigate("AllStudentsPage");
  };

  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <Text style={styles.headerText}>Athena</Text>
        <Text style={styles.subtext}>Adult Full Name:</Text>
        <View
          style={[
            styles.searchContainer,
            isFullNameFocused && styles.searchContainerFocused,
          ]}
        >
          <TextInput
            style={styles.searchInput}
            placeholder="John Doe"
            placeholderTextColor="gray"
            onFocus={() => setIsFullNameFocused(true)}
            onBlur={() => setIsFullNameFocused(false)}
            value={parentFullName}
            onChangeText={(text) => {
              setParentFullName(text);
              setIsEmpty(false);
            }}
          />
        </View>
        <Text style={styles.subtext}>Your Phone Number:</Text>
        <View
          style={[
            styles.searchContainer,
            isPhoneNumberFocused && styles.searchContainerFocused,
          ]}
        >
          <TextInput
            style={styles.searchInput}
            placeholder="+233201473326"
            placeholderTextColor="gray"
            onFocus={() => setIsPhoneNumberFocused(true)}
            onBlur={() => setIsPhoneNumberFocused(false)}
            value={phoneNumber}
            onChangeText={(text) => {
              setPhoneNumber(text);
              setIsEmpty(false);
            }}
          />
        </View>
        <Pressable
          style={styles.buttons}
          onPress={handleContinueBtnClicked}
          disabled={isEmpty}
        >
          <Text>Continue</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default SignupPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "blue",
    paddingHorizontal: "10%",
    paddingTop: "12%",
    justifyContent: "center", // Center content vertically
  },
  wrapper: {
    backgroundColor: "pink",
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  headerText: {
    fontWeight: "bold",
    fontSize: 30,
    alignSelf: "center",
    marginBottom: "7%",
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
    fontSize: 15,
  },
  buttons: {
    padding: 17,
    borderColor: "black",
    borderWidth: 1,
    alignItems: "center",
    borderRadius: 10,
    marginVertical: 10,
  },
});
