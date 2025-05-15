import { View, Text, Image, ScrollView, TouchableOpacity } from "react-native";
import React from "react";
import { images } from "@/constants/images";
import { router, useRouter } from "expo-router";

export default function Home() {
  const router = useRouter();
  return (
    <ScrollView className="bg-white flex-1 px-2 py-12">
      {/* Header */}
      <View className="flex-row items-center justify-between mt-4 mb-2 px-2 py-4">
        <Text className="text-lg font-bold">RAMIM TOURNAMENT</Text>
        <TouchableOpacity onPress={() => router.push("/mywallet")}>
          <Image
            source={images.wallet}
            className="w-10 h-10"
            resizeMode="contain"
          />
        </TouchableOpacity>
      </View>

      {/* Banner */}
      <Image
        source={images.bg}
        className="w-full h-32 rounded-xl mb-4"
        resizeMode="cover"
      />

      {/* Rules */}
      <Text className="bg-accent text-white text-xs px-3 py-1 rounded">
        ⚠️ Rules ভালো করে পড়ে তারপর ম্যাচ জয়েন করবেন!
      </Text>

      {/* Match Sections */}
      <Section
        title="FREE FIRE MATCHES"
        types={["BR ALL MATCH", "CS ALL MATCH"]}
      />
      <Section
        title="CS MATCH 1V1-2V2"
        types={["CS 1V1 MATCH", "CS 2V2 MATCH"]}
      />
      <Section
        title="LONE WOLF 1V1-2V2"
        types={["LW 1V1 MATCH", "LW 2V2 MATCH"]}
      />
    </ScrollView>
  );
}

const Section = ({ title, types }: { title: string; types: string[] }) => (
  <TouchableOpacity onPress={() => router.push("/matchcard")}>
    <View className="mt-4">
      <Text className="text-primary font-bold mb-2">{title}</Text>
      <View className="flex-row flex-wrap justify-between">
        {types.map((t, i) => (
          <View key={i} className="w-[48%] bg-accent rounded-xl p-4 mb-3">
            <Text className="text-white font-bold text-center">{t}</Text>
            <Text className="text-gray-200 text-xs text-center mt-2">
              No Matches Found
            </Text>
          </View>
        ))}
      </View>
    </View>
  </TouchableOpacity>
);
