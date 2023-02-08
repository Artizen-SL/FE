import React from "react";

const CategoryDetailView = () => {
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
          <Image
            source={require("../../assets/Icon/gallery.png")}
            style={{}}
          ></Image>
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
        {datas.map((data) => {
          return <ContentBox key={data.id} data={data} />;
        })}
      </ScrollViewLayout>
      <Dropdown
        label="Select Item"
        data={dropDownData}
        onSelect={setSelected}
      />
    </View>
  );
};

export default CategoryDetailView;

const StyledText = styled.Text`
  /* text-shadow-color: rgba(0, 0, 0, 0.25);
  text-shadow-offset: 0px 4px;
  text-shadow-radius: 3px;*/
  text-shadow: 0px 4px 3px rgba(0, 0, 0, 0.25);
`;
