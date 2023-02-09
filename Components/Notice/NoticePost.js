import { useNavigation } from "@react-navigation/native";
import PrNoticePost from "./Presenters/PrNoticePost";
import * as ImagePicker from 'expo-image-picker';
import { useState, useEffect } from "react";

const NoticePost = () => {
  const [image, setImage] = useState(null);
  const [important,setImportant] = useState(false);
  const init = {
    title:"",
    content:"",
  }
  const [notice,setNotice] = useState(init);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      // allowsEditing: true,
      // aspect: [4, 3],
      allowsMultipleSelection: true,
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  const onChangeText = (e) => {

  }
  


  return<PrNoticePost 
  setImportant={setImportant} 
  important={important}
  notice={notice}
  pickImage={pickImage}
  image={image}
  />
}

export default NoticePost
