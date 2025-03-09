import { Image, StyleSheet, Platform, View } from "react-native";

import { HelloWave } from "@/components/HelloWave";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import TextField from "@/components/ui/TextField";
import { useState } from "react";
import { TextInput } from "react-native-gesture-handler";

export default function Login() {
  const [number, setNumber] = useState("");

  return (
    <SafeAreaView className="h-full">
      <StatusBar animated style="light" />
      <View className="px-6 h-full">
        <View className="flex flex-col justify-center h-full">
          <p className="text-h2_semibold">
            Order directly from nearby food stalls
          </p>
          <p className="text-label_medium text-grayscale_600 mt-[84px]">
            Log in or sign up
          </p>
          <TextField
            value={number}
            placeholder="Enter mobile number"
            onChangeText={setNumber}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}
