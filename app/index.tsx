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
import Text from "@/components/ui/Text";
import { colorScheme } from "nativewind";
import { StatusBar } from "expo-status-bar";

export default function HomeScreen() {
  const { data: user, isFetching: loading } = useUser();
  colorScheme.set("system");

  if (loading) {
    return <ActivityIndicator />;
  }

  // if (!user) {
  //   return <Redirect href={"/login"} />;
  // }

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: "#A1CEDC", dark: "#1D3D47" }}
      headerImage={
        <Image
          source={require("@/assets/images/food.jpg")}
          style={styles.reactLogo}
        />
      }
    >
      <StatusBar animated style="light" backgroundColor={"black"} />

      <View className="flex gap-10">
        <Text className="text-grayscale_100">LOL sdf dsf ds fds fsd fs fd</Text>
        <Text className="text-grayscale_100">LOL sdf dsf ds fds fsd fs fd</Text>
        <Text className="text-grayscale_100">LOL sdf dsf ds fds fsd fs fd</Text>
        <Text className="text-grayscale_100">LOL sdf dsf ds fds fsd fs fd</Text>
        <Text className="text-grayscale_100">LOL sdf dsf ds fds fsd fs fd</Text>
        <Text className="text-grayscale_100">LOL sdf dsf ds fds fsd fs fd</Text>
        <Text className="text-grayscale_100">LOL sdf dsf ds fds fsd fs fd</Text>
        <Text className="text-grayscale_100">LOL sdf dsf ds fds fsd fs fd</Text>
        <Text className="text-grayscale_100">LOL sdf dsf ds fds fsd fs fd</Text>
        <Text className="text-grayscale_100">LOL sdf dsf ds fds fsd fs fd</Text>
        <Text className="text-grayscale_100">LOL sdf dsf ds fds fsd fs fd</Text>
        <Text className="text-grayscale_100">LOL sdf dsf ds fds fsd fs fd</Text>
        <Text className="text-grayscale_100">LOL sdf dsf ds fds fsd fs fd</Text>
        <Text className="text-grayscale_100">LOL sdf dsf ds fds fsd fs fd</Text>
        <Text className="text-grayscale_100">LOL sdf dsf ds fds fsd fs fd</Text>
        <Text className="text-grayscale_100">LOL sdf dsf ds fds fsd fs fd</Text>
        <Text className="text-grayscale_100">LOL sdf dsf ds fds fsd fs fd</Text>
      </View>
    </ParallaxScrollView>
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
    height: 400,
    width: 500,
    bottom: 0,
    left: -10,
    transform: [{ scale: 1.1 }],

    position: "absolute",
  },
});
