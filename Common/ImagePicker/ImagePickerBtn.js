import React, { useState, useEffect, useRef } from "react";
import {
  Button,
  Image,
  View,
  Platform,
  ScrollView,
  TouchableOpacity,
  TouchableHighlight,
  Alert,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import styled from "styled-components";

export default function ImagePickerBtn() {
  const imagesRef = useRef([]);
  const [image, setImage] = useState([]);
  const [isSelect, setSelect] = useState([]);

  const pickImage = async () => {
    // 사진을 담기 전 초기화
    setImage([]);
    setSelect([]);

    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      // allowsEditing: true,
      allowsMultipleSelection: true,
      // aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      for (let i = 0; i < result.assets.length; i++) {
        setImage((prev) => prev.concat(result.assets[i].uri));
        setSelect((prev) => prev.concat(false));
      }
    }
  };

  if (image.length > 5) {
    alert("사진선택은 최대 5장까지 입니다.");
    return setImage([]);
  }

  const selectImages = (idx) => {
    setSelect([
      ...isSelect.slice(0, idx),
      !isSelect[idx],
      ...isSelect.slice(idx + 1),
    ]);
    // imagesRef.current[idx].borderWidth;
  };

  console.log(isSelect);
  const goAlert = () => {
    console.log("image", image);
    if (isSelect.findIndex((boolean) => boolean === true) === -1) {
      return Alert.alert("오류", "사진을 선택하지 않았습니다.", [
        {
          text: "나가기",
          style: "cancel",
        },
      ]);
    } else {
      return Alert.alert("Delete", "정말 삭제하시겠습니까?", [
        {
          text: "아니요",
          style: "cancel",
        },
        { text: "네", onPress: () => deleteImages() },
      ]);
    }
  };

  const deleteImages = () => {
    let newImageArr = [];
    newImageArr = image.filter((item, idx) => {
      if (isSelect[idx] === false) {
        return item;
      }
    });
    setImage([...newImageArr]);

    let newIsSelectArr = [];
    newIsSelectArr = isSelect.filter((item, idx) => {
      if (isSelect[idx] === false) {
        return item;
      }
    });
    setSelect([...newIsSelectArr]);
  };

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <View style={{ flexDirection: "row" }}>
        <Button title="사진선택 최대 5장" onPress={pickImage} />
        <Button title="삭제" onPress={goAlert} />
      </View>
      <ScrollView horizontal={true}>
        {image &&
          image.map((image, idx) => {
            return (
              <StImageContainer
                key={idx}
                ref={(el) => (imagesRef.current[idx] = el)}
                onPress={() => selectImages(idx)}
                style={[
                  {
                    borderColor: isSelect[idx] ? "#48B7E2" : "",
                    borderWidth: isSelect[idx] ? 3 : 0,
                  },
                ]}
              >
                <StImage source={{ uri: image }} />
              </StImageContainer>
            );
          })}
      </ScrollView>
    </View>
  );
}

const StImageContainer = styled(TouchableOpacity)`
  width: 150px;
  height: 150px;
`;

const StImage = styled(Image)`
  width: 100%;
  height: 100%;
`;
