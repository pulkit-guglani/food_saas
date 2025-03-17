import { useEffect, type PropsWithChildren, type ReactElement } from "react";
import { Image, StyleSheet, View } from "react-native";
import Animated, {
  interpolate,
  interpolateColor,
  useAnimatedRef,
  useAnimatedStyle,
  useScrollViewOffset,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";

import { ThemedView } from "@/components/ThemedView";
import { useBottomTabOverflow } from "@/components/ui/TabBarBackground";
import { useColorScheme } from "@/hooks/useColorScheme";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";
import { rgbaColor } from "react-native-reanimated/lib/typescript/Colors";
import Text from "./ui/Text";
import { SearchIcon } from "./ui/Icons";

const HEADER_HEIGHT = 250;

type Props = PropsWithChildren<{
  headerImage: ReactElement;
  headerBackgroundColor: { dark: string; light: string };
}>;

export default function ParallaxScrollView({
  children,
  headerImage,
  headerBackgroundColor,
}: Props) {
  const colorScheme = "light";
  const scrollRef = useAnimatedRef<Animated.ScrollView>();
  const scrollOffset = useScrollViewOffset(scrollRef);
  const bottom = useBottomTabOverflow();
  const opacityValue = useSharedValue(1);

  const headerAnimatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateY: interpolate(
            scrollOffset.value,
            [-HEADER_HEIGHT, 0, HEADER_HEIGHT],
            [-HEADER_HEIGHT / 2, 0, HEADER_HEIGHT * 0.75]
          ),
        },
        {
          scale: interpolate(
            scrollOffset.value,
            [-HEADER_HEIGHT, 0, HEADER_HEIGHT],
            [2, 1, 1]
          ),
        },
      ],
    };
  });

  const headStyle = useAnimatedStyle(() => {
    const backgroundColor = interpolateColor(
      scrollOffset.value,
      [0, HEADER_HEIGHT - 70], // Input range
      ["rgba(0, 0, 0, 0)", "rgba(0, 0, 0, 1)"] // Color transition with opacity change
    );

    return {
      padding: 16,
      backgroundColor: withTiming(backgroundColor, { duration: 30 }), // Smooth transition
    };
  });
  return (
    <SafeAreaView style={styles.container}>
      {/* Sticky Header with Opacity Change */}
      <SafeAreaView style={styles.sticky}>
        <Animated.View style={[headStyle]}>
          <View className="w-full flex flex-row">
            <View className="flex-1 flex flex-row">
              <Text style={{ color: "white" }} className="">
                Your Location
              </Text>
            </View>
            <View
              style={{ justifyContent: "flex-end", paddingRight: 16 }}
              className="flex-1 flex flex-row"
            >
              <SearchIcon />
            </View>
          </View>
        </Animated.View>
      </SafeAreaView>

      <Animated.ScrollView
        ref={scrollRef}
        scrollEventThrottle={16}
        scrollIndicatorInsets={{ bottom }}
        contentContainerStyle={{ paddingBottom: bottom }}
      >
        <Animated.View
          style={[
            styles.header,
            { backgroundColor: headerBackgroundColor[colorScheme] },
            headerAnimatedStyle,
          ]}
        >
          {headerImage}
          <Animated.Text
            className="text-h2_bold"
            style={{
              marginTop: 100,
              color: "white",
              fontFamily: "Inter",
              fontWeight: 700,
              fontSize: 32,
              paddingHorizontal: 48,
            }}
          >
            Provide the best food for you
          </Animated.Text>
        </Animated.View>
        <ThemedView style={styles.content}>{children}</ThemedView>
      </Animated.ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  header: {
    height: HEADER_HEIGHT,
    overflow: "hidden",
  },
  content: {
    paddingTop: 16,
    flex: 1,
    gap: 16,
    overflow: "hidden",
    backgroundColor: "white",
  },
  sticky: {
    position: "absolute",
    zIndex: 100,
    width: "100%",
  },
});
