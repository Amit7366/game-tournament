// app/index.tsx
import React, { useEffect } from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
} from "react-native-reanimated";
import { Link } from "expo-router";
import { images } from "@/constants/images";

export default function Index() {
  const opacity = useSharedValue(0);
  const translateY = useSharedValue(30);

  useEffect(() => {
    opacity.value = withTiming(1, { duration: 1000 });
    translateY.value = withTiming(0, { duration: 1000 });
  }, []);

  const animatedStyle = useAnimatedStyle(() => ({
    opacity: opacity.value,
    transform: [{ translateY: translateY.value }],
  }));

  return (
    <View className="flex-1 items-center justify-center bg-green-900 px-6">
      {/* Optional Background Image */}
      {/*
      <Image
        source={require("../assets/images/bg.png")}
        className="absolute w-full h-full"
      />
      <View className="absolute w-full h-full bg-green-900 opacity-80" />
      */}

      <Animated.View style={animatedStyle} className="items-center space-y-4">
        <Image
          source={images.icon} // Add logo.png in your assets/images folder
          className="w-24 h-24 mb-4"
          resizeMode="contain"
        />
        <Text className="text-white text-3xl font-bold">Welcome to MyApp</Text>
        <Text className="text-white text-lg text-center">
          Let’s get started!
        </Text>
        <View className="flex gap-4 flex-row space-x-4 mt-6">
          <Link href="/login" asChild>
            <TouchableOpacity className="bg-white rounded-full px-6 py-3">
              <Text className="text-green-900 font-bold text-base">Login</Text>
            </TouchableOpacity>
          </Link>
          <Link href="/signup" asChild>
            <TouchableOpacity className="border border-white rounded-full px-6 py-3">
              <Text className="text-white font-bold text-base">Register</Text>
            </TouchableOpacity>
          </Link>
        </View>
      </Animated.View>
    </View>
  );
}