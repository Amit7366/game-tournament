import { images } from '@/constants/images';
import React from 'react';
import { View, Text, Image, ScrollView } from 'react-native';

const MatchDetailsScreen = () => {
  return (
    <ScrollView className="flex-1 bg-black">
      {/* Banner Image */}
      <Image
        source={images.bg}
        className="w-full h-52"
        resizeMode="cover"
      />

      <View className="px-4 py-3">
        {/* Match Info */}
        <Text className="text-white text-lg font-bold mb-2">Solo Time | Mobile</Text>

        <View className="flex-row flex-wrap gap-2 mb-3">
          <Text className="bg-gray-700 text-white px-3 py-1 rounded-full text-sm">Type: <Text className="font-bold">Solo</Text></Text>
          <Text className="bg-gray-700 text-white px-3 py-1 rounded-full text-sm">Version: <Text className="font-bold">TPP</Text></Text>
          <Text className="bg-gray-700 text-white px-3 py-1 rounded-full text-sm">Map: <Text className="font-bold">Bermuda</Text></Text>
          <Text className="bg-gray-700 text-white px-3 py-1 rounded-full text-sm">Match Type: Paid</Text>
          <Text className="bg-gray-700 text-white px-3 py-1 rounded-full text-sm">Entry Fee: ৳20</Text>
          <Text className="bg-gray-700 text-white px-3 py-1 rounded-full text-sm">Match Schedule: 25/01/2025 05:49 PM</Text>
        </View>

        {/* Prize Details */}
        <Text className="text-white font-bold text-base mb-1">Prize Details</Text>
        <View className="flex-row gap-4 mb-4">
          <Text className="bg-gray-200 text-black px-4 py-2 rounded-md font-semibold">Winning Prize: ৳800</Text>
          <Text className="bg-gray-200 text-black px-4 py-2 rounded-md font-semibold">Per Kill: ৳10</Text>
        </View>

        {/* Room Info Note */}
        <View className="bg-blue-500 px-4 py-2 rounded-md mb-4">
          <Text className="text-white font-medium text-center">
            Room Details Will Be Shared Before 8–10 Minutes Of Match Start Time.
          </Text>
        </View>

        {/* Match Instructions and Rules */}
        <Text className="text-white font-bold text-lg mb-2">Match Instructions And Rules</Text>
        <Text className="text-yellow-400 font-semibold mb-2">
          ⚠️ "OBAYDUL TOURNAMENT" BR Match এর নিয়মাবলী এবং শর্তাবলী:
        </Text>

        <Text className="text-white text-sm mb-2">
          🔴 ম্যাচ জয়নের হওয়ার পর আপনি যে ম্যাচে জয়েন করেছেন (২/৩/৪) কাস্টম রুমে দ্রুত আপনি যে স্থানে থাকবেন তা না হলে রুম থেকে কিক দিলে এডমিন দায়ী নয়। এবং রিফান্ড দেওয়া হবে না।
        </Text>
        <Text className="text-red-500 text-sm mb-6">❌ Double Vector & Charge Boster Not Allow</Text>
      </View>
    </ScrollView>
  );
};

export default MatchDetailsScreen;
