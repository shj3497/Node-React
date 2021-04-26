# Node-React

Node.js 기초 React.js 기초

Node-React > `npm install package.json`

Node-React/client > `npm install package.json`

(Node & React run)  
Node-React > `npm run dev`

## npm vs npx

---

### What is npm?

- npm : Node package manager
- npm install -g(global) : 해당 프로젝트가 아닌 bin/directory에 설치

### What is npx?

- npx는 npm registry에서 create-react-app을 찾아서(look up) 다운로드 없이 실행 시켜준다.
- Disk Space를 낭비하지 않을 수 있다.
- 항상 최신버전을 사용할 수 있다.

## `Server`

### NodeJS

- npm install express --save
- npm install mongoose --save
- npm install body-parser --save
- npm install nodemon --save-dev
- npm install bcrypt --save
- npm install jsonwebtoken --save
- npm install cookie-parser --save
- npm install concurrently --save
- 회원가입 테스트 : PostMan 활용

<!-- -dev : 로컬에서만 하겠다. -->

### MongoDB

- server/config/dev.js 생성 후 자신의 MongoDB url 입력
- ex)
  ```javascript
  module.exports = {
    mongoURI: `mongodb+srv://<id>:<password>@node-react.j15yu.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`,
  };
  ```

## `Client`

### React.js

- npx create-react-app .
- npm install react-router-dom --save
- npm install axios --save
- npm install http-proxy-middleware --save

### CSS FrameWork for React JS

- npm install antd --save

  [DOM summary](./summary.md)

  [React.js summary](./client/React.md)

### Setting Up Redux

- npm install Redux
- npm install react-redux
- npm install redux-promise
- npm install redux-thunk

- Chrome Extension >> : Redux DevTools

  [Redux summary](./client/Redux.md)

<br />

# 페이지 구성

## 로그인 페이지

1. 이메일
2. 비밀번호
3. 확인

## 회원가입 페이지

1. 이메일
2. 이름
3. 비밀번호
4. 비밀번호 확인
5. 확인

## 로그아웃 페이지

## 인증체크

1. 권한에 따라 진입 여부가 달라진다.
