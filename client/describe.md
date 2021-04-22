### src폴더 수정

- src
  - \_actions : Redux를 위한 폴더
  - \_reducer : Redux를 위한 폴더
  - components/views : 이 안에는 Page들을 넣는다.
    - Footer
    - LandingPage
      - Sections : 이 안에는 해당 페이지에 관련된 CSS파일이나, Component들을 넣는다.
      - LandingPage.js
    - LoginPage
    - NavBar
    - RegisterPage
  - App.js : Routing 관련 일을 처리
  - Config.js : 환경 변수같은 것들을 정하는 곳
  - hoc : Higher Order Component의 약자로 권한 여부에 따라 접근을 제한할 수 있다.
  - utils : 여러곳에서 쓰일 수 있는 것들을 이곳에 넣어둬서 어디서든 쓸 수 있게 해준다.

### React Router Dom

- react는 페이지 이동을 할 때 React Router Dom 이라는 것을 사용한다.
- [어떻게 사용하는지 참조](https://reactrouter.com/web/example/basic)
- Dependency 다운로드

  - npm install react-router-dom --save

- App.js에서 <Switch> 태그의 사용 이유
  - Switch 없이 Route만 있다면 모든 Route들이 렌더링 된다.
  - Route 에서 exact path는 주어진 경로가 정확해야 설정한 컴포넌트가 보여진다.
- Vue.js에서의 template를 생성해서 화면을 구성했다면, React에서는 함수로 만들어서 <함수명>으로 화면을 구성하네..

### AXIOS

- Dependency 다운로드

  - npm install axios --save

- jQuery를 사용할 때 AJAX라고 보면 된다.

### Proxy

- Dependency 다운로드
  - npm install http-proxy-middleware --save
- 현재 서버는 5000번 포트를, client는 3000번 포트를 사용중
- 포트가 다르기 떄문에 서버와 client의 통신 X
- Proxy를 사용하여 해결할 것
