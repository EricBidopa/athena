import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Platform,
} from "react-native";
import { Picker } from "@react-native-picker/picker";
import DateTimePicker from "@react-native-community/datetimepicker";
import { useNavigation } from "@react-navigation/native";

const AddStudentPage = () => {
  const [studentFullName, setStudentFullName] = useState("");
  const [studentDob, setStudentDob] = useState("");
  const [studentLevel, setStudentLevel] = useState("");
  const [studentSchool, setStudentSchool] = useState("");
  const [loading, setLoading] = useState(false);

  const [showDatePicker, setShowDatePicker] = useState(false);
  const navigation = useNavigation();

  const handleDateChange = (event, selectedDate) => {
    setShowDatePicker(false);
    if (selectedDate) {
      const formattedDate = selectedDate.toISOString().split("T")[0]; // Format as YYYY-MM-DD
      setStudentDob(formattedDate);
    }
  };

  const handleContinue = () => {
    if (!studentFullName || !studentDob || !studentLevel || !studentSchool) {
      alert("Please fill out all fields");
      return;
    }
    setLoading(true);
    // Perform your submission logic here
    navigation.navigate("AllStudentsPage")
    console.log({ studentFullName, studentDob, studentSchool, studentLevel });
    setLoading(false);
  };

  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <View style={styles.formContainer}>
          <Text style={styles.title}>Add Student</Text>
          <TextInput
            style={styles.input}
            placeholder="Child's Full Name"
            value={studentFullName}
            onChangeText={setStudentFullName}
          />
          <TouchableOpacity onPress={() => setShowDatePicker(true)}>
            <TextInput
              style={styles.input}
              placeholder="Child's Date of Birth (YYYY-MM-DD)"
              value={studentDob}
              editable={false} // Prevent typing
            />
          </TouchableOpacity>
          {showDatePicker && (
            <DateTimePicker
              value={studentDob ? new Date(studentDob) : new Date()}
              mode="date"
              display={Platform.OS === "ios" ? "spinner" : "default"}
              onChange={handleDateChange}
            />
          )}
          <Picker
            selectedValue={studentSchool}
            style={styles.input}
            onValueChange={(itemValue) => setStudentSchool(itemValue)}
          >
            <Picker.Item label="Select School" value="" />
            <Picker.Item label="School A" value="School A" />
            <Picker.Item label="School B" value="School B" />
          </Picker>
          <Picker
            selectedValue={studentLevel}
            style={styles.input}
            onValueChange={(itemValue) => setStudentLevel(itemValue)}
          >
            <Picker.Item label="Select Academic Level" value="" />
            <Picker.Item label="Primary" value="Primary" />
            <Picker.Item label="Middle School" value="Middle School" />
            <Picker.Item label="High School" value="High School" />
          </Picker>
          <TouchableOpacity
            style={[styles.button, loading && styles.buttonDisabled]}
            onPress={handleContinue}
            disabled={loading}
          >
            <Text style={styles.buttonText}>
              {loading ? "Loading..." : "Continue"}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "white",
  },
  wrapper: {
    // backgroundColor: "blue",
    justifyContent: "center",
    flex: 1,
  },
  formContainer: {
    // backgroundColor: "brown",
    // borderRadius: 10,
    padding: 20,
    borderRadius: 10,

    
    // Shadow for iOS
    // shadowColor: '#000',
    // shadowOpacity: 0.10,
    // shadowOffset: { width: 0, height: 1 },
    // shadowRadius: 10,

    // Shadow for Android
    // elevation: 2,

  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 10,
    marginBottom: 15,
    fontSize: 16,
    backgroundColor: "#f9f9f9",
  },
  button: {
    backgroundColor: "#FFD700",
    padding: 15,
    borderRadius: 8,
    alignItems: "center",
  },
  buttonDisabled: {
    backgroundColor: "#ccc",
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#000",
  },
});

export default AddStudentPage;
