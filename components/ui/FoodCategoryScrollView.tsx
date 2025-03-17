import { FlatList, Image, ScrollView, View } from "react-native";
import Text from "./Text";

type FoodCategoryScrollViewProps = {
  onPress: () => void;
};

const FoodCategoriesScrollView = (props: FoodCategoryScrollViewProps) => {
  const { onPress } = props;

  const foodCategories = [
    {
      image: require("@/assets/images/foodIcons/BurgerIcon.png"),
      text: "Burger",
    },
    {
      image: require("@/assets/images/foodIcons/drinksIcon.png"),
      text: "Drinks",
    },
    {
      image: require("@/assets/images/foodIcons/BurgerIcon.png"),
      text: "Burger",
    },
    {
      image: require("@/assets/images/foodIcons/drinksIcon.png"),
      text: "Drinks",
    },
    {
      image: require("@/assets/images/foodIcons/BurgerIcon.png"),
      text: "Burger",
    },
    {
      image: require("@/assets/images/foodIcons/drinksIcon.png"),
      text: "Drinks",
    },
    {
      image: require("@/assets/images/foodIcons/BurgerIcon.png"),
      text: "Burger",
    },
    {
      image: require("@/assets/images/foodIcons/drinksIcon.png"),
      text: "Drinks",
    },
    {
      image: require("@/assets/images/foodIcons/BurgerIcon.png"),
      text: "Burger",
    },
    {
      image: require("@/assets/images/foodIcons/drinksIcon.png"),
      text: "Drinks",
    },
  ];

  const FoodCategoryItem = (category: (typeof foodCategories)[number]) => {
    return (
      <View
        className="flex flex-col bg-orange-100 rounded"
        style={{ padding: 8, gap: 8 }}
      >
        <Image source={category.image} />
        <Text>{category.text}</Text>
      </View>
    );
  };

  return (
    <FlatList
      horizontal
      showsHorizontalScrollIndicator={false}
      data={foodCategories}
      renderItem={({ item }) => (
        <FoodCategoryItem image={item.image} text={item.text} />
      )}
      keyExtractor={(item) => item.text}
      ItemSeparatorComponent={() => <View style={{ paddingHorizontal: 16 }} />}
    />
  );
};

export default FoodCategoriesScrollView;
