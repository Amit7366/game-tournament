import { images } from "@/constants/images";
import { Link, useRouter } from "expo-router";
import React from "react";
import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";

export default function Login() {
  const router = useRouter();
  return (
    <View className="flex-1 bg-white">
      {/* Top Section */}
      <View className="bg-green-900 rounded-b-2xl h-1/2 relative flex flex-col justify-center items-center">
        {/* Logo Circle */}
        <Image
          source={images.bg} // Replace with the path to your logo image
          className="absolute top-0 left-0 rounded-b-2xl w-screen h-full object-scale-down z-10"
        />
        <View className="absolute top-0 left-0 rounded-b-2xl w-screen h-full bg-green-900 opacity-85 z-20"></View>
        <View className="relative z-30">
          <View className="bg-yellow-300 w-24 h-24 rounded-full mx-auto flex justify-center items-center">
            <Text className="text-white text-5xl font-light rotate-45">
              |||
            </Text>
          </View>
          <Text className="text-white text-xl font-bold mt-5">
            Welcome Back!
          </Text>
        </View>
      </View>

      {/* Form Section */}
      <View className="px-8 mt-8 space-y-4">
        <View className="mb-5">
          <Text className="text-gray-700 font-medium">Email Address</Text>
          <TextInput
            placeholder="johnwilliams@gmail.com"
            className="border-b border-yellow-500 py-2 text-black"
            placeholderTextColor="#000"
          />
        </View>
        <View className="mb-5">
          <Text className="text-gray-700 font-medium mt-3">Password</Text>
          <TextInput
            placeholder="*******"
            secureTextEntry
            className="border-b border-gray-300 py-2 text-black"
          />
        </View>

        {/* Remember Me & Forgot Password */}
        <View className="flex-row justify-between items-center mt-4">
          <View className="flex-row items-center">
            {/* <CheckBox value={false} /> */}
            <Text className="ml-2 text-gray-700">Remember me</Text>
          </View>
          <Text className="text-gray-600">Forgot Password?</Text>
        </View>

        {/* Login Button */}
        <TouchableOpacity
          onPress={() => {
            router.push("/home")
          }}
          className="bg-green-700 rounded-xl py-3 mt-6 items-center"
        >
          <Text className="text-white font-bold">LOGIN</Text>
        </TouchableOpacity>

        {/* Signup Link */}
        <View className="mt-6 items-center">
          <Text className="text-gray-600">
            Don’t have an account?{" "}
            <Link href="/signup" className="text-green-800 font-bold">
              SIGN UP
            </Link>
          </Text>
        </View>
      </View>
    </View>
  );
}
