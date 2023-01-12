import React, { useState } from "react";
import { View, Image, Button, Switch } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import ToolTip from "./ToolTip";

const ToolTipBtn = () => {
  const [isToolTipOpen, setToolTipOpen] = useState(false);
  const toggleSwitch = () => setToolTipOpen((previousState) => !previousState);
  console.log(isToolTipOpen);
  //   const handleToolTip = () => {
  //     setToolTipOpen(!isToolTipOpen);
  //     console.log(isToolTipOpen);
  //   };

  return (
    <Switch onValueChange={toggleSwitch} value={isToolTipOpen}>
      <Image source={require("../../../assets/Icon/gallery.png")}></Image>
      {isToolTipOpen && <ToolTip />}
    </Switch>
  );
};

export default ToolTipBtn;
