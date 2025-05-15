import { images } from "@/constants/images";
import { Link, useRouter } from "expo-router";
import React, { useReducer } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";

export default function Signup() {
  const router = useRouter();
  return (
    <ScrollView>
      {/* Top Section */}
      <View className="bg-green-900 rounded-b-2xl h-1/6 relative flex flex-col justify-center items-center">
        {/* Logo Circle */}
        <Image
          source={images.bg} // Replace with the path to your logo image
          className="absolute top-0 left-0 rounded-b-2xl w-screen h-full object-scale-down z-10"
        />
        <View className="absolute top-0 left-0 rounded-b-2xl w-screen h-full bg-green-900 opacity-85 z-20"></View>
        <View className="relative z-30">
          <Text className="text-white text-xl font-bold mt-5">
            Create account!
          </Text>
        </View>
      </View>

      {/* Form Section */}
      <View className="px-8 mt-8 space-y-4">
        <View className="mb-6">
          <Text className="text-gray-700 font-medium">Name</Text>
          <TextInput
            placeholder="Ramim Mir"
            className="border-b border-yellow-500 pb-2 text-black"
            placeholderTextColor="#000"
          />
        </View>
        <View className="mb-6">
          <Text className="text-gray-700 font-medium">Username</Text>
          <TextInput
            placeholder="mirgaming"
            className="border-b border-yellow-500 pb-2 text-black"
            placeholderTextColor="#000"
          />
        </View>
        <View className="mb-6">
          <Text className="text-gray-700 font-medium">Mobile Number</Text>
          <TextInput
            placeholder="your mobile number"
            className="border-b border-yellow-500 pb-2 text-black"
            placeholderTextColor="#000"
          />
        </View>
        <View className="mb-6">
          <Text className="text-gray-700 font-medium">Email Address</Text>
          <TextInput
            placeholder="johnwilliams@gmail.com"
            className="border-b border-yellow-500 pb-2 text-black"
            placeholderTextColor="#000"
          />
        </View>
        <View className="mb-6">
          <Text className="text-gray-700 font-medium mt-3">Password</Text>
          <TextInput
            placeholder="Password"
            secureTextEntry
            className="border-b border-gray-300 pb-2 text-black"
          />
        </View>

        {/* Login Button */}
        <TouchableOpacity className="bg-green-700 rounded-xl py-3 mt-6 items-center">
          <Text className="text-white font-bold">REGISTER</Text>
        </TouchableOpacity>

        {/* Signup Link */}
        <View className="mt-6 items-center">
          <Text className="text-gray-600">
            Already have an account?{" "}
            <Link href="/login" className="text-green-800 font-bold">
              LOGIN
            </Link>
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}
