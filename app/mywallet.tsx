import React from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons, FontAwesome5 } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

export default function MyWallet() {
    const router = useRouter();
  return (
    <ScrollView className="flex-1 bg-white p-4">
      {/* Balance Header */}
      <View className="bg-white rounded-lg shadow p-4 mb-4">
        <View className="flex-row justify-between items-center">
          <Text className="text-lg font-bold text-gray-800">TOTAL CASH BALANCE</Text>
          <Text className="text-sm text-blue-600">View Transaction History</Text>
        </View>
        <Text className="text-3xl font-bold text-gray-800 mt-2">৳0</Text>
      </View>

      {/* Winnings Section */}
      <View className="flex-row justify-between items-center bg-gray-100 rounded-lg p-3 mb-3">
        <View className="flex-row items-center space-x-2">
          <Ionicons name="trophy-outline" size={20} color="gray" />
          <Text className="text-base font-medium text-gray-700">WINNING CASH BALANCE</Text>
        </View>
        <TouchableOpacity className="bg-blue-600 px-4 py-2 rounded-lg">
          <Text className="text-white font-bold">WITHDRAW</Text>
        </TouchableOpacity>
      </View>
      <Text className="text-xl font-bold text-gray-800 mb-3">৳0</Text>

      {/* Deposit Section */}
      <View className="flex-row justify-between items-center bg-gray-100 rounded-lg p-3 mb-3">
        <View className="flex-row items-center space-x-2">
          <FontAwesome5 name="wallet" size={20} color="gray" />
          <Text className="text-base font-medium text-gray-700">DEPOSIT CASH</Text>
        </View>
        <TouchableOpacity className="bg-orange-500 px-4 py-2 rounded-lg" onPress={() => router.push("/deposit") }>
          <Text className="text-white font-bold">ADD MORE</Text>
        </TouchableOpacity>
      </View>
      <Text className="text-xl font-bold text-gray-800 mb-3">৳0</Text>

      {/* Refer and Earn */}
      <View className="flex-row justify-between items-center bg-gray-100 rounded-lg p-3 mb-3">
        <View className="flex-row items-center space-x-2">
          <Ionicons name="gift-outline" size={20} color="gray" />
          <Text className="text-base font-medium text-gray-700">REFER AND EARN</Text>
        </View>
        <TouchableOpacity className="bg-pink-500 px-4 py-2 rounded-lg">
          <Text className="text-white font-bold">REFER & EARN</Text>
        </TouchableOpacity>
      </View>

      {/* How To Videos */}
      <View className="mt-6 space-y-4">
        {[
          { title: 'HOW TO ADD MONEY?', subtitle: 'কিভাবে টাকা এড করবেন' },
          { title: 'HOW TO COLLECT ROOM ID?', subtitle: 'কিভাবে রুম আইডি পাবেন' },
          { title: 'HOW TO JOIN IN A MATCH?', subtitle: 'কিভাবে ম্যাচে জয়েন করবেন' },
        ].map((item, index) => (
          <View key={index}>
            <Text className="text-sm font-bold text-gray-800">{item.title}</Text>
            <View className="flex-row justify-between items-center bg-gray-200 p-3 rounded-lg">
              <Text className="text-sm text-gray-700">{item.subtitle}</Text>
              <TouchableOpacity className="bg-gray-400 px-3 py-1 rounded">
                <Text className="text-white text-sm">ভিডিও দেখুন</Text>
              </TouchableOpacity>
            </View>
          </View>
        ))}
      </View>

      {/* Contact Us */}
      <TouchableOpacity className="bg-blue-600 px-4 py-3 rounded-lg mt-6 items-center">
        <Text className="text-white font-bold">Contact Us</Text>
      </TouchableOpacity>

      {/* Note */}
      <Text className="text-center text-xs text-red-500 mt-4">
        *টাকা অ্যাড না হলে এখানে টেস্ট করুন।
      </Text>
    </ScrollView>
  );
}
