![image](https://ifh.cc/g/d6ZQzm.jpg)


## 👉🏻 프로젝트 소개

>  예술문화를 사랑하는 모든분들을 위한!<br>
> 위치기반 문화컨텐츠 추천 어플리케이션! <br>


### [Front-End Github](https://github.com/Artizen-SL/FE)

### [Back-End Github](https://github.com/Artizen-SL/BE)

### [Project Notion](https://positive-thinking.notion.site/Artizen-53a635a35cea410282363c3fa3f24654)

<br>
<hr>
<br>

## 👨‍👩‍👧 팀원 소개

| 이름   | 깃허브 주소                                                | 포지션   |
| ------ | ---------------------------------------------------------- | -------- |
| 서지운 | [MildColor의 github](https://github.com/MildColor)         | Frontend |
| 임소희 | [Limsoheeee의 github](https://github.com/Limsoheeee)             | Frontend |
| 국경훈 | [kyunghoonkook의 github](https://github.com/kyunghoonkook) | Frontend |
| 장지윤 | [Jaylin의 github](https://github.com/Jaylin16)                 | Backend  |
| 김지애 | [kimjiae970의 github](https://github.com/kimjiae970)           | Backend  |
| 박현도 | [atto08의 github](https://github.com/atto08)               | Backend  |


<br>
<hr>
<br>

## ⚙️ 서비스 아키텍처

![서비스아키텍쳐ver 1](https://ifh.cc/g/RSogsz.jpg)

<br>

<br>

## 📅 프로젝트 기간

기간 : 2023년 01월 02일 ~ 2022년 02월 10일(5주)

<br>

<br>

## 🛠 프론트 기술 스택

<div align=center> 
   <img src="https://img.shields.io/badge/React_Native-20232A?style=for-the-badge&logo=react&logoColor=61DAFB">
  <img src="https://img.shields.io/badge/React Query-FF4154?style=for-the-badge&logo=React Query&logoColor=white">
  <img src="https://img.shields.io/badge/jotai-666666?style=for-the-badge&logoColor=white">
   <img src="https://img.shields.io/badge/Expo-100000?style=for-the-badge&logoColor=white">
   <img src="https://img.shields.io/badge/react navigation-8B89CC?style=for-the-badge&logo=reactnavigation&logoColor=white">
<br>
  <img src="https://img.shields.io/badge/Axios-5A29E4?style=for-the-badge&logo=Axios&logoColor=white">
  <img src="https://img.shields.io/badge/Yarn-2C8EBB?style=for-the-badge&logo=Yarn&logoColor=white">
  <img src="https://img.shields.io/badge/styled-components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white">
  <br>
</div>
<br>

## 🛠 백엔드 기술 스택

<div align=center> 
<img  src="https://img.shields.io/badge/Spring-6DB33F?style=for-the-badge&logo=Spring&logoColor=white">
<img  src="https://img.shields.io/badge/Spring Boot-6DB33F?style=for-the-badge&logo=Spring Boot&logoColor=white">
<img  src="https://img.shields.io/badge/Spring Data JPA-6DB33F?style=for-the-badge&logo=S&logoColor=white"> 
<img  src="https://img.shields.io/badge/Amazon EC2-FF9900?style=for-the-badge&logo=Amazon EC2&logoColor=white">
<img src="https://img.shields.io/badge/Amazon S3-569A31?style=for-the-badge&logo=Amazon S3&logoColor=white">
<img  src="https://img.shields.io/badge/GitHub Actions-2088FF?style=for-the-badge&logo=GitHub Actions&logoColor=white">

<br>

  <br>
</div>

<br>

<br>

## 🗺 API 설계

<details>
<summary>API</summary>
<div markdown="1">   

![Swagger-UI](https://user-images.githubusercontent.com/96479626/224487823-d47bd59d-6f25-47d6-8c20-b7a45a1e8bb4.png)

</div>
</details>

<br>

<br>

## ✒ 와이어 프레임

### [Figma 보러가기](https://www.figma.com/embed?embed_host=notion&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FbXLQWaIqqcAWXnOFoN0M5l%2FArtizen%3Fnode-id%3D0%253A1%26t%3Dw0Wx3gv3e97LY911-0)

<br>
<br>

## 🔨 기술 도입 이유 - 라이브러리, 기술적 의사 결정 - 프론트엔드

| 스택             | 도입 이유                                                                                                                                                                                                                            | 버전    |
| --------------------- | ----------------------------------------------------------------------------------------------------------- | ------- |
| Expo | 1. 요구사항 및 문제: <br>App을 만들기 위해 초기 개발환경 설정이 필요. <br>2. 대안 : expo CLI, react-native CLI <br>3. 의사결정 : 이번 side project는 react-native를 이용한 어플리케이션을 만드는 경험과 빠른 개발 속도를 추구 하였음. 때문에 초기 개발환경 설정의 번거로움을 줄여주고 배포를 빠르게 할 수 있는 expo를 선택. 또한 어플리케이션이 요구하는 기능들은 expo에서 제공해주는 sdk만으로 구현하기에 충분했기 때문에, 커스텀 네이티브 모듈 개발등 다른 언어로 추가 개발할 이유가 없다고 생각. | ^47.0.13    |
| React-Native | 1. 요구사항 및 문제: <br>App을 만들기 위한 프레임워크의 도입이 필요 <br><br>2. 대안 : react-native, flutter, kotlin  <br><br>3. 의사결정 : ios와 android, 즉 하이브리드 앱 개발이 가능하고 이미 React를 다루는 프론트엔드 측에서 dart나 java등 새로운 언어를 배울 필요 없이 빠른 개발 속도를 기대할 수 있는 react-native를 도입하기로 결정 | 0.70.5    |
| React-Query | 1. 요구사항 및 문제: <br>기존에 비동기 데이터 처리를 위한 redux thunk 를 사용할 경우, redux의 기본원칙을 충족하기 위해서는 보일러 플레이트 코드가 방대해지고, 서버데이터와 클라이언트 데이터가 섞여서 데이터를 관리하는데에 문제 발생.<br>⇒ 서버데이터와 클라이언트의 데이터를 분리시켜 관리하고, 유연한 작업을 위한 라이브러리의 도입이 필요. <br><br>2. 대안 : <br>1) redux saga <br>2) redux-thunk <br>4)react-query<br> <br><br>3. 의사결정 :<br>- redux saga: 상대적으로 높은 learning curve<br>⇒ 단기 프로젝트에서 부적합<br>- redux thunk<br>⇒ redux 설정이 서드파티로 인해 더욱 비대해고, 비동기 데이터를 관리하기 위해 관련된 코드를 개발자가 결정하고 구현해야한다. 협업시에 복잡해지고, 개발 시간에서도 단점으로 작용.<br>- react query<br>⇒ 보일러플레이트 코드의 감소, react-query에서 제공하는 규격화된 상태관리 방식은 협업과 코드작성시 효율적, 지속적으로 서버의 상태를 불러오고, 캐싱하기 때문에 비동기 데이터를 관리하기에 용이. 개발 속도와 편리성을 위해 react query 채택 | ^4.22.0    |     
| jotai | 1. 요구사항 및 문제: <br>prop drilling을 피하기 위함과 전역적으로 데이터들을 관리해주는 상태관리 라이브러리 도입 필요성을 느낌 <br><br>2. 대안 : redux, recoli, mobx, context api, zustand, jotai <br><br>3. 의사결정 : <br>서버에서 비동기로 받아오는 데이터는 React Query로 담당하기로 하였고, 앱 내에서만 사용하는 데이터들을 관리하는 라이브러리가 필요하다 판단. <br> 대부분의 비동기 데이터로 React Query로 다루기 때문에 전역적으로 관리할 데이터가 매우 적음. 따라서 보일러 플레이트가 적고 러닝커브가 낮은 라이브러리를 선택. <br>ㅁatomic state management 방식의 라이브러리인 recoil과 jotai중 도입이 덜 어려운 jotai로 결정함. | ^2.0.0    |                   
| Axios | 1. 요구사항 및 문제: <br>백엔드와 데이터 비동기 통신을 하기 위한 라이브러리 도입 필요.편의를 위한 기능과 브라우저 지원과 같은 확장성 고려. <br><br>2. 대안 :  AXIOS, FETCH, AJAX <br><br>3.의사결정: <br>- FETCH : 별도의 설치과정이 불필요하지만, 응답데이터를 JSON메소드를 통한 변환 과정이 필요, 브라우저 지원범위는 AXIOS 보다 적음. <br>-AJAX : jquery 를 통해 쉽게 구현가능, Error, Success, Complete의 상태를 통해 흐름을 구분 가능, 그러나 promise기반이 아님.<br>-AXIOS : 설치과정이 필요하지만, 더 넓은 브라우저 지원범위, 응답데이터를 자동으로 JSON으로 변환, 별도의 인스턴스 생성가능으로 인한 유지보수, 가독성 면에서 장점, interceptor 기능 제공 <br>⇒ jquery는 프로젝트에 도입하지 않고, Fetch와 AJAX 보다 더 많은 편의 기능을 제공하는 AXIOS를 도입.   | ^1.2.2  |


## 🔨 기술 도입 이유 - 라이브러리, 기술적 의사 결정 - 백엔드

<!-- | 스택             | 도입 이유                                                                                                                                                                                                                            | 버전    |
| ---------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------- |
| Node.js          | 메모리 사용과 관련하여 python, java 보다 효율적이며, jQuery를 통해 원하는 데이터를 추출하기에 용이하기 때문에 선택하였습니다.                                                                                                        | ^4.4.2  |
| Redis            | 1) RefreshToken 저장, 2) email 인증 번호 유효 기간 설정                                                                                                                                                                              | ^5.3.6  |
| docker-compose   | 각 사용자마다 개발환경이 다릅니다. 개별 환경마다 별도의 DB를 설치가 필요 => redis와 postgresql의 별도 설치 없이 동일 환경에서 test가 가능하도록 docker-compose를 구성                                                                | ^3.39.2 |
| CI-CD            | JS 내장 기능이 아니기 때문에 import를 해줘야 하는 번거로움과 무거움이 다소 있지만 다음과 같은 편리한 기능 때문에 도입했다. JSON 데이터 자동 변환 / axios interceptor & 간결한 instance 기능                                          | ^1.1.3  |
| WebSocket, Stomp | 채팅 기능을 구현하기 위해서는 단방향적인 http통신을 쓰는 것보다 양방향적으로 통신을 가능하게하는 라이브러리가 필요로 했다. 여러가지 양방향 통신 라이브러리중, Spring 서버의 성격과 가장 잘 맞은 SockJs, Stomp라이브러리를 사용하였다 | ^6.1.2  |
| spring email     | 회원가입 시 본인 인증 필요 아이디, 비밀번호 찾기                                                                                                                                                                                     | ^4.4.2  |
| OAuth2.0         | 회원 가입의 간편화를 통해 유저들의 사용 편리함 증가                                                                                                                                                                                  | ^4.4.2  |
| PostgreSQL       | 대용량 데이터 기반 서비스를 구축 하기 위해서. mysql의 버전 업그레이드를 통해 많이 성능이 향상되었지만, 그래도 postgresql이 join과 병렬 쿼리, MVC를 지원                                                                              | ^4.4.2  |
| Amazon S3        | 이미지 저장. CICD의 과정                                                                                                                                                                                                             | ^4.4.2  |
| Swagger fox      | Back-end에서 구현이 끝난 것을 일일이 front-end에 전달하는 과정에서 delay 발생. 개발 도중 추가로 개발한 API를 매번 API명세서에 기입하는 과정이 어려워 swagger를 통해 간접적인 소통                                                   | ^4.4.2  |--> 

작성 예정
<br><br>

## ✨ 주요 기능 - 프론트엔드

| 페이지                    | API 연결, 기능 및 CSS                                                                               |
| ------------------------- | --------------------------------------------------------------------------------------------------- |
| 로그인, 회원가입 - 서지운,국경훈 | ✅카카오 로그인                                                                                    |
| 메인페이지 - 임소희         | ✅ 사용자 위치정보 수집 및 권한 관리<br>✅ 위치기반 컨텐츠 추천<br>✅ 메인 홍보 카루셀 <br>✅ 베스트, 신규 글   |
| 카테고리 - 서지운         | ✅카테고리별 컨텐츠 뷰<br>✅ 카테고리 드롭다운<br>                                                                  |
| 컨텐츠 상세페이지 - 서지운  | ✅ 화면 가로 넓이에 맞게 이미지 포스터 크기 대응 <br>✅ 포스터 카루셀                                       |
| 커뮤니티 - 서지운          | ✅커뮤니티 CRUD<br>✅카테고리<br>✅상단TOP 버튼<br>✅갤러리 이미지 불러오기                 |
| 검색페이지- 임소희          | ✅검색결과 리스트 뷰<br>✅추천 검색어 기능                                                                |
| 공지페이지 - 임소희        | ✅ 공지 관련 CRUD                                                                                         |
| 마이페이지(메인) - 국경훈, 임소희  | ✅마이페이지 CRUD                                                                                  |
| 마이페이지(글목록, 티켓목록, 좋아요 리스트 ) - 임소희 | ✅마이페이지 CRUD                                                                |
| 마이페이지(티켓기록하기) - 서지운  | ✅ 티켓기록하기 기능 <br>✅ 해당 컨텐츠 검색                                                        |




<br>

## ✨ 주요 기능 - 백엔드
<!--
| 페이지                    | API 연결, 기능 및 CSS                                  |
| ------------------------- | ------------------------------------------------------ |
| 로그인 - 류창민           | ✅카카오 로그인<br>✅로그인                            |
| 회원가입 - 류창민         | ✅회원가입<br>✅아이디 중복 체크<br>✅닉네임 중복 체크 |
| 마이 페이지 - 류창민      | ✅로그아웃<br>✅마이페이지 차트<br>                    |
| 모임 CRUD - 박현도        | ✅                                                     |
| 모임 전체 페이지 - 박현도 | ✅카테고리 별 sort<br>                                 |
| 모임 상세 페이지 - 박현도 | ✅등록된 모임 정보 불러오기<br>                        |
| 모임 관심 - 박현도        | ✅관심 모임 등록<br>                                   |
| 모임 참석/탈퇴 - 박현도   | ✅모임 가입하기 탈퇴하기<br>                           |
| 채팅 - 조계일,류창민      | ✅                                                     |
| 검색 기능 - 조계일        | ✅                                                     |
-->
작성 예정
<br>

## 🎯 트러블 슈팅

<details>
<summary> 1 </summary>
<div markdown="1">   
   
### 1. 
   
|구분|설명|
|---|---|
|문제상황||
|문제원인||
|문제해결||
|해결결과||

### 적용 전                                                                                                                                                                                                                                                     
 
 ### 적용 후     
  |

</div>
</details>
<details>
   <summary> Infinite Carousel </summary>
<div markdown="1">   
   
### 
   
|구분|설명|
|---|---|
|문제<br>상황||
|문제원인||
|문제해결||
|해결결과| |

##### 

### 















### 



</div>
</details>


<br>
<br>

## 👩‍💻 유저 피드백 및 개선 사항

<br>
<details>
<summary> <h4></h4></summary>
<div markdown="1">   
     
</div>
  
</details>

<details>
<summary> <h4></h4></summary>
<div markdown="1">   
   
</div>
   
</details>

<details>
<summary><h4></h4></summary>
<div markdown="1">   
   
 
</div>
</details>

<details>
<summary><h4></h4></summary>
<div markdown="1">   
   
</div>
</details>

<details>
<summary><h4></h4></summary>
<div markdown="1">   
  
   
</div>
</details>

<details>
<summary><h4></h4></summary>
<div markdown="1">   
   
   
</div>
</details>

<br>

## 👻 추가하고 싶은 기능

<details>
<summary> Front-end</summary>
<div markdown="1">   
    
    - 과거 채팅 무한 스크롤로 불러오기
    - 커뮤니티 댓글 기능 
    - 검색, 좋아요등 서버에 부하가 올 수 있는 api call 최적화
    - 이미지 용량 최적화
    - 채팅에서 이미지 전송 기능 추가
    
</div>
</details>

<details>
<summary> Back-end</summary>
<div markdown="1">



</div>
</details>

<br>
<hr>
<br>
