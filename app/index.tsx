import {
  Image,
  StyleSheet,
  Platform,
  View,
  ActivityIndicator,
} from "react-native";

import { HelloWave } from "@/components/HelloWave";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { SafeAreaView } from "react-native-safe-area-context";
import { Link, Redirect } from "expo-router";
import { useUser } from "@/lib/queries";

export default function HomeScreen() {
  const { data: user, isFetching: loading } = useUser();

  if (loading) {
    return <ActivityIndicator />;
  }

  if (!user) {
    return <Redirect href={"/login"} />;
  }

  return (
    <SafeAreaView>
      <View className="flex w-full justify-center flex-row">
        <Link href={"/login"} className="text-grayscale_700">
          Login
        </Link>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: "absolute",
  },
});
