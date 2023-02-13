import { useNavigation } from "@react-navigation/native";
import React, { useRef, useState } from "react";
import {
  FlatList,
  Image,
  Modal,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

function Dropdown({ label, data, onSelect }) {
  const DropdownButton = useRef();
  const navigation = useNavigation();
  const [visible, setVisible] = useState(false);
  const [selected, setSelected] = useState(undefined);
  const [dropdownBottom, setDropdownTop] = useState(0);

  const toggleDropdown = () => {
    visible ? setVisible(false) : openDropdown();
  };

  const openDropdown = () => {
    DropdownButton.current.measure((_fx, _fy, _w, h, _px, py) => {
      setDropdownTop(h + 68);
    });
    setVisible(true);
  };

  const onItemPress = (item) => {
    setSelected(item);
    onSelect(item);
    setVisible(false);
    navigation.navigate(item.Routes, {
      screen: item.screen,
      params: item.params,
    });
  };

  const renderItem = ({ item }) => {
    console.log("item", item);
    const { category } = item.params;
    console.log("category", category);

    return (
      <View style={styles.item} onPress={() => onItemPress(item)}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          {category === "연극/뮤지컬" ? (
            <Image
              source={require("../../assets/Icon/musical.png")}
              style={styles.stDropDownImages}
            ></Image>
          ) : category === "콘서트" ? (
            <Image
              source={require("../../assets/Icon/concert.png")}
              style={styles.stDropDownImages}
            ></Image>
          ) : category === "클래식/무용" ? (
            <Image
              source={require("../../assets/Icon/classic.png")}
              style={styles.stDropDownImages}
            ></Image>
          ) : category === "서커스/마술" ? (
            <Image
              source={require("../../assets/Icon/magic.png")}
              style={styles.stDropDownImages}
            ></Image>
          ) : category === "전시회" ? (
            <Image
              source={require("../../assets/Icon/gallery.png")}
              style={styles.stDropDownImages}
            ></Image>
          ) : (
            <></>
          )}
          <Text>{item.label}</Text>
        </View>
      </View>
    );
  };

  const renderDropdown = () => {
    return (
      //모달이 뜨는 방식은 화면전체에 뜨는 것이고, visible props에 의해 on, off 결정 된다.
      <Modal visible={visible} transparent animationType="fade">
        <TouchableOpacity
          style={styles.overlay}
          onPress={() => setVisible(false)}
        >
          <View style={[styles.dropdown, { bottom: dropdownBottom }]}>
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
    <TouchableOpacity
      ref={DropdownButton}
      onPress={toggleDropdown}
      style={styles.button}
    >
      <Image
        source={require("../../assets/logo/artizenRabbit.png")}
        style={styles.stDropDownBtn}
      />
      <Image />
      {renderDropdown()}
    </TouchableOpacity>
  );
}

export default Dropdown;

const styles = StyleSheet.create({
  button: {
    zIndex: 11,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    right: 20,
    bottom: 20,
  },
  buttonText: {
    flex: 1,
    textAlign: "center",
  },

  dropdown: {
    position: "absolute",
    backgroundColor: "#fff",
    right: 60,
    width: "40%",
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
    paddingHorizontal: 10,
    paddingVertical: 10,
    // backgroundColor: "rgba(0, 0, 0, 0.1)",
    // opacity: 0.5,
  },

  stDropDownBtn: {
    width: 45,
    height: 45,
  },
  stDropDownImages: {
    width: 30,
    height: 30,
    marginRight: 5,
  },
});
