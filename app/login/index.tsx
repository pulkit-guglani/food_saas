import { Image, StyleSheet, Platform, View } from "react-native";

import { HelloWave } from "@/components/HelloWave";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import TextField from "@/components/ui/TextField";
import { useState } from "react";
import { TextInput } from "react-native";
import Button from "@/components/ui/Button";
import Text from "@/components/ui/Text";

export default function Login() {
  const [number, setNumber] = useState("");

  return (
    <SafeAreaView className="h-full">
      <StatusBar animated style="dark" />
      <View className="px-6 h-full flex flex-col">
        <View className="flex flex-col justify-center flex-1">
          <Text className="text-h2_semibold">
            Order directly from nearby food stalls
          </Text>

          <Text className="text-label_medium text-grayscale_600 mt-[84px]">
            Log in or sign up
          </Text>
          <View className="mt-2">
            <View className="h-full flex items-center absolute justify-center flex-col ml-2">
              <Text className="text-label_medium text-grayscale_800">+91</Text>
            </View>
            <TextInput
              style={{
                height: 52,
                borderWidth: 1,
                borderColor: "#D1D5DB",
                borderRadius: 8,
                paddingHorizontal: 16,
                paddingLeft: 40,
              }}
              inputMode="tel"
              placeholder={"Enter mobile number"}
              value={number}
              onChangeText={setNumber}
              placeholderTextColor={"#677990"}
            />
          </View>
          <View className="w-full">
            <Button className="mt-10 min-w-full" fullWidth onPress={() => {}}>
              Continue
            </Button>
          </View>
        </View>
        <View className="w-full flex flex-row justify-center items-center p-9">
          <Text className="text-label_medium"> Already have an account?</Text>
          <Button type="primary" className="w-fit" textOnly onPress={() => {}}>
            Sign In
          </Button>
        </View>
      </View>
    </SafeAreaView>
  );
}
