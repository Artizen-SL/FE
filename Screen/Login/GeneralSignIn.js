import React from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import styled from "styled-components/native";
import Input from "../../Components/Elem/Input";
import Theme from "../../Theme/Theme";

const GeneralSignIn = () => {
  return (
    <>
      <SafeAreaView
        style={{
          flex: 1,
          width: "100%",
          height: "100%",
          borderWidth: 1,
          borderColor: "black",
          paddingRight: 10,
          paddingLeft: 10,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <View
          style={{
            width: "100%",
            height: 300,
            borderWidth: 1,
            borderColor: "black",
            justifyContent: "center",
            alignItems: "center",
            paddingRight: 10,
            paddingLeft: 10,
          }}
        >
          <Input text="ID" placeholder="아이디를 입력해주세요"></Input>
          <Input
            text="PASSWORD"
            placeholder="비밀번호를 입력해주세요"
            secureTextEntry={true}
          ></Input>

          <TouchableOpacity>
            <Text>SignUp</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </>
  );
};

export default GeneralSignIn;
