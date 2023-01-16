import React, { useState } from "react";
import { FlatList, Image, ImageBackground } from "react-native";
import styled from "styled-components/native";
import MainPage from "./MainPage";

const MainCarousel = ({ pages, pageWidth, gap, offset }) => {
  const [page, setPage] = useState(0);

  // props 정보를 reder 하는 함수
  function renderItem({ item }) {
    return (
      <MainPage
        item={item}
        style={{ width: pageWidth, marginHorizontal: gap / 2 }}
      />
    );
  }
  const onScroll = (e) => {
    const newPage = Math.round(
      e.nativeEvent.contentOffset.x / (pageWidth + gap)
    );
    setPage(newPage);
  };
  return (
    <Container>
      <FlatList
        automaticallyAdjustContentInsets={false}
        contentContainerStyle={{
          //   paddingHorizontal: offset + gap / 2,
          paddingHorizontal: 0,
        }}
        data={pages}
        decelerationRate="fast"
        horizontal
        keyExtractor={(item) => `page__${item.color}`}
        onScroll={onScroll}
        pagingEnabled
        renderItem={renderItem}
        snapToInterval={pageWidth + gap}
        snapToAlignment="start"
        showsHorizontalScrollIndicator={false}
      />
      <IndicatorWrapper>
        {Array.from({ length: pages.length }, (_, i) => i).map((i) => (
          <Indicator key={`indicator_${i}`} focused={i === page} />
        ))}
      </IndicatorWrapper>
    </Container>
  );
};

export default MainCarousel;

const Container = styled.View`
  height: 200;
  border-radius: 5;
  justify-content: center;
  align-items: center;
  margin-bottom: 30px;
`;

const Indicator = styled.View`
  margin: 0px 4px;
  background-color: ${(props) => (props.focused ? "#262626" : "#dfdfdf")};
  width: 6px;
  height: 6px;
  border-radius: 3px;
`;

const IndicatorWrapper = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: 16px;
`;
