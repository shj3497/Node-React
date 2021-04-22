## src폴더

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
  - setupProxy.js : Server와 Client의 포트가 다르므로 통신이 안되는데 통신이 되도록 해준다.

<br/>

## React Router Dom

- react는 페이지 이동을 할 때 React Router Dom 이라는 것을 사용한다.
- [어떻게 사용하는지 참조](https://reactrouter.com/web/example/basic)
- Dependency 다운로드

  - npm install react-router-dom --save

- App.js에서 <Switch> 태그의 사용 이유
  - Switch 없이 Route만 있다면 모든 Route들이 렌더링 된다.
  - Route 에서 exact path는 주어진 경로가 정확해야 설정한 컴포넌트가 보여진다.
- Vue.js에서의 template를 생성해서 화면을 구성했다면, React에서는 함수로 만들어서 <함수명>으로 화면을 구성하네..

<br/>

## AXIOS

- Dependency 다운로드

  - npm install axios --save

- jQuery를 사용할 때 AJAX라고 보면 된다.

<br/>

## Proxy

### What is Proxy?

1. 아이피를 Proxy Server에서 임의로 바꿔 버릴 수 있다.
2. 그래서 인터넷에서는 접근하는 사람의 IP를 모르게 된다.
3. 보내는 데이터도 임의로 바꿀 수 있다.
4. 기능  
   방화벽 기능  
   웹 필터 기능  
   캐쉬 데이터, 공유 데이터 제공가능
5. proxy server 사용 이유!!  
   회사에서 직원들이나 집안에서 아이들 인터넷 사용 제어  
   캐쉬를 이용해 더 빠른 인터넷 이용 제공  
   더 나은 보안 제공  
   이용 제한된 사이트 접근 가능

- Dependency 다운로드
  - npm install http-proxy-middleware --save
- 현재 서버는 5000번 포트를, client는 3000번 포트를 사용중
- 포트가 다르기 떄문에 서버와 client의 통신 X
- Proxy를 사용하여 해결할 것

<br/>

## CSS Framework for React JS

1. Material UI
2. React Bootstrap
3. Semantic UI
4. Ant Design
5. Materialize

- Ant Design을 사용해 보겠다.
- Dependency 다운로드
  - npm install antd --save

[Ant Design Docs](https://ant.design/docs/react/introduce)

<br/>

## Redux

참고 : [https://www.youtube.com/watch?v=dJC_uAR7d60&t=380s](https://www.youtube.com/watch?v=dJC_uAR7d60&t=380s)

### What is Redux?

- Redux is predictable state container for JavaScript apps.
- 상태 관리 라이브러리
- React에서는 Props와 State가 있다.
- Redux는 State를 관리하는 것

### Props VS State

### `Props`

1. shorthand for properties
2. Props are how components talk to each other.
3. props flow downwards from the parent component.
4. Props are immutable(불변) from the child perspective. if you want to change that value? the parent should just change its internal state.

```HTML
<ChatMessages message={message} currentMember={member} />
```

### `State`

1. parent component에서 child component로 data를 보내는게 아닌 그 component 안에서 데이터를 전달하려면? State로..  
   ex) 검색창에서 글을 입력할 때 글이 변하는 것은 state를 바꾼다.
2. State is mutable(변하기 쉬운).
3. State가 변하면 re-render 된다.

```Javascript
state = {
  message: '',
  attachFile: undefined,
  openMenu: false
}
```

### Redux 데이터 Flow

- React Component - (Dispatch) -> Action --> Reducer --> Store - (Subscribe) -> React Component - (Dispatch) -> Action

  ### Action

  - a plain object describing what happend.

  ```javascript
  {
    type: 'LIKE_ARTICLE',
    articleId: 42
  }
  {
    type: 'FETCH_USER_SUCCESS',
    response: {id: 3, name:'Mary'}
  }
  {
    type: 'ADD_TODO',
    text: 'Read the Redux docs.'
  }
  ```

  ### Reducer

  - a function describing how the application's state changes.

  ```javascript
  (previousState, action) => nextState;
  // 이전 State와 action object를 받은 후에 next state를 return 한다.
  ```

  ### Store

  - The object that brings them together.  
    A store holds the whole state tree of your application.  
    The only way to change the state inside it is to dispatch an action on it.  
    A store is not a class. It's just an object with a few methods on it.
