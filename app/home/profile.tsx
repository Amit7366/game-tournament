import React from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons, FontAwesome } from '@expo/vector-icons';

export default function Profile() {
  return (
    <ScrollView className="flex-1 bg-white">
      {/* Header Section */}
      <View className="flex items-center mt-6">
        <View className="w-20 h-20 rounded-full bg-yellow-300 justify-center items-center">
          <Ionicons name="person" size={48} color="#333" />
        </View>
        <Text className="mt-2 text-lg font-bold text-gray-800">adminn</Text>
      </View>

      {/* Stats Section */}
      <View className="flex-row justify-around mt-4 px-4">
        <View className="items-center">
          <Text className="text-lg font-semibold text-gray-800">4</Text>
          <Text className="text-xs text-gray-500">Match Played</Text>
        </View>
        <View className="items-center">
          <Text className="text-lg font-semibold text-gray-800">5</Text>
          <Text className="text-xs text-gray-500">Total Kills</Text>
        </View>
        <View className="items-center">
          <Text className="text-lg font-semibold text-gray-800">৳185</Text>
          <Text className="text-xs text-gray-500">Paid</Text>
        </View>
      </View>

      {/* Balance Section */}
      <View className="mt-4 mx-16 p-4 rounded-lg bg-gray-100 items-center">
        <Text className="text-xl font-bold text-gray-800">৳0</Text>
        <Text className="text-sm text-gray-500">Available Balance</Text>
      </View>

      {/* Menu Section */}
      <View className="mt-6 mx-4 space-y-4">
        {[
          'Refer And Earn',
          'My Profile',
          'My Wallet',
          'My Statistics',
          'Leaderboard',
          'Share App',
          'Logout',
          'Developer Profile'
        ].map((item, index) => (
          <TouchableOpacity key={index} className="flex-row items-center justify-between p-4 bg-white rounded-lg shadow-sm">
            <Text className="text-base text-gray-800">{item}</Text>
            <Ionicons name="chevron-forward" size={20} color="gray" />
          </TouchableOpacity>
        ))}
      </View>

      {/* Version */}
      <Text className="text-center text-xs text-gray-400 mt-4">Version: V1.0</Text>

     
    </ScrollView>
  );
}
