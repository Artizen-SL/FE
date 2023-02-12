import {
    StyleSheet,
    View,
    Text,
    Button,
    Image,
    TextInput,
    TouchableOpacity,
    ImageBackground,
    Dimensions,
  } from "react-native";
  import styled, { css } from "styled-components/native";
  import Theme from "../../../Theme/Theme";
  import ScrollViewLayout from "../../Layout/ScrollViewLayout";
  import { SafeAreaView } from "react-native-safe-area-context";
  import Layout from "../../Layout/Layout";

const PrMyTicket = ({navigation}) => {
    return (
        <ScrollViewLayout>
            <TouchableOpacity
             onPress={()=>{
                navigation.navigate("MyPageRoutes", {
                    screen: "MyTicketPost",
                  })
              }}
            >
                <Text>글쓰기</Text>
            </TouchableOpacity>
            <Text> 마이티켓</Text>
        </ScrollViewLayout>
      )
}

export default PrMyTicket
