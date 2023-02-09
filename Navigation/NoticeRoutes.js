import { createNativeStackNavigator } from "@react-navigation/native-stack";
import NoticeList from "../Components/Notice/NoticeList";
import NoticeDetail from "../Components/Notice/NoticeDetail";
import NoticePost from "../Components/Notice/NoticePost";
import NoticeImportantList from "../Components/Notice/NoticeImportantList";
import NoticeImportantDetail from "../Components/Notice/NoticeImportantDetail";
import Notice from"../Screen/Notice/Notice"

const NoticeStack = createNativeStackNavigator();

const NoticeRoutes = () => {
  return (
    <NoticeStack.Navigator initialRouteName="Notice">
        <NoticeStack.Screen
        name="Notice"
        component={Notice}
        options={{ headerShown: false }}
      />
      <NoticeStack.Screen
        name="NoticeList"
        component={NoticeList}
        options={{ headerShown: false }}
      />
        <NoticeStack.Screen
        name="NoticeImportantList"
        component={NoticeImportantList}
        options={{ headerShown: false }}
      />
      <NoticeStack.Screen
        name="NoticeDetail"
        component={NoticeDetail}
        options={{ headerShown: false }}
      />
         <NoticeStack.Screen
        name="NoticeImportantDetail"
        component={NoticeImportantDetail}
        options={{ headerShown: false }}
      />
      <NoticeStack.Screen
        name="NoticePost"
        component={NoticePost}
        options={{ headerShown: false }}
      />
    </NoticeStack.Navigator>
  );
};

export default NoticeRoutes;
