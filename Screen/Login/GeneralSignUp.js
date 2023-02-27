import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { Alert, Text, TextInput, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import styled from "styled-components/native";
import Input from "../../Components/Elem/Input";
import useError from "../../Hooks/Common/useError";
import useForm from "../../Hooks/Common/useForm";
import Theme from "../../Theme/Theme";
import emailValidator from "../../utils/emailValidator";
import passwordValidator from "../../utils/passwordValidator";
import useSignIn from "../../querys/generalSign/useSignIn";

const GeneralSignUp = () => {
  const navigation = useNavigation();

  const [{ email, password, passwordConfirm }, onChangeText, _] = useForm({
    email: "",
    password: "",
    passwordConfirm: "",
  });

  const [errorMessage, setErrorMessage] = useError({
    email: "",
    password: "",
    passwordConfirm: "",
  });

  const { mutate } = useSignIn();

  const formValidator = () => {
    const isEmailValidate = emailValidator(email);
    const isPasswordValidate = passwordValidator(password);
    const isPasswordMatch = passwordConfirm === password;
    setErrorMessage(
      "email",
      isEmailValidate ? "" : "이메일을 다시 확인해주세요."
    );
    setErrorMessage(
      "password",
      isPasswordValidate ? "" : "비밀번호를 다시 확인해주세요."
    );
    setErrorMessage(
      "passwordConfirm",
      isPasswordMatch ? "" : "비밀번호가 일치하지 않습니다."
    );

    console.log(
      ![isEmailValidate, isPasswordValidate, isPasswordMatch].includes(false)
    );

    return ![isEmailValidate, isPasswordValidate, isPasswordMatch].includes(
      false
    );
  };

  const handleSubmit = () => {
    navigation.navigate("MainTab");

    // formValidator() &&
    //   mutate(
    //     { email, password },
    //     {
    //       onSuccess: (data) => {
    //         navigation.navigate("MainTab");
    //       },
    //       onError: () => {
    //         Alert.alert("Error");
    //       },
    //     }
    //   );
  };

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
            height: 500,
            borderWidth: 1,
            borderColor: "black",
            justifyContent: "center",
            alignItems: "center",
            paddingRight: 10,
            paddingLeft: 10,
          }}
        >
          <Input
            text="EMAIL"
            placeholder="이메일을 입력해주세요"
            onChangeText={(text) => {
              onChangeText("email", text);
            }}
            errorMessage={errorMessage.email}
          ></Input>
          <Input
            text="PASSWORD"
            placeholder="비밀번호를 입력해주세요"
            secureTextEntry={true}
            onChangeText={(text) => {
              onChangeText("password", text);
            }}
            errorMessage={errorMessage.password}
          ></Input>
          <Input
            text="PASSWORD CONFIRM"
            placeholder="비밀번호 확인"
            secureTextEntry={true}
            onChangeText={(text) => {
              onChangeText("passwordConfirm", text);
            }}
            errorMessage={errorMessage.passwordConfirm}
          ></Input>

          <TouchableOpacity onPress={handleSubmit}>
            <Text>SignUp</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </>
  );
};

export default GeneralSignUp;
