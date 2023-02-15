import {
    StyleSheet,
    View,
    Text,
    Button,
    Image,
    TextInput,
    TouchableOpacity,
    ImageBackground,
    Dimensions,
    Alert,
  } from "react-native";

const IsError = () => {
  return (
    Alert.alert("오류", "잠시후 재시도 바랍니다.", [
        {
          text: "나가기",
          style: "cancel",
        },
      ])
  )
}

export default IsError
