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
import Theme from "../../../Theme/Theme";

function Dropdown({ label, data, onSelect }) {
  const DropdownButton = useRef();
  const navigation = useNavigation();
  const [visible, setVisible] = useState(false);
  const [selected, setSelected] = useState(undefined);
  const [dropdownTop, setDropdownTop] = useState(0);

  const toggleDropdown = () => {
    visible ? setVisible(false) : openDropdown();
  };

  const openDropdown = () => {
    DropdownButton.current.measure((_fx, _fy, _w, h, _px, py) => {
      setDropdownTop(py - 4 * h);
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

  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.item} onPress={() => onItemPress(item)}>
      <Text>{item.label}</Text>
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
    <TouchableOpacity
      ref={DropdownButton}
      onPress={toggleDropdown}
      style={styles.button}
    >
      <Image source={require("../../../assets/Icon/gallery.png")} />
      <Image />
      {renderDropdown()}
    </TouchableOpacity>
  );
}

export default Dropdown;

const styles = StyleSheet.create({
  button: {
    zIndex: 10,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    right: 30,
    bottom: 30,
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
    borderBottomWidth: 1,
  },
});
const bgStyles = StyleSheet.create({
  skyBlue: {
    backgroundColor: Theme.colors.SkyBlue,
  },
});
