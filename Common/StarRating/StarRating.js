import React, { useState } from "react";
import { Image, TouchableOpacity, View } from "react-native";

const StarRating = ({ state, setState }) => {
  const [starArr, setStarArr] = useState([true, true, true, true, true]);

  const fullStar = require("../../assets/Icon/fullStar.png");
  const emptyStar = require("../../assets/Icon/emptyStar.png");

  const onStarPressHandler = (idx) => {
    setStarArr((prev) =>
      prev.map((item, itemIdx) => {
        return itemIdx <= idx ? true : false;
      })
    );
    setState({ ...state, star: idx + 1 });
  };

  return (
    <>
      <View style={{ flex: 1, flexDirection: "row" }}>
        {starArr.map((item, idx) => {
          return (
            <TouchableOpacity key={idx} onPress={() => onStarPressHandler(idx)}>
              <Image source={`${item ? fullStar : emptyStar}`} />
            </TouchableOpacity>
          );
        })}
      </View>
    </>
  );
};

export default StarRating;

// 5개의 별을 렌더링
// 한개를 클릭하면 그것까지 fullStar 그 이후는 emptyStar
// 클릭 했을때 인덱스숫자대로 조건문을 통해서 fullStar로 채워지게
