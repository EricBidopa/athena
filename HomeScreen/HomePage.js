import { StyleSheet, Text, View, FlatList, Pressable } from 'react-native';
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';

const HomePage = () => {
  const [featuredLessons, setFeaturedLessons] = useState([
    { lessonName: 'Spelling Lessons', id: '1' },
    { lessonName: 'Maths Lessons', id: '2' },
    // { lessonName: 'That Lessons', id: '2' },
    
  ]);
  const navigation = useNavigation()

  return (
    <View style={styles.container}>
      <FlatList
      // numColumns={2}
        keyExtractor={(item) => item.id}
        data={featuredLessons}
        renderItem={({ item }) => (
          <Pressable style={styles.lessonItem} onPress={()=>navigation.navigate("SpellingLessonsPage")}>
            <Text style={styles.lessonText}>{item.lessonName}</Text>
          </Pressable>
        )}
      />
    </View>
  );
};

export default HomePage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "blue",
    padding: "7%",
  },
  lessonItem: {
    backgroundColor: "pink",
    padding: 30,
    marginBottom: 10,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: "center",
    // height: 300
  },
  lessonText: {
    color: "black",
    fontSize: 27,
  },
});
