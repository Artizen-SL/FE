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
  } from "react-native";
import styled, { css } from "styled-components/native";


const IsLoading = () => {
  return (
    <View>
      <Spinner source={require("../../assets/Icon/spinner.gif")} />
    </View>
  )
}

export default IsLoading

const Spinner = styled(Image)`
  width: 50px;
  height: 50px;
`;
