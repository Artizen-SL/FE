import {
  StyleSheet,
  View,
  Text,
  Button,
  Image,
  Platform,
  TextInput,
  TouchableOpacity,
  ImageBackground,
  Dimensions,
} from "react-native";
import styled, { css } from "styled-components/native";
import Theme from "../../../Theme/Theme";
import ScrollViewLayout from "../../Layout/ScrollViewLayout";
import Layout from "../../Layout/Layout";
import { SafeAreaView } from "react-native-safe-area-context";
import ImagePickerBtn from "../../../Common/ImagePicker/ImagePickerBtn";
const PrNoticePost = ({
  important,
  setImportant,
  notice,
  onChangeHandler,
  setNotice,
  onSubmitHandler,
}) => {
  return (
    <SafeAreaView>
      <ScrollViewLayout>
        <Layout>
          <RowCenter>
            {notice.importance === "1" ? (
              <TouchableOpacity
                onPress={() => {
                  setNotice({...notice,importance:"0"});
                }}
              >
                <Star source={require("../../../assets/Icon/skyStar.png")} />
              </TouchableOpacity>
            ) : (
              <TouchableOpacity
                onPress={() => {
                  setNotice({...notice,importance:"1"});
                }}
              >
                <Star source={require("../../../assets/Icon/grayStar.png")} />
              </TouchableOpacity>
            )}
            <ButtonSky
            onPress={onSubmitHandler}
            >
              <BtnText>등록</BtnText>
            </ButtonSky>
          </RowCenter>
          <TitleInput
            style={{ marginTop: 20 }}
            value={notice.title}
            type="text"
            multiline={false}
            name="title"
            onChangeText={(e) => {
              onChangeHandler("title", e);
            }}
            placeholder="제목을 입력하세요"
          />
          <ContentInput
            style={{ marginTop: 10, marginBottom: 10 }}
            type="text"
            multiline
            value={notice.content}
            name="content"
            placeholder="내용을 입력하세요"
            onChangeText={(e) => {
              onChangeHandler("content", e);
            }}
          />
          <ColumnCenter>
      <ImagePickerBtn setImagePick={setNotice} imagePick={notice} />

            {/* <BtnImage onPress={pickImage}>
              <BtnText>사진등록</BtnText>
            </BtnImage>
            {image && <ImagesPreview source={{ uri: image }} />} */}
          </ColumnCenter>
        </Layout>
      </ScrollViewLayout>
    </SafeAreaView>
  );
};

export default PrNoticePost;

const RowCenter = styled(View)`
  flex-direction: row;
  align-items: center;
  align-content: center;
  justify-content: space-between;
`;
const ColumnCenter = styled(View)`
  flex-direction: column;
  align-items: center;
  align-content: center;
`;

const TitleInput = styled(TextInput)`
  align-items: center;
  align-content: center;
  width: 100%;
  height: 50px;
  border-radius: 5px;
  border: 1px solid ${Theme.colors.LightGray};
  padding: 10px;
`;
const ContentInput = styled(TextInput)`
  width: 100%;
  height: 200px;
  border-radius: 5px;
  border: 1px solid ${Theme.colors.LightGray};
  padding: 10px;
`;
const ButtonSky = styled(TouchableOpacity)`
  width: 60px;
  height: 23px;
  border-radius: 10px;
  align-items: center;
  align-content: center;
  justify-content: center;
  background-color: ${Theme.colors.SkyBlue};
`;
const BtnText = styled(Text)`
  color: ${Theme.colors.White};
  font-size: 12px;
  font-weight: 700;
`;
const BtnImage = styled(TouchableOpacity)`
  background-color: ${Theme.colors.SkyBlue};
  width: 100%;
  height: 40px;
  border-radius: 10px;
  align-items: center;
  align-content: center;
  justify-content: center;
  margin-bottom: 10px;
`;

const ImagesPreview = styled(Image)`
  width: 200px;
  height: 200px;
  align-items: center;
  align-content: center;
  justify-content: center;
  justify-items: center;
`;

const Star = styled(Image)`
  width: 47px;
  height: 21px;
`;
