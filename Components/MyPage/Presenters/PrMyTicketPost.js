import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import styled from "styled-components/native";
import ScrollViewLayout from "../../Layout/ScrollViewLayout";
import ImagePickerBtn from "../../../Common/ImagePicker/ImagePickerBtn";
import StarRating from "../../../Common/StarRating/StarRating";

const PrMyTicketPost = ({
  myTicketInputs,
  setMyTicketInputs,
  searchDatas,
  onSearchSubmit,
  onSubmitRecord,
}) => {
  return (
    <ScrollViewLayout>
      <RowView>
        <StTicketImg source={require("../../../assets/mypage/Tickets.png")} />
        <StHeaderText>마이티켓 기록하기</StHeaderText>
      </RowView>
      <SearchRowView>
        <StSearchTextInput
          onChangeText={(text) =>
            setMyTicketInputs({ ...myTicketInputs, searchText: text })
          }
        ></StSearchTextInput>
        <TouchableOpacity onPress={() => onSearchSubmit()}>
          <StSearchImg source={require("../../../assets/Icon/SearchBL.png")} />
        </TouchableOpacity>
      </SearchRowView>
      <StDividerView />
      {searchDatas.length === 0 ? (
        <></>
      ) : (
        <SearchResultView>
          {searchDatas.length !== 0 &&
            searchDatas?.slice(0, 10)?.map((item) => {
              return (
                <SearchItemView
                  key={item.id}
                  onPress={() =>
                    setMyTicketInputs({
                      ...myTicketInputs,
                      artizenId: item.id,
                      contentName: item.name,
                    })
                  }
                >
                  <StResultName numberOfLines={1} ellipsizeMode="tail">
                    {item.name}
                  </StResultName>

                  <StResultFacility numberOfLines={1} ellipsizeMode="tail">
                    {item.facility}
                  </StResultFacility>

                  <StResultDate numberOfLines={1} ellipsizeMode="tail">
                    {item.date}
                  </StResultDate>
                </SearchItemView>
              );
            })}
        </SearchResultView>
      )}

      {/* 선택한 곳 렌더 */}
      <StText>선택한 티켓 : {myTicketInputs.contentName}</StText>
      <ImagePickerBtn
        imagePick={myTicketInputs}
        setImagePick={setMyTicketInputs}
      />
      <StText>관람한 {myTicketInputs.contentName}은/는 어떠셨나요?</StText>
      <StarView>
        <StarRating state={myTicketInputs} setState={setMyTicketInputs} />
      </StarView>
      <StText>먼 훗날 추억 할 수 있는 한줄평을 입력해주세요.</StText>
      <StTextInput
        placeholder="한줄평을 작성해 주세요.(30자)"
        onChangeText={(text) =>
          setMyTicketInputs({ ...myTicketInputs, review: text })
        }
        maxLength={30}
      ></StTextInput>

      <StSubmitBtn onPress={() => onSubmitRecord()}>
        <StSubmitBtnText>등록하기</StSubmitBtnText>
      </StSubmitBtn>
    </ScrollViewLayout>
  );
};

export default PrMyTicketPost;

const RowView = styled(View)`
  flex: 1;
  flex-direction: row;
  align-items: center;
`;

const SearchRowView = styled(RowView)`
  justify-content: space-between;
  margin-top: 10px;
  margin-bottom: 10px;
`;

const SearchResultView = styled(ScrollView)`
  flex: 1;
  border-radius: 10px;
  padding: 7px;
  border-width: 1px;
  border-color: gray;
`;

const SearchItemView = styled(TouchableOpacity)`
  flex: 1;
  flex-direction: row;
  align-items: center;
  border-radius: 5px;
  padding: 7px;
`;

const StarView = styled(View)`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const StTicketImg = styled(Image)`
  width: 30px;
  height: 30px;
  margin-right: 7px;
`;

const StSearchImg = styled(Image)`
  width: 30px;
  height: 30px;
`;

const StSearchTextInput = styled(TextInput)`
  /* width: 200px; */
  width: 80%;
  height: 30px;
`;

const StDividerView = styled(View)`
  border-color: gray;
  border-bottom-width: 1px;
  margin-bottom: 15px;
`;

const StResultItem = styled(Text)`
  padding: 2px;
`;

const StResultName = styled(StResultItem)`
  width: 45%;
  color: #48b7e2;
  font-weight: 500;
`;
const StResultFacility = styled(StResultItem)`
  width: 30%;
`;
const StResultDate = styled(StResultItem)`
  width: 25%;
`;

const StSubmitBtn = styled(TouchableOpacity)`
  flex: 1;
  width: 100%;
  height: 40px;
  justify-content: center;
  align-items: center;
  background-color: #48b7e2;
  border-radius: 10px;
`;

const StSubmitBtnText = styled(Text)`
  color: #fff;
`;

const StText = styled(Text)`
  font-size: 15px;
  font-weight: bold;
  margin-top: 5px;
  margin-bottom: 5px;
`;

const StHeaderText = styled(StText)`
  font-size: 15px;
`;

const StTextInput = styled(TextInput)`
  font-size: 15px;
  font-weight: bold;
  margin-top: 5px;
  margin-bottom: 5px;
`;
