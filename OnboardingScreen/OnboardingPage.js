import { View, Text, Pressable, StyleSheet, TextInput, KeyboardAvoidingView, ScrollView, Platform } from "react-native";
import React from "react";

// import Constants from "expo-constants";
import { StatusBar } from "expo-status-bar";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";

const OnboardingPage = () => {
  const navigation = useNavigation();
  const [isFocused, setIsFocused] = useState(false);
  const [email, setEmail] = useState("")
  const[isEmpty, setIsEmpty] = useState(true)

  // React.useEffect(() => {
  //   if (user) {
  //     navigation.navigate("HomePage");
  //   }
  // }, [user]);

  

  const handleLogInBtnClicked =() => {
    navigation.navigate("OtpPage", {email})
  };


  return (
    <KeyboardAvoidingView
    style={styles.container}
    behavior={Platform.OS === "ios" ? "padding" : "height"}

  >
        <StatusBar style="auto" />
          <View style={styles.wrapper}>
          <View>
            <Text style={styles.headerText}>Athena</Text>
            <Text style={styles.subtext}>
              A.I Tutor for every Child ee
            </Text>
          </View>
          <View style={styles.InputAndButtonsWrapper}>

            {/* extracted part begins  */}
          <View
          style={[
            styles.searchContainer,
            isFocused && styles.searchContainerFocused,
          ]}
        >
          <TextInput
            style={styles.searchInput}
            placeholder="Enter Valid Email"
            placeholderTextColor="gray"
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            value={email}
            onChangeText={(text) => {
              const formattedText = text.replace(/\s/g, ""); // Convert to lowercase and remove spaces
              setEmail(formattedText);
              setIsEmpty(false)
            }}
          />
        </View>

        {/* extracted part ends */}
          
            <Pressable
              style={styles.buttons}
              onPress={handleLogInBtnClicked}
              disabled={isEmpty}
            >
              <Text>Sign Up / Log In</Text>
            </Pressable>

              <>
                <Text style={{ color: "red" }}>
                  There was an error. Try again
                </Text>
                <Text style={{ color: "lightred" }}>Error This</Text>
              </>
          </View>
          </View>
      </KeyboardAvoidingView>
  );
};

export default OnboardingPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "blue",
    paddingHorizontal: "10%",
    paddingTop: "12%",
    // paddingBottom: "15%"
    // alignContent: "center",
    // // justifyContent: 'center',
  },

  wrapper: {
    backgroundColor: "pink",
    gap: 150,
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  InputAndButtonsWrapper: {
    backgroundColor: "lightblue",
    flexDirection: "column",
    // flex: 1,
    gap: 5,
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
  headerText: {
    fontWeight: "bold",
    fontSize: 30,
    alignSelf: "center",
    marginBottom: "7%",
  },
  subtext: {
    fontSize: 15,
    textAlign: "center",
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
