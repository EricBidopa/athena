// navigation/AppNavigator.js
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { StyleSheet } from "react-native";

// Importing Screens
import OnboardingPage from "../OnboardingScreen/OnboardingPage";
import HomePage from "../HomeScreen/HomePage";
import OtpPage from "../OnboardingScreen/OtpPage";

const Bottomnav = createBottomTabNavigator();
const Stack = createStackNavigator();

function BottomNavigationGroup() {
  return (
    <Bottomnav.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, focused, size }) => {
          let iconName;

          if (route.name === "Home") {
            iconName = focused ? "home" : "home-outline";
          } else if (route.name === "Search") {
            iconName = focused ? "search" : "search-outline";
          } else if (route.name === "Subscriptions") {
            iconName = focused ? "albums" : "albums-outline";
          } else if (route.name === "Wallet") {
            iconName = focused ? "wallet" : "wallet-outline";
          } else if (route.name === "Profile") {
            iconName = focused ? "person" : "person-outline";
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarStyle: styles.tabBar,
        tabBarActiveTintColor: "black",
        tabBarInactiveTintColor: "grey",
      })}
    >
      <Bottomnav.Screen
        name="Home"
        component={HomePage}
        options={{ headerShown: true, title: 'Explore' }}
      />
      <Bottomnav.Screen name="Search" component={HomePage} />
      <Bottomnav.Screen name="Subscriptions" component={HomePage} />
      <Bottomnav.Screen name="Wallet" component={HomePage} />
      <Bottomnav.Screen name="Profile" component={HomePage} />
    </Bottomnav.Navigator>
  );
}

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="OnboardingPage">
        <Stack.Screen
          name="OnboardingPage"
          component={OnboardingPage}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="HomePage"
          component={BottomNavigationGroup}
          options={{ headerShown: false }}
        />
        
      <Stack.Screen
          name="OtpPage"
          component={OtpPage}
          options={{ headerShown: false }}
        />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: "white",
    paddingBottom: 10,
    paddingTop: 10,
    height: 70,
  },
  header: {
    backgroundColor: "white",
  },
});
