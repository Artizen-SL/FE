import React, { useState, useEffect, useRef } from "react";
import {
  Button,
  Image,
  View,
  Platform,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import styled from "styled-components";

export default function ImagePickerBtn() {
  const [image, setImage] = useState([]);
  const imagesRef = useRef([]);

  const pickImage = async () => {
    setImage([]);
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
      }
    }
  };

  if (image.length > 5) {
    alert("사진선택은 최대 5장까지 입니다.");
    return setImage([]);
  }

  const selectImages = (idx) => {
    // imagesRef.current[idx].focus();
  };
  console.log(imagesRef.current[0]);

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <View style={{ flexDirection: "row" }}>
        <Button title="사진선택 최대 5장" onPress={pickImage} />
        <Button title="삭제" />
      </View>
      <ScrollView horizontal={true}>
        {image &&
          image.map((image, idx) => {
            return (
              <StImageContainer
                key={idx}
                ref={(el) => (imagesRef.current[idx] = el)}
                onPress={() => selectImages(idx)}
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
  width: 100px;
  height: 100px;
`;

const StImage = styled(Image)`
  width: 100px;
  height: 100px;
`;
