import React from "react";
import { View, Text, StyleSheet } from "react-native";
import styled, { css } from "styled-components/native";

const TagView = ({ children, variant, tag }) => {
  return (
    <StTagWrapper variant={variant} tag={tag}>
      <StTagText variant={variant} tag={tag}>
        {children}
      </StTagText>
    </StTagWrapper>
  );
};

export default TagView;

const StTagWrapper = styled(View)`
  justify-content: center;
  align-items: center;
  border-radius: 13px;

  ${({ variant, tag }) => {
    switch (variant) {
      case "category":
        return css`
          width: 60px;
          height: 30px;
          background-color: #48b7e2;
        `;
      case "community":
        return css`
          width: 60px;
          height: 25px;
          border: 1px solid
            ${({ tag }) =>
              tag === "자유글"
                ? "#48B7E2"
                : tag === "나눔"
                ? "#E8D4B9"
                : tag === "동행구함"
                ? "#D68B92"
                : ""};
          background-color: white;
        `;
    }
  }}
`;

const StTagText = styled(Text)`
  font-size: 15px;

  ${({ variant }) => {
    switch (variant) {
      case "category":
        return css`
          color: white;
        `;
      case "community":
        return css`
          color: ${({ tag }) =>
            tag === "자유글"
              ? "#48B7E2"
              : tag === "나눔"
              ? "#E8D4B9"
              : tag === "동행구함"
              ? "#D68B92"
              : ""};
        `;
      default:
        return css`
          color: white;
        `;
    }
  }}
`;
