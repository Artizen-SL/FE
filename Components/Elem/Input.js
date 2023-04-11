import React from "react";
import { Text, TextInput, View } from "react-native";
import styled from "styled-components/native";
import Theme from "../../Theme/Theme";
const Input = ({ text, placeholder, errorMessage, ...props }) => {
  return (
    <Container>
      <InputContainer>
        <SignText>{text}</SignText>
        <SignInput placeholder={placeholder} {...props}></SignInput>
      </InputContainer>
      <ErrorView>
        <ErrorText>{errorMessage}</ErrorText>
      </ErrorView>
    </Container>
  );
};

export default Input;

const Container = styled(View)`
  display: flex;
  margin-bottom: 35px;
  align-items: center;
  /* border-width: 1px;
border-color: black; */
`;

const InputContainer = styled(View)`
  display: flex;
  flex-direction: row;
  margin-bottom: 5px;
  align-items: center;
`;

const SignText = styled(Text)`
  width: 100px;
  text-align: center;
  line-height: 30px;
`;

const SignInput = styled(TextInput)`
  width: 70%;
  height: 30px;
  border-bottom-color: ${Theme.colors.Gray};
  border-bottom-width: 1px;
`;

const ErrorView = styled(View)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;
const ErrorText = styled(Text)`
  text-align: center;
  line-height: 30px;
  color: red;

  /* border-width: 1px;
  border-color: black; */
`;
