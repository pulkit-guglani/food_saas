import type { PropsWithChildren, ReactElement } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import Animated, {
  interpolate,
  useAnimatedRef,
  useAnimatedStyle,
  useScrollViewOffset,
} from "react-native-reanimated";

import { ThemedView } from "@/components/ThemedView";
import { useBottomTabOverflow } from "@/components/ui/TabBarBackground";
import { useColorScheme } from "@/hooks/useColorScheme";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";

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
  const colorScheme = useColorScheme() ?? "light";
  const scrollRef = useAnimatedRef<Animated.ScrollView>();
  const scrollOffset = useScrollViewOffset(scrollRef);
  const bottom = useBottomTabOverflow();
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

  return (
    <SafeAreaView style={styles.container}>
      <SafeAreaView style={styles.sticky}>
        <SafeAreaView
          style={{
            backgroundColor: "red",
            paddingHorizontal: 16,
            paddingBottom: 16,
          }}
        >
          <View className="w-full flex flex-row">
            <View className="flex-1 flex flex-row">
              <Image
                source={require("@/assets/icons/searchIcon.png")}
                style={{ height: 32, width: 32 }}
              />
            </View>
            <View
              style={{ justifyContent: "flex-end", paddingRight: 16 }}
              className="flex-1 flex flex-row"
            >
              <Image
                source={require("@/assets/icons/searchIcon.png")}
                style={{ height: 32, width: 32 }}
              />
            </View>
          </View>
        </SafeAreaView>
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
        </Animated.View>
        <ThemedView style={styles.content}>{children}</ThemedView>
      </Animated.ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    height: HEADER_HEIGHT,
    overflow: "hidden",
  },
  content: {
    flex: 1,
    padding: 32,
    gap: 16,
    overflow: "hidden",
  },
  sticky: {
    position: "absolute",
    zIndex: 100,
    height: 100,
    width: "100%",
    paddingVertical: 16,
  },
  stickyText: {
    position: "sticky",
    zIndex: 100,

    marginTop: 50,
    height: "auto",

    backgroundColor: "",
  },
});
