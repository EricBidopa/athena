import { StyleSheet, Text, View, TextInput, Pressable, SafeAreaView } from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";


const OtpPage = ({route}) => {
    const navigation = useNavigation();
    const {email} = route.params;
  const [otpCode, setOtpCode] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const[isEmpty, setIsEmpty] = useState(true)



  const handleVerifyBtnClicked =() => {
    navigation.navigate("SignupPage")
  };


  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.wrapper}>
        <Text style={styles.headerText}>OdeoPod</Text>
        <Text style={styles.subtext}>Choose A Username:</Text>
        <View
          style={[
            styles.searchContainer,
            isFocused && styles.searchContainerFocused,
          ]}
        >
          <TextInput
            style={styles.searchInput}
            placeholder="Enter OTP Code Sent to Email"
            placeholderTextColor="gray"
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            value={otpCode}
            onChangeText={(text) => {
              const formattedText = text.replace(/\s/g, ""); // Convert to lowercase and remove spaces
              setOtpCode(formattedText);
              setIsEmpty(false)
            }}
          />
        </View>
        <Text>{email}</Text>
        <Pressable style={styles.buttons} onPress={handleVerifyBtnClicked} disabled={isEmpty}>
          <Text>Verify Code</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

export default OtpPage;

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
