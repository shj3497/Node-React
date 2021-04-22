# Node-React

Node.js 기초 React.js 기초

## npm vs npx

### What is npm?

- npm : Node package manager
- npm install -g(global) : 해당 프로젝트가 아닌 bin/directory에 설치

### What is npx?

- npx는 npm registry에서 create-react-app을 찾아서(look up) 다운로드 없이 실행 시켜준다.
- Disk Space를 낭비하지 않을 수 있따.
- 항상 최신버전을 사용할 수 있다.

## Server

### npm install package.json

- npm install express --save
- npm install mongoose --save
- npm install body-parser --save
- npm install nodemon --save-dev
<!-- -dev : 로컬에서만 하겠다. -->
- npm install bcrypt --save
- npm install jsonwebtoken --save
- npm install cookie-parser --save

- 회원가입 테스트 : PostMan 활용

## Client

### React.js

- npx create-react-app .
- npm install react-router-dom --save
- npm install axios --save
- npm install http-proxy-middleware --save

[DOM summary](./summary.md)
[React.js summary](./client/describe.md)
