import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { StatusBar } from "react-native";

export default function TabLayout() {
  return (
    <>
      <StatusBar hidden={true} />
      <Tabs
        screenOptions={{
          headerShown: false,
          tabBarStyle: {
            paddingVertical: 30,
          },
        }}
      >
        <Tabs.Screen
          name="index"
          options={{
            title: "Play",
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="game-controller" color={color} size={size} />
            ),
          }}
        />
        <Tabs.Screen
          name="shop"
          options={{
            title: "Shop",
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="cart" color={color} size={size} />
            ),
          }}
        />
        <Tabs.Screen
          name="ongoing"
          options={{
            title: "OnGoing",
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="time" color={color} size={size} />
            ),
          }}
        />
        <Tabs.Screen
          name="result"
          options={{
            title: "Result",
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="trophy" color={color} size={size} />
            ),
          }}
        />
        <Tabs.Screen
          name="profile"
          options={{
            title: "Profile",
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="person" color={color} size={size} />
            ),
          }}
        />
      </Tabs>
    </>
  );
}
