import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const tabContents = {
  Nagad: {
    instructions: [
      '*167# ডায়াল করে আপনার NAGAD মোবাইল মেনুতে যান।',
      '"Send Money"-এ ক্লিক করুন।',
      'প্রাপক নম্বর হিসেবে এই নম্বরে লিখুন:',
    ],
    phone: '01967194784',
    note: 'সবকিছু ঠিক থাকলে, আপনি NAGAD থেকে নিশ্চিতকরণ বার্তা পাবেন।',
    instructionEnd: 'এখন উপরের বক্সে আপনার Transaction ID দিন এবং নিচের VERIFY বাটনে ক্লিক করুন।'
  },
  Bkash: {
    instructions: [
      '*247# ডায়াল করে আপনার BKASH মোবাইল মেনুতে যান।',
      '"Send Money"-এ ক্লিক করুন।',
      'প্রাপক নম্বর হিসেবে এই নম্বরে লিখুন:',
    ],
    phone: '017XXXXXXXX',
    note: 'সবকিছু ঠিক থাকলে, আপনি BKASH থেকে নিশ্চিতকরণ বার্তা পাবেন।',
    instructionEnd: 'এখন উপরের বক্সে আপনার Transaction ID দিন এবং নিচের VERIFY বাটনে ক্লিক করুন।'
  },
  Rocket: {
    instructions: [
      '*322# ডায়াল করে আপনার ROCKET মোবাইল মেনুতে যান।',
      '"Send Money"-এ ক্লিক করুন।',
      'প্রাপক নম্বর হিসেবে এই নম্বরে লিখুন:',
    ],
    phone: '018XXXXXXXX',
    note: 'সবকিছু ঠিক থাকলে, আপনি ROCKET থেকে নিশ্চিতকরণ বার্তা পাবেন।',
    instructionEnd: 'এখন উপরের বক্সে আপনার Transaction ID দিন এবং নিচের VERIFY বাটনে ক্লিক করুন।'
  }
};

export default function PaymentScreen() {
  const [selectedTab, setSelectedTab] = useState('Nagad');

  return (
    <ScrollView className="flex-1 bg-white p-4">
      {/* Tab Icons */}
      <View className="flex-row justify-around mb-4 mt-16">
        {Object.keys(tabContents).map((tab) => (
          <TouchableOpacity
            key={tab}
            className={`p-2 rounded-lg ${selectedTab === tab ? 'bg-red-500' : 'bg-gray-200'}`}
            onPress={() => setSelectedTab(tab)}
          >
            <Text className={`font-bold ${selectedTab === tab ? 'text-white' : 'text-gray-800'}`}>
              {tab}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Dynamic Box */}
      <View className="bg-red-500 rounded-lg p-4 space-y-2">
        <Text className="text-white font-bold text-lg">ট্রানজেকশন আইডি দিন</Text>
        <View className="bg-white rounded-lg p-2">
          <Text className="text-gray-800">এখানে ট্রানজেকশন আইডি দিন</Text>
        </View>

        {tabContents[selectedTab].instructions.map((item, index) => (
          <Text key={index} className="text-white">
            • {item}
          </Text>
        ))}

        <Text className="text-yellow-300 font-bold">{tabContents[selectedTab].phone}</Text>

        <Text className="text-white">{tabContents[selectedTab].note}</Text>

        <Text className="text-white">{tabContents[selectedTab].instructionEnd}</Text>

        <TouchableOpacity className="bg-white p-3 rounded-lg mt-4 items-center">
          <Text className="text-red-500 font-bold">VERIFY</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}
