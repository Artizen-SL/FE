import React from "react";
import { Image, TouchableOpacity } from "react-native";

const ScrollTopBtn = ({ flatlistRef }) => {
  const moveTop = () => {
    flatlistRef.current.scrollToIndex({ index: 0 });
  };

  return (
    <TouchableOpacity
      onPress={moveTop}
      style={{
        flex: 1,
        zIndex: 11,
        justifyContent: "center",
        alignItems: "center",
        position: "absolute",
        right: 20,
        bottom: 80,
      }}
    >
      <Image
        resizeMode="contain"
        source={require("../../assets/Icon/scrollTopBtn.png")}
        style={{
          width: 45,
          height: 45,
        }}
      />
    </TouchableOpacity>
  );
};

export default ScrollTopBtn;
