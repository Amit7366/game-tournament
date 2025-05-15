import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import Modal from 'react-native-modal';

const JoinMatchScreen = () => {
  const [username, setUsername] = useState('');
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  return (
    <ScrollView className="flex-1 bg-black px-4 py-6">
      <Text className="text-white text-xl font-bold mb-4">Joining Match</Text>

      <View className="bg-white rounded-lg p-4 mb-4">
        <Text className="text-black font-semibold text-lg mb-1">Solo Time | Mobile |</Text>
        <Text className="text-black">Available Balance: <Text className="font-bold">৳100</Text></Text>
        <Text className="text-black mb-2">Match Entry Fee Per Person: <Text className="font-bold">৳20</Text></Text>
        <View className="bg-blue-500 rounded py-2 mt-2">
          <Text className="text-center text-white font-semibold">48 Spots Left</Text>
        </View>
      </View>

      <View className="bg-white rounded-lg p-4 mb-4">
        <View className="bg-black px-2 py-1 rounded mb-2 self-start">
          <Text className="text-white font-bold text-sm">Solo Registration</Text>
        </View>

        <Text className="text-red-600 text-xs mb-2">
          *আপনার গেম আইডি লেভেল 40+ থাকতে হবে
        </Text>

        <Text className="text-black font-semibold mb-1">Enter Exact Game In Game Name</Text>

        <TextInput
          placeholder="Player 1 In Game Name"
          placeholderTextColor="#888"
          className="border border-black rounded px-3 py-2 text-black"
          value={username}
          onChangeText={setUsername}
        />
      </View>

      <TouchableOpacity className="bg-green-600 py-3 rounded-lg" onPress={toggleModal}>
        <Text className="text-white text-center font-bold text-lg">JOIN NOW</Text>
      </TouchableOpacity>

      {/* Modal */}
      <Modal isVisible={isModalVisible}>
        <View className="bg-white rounded-lg p-5 items-center">
          <View className="bg-black w-full py-2 rounded-t-md">
            <Text className="text-white text-center font-bold">Confirm Your Game Username</Text>
          </View>

          <Text className="text-black text-xl font-semibold mt-4 mb-2">{username || "No Name Entered"}</Text>

          <Text className="text-red-600 text-center text-sm mb-4">
            Make Sure You Have Entered Real Game Username{'\n'}Otherwise Your Reward Will Not Consider
          </Text>

          <View className="flex-row space-x-4">
            <TouchableOpacity
              className="bg-gray-400 px-5 py-2 rounded-md"
              onPress={toggleModal}
            >
              <Text className="text-white font-bold">CANCEL</Text>
            </TouchableOpacity>
            <TouchableOpacity
              className="bg-black px-5 py-2 rounded-md"
              onPress={() => {
                // Add confirm action logic here
                toggleModal();
              }}
            >
              <Text className="text-white font-bold">CONFIRM</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </ScrollView>
  );
};

export default JoinMatchScreen;
