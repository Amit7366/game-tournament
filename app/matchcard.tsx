import { router } from 'expo-router';
import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

const MatchCard = () => {
  return (
    <View className="bg-white rounded-xl shadow-md m-4 p-4 w-11/12 self-center ">
      {/* Header */}
      <View className="flex-row items-center mb-2 mt-20">
        <Image
          source={{ uri: 'https://static.wikia.nocookie.net/freefire/images/8/88/Garena_Free_Fire_logo.png' }} // Replace with actual image if needed
          className="w-10 h-10 rounded-md mr-2"
        />
        <View>
          <Text className="text-black font-bold text-lg">Solo Tim | Mobile | 16</Text>
          <Text className="text-red-500 text-sm">Time: 25/01/2025 At 05:49 PM</Text>
        </View>
      </View>

      {/* Match Details */}
      <View className="flex-row justify-between mt-4 mb-2">
        <View className="items-center">
          <Text className="text-gray-500 text-xs">TOTAL PRIZE</Text>
          <Text className="text-black font-bold">৳800</Text>
        </View>
        <View className="items-center">
          <Text className="text-gray-500 text-xs">PER KILL</Text>
          <Text className="text-black font-bold">৳10</Text>
        </View>
        <View className="items-center">
          <Text className="text-gray-500 text-xs">ENTRY FEE</Text>
          <Text className="text-black font-bold">৳20</Text>
        </View>
      </View>

      {/* Match Type Details */}
      <View className="flex-row justify-between mb-2">
        <Text className="text-sm font-semibold">TYPE: <Text className="text-black">Solo</Text></Text>
        <Text className="text-sm font-semibold">VERSION: <Text className="text-black">TPP</Text></Text>
        <Text className="text-sm font-semibold">MAP: <Text className="text-black">Bermuda</Text></Text>
      </View>

      {/* Slots & Join Button */}
      <View className="flex-row justify-between items-center mt-1 mb-3">
        <Text className="text-gray-500 text-sm">Only 48 Spots Left</Text>
        <Text className="text-sm text-black">0/48</Text>
        <TouchableOpacity className="bg-blue-500 px-4 py-2 rounded-md" onPress={() => router.push("/joinmatch")}>
          <Text className="text-white font-semibold">Join</Text>
        </TouchableOpacity>
      </View>

      {/* Details Buttons */}
      <View className="flex-row justify-between">
        <TouchableOpacity className="flex-1 bg-gray-100 py-2 rounded-md mr-2 items-center" onPress={() => router.push("/matchdetails")}>
          <Text className="text-sm font-medium">📁 Room Details</Text>
        </TouchableOpacity>
        <TouchableOpacity className="flex-1 bg-gray-100 py-2 rounded-md ml-2 items-center">
          <Text className="text-sm font-medium">🏆 Total Prize Details</Text>
        </TouchableOpacity>
      </View>

      {/* Footer */}
      <TouchableOpacity className="mt-4 bg-blue-600 py-3 rounded-xl items-center">
        <Text className="text-white font-semibold text-base">⏱️ MATCH STARTED 🔁</Text>
      </TouchableOpacity>
    </View>
  );
};

export default MatchCard;
