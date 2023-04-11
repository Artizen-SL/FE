import React, { useState, useEffect, useRef } from "react";
import {
  Image,
  View,
  ScrollView,
  TouchableOpacity,
  Alert,
  Text,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import styled from "styled-components";

export default function ImagePickerBtn({ setImagePick, imagePick }) {
  const imagesRef = useRef([]);
  const [image, setImage] = useState([]);
  const [isSelect, setSelect] = useState([]);

  useEffect(() => {
    if (image[0]) {
      const filename = image[0].split("/").pop();
      const match = /\.(\w+)$/.exec(filename ?? "");
      const type = match ? `image/${match[1]}` : "image";

      setImagePick({
        ...imagePick,
        imageUrl: { uri: image[0], name: filename, type },
      });
    } else {
      setImagePick({ ...imagePick, imageUrl: "" });
    }
  }, [image]);

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

  if (image.length > 1) {
    // alert("사진선택은 최대 5장까지 입니다.");
    alert("사진선택은 1장까지 입니다.");
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

  const goAlert = () => {
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
        <View
          style={{
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <StBtn onPress={pickImage}>
            <StText>사진 선택 1장</StText>
          </StBtn>
          <StDelteBtn onPress={goAlert}>
            <StText>삭제</StText>
          </StDelteBtn>
        </View>

        <ScrollView
          horizontal={true}
          style={{ flex: 1 }}
          contentContainerStyle={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
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
    </View>
  );
}

const StImageContainer = styled(TouchableOpacity)`
  width: 130px;
  height: 130px;
`;

const StImage = styled(Image)`
  width: 100%;
  height: 100%;
`;

const StBtn = styled(TouchableOpacity)`
  width: 100px;
  height: 100px;
  background-color: #48b7e2;
  align-items: center;
  justify-content: center;
  border-radius: 20px;
`;

const StDelteBtn = styled(TouchableOpacity)`
  width: 100px;
  height: 35px;
  background-color: #48b7e2;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  margin-top: 10px;
`;

const StText = styled(Text)`
  color: white;
  font-weight: bold;
`;
