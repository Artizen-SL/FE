import React, { useRef, useState } from "react";
import { Image, Text, View } from "react-native";
import styled from "styled-components/native";
import Dropdown from "../../Common/Dropdown/Dropdown";
import ScrollViewLayout from "../../Components/Layout/ScrollViewLayout";
import useCategoryDetail from "../../querys/category/useFetchCategoryDetail";
import ContentBoxView from "../../Components/ContentList/Presenters/ContentBoxView";

const dropDownData = [
  {
    label: "연극/뮤지컬",
    Routes: "MainRoutes",
    screen: "CategoryDetail",
    params: { category: "연극/뮤지컬" },
  },
  {
    label: "클래식/무용",
    Routes: "MainRoutes",
    screen: "CategoryDetail",
    params: { category: "클래식/무용" },
  },
  {
    label: "콘서트",
    Routes: "MainRoutes",
    screen: "CategoryDetail",
    params: { category: "콘서트" },
  },
  {
    label: "서커스/마술",
    Routes: "MainRoutes",
    screen: "CategoryDetail",
    params: { category: "서커스/마술" },
  },
];

function CategoryDetail({ route }) {
  const { category } = route.params;
  console.log(category);
  const [selected, setSelected] = useState(undefined);
  const obsRef = useRef(null); //observer Element
  const [list, setList] = useState([]);
  // const [page, setPage] = useState(1);
  // const preventRef = useRef(true);

  const {
    data: categoryData,
    isError,
    isLoading,
  } = useCategoryDetail(category, 1);
  // const {
  //   fetchNextPage,
  //   fetchPreviousPage,
  //   hasNextPage,
  //   hasPreviousPage,
  //   isFetchingNextPage,
  //   isFetchingPreviousPage,
  // } = useCategoryDetail(category, 1);

  return (
    <View style={{ flex: 1 }}>
      <ScrollViewLayout>
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            marginBottom: 10,
            marginTop: 10,
            alignItems: "center",
          }}
        >
          {category === "연극/뮤지컬" ? (
            <Image source={require("../../assets/Icon/musical.png")}></Image>
          ) : category === "콘서트" ? (
            <Image source={require("../../assets/Icon/concert.png")}></Image>
          ) : category === "클래식/무용" ? (
            <Image source={require("../../assets/Icon/classic.png")}></Image>
          ) : category === "서커스/마술" ? (
            <Image source={require("../../assets/Icon/magic.png")}></Image>
          ) : category === "전시회" ? (
            <Image source={require("../../assets/Icon/gallery.png")}></Image>
          ) : (
            <></>
          )}
          <StyledText
            style={{
              fontSize: 20,
              fontWeight: "bold",
              paddingLeft: 10,
              textShadow: "1px 1px 11px rgba(0, 0, 0, 0.75)",
            }}
          >
            {category}
          </StyledText>
        </View>
        {categoryData &&
          categoryData?.map((data) => {
            return (
              <ContentBoxView key={data?.id} data={data} category={category} />
            );
          })}

        <View ref={obsRef}>
          <Text>옵저버</Text>
        </View>
      </ScrollViewLayout>
      <Dropdown
        label="Select Item"
        data={dropDownData}
        onSelect={setSelected}
      />
    </View>
  );
}

export default CategoryDetail;

const StyledText = styled.Text`
  /* text-shadow-color: rgba(0, 0, 0, 0.25);
  text-shadow-offset: 0px 4px;
  text-shadow-radius: 3px;*/
  text-shadow: 0px 4px 3px rgba(0, 0, 0, 0.25);
`;
