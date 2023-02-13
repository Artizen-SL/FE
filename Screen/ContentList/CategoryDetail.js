import React, { useEffect, useRef, useState } from "react";
import { Image, Text, View } from "react-native";
import styled from "styled-components/native";
import Dropdown from "../../Common/Dropdown/Dropdown";
import ScrollViewLayout from "../../Components/Layout/ScrollViewLayout";
import useCategoryDetail from "../../querys/category/useFetchCategoryDetail";
import ContentBoxView from "../../Components/ContentList/Presenters/ContentBoxView";
import { FlatList } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import { useIsFocused } from "@react-navigation/native";
import { height } from "deprecated-react-native-prop-types/DeprecatedImagePropType";

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
  const [selected, setSelected] = useState(undefined);
  const isFocused = useIsFocused();

  const {
    data,
    isLoading,
    isError,
    hasNextPage,
    fetchNextPage,
    isFetchingNextPage,
    refetch,
  } = useCategoryDetail(category, 10);
  // console.log("data", data);
  // console.log("data", data.pages);
  // console.log("dataFlat", data.pages.flat());
  // console.log("data.pages", data?.pages.flat());

  const categoryData = data?.pages.flat();

  useEffect(() => {
    refetch({
      refetchPage: (page, index) => {
        index === 0;
      },
    });
  }, [isFocused]);

  const loadMore = () => {
    if (hasNextPage) {
      console.log("fetching!");
      fetchNextPage();
    }
  };

  const renderItem = ({ item }) => {
    return <ContentBoxView key={item?.id} data={item} category={category} />;
  };

  return (
    <SafeAreaView style={{ flex: 1, marginHorizontal: 10 }}>
      <FlatList
        ListHeaderComponent={
          <>
            <View
              style={{
                flex: 1,
                flexDirection: "row",
                alignItems: "center",
                width: "100%",
                backgroundColor: "whitesmoke",
                padding: 10,
              }}
            >
              {category === "연극/뮤지컬" ? (
                <CategoryIcon
                  source={require("../../assets/Icon/musical.png")}
                ></CategoryIcon>
              ) : category === "콘서트" ? (
                <CategoryIcon
                  source={require("../../assets/Icon/concert.png")}
                ></CategoryIcon>
              ) : category === "클래식/무용" ? (
                <CategoryIcon
                  source={require("../../assets/Icon/classic.png")}
                ></CategoryIcon>
              ) : category === "서커스/마술" ? (
                <CategoryIcon
                  source={require("../../assets/Icon/magic.png")}
                ></CategoryIcon>
              ) : category === "전시회" ? (
                <CategoryIcon
                  source={require("../../assets/Icon/gallery.png")}
                ></CategoryIcon>
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
          </>
        }
        stickyHeaderIndices={[0]}
        renderItem={renderItem}
        data={categoryData}
        keyExtractor={(item) => item?.id}
        onEndReached={loadMore}
        onEndReachedThreshold={0.4}
        // contentContainerStyle={{}}
        // ListFooterComponent={}
      />

      <Dropdown
        label="Select Item"
        data={dropDownData}
        onSelect={setSelected}
      />
    </SafeAreaView>
  );
}

export default CategoryDetail;

const StyledText = styled.Text`
  /* text-shadow-color: rgba(0, 0, 0, 0.25);
  text-shadow-offset: 0px 4px;
  text-shadow-radius: 3px;*/
  text-shadow: 0px 4px 3px rgba(0, 0, 0, 0.25);
`;

const CategoryIcon = styled(Image)`
  width: 50px;
  height: 50px;
`;
