import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useRef, useState } from "react";
import {
  Image,
  Modal,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { FlatList } from "react-native-gesture-handler";
import styled from "styled-components";
import Dropdown from "../../Common/Dropdown/Dropdown";
import CommunityContentsWrapper from "../../Components/Community/Presenters/CommunityContentsWrapper";
import TagView from "../../Components/Elem/TagView";

const data = [
  {
    tag: "자유글",
  },
  {
    tag: "동행구함",
  },
  {
    tag: "나눔",
  },
];
const CommunityPost = () => {
  const navigation = useNavigation();
  const DropdownButton = useRef();
  const [selected, setSelected] = useState({
    tag: "자유글",
  });
  const [visible, setVisible] = useState(false);
  const [dropdownTop, setDropdownTop] = useState(0);

  const toggleDropdown = () => {
    visible ? setVisible(false) : openDropdown();
  };

  const openDropdown = () => {
    DropdownButton.current.measure((_fx, _fy, _w, h, _px, py) => {
      setDropdownTop(py + h - 30);
    });
    setVisible(true);
  };

  const onItemPress = (item) => {
    setSelected(item);
    setVisible(false);
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.item} onPress={() => onItemPress(item)}>
      <TagView variant="community" tag={item.tag}>
        {item.tag}
      </TagView>
    </TouchableOpacity>
  );

  const renderDropdown = () => {
    return (
      //모달이 뜨는 방식은 화면전체에 뜨는 것이고, visible props에 의해 on, off 결정 된다.
      <Modal visible={visible} transparent animationType="fade">
        <TouchableOpacity
          style={styles.overlay}
          onPress={() => setVisible(false)}
        >
          <View style={[styles.dropdown, { top: dropdownTop }]}>
            <FlatList
              data={data}
              renderItem={renderItem}
              keyExtractor={(item, index) => index.toString()}
            />
          </View>
        </TouchableOpacity>
      </Modal>
    );
  };

  return (
    <CommunityContentsWrapper title="Posting">
      <StPostingWrapper>
        <StPostingTopView>
          <StPostingTitleView>
            <TouchableOpacity
              style={{ flexDirection: "row" }}
              ref={DropdownButton}
              onPress={toggleDropdown}
            >
              <TagView variant="community" tag={selected.tag ?? "자유글"}>
                {selected.tag ?? "자유글"}
              </TagView>

              <Image
                style={{ width: 25, height: 25 }}
                source={require("../../assets/Icon/arrow-down.png")}
              ></Image>
              {renderDropdown()}
            </TouchableOpacity>

            <View style={{ width: "58%" }}>
              <TextInput
                placeholder="제목을 입력해주세요."
                multiline={false}
              ></TextInput>
            </View>
          </StPostingTitleView>
          <StPostingBtn>
            <StPostingBtnText>작성</StPostingBtnText>
          </StPostingBtn>
        </StPostingTopView>

        <StDividerView />
        <ScrollView
          style={{
            borderWidth: 1,
            borderColor: "black",
            maxheight: "83%",
          }}
        >
          <TextInput multiline placeholder="내용을 작성해주세요.">
            asdfasfddasfdsafdasasdfasfddasfdsafdasasdfasfddasfdsafdasasdfasfddasfdsafdasasdfasfddasfdsafdasasdfasfddasfdsafdasasdfasfddasfdsafdasasdfasfddasfdsafdasasdfasfddasfdsafdasasdfasfddasfdsafdasasdfasfddasfdsafdasasdfasfddasfdsafdasasdfasfddasfdsafdasasdfaasfdsafdasasdfasfddasfdsafdasasdfasfddasfdsafdasasdfasfddasfdsafdasasdfasfddasfdsafdasasdfasfddasfdsafdasasdfasfddasfdsafdasasdfasfddasfdsafdasasdfasfddasfdsafdasasdfasfddassfddasf
          </TextInput>
        </ScrollView>
      </StPostingWrapper>
    </CommunityContentsWrapper>
  );
};

export default CommunityPost;

const StPostingWrapper = styled(View)`
  padding: 10px;
`;

const StPostingTopView = styled(View)`
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
`;

const StPostingTitleView = styled(View)`
  flex-direction: row;
  align-items: center;
`;

const StPostingBtn = styled(TouchableOpacity)`
  width: 50px;
  height: 30px;
  background-color: #48b7e2;
  justify-content: center;
  align-items: center;
  color: white;
  border-radius: 5px;
`;
const StPostingBtnText = styled(Text)`
  color: white;
`;
const StDividerView = styled(View)`
  border-color: gray;
  border-bottom-width: 1px;
  margin-bottom: 15px;
  margin-top: 5px;
`;

const styles = StyleSheet.create({
  button: {
    zIndex: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    flex: 1,
    textAlign: "center",
  },

  dropdown: {
    position: "absolute",
    backgroundColor: "#fff",
    width: 80,
    left: 15,
    shadowColor: "#000000",
    shadowRadius: 4,
    shadowOffset: { height: 4, width: 0 },
    shadowOpacity: 0.5,
  },
  overlay: {
    width: "100%",
    height: "100%",
  },
  item: {
    paddingHorizontal: 5,
    paddingVertical: 5,
  },
});
