import { useMemo } from "react";
import {
  StyleSheet,
  View,
  Text,
  Button,
  Image,
  TouchableOpacity,
  ImageBackground,
  Dimensions,
  useWindowDimensions,
  FlatList,
} from "react-native";

const windowWidth = Dimensions.get("window");
const margin = 12;
const cardSize = { width: 312, height: 159 };
const offset = cardSize.width + margin;

const MainCarousel = () => {
  const pages = [
      {
        mainImageUrl: "../../assets/main/caroucel/maincarousel1.png",
      },
      {
        mainImageUrl: "../../assets/main/caroucel/maincarousel2.png",
      },
      {
        mainImageUrl: "../../assets/main/caroucel/maincarousel3.png",
      },
      {
        mainImageUrl: "../../assets/main/caroucel/maincarousel4.png",
      },
      {
        mainImageUrl: "../../assets/main/caroucel/maincarousel5.png",
      },
    ];

  const snapToOffsets = useMemo(
    () => Array.from(Array(pages.length)).map((_, index) => index * offset),
    [pages]
  );
  return (
    <FlatList
      data={pages}
      snapToOffsets={snapToOffsets}
      horizontal
      contentContainerStyle={{ paddingHorizontal: 24 }}
      renderItem={({item}) => (
        <TouchableOpacity style={{marginRight: margin}}>
          <ImageBackground
            style={cardSize}
            source={{uri: item.mainImageUrl}}
          />
        </TouchableOpacity>
      )}
      keyExtractor={(_, index) => String(index)}
    />
  );
};

export default MainCarousel;

const styles = StyleSheet.create({
  container: {
    width: windowWidth,
    backgroundColor: "#fff",
    paddingTop: 100,
  },
});
