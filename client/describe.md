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
