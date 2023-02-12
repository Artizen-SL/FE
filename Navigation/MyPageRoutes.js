import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MyPage from "../Components/MyPage/MyPage";
import MyLike from "../Components/MyPage/MyLike";
import MyPost from "../Components/MyPage/MyPost";
import MyTicket from "../Components/MyPage/MyTicket";
import MyTicketPost from "../Components/MyPage/MyTicketPost";

const MyPageStack = createNativeStackNavigator();

const MyPageRoutes = () => {
  return (
    <MyPageStack.Navigator initialRouteName="MyPage">
        <MyPageStack.Screen
        name="MyPage"
        component={MyPage}
        options={{ headerShown: false }}
      />
      <MyPageStack.Screen
        name="MyLike"
        component={MyLike}
        options={{ headerShown: false }}
      />
      <MyPageStack.Screen
        name="MyPost"
        component={MyPost}
        options={{ headerShown: false }}
      />
      <MyPageStack.Screen
        name="MyTicket"
        component={MyTicket}
        options={{ headerShown: false }}
      />
      <MyPageStack.Screen
        name="MyTicketPost"
        component={MyTicketPost}
        options={{ headerShown: false }}
      />
    </MyPageStack.Navigator>
  )
}

export default MyPageRoutes;
