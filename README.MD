# 🏃🏻 Bits

**Bits**는 자신이 원하는 습관을 구독하고. 팔로우한 친구들과 함께 자신이 구독한 습관을 성취해나가는 앱입니다.

# 📌 Table Contents

- [Inspiration](#💡-Inspiration)
- [Features](#⚙️-Features)
- [Tech Stack](#🛠-Tech-Stack)
- [Requirements](#🎯-Requirements)
- [Installation](#📀-Installation)
- [How to use](#🕹-How-to-Use)
- [Project Schedule](#🗓-Project-Schedule)
- [What i learend](#🧘🏻‍♂️-What-i-learned)
- [What i regret](#🤦🏻‍♂️-What-i-regret)
- [Things to do](#🚀-Things-to-do)

# 💡 Inspiration

- 나이키 Run 앱을 사용하면서 `달리기`라는 종목에 국한 되지 않고, 다양한 습관들은 이러한 형태로 진행할 수 있으면 어떨까 라는 생각에서 시작하게 되었습니다.
- 단순히 나 혼자 습관을 쌓는데 그치지 않고 내가 구독한 습관을 공유하는 유저에게 자극을 받기도 하고, 반대로 내가 응원하는 사람들에게 지지를 보내 서로가 서로에게 좋은 영향력을 끼칠 수 있는 소셜미디어를 만들고 싶었습니다.
- 작은 습관과, 작은 보상 혹은`성취도`를 통해 내 `정체성`을 형성 하고. 타인과의 공유를 통해 `지속성`을 유지할수 있다고 생각했었습니다.
- 주체 자체는 단순하고, 지루할 순 있지만 휘발적이고 자극적인 앱들에 비해 SNS의 순기능을 잘 이용하고 있는 앱은 부족하다는 생각이 들어 나부터 즐겁게 이용할수 있는 앱을 만들자는 생각에서 부터 시작하게 되었습니다.

# ⚙️ Features

- **구독하고 싶은 습관을 선택해서 등록하고 취소**할 수 있습니다.
- 습관 구독 시 **원하는 달성 목표일과 시간을 설정**할 수 있습니다.
- 구독 습관 완료 시 **프로필 페이지에 완료 습관 목록**으로 설정되고 습관 레벨에 따른 아이콘이 설정됩니다.
- 유저 습관 시작 시 **팔로워 들에게 습관 시작 푸쉬 알림**이 전송됩니다.
- 프로필 달력을 통해 **습관 완료 일에는 체크박스가 표시됩니다**.
- 친추 추천 목록에서 **검색을 통해 내가 원하는 친구**를 찾을 수 있습니다.

# 🛠 Tech Stack

### Frontend

- ES2015+
- React-Native
- Expo
- Redux
- Thunk
- Toolkit

### Backend

- Ndoe.js
- Express
- MongoDB
- Mongoose
- JSON Web Tokne Authentication

### Test

- **Frontend**
  - Jest-expo
  - React-test-renderer
  - Testing-library/jest-native
  - Testing-library/react-native

- **Backend**
  - Mocha
  - Chai
  - Supertest

# 🎯 Requirements

- IOS환경에서의 실행을 권장합니다.

# 📀 Installation

Local환경에서 실행시 아래와 같이 준비가 필요합니다.

### Client

Root 디렉토리에 .env 파일을 만들고 다음과 같이 설정해주세요

```
SERVER_URL=<YOUR_SERVER_URL_WITH_PROT>
```

### Server

MongDB 계정이 필요하며 Root 디렉토리에 .env파일을 만들고 다음과 같이 설정해 주세요.

- [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)

```
PORT=<YOUR_PORT_NUMBER>
JWT_SECRET=<YOUR_JWT_SECRET>
DATABASE=<YOUR_MONGODB_DATABASE_URL>
DATABASE_PASSWORD=<YOUR_MONGODB_PASSWORD>
```
